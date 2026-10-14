import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

import { createCourseAccessStore } from "../lib/course-access-store.js";
import { createRedisStore } from "../lib/redis-store.js";
import { createRespClient, createUpstashFetch } from "./helpers/upstash-shim.mjs";

const PORT = 6390 + Math.floor(Math.random() * 500);
let server;
let client;
let repo;

before(async () => {
  server = spawn("redis-server", ["--port", String(PORT), "--save", "", "--appendonly", "no"], { stdio: "ignore" });
  await new Promise((resolve) => setTimeout(resolve, 400));
  client = createRespClient(PORT);
  const store = createRedisStore(
    { url: "http://upstash.test", token: "t", environment: "development" },
    createUpstashFetch(client)
  );
  repo = createCourseAccessStore(store);
});

after(() => {
  client?.close();
  server?.kill();
});

const base = {
  email: "ana@example.com",
  stripeSessionId: "cs_test_1",
  stripeCustomerId: "cus_1"
};

test("crea el acceso una sola vez por pago", async () => {
  const first = await repo.insertAccess({ ...base, id: "a1", code: "SUBASTAS-AAAA-1111" });
  assert.equal(first.status, "created");
  assert.equal(first.access.status, "active");

  const again = await repo.insertAccess({ ...base, id: "a2", code: "SUBASTAS-BBBB-2222" });
  assert.equal(again.status, "existing");
  assert.equal(again.access.id, "a1");

  const conflict = await repo.insertAccess({ ...base, stripeSessionId: "cs_test_2", id: "a3", code: "SUBASTAS-AAAA-1111" });
  assert.equal(conflict.status, "code_conflict");

  assert.equal((await repo.getCourseAccessByStripeSessionId("cs_test_1")).code, "SUBASTAS-AAAA-1111");
});

test("el email de acceso se reclama una vez y se marca como enviado", async () => {
  const staleBefore = new Date(Date.now() - 600000).toISOString();
  const claimed = await repo.claimEmailDelivery({ stripeSessionId: "cs_test_1", staleBefore });
  assert.equal(claimed.email_status, "sending");
  assert.equal(claimed.email_attempt_count, 1);

  assert.equal(await repo.claimEmailDelivery({ stripeSessionId: "cs_test_1", staleBefore }), null);

  assert.equal(
    await repo.patchEmailDelivery({ stripeSessionId: "cs_test_1", values: { email_status: "sent", email_provider_id: "re_1" } }),
    true
  );
  assert.equal(await repo.patchEmailDelivery({ stripeSessionId: "cs_test_1", values: { email_status: "failed" } }), false);
  assert.equal((await repo.getCourseAccessByStripeSessionId("cs_test_1")).email_status, "sent");
});

test("un envío atascado se puede volver a reclamar pasado el margen", async () => {
  await repo.insertAccess({ ...base, stripeSessionId: "cs_test_3", id: "a4", code: "SUBASTAS-CCCC-3333" });
  await repo.claimEmailDelivery({ stripeSessionId: "cs_test_3", staleBefore: new Date(0).toISOString() });
  const retry = await repo.claimEmailDelivery({ stripeSessionId: "cs_test_3", staleBefore: new Date(Date.now() + 1000).toISOString() });
  assert.equal(retry.email_attempt_count, 2);
});

test("entrada con Google por email y vinculación única de la cuenta", async () => {
  const byEmail = await repo.findActiveForGoogleIdentity({ sub: "g-1", email: "ana@example.com" });
  assert.equal(byEmail.id, "a1");

  assert.equal(await repo.linkGoogleIdentity({ id: "a1", sub: "g-1", email: "ana@example.com" }), true);
  assert.equal(await repo.linkGoogleIdentity({ id: "a1", sub: "g-1", email: "ana@example.com" }), true);
  assert.equal(await repo.linkGoogleIdentity({ id: "a1", sub: "g-2", email: "otra@example.com" }), false);
  assert.equal(await repo.linkGoogleIdentity({ id: "a4", sub: "g-1", email: "ana@example.com" }), false);

  const bySub = await repo.findActiveForGoogleIdentity({ sub: "g-1", email: "otro@gmail.com" });
  assert.equal(bySub.id, "a1");
  assert.equal(await repo.findActiveForGoogleIdentity({ sub: "g-9", email: "nadie@example.com" }), null);
});

test("compra hecha con la sesión de Google ya iniciada queda vinculada", async () => {
  const result = await repo.insertAccess({
    ...base,
    email: "pago@example.com",
    stripeSessionId: "cs_test_4",
    id: "a5",
    code: "SUBASTAS-DDDD-4444",
    googleSub: "g-5",
    googleEmail: "luis@gmail.com"
  });
  assert.equal(result.access.google_sub, "g-5");
  assert.equal((await repo.findActiveForGoogleIdentity({ sub: "g-5", email: "luis@gmail.com" })).id, "a5");
});

test("código, registro de entradas y reembolso", async () => {
  assert.equal((await repo.findActiveByEmailAndCode({ email: "ana@example.com", code: "SUBASTAS-AAAA-1111" })).id, "a1");
  assert.equal(await repo.findActiveByEmailAndCode({ email: "otra@example.com", code: "SUBASTAS-AAAA-1111" }), null);

  await repo.recordAccess("a1");
  await repo.recordAccess("a1");
  const access = await repo.getAccessById("a1");
  assert.equal(access.access_count, 2);
  assert.ok(access.last_access_at);

  assert.equal(await repo.markRefundedByStripeSessionId("cs_test_1"), true);
  assert.equal(await repo.markRefundedByStripeSessionId("cs_test_1"), true);
  assert.equal(await repo.findActiveByCode("SUBASTAS-AAAA-1111"), null);
  // a1 está reembolsado; Ana conserva otra compra activa (a4) con el mismo email.
  assert.equal((await repo.findActiveForGoogleIdentity({ sub: "g-1", email: "ana@example.com" })).id, "a4");
  assert.equal(await repo.findActiveForGoogleIdentity({ sub: "g-1", email: "" }), null);
});

test("consentimientos: se vinculan a un solo pago y se listan para el admin", async () => {
  await repo.createConsent({
    id: "c1",
    terms_version: "v1",
    terms_accepted: true,
    immediate_access_requested: true,
    withdrawal_acknowledged: true,
    status: "pending",
    google_sub: "g-7"
  });
  await assert.rejects(repo.createConsent({ id: "c1" }));

  const claimed = await repo.claimConsent({ purchaseConsentId: "c1", stripeSessionId: "cs_a", stripeEventId: "evt_1", checkoutCreatedAt: "2026-10-12T10:00:00.000Z" });
  assert.equal(claimed.status, "linked");
  assert.equal(claimed.google_sub, "g-7");
  assert.ok(await repo.claimConsent({ purchaseConsentId: "c1", stripeSessionId: "cs_a", stripeEventId: "evt_2", checkoutCreatedAt: "x" }));
  assert.equal(await repo.claimConsent({ purchaseConsentId: "c1", stripeSessionId: "cs_b", stripeEventId: "evt_3", checkoutCreatedAt: "x" }), null);
  assert.equal(await repo.claimConsent({ purchaseConsentId: "nope", stripeSessionId: "cs_a", stripeEventId: "e", checkoutCreatedAt: "x" }), null);

  await repo.recordReview({ stripeEventId: "evt_9", stripeSessionId: "cs_z", eventType: "checkout.session.completed", reason: "missing_reference" });
  assert.equal((await repo.listReviews()).length, 1);
  assert.equal((await repo.listAccesses()).length, 3);
});
