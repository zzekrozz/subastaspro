// Verificación de Google ID tokens (OpenID Connect) sin dependencias externas.
// Mismo enfoque que IvanImports Radar: Google Identity Services en el navegador
// y comprobación criptográfica completa en el servidor.
import {
  createHash,
  createHmac,
  createPublicKey,
  randomBytes,
  timingSafeEqual,
  verify
} from "node:crypto";

export const GOOGLE_ISSUERS = ["https://accounts.google.com", "accounts.google.com"];
export const GOOGLE_JWKS_URL = "https://www.googleapis.com/oauth2/v3/certs";
const CLOCK_SKEW_SECONDS = 60;

export class GoogleAuthError extends Error {
  constructor(reason, status = 401) {
    super(reason);
    this.reason = reason;
    this.status = status;
  }
}

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function googleAuthConfigFromEnv(env = process.env) {
  return {
    clientId: String(
      env.SUBASTASPRO_GOOGLE_CLIENT_ID || env.GOOGLE_CLIENT_ID || ""
    ).trim(),
    adminSubs: splitList(env.SUBASTASPRO_ADMIN_GOOGLE_SUBS),
    adminEmails: splitList(env.SUBASTASPRO_ADMIN_EMAILS).map((email) =>
      email.toLowerCase()
    )
  };
}

export function constantTimeEqual(a, b) {
  const left = createHash("sha256").update(String(a)).digest();
  const right = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(left, right) && String(a).length === String(b).length;
}

export const randomToken = (bytes = 24) => randomBytes(bytes).toString("base64url");

export const hmac = (secret, value) =>
  createHmac("sha256", secret).update(String(value)).digest("base64url");

/** Una cuenta es administradora por su identificador de Google (sub) o por su email verificado. */
export function isAdminIdentity(identity, config) {
  if (!identity) return false;

  const bySub =
    identity.sub && config.adminSubs.some((allowed) => constantTimeEqual(allowed, identity.sub));
  const email = String(identity.email || "").toLowerCase();
  const byEmail = email && config.adminEmails.some((allowed) => constantTimeEqual(allowed, email));

  return Boolean(bySub || byEmail);
}

let jwksCache = { keys: null, expires: 0 };

export function resetJwksCache() {
  jwksCache = { keys: null, expires: 0 };
}

export async function loadGoogleJwks(fetchImpl = fetch, now = Date.now()) {
  if (jwksCache.keys && jwksCache.expires > now) return jwksCache.keys;

  const response = await fetchImpl(GOOGLE_JWKS_URL, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });

  if (!response.ok) throw new GoogleAuthError("jwks_unavailable", 503);

  const body = await response.json();
  const maxAge = /max-age=(\d+)/.exec(response.headers?.get?.("cache-control") || "")?.[1];

  jwksCache = {
    keys: Array.isArray(body.keys) ? body.keys : [],
    expires: now + Math.min(Number(maxAge) || 3600, 86400) * 1000
  };

  return jwksCache.keys;
}

export async function verifyGoogleIdToken(
  token,
  { clientId, nonce, fetchImpl = fetch, now = Date.now() }
) {
  if (typeof token !== "string" || token.length > 4096) {
    throw new GoogleAuthError("bad_token");
  }

  const parts = token.split(".");
  if (parts.length !== 3) throw new GoogleAuthError("bad_token");

  let header;
  let claims;

  try {
    header = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
  } catch {
    throw new GoogleAuthError("bad_token");
  }

  if (header.alg !== "RS256" || !header.kid) throw new GoogleAuthError("bad_alg");

  const keys = await loadGoogleJwks(fetchImpl, now);
  const jwk = keys.find((key) => key.kid === header.kid && key.kty === "RSA");
  if (!jwk) throw new GoogleAuthError("unknown_key");

  const signatureValid = verify(
    "RSA-SHA256",
    Buffer.from(`${parts[0]}.${parts[1]}`),
    createPublicKey({ key: jwk, format: "jwk" }),
    Buffer.from(parts[2], "base64url")
  );

  if (!signatureValid) throw new GoogleAuthError("bad_signature");

  const seconds = Math.floor(now / 1000);

  if (!GOOGLE_ISSUERS.includes(claims.iss)) throw new GoogleAuthError("bad_issuer");
  if (!clientId || claims.aud !== clientId) throw new GoogleAuthError("bad_audience");
  if (!Number.isFinite(claims.exp) || claims.exp + CLOCK_SKEW_SECONDS < seconds) {
    throw new GoogleAuthError("expired");
  }
  if (Number.isFinite(claims.iat) && claims.iat - CLOCK_SKEW_SECONDS > seconds) {
    throw new GoogleAuthError("bad_iat");
  }
  if (!claims.sub || typeof claims.sub !== "string") throw new GoogleAuthError("no_sub");
  if (claims.email_verified !== true && claims.email_verified !== "true") {
    throw new GoogleAuthError("email_unverified");
  }
  if (!nonce || !claims.nonce || !constantTimeEqual(claims.nonce, nonce)) {
    throw new GoogleAuthError("bad_nonce");
  }

  return {
    sub: claims.sub,
    email: String(claims.email || "").trim().toLowerCase(),
    name: String(claims.given_name || claims.name || "").slice(0, 60),
    picture: typeof claims.picture === "string" ? claims.picture : ""
  };
}
