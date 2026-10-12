// Accesos al curso y consentimientos de compra guardados en Upstash Redis.
// Sustituye a Supabase manteniendo las mismas reglas (crear acceso una sola vez por pago,
// reclamar el envío del email de forma atómica, reembolsos, vinculación con Google).
import { parseJson } from "./redis-store.js";

const ACTIVE = "active";

const LUA_CREATE_ACCESS = `
local existing = redis.call('GET', KEYS[1])
if existing then
  return {'existing', existing}
end
if not redis.call('SET', KEYS[2], ARGV[1], 'NX') then
  return {'code_conflict', ''}
end
redis.call('SET', KEYS[1], ARGV[1])
local rec = cjson.decode(ARGV[2])
if ARGV[4] ~= '' then
  if redis.call('SET', KEYS[6], ARGV[1], 'NX') then
    rec.google_sub = ARGV[4]
    rec.google_email = ARGV[6]
    rec.google_linked_at = ARGV[5]
  end
end
local json = cjson.encode(rec)
redis.call('SET', KEYS[3], json)
redis.call('SADD', KEYS[4], ARGV[1])
redis.call('ZADD', KEYS[5], ARGV[3], ARGV[1])
return {'created', json}
`;

const LUA_CLAIM_EMAIL = `
local raw = redis.call('GET', KEYS[1])
if not raw then return nil end
local r = cjson.decode(raw)
local s = r.email_status
if type(s) ~= 'string' then s = 'pending' end
local last = tonumber(r.email_last_attempt_ms) or 0
if s == 'pending' or s == 'failed' or (s == 'sending' and last < tonumber(ARGV[1])) then
  r.email_status = 'sending'
  r.email_attempt_count = (tonumber(r.email_attempt_count) or 0) + 1
  r.email_last_attempt_at = ARGV[2]
  r.email_last_attempt_ms = tonumber(ARGV[3])
  r.email_last_error = cjson.null
  local json = cjson.encode(r)
  redis.call('SET', KEYS[1], json)
  return json
end
return nil
`;

const LUA_PATCH_IF_SENDING = `
local raw = redis.call('GET', KEYS[1])
if not raw then return 0 end
local r = cjson.decode(raw)
if r.email_status ~= 'sending' then return 0 end
for k, v in pairs(cjson.decode(ARGV[1])) do r[k] = v end
redis.call('SET', KEYS[1], cjson.encode(r))
return 1
`;

const LUA_REFUND = `
local raw = redis.call('GET', KEYS[1])
if not raw then return 0 end
local r = cjson.decode(raw)
if r.status == 'refunded' then return 1 end
if r.status ~= 'active' then return 0 end
r.status = 'refunded'
r.refunded_at = ARGV[1]
redis.call('SET', KEYS[1], cjson.encode(r))
return 1
`;

const LUA_RECORD_ACCESS = `
local raw = redis.call('GET', KEYS[1])
if not raw then return 0 end
local r = cjson.decode(raw)
r.access_count = (tonumber(r.access_count) or 0) + 1
r.last_access_at = ARGV[1]
redis.call('SET', KEYS[1], cjson.encode(r))
return 1
`;

const LUA_LINK_GOOGLE = `
local raw = redis.call('GET', KEYS[1])
if not raw then return 0 end
local r = cjson.decode(raw)
if type(r.google_sub) == 'string' and r.google_sub ~= '' then
  if r.google_sub == ARGV[1] then return 1 end
  return 0
end
if not redis.call('SET', KEYS[2], ARGV[4], 'NX') then return 0 end
r.google_sub = ARGV[1]
r.google_email = ARGV[2]
r.google_linked_at = ARGV[3]
redis.call('SET', KEYS[1], cjson.encode(r))
return 1
`;

const LUA_CLAIM_CONSENT = `
local raw = redis.call('GET', KEYS[1])
if not raw then return nil end
local c = cjson.decode(raw)
if c.terms_accepted ~= true or c.immediate_access_requested ~= true or c.withdrawal_acknowledged ~= true then
  return nil
end
if type(c.stripe_session_id) == 'string' and c.stripe_session_id ~= ARGV[1] then
  return nil
end
c.stripe_session_id = ARGV[1]
if type(c.stripe_event_id) ~= 'string' then c.stripe_event_id = ARGV[2] end
if type(c.checkout_created_at) ~= 'string' then c.checkout_created_at = ARGV[3] end
if type(c.linked_at) ~= 'string' then c.linked_at = ARGV[4] end
c.status = 'linked'
local json = cjson.encode(c)
redis.call('SET', KEYS[1], json)
return json
`;

function asList(value) {
  return Array.isArray(value) ? value : [];
}

export function createCourseAccessStore(store, { now = () => new Date() } = {}) {
  const k = {
    access: (id) => store.key(`access:${id}`),
    bySession: (sessionId) => store.key(`access-by-session:${sessionId}`),
    byCode: (code) => store.key(`access-by-code:${code}`),
    byEmail: (email) => store.key(`access-by-email:${email}`),
    bySub: (sub) => store.key(`access-by-google:${sub}`),
    all: () => store.key("access-all"),
    consent: (id) => store.key(`consent:${id}`),
    review: (eventId) => store.key(`consent-review:${eventId}`),
    reviews: () => store.key("consent-reviews")
  };

  async function getAccessById(id) {
    if (!id) return null;
    return parseJson(await store.cmd("GET", k.access(id)));
  }

  async function getAccessByIndex(indexKey) {
    const id = await store.cmd("GET", indexKey);
    return id ? getAccessById(id) : null;
  }

  const isActive = (access) => access?.status === ACTIVE;

  return {
    keys: k,

    /* ---- Accesos ---- */

    getAccessById,

    async getCourseAccessByStripeSessionId(stripeSessionId) {
      return getAccessByIndex(k.bySession(stripeSessionId));
    },

    async hasCourseAccessForStripeSession(stripeSessionId) {
      return Boolean(await store.cmd("GET", k.bySession(stripeSessionId)));
    },

    /**
     * Crea el acceso de una compra una sola vez.
     * Devuelve { status: "created" | "existing" | "code_conflict", access }.
     */
    async insertAccess({ id, email, code, stripeSessionId, stripeCustomerId, googleSub, googleEmail }) {
      const date = now();
      const iso = date.toISOString();
      const record = {
        id,
        email,
        code,
        status: ACTIVE,
        stripe_session_id: stripeSessionId,
        stripe_customer_id: stripeCustomerId || null,
        created_at: iso,
        assigned_at: iso,
        last_access_at: null,
        access_count: 0,
        email_status: "pending",
        email_sent_at: null,
        email_provider_id: null,
        email_last_error: null,
        email_attempt_count: 0,
        email_last_attempt_at: null,
        google_sub: null,
        google_email: null,
        google_linked_at: null
      };
      const [status, json] = asList(
        await store.evalScript(
          LUA_CREATE_ACCESS,
          [
            k.bySession(stripeSessionId),
            k.byCode(code),
            k.access(id),
            k.byEmail(email),
            k.all(),
            k.bySub(googleSub || "-")
          ],
          [id, JSON.stringify(record), date.getTime(), googleSub || "", iso, googleEmail || ""]
        )
      );

      if (status === "existing") {
        return { status, access: await getAccessById(json) };
      }

      return { status, access: parseJson(json) };
    },

    async markRefundedByStripeSessionId(stripeSessionId) {
      const id = await store.cmd("GET", k.bySession(stripeSessionId));
      if (!id) return false;

      const result = await store.evalScript(LUA_REFUND, [k.access(id)], [now().toISOString()]);
      return Number(result) === 1;
    },

    async claimEmailDelivery({ stripeSessionId, staleBefore }) {
      const id = await store.cmd("GET", k.bySession(stripeSessionId));
      if (!id) return null;

      const date = now();
      const json = await store.evalScript(
        LUA_CLAIM_EMAIL,
        [k.access(id)],
        [Date.parse(staleBefore) || 0, date.toISOString(), date.getTime()]
      );

      return parseJson(json);
    },

    async patchEmailDelivery({ stripeSessionId, values }) {
      const id = await store.cmd("GET", k.bySession(stripeSessionId));
      if (!id) return false;

      const result = await store.evalScript(
        LUA_PATCH_IF_SENDING,
        [k.access(id)],
        [JSON.stringify(values)]
      );

      return Number(result) === 1;
    },

    async recordAccess(id) {
      if (!id) return false;
      const result = await store.evalScript(LUA_RECORD_ACCESS, [k.access(id)], [now().toISOString()]);
      return Number(result) === 1;
    },

    async findActiveByCode(code) {
      const access = await getAccessByIndex(k.byCode(code));
      return isActive(access) ? access : null;
    },

    async findActiveByEmailAndCode({ email, code }) {
      const access = await getAccessByIndex(k.byCode(code));
      return isActive(access) && access.email === email ? access : null;
    },

    async findActiveForGoogleIdentity({ sub, email }) {
      if (sub) {
        const linked = await getAccessByIndex(k.bySub(sub));
        if (isActive(linked)) return linked;
      }

      if (!email) return null;

      const ids = asList(await store.cmd("SMEMBERS", k.byEmail(email)));
      if (!ids.length) return null;

      const rows = (await store.pipeline(ids.map((id) => ["GET", k.access(id)])))
        .map(parseJson)
        .filter(isActive)
        .sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));

      return rows[0] || null;
    },

    async linkGoogleIdentity({ id, sub, email }) {
      const result = await store.evalScript(
        LUA_LINK_GOOGLE,
        [k.access(id), k.bySub(sub)],
        [sub, email || "", now().toISOString(), id]
      );

      return Number(result) === 1;
    },

    async listAccesses({ limit = 200 } = {}) {
      const ids = asList(await store.cmd("ZREVRANGE", k.all(), 0, Math.max(0, limit - 1)));
      if (!ids.length) return [];

      return (await store.pipeline(ids.map((id) => ["GET", k.access(id)])))
        .map(parseJson)
        .filter(Boolean);
    },

    /* ---- Consentimientos de compra ---- */

    async createConsent(values) {
      const result = await store.cmd(
        "SET",
        k.consent(values.id),
        JSON.stringify({ ...values, created_at: now().toISOString() }),
        "NX"
      );

      if (result !== "OK") throw new Error("Purchase consent insert failed");
    },

    async getConsent(id) {
      return parseJson(await store.cmd("GET", k.consent(id)));
    },

    async claimConsent({ purchaseConsentId, stripeSessionId, stripeEventId, checkoutCreatedAt }) {
      const json = await store.evalScript(
        LUA_CLAIM_CONSENT,
        [k.consent(purchaseConsentId)],
        [stripeSessionId, stripeEventId, checkoutCreatedAt, now().toISOString()]
      );

      return parseJson(json);
    },

    async recordReview({ stripeEventId, stripeSessionId, eventType, reason }) {
      const date = now();
      await store.pipeline([
        [
          "SET",
          k.review(stripeEventId),
          JSON.stringify({
            stripe_event_id: stripeEventId,
            stripe_session_id: stripeSessionId,
            event_type: eventType,
            reason,
            status: "manual_review",
            created_at: date.toISOString()
          }),
          "NX"
        ],
        ["ZADD", k.reviews(), date.getTime(), stripeEventId]
      ]);
    },

    async listReviews({ limit = 50 } = {}) {
      const ids = asList(await store.cmd("ZREVRANGE", k.reviews(), 0, Math.max(0, limit - 1)));
      if (!ids.length) return [];

      return (await store.pipeline(ids.map((id) => ["GET", k.review(id)])))
        .map(parseJson)
        .filter(Boolean);
    }
  };
}
