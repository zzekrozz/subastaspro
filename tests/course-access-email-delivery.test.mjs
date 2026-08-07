import assert from "node:assert/strict";
import test from "node:test";

import {
  CourseAccessEmailDeliveryError,
  EMAIL_SENDING_STALE_AFTER_MS,
  createCourseAccessEmailDelivery,
  getCourseAccessEmailIdempotencyKey
} from "../lib/course-access-email-delivery-core.js";
import {
  COURSE_ACCESS_URL,
  buildCourseAccessEmail
} from "../lib/course-access-email-template.js";

const NOW = new Date("2026-08-05T12:00:00.000Z");

function createHarness({
  emailStatus = "pending",
  lastAttemptAt = null,
  sendEmail = async () => ({ id: "email_provider_123" })
} = {}) {
  const state = {
    email: "comprador@example.com",
    code: "SUBASTAS-ABCD-1234",
    email_status: emailStatus,
    email_attempt_count: 0,
    email_last_attempt_at: lastAttemptAt,
    email_provider_id: null,
    email_last_error: null
  };
  const calls = { send: 0, claim: 0, failed: 0, sent: 0 };

  const delivery = createCourseAccessEmailDelivery({
    now: () => new Date(NOW),
    claimDelivery: async ({ staleBefore }) => {
      calls.claim += 1;
      const staleSending =
        state.email_status === "sending" &&
        (!state.email_last_attempt_at ||
          new Date(state.email_last_attempt_at) < new Date(staleBefore));

      if (!["pending", "failed"].includes(state.email_status) && !staleSending) {
        return null;
      }

      state.email_status = "sending";
      state.email_attempt_count += 1;
      state.email_last_attempt_at = NOW.toISOString();
      state.email_last_error = null;
      return { ...state };
    },
    getAccessByStripeSessionId: async () => ({ ...state }),
    markDeliverySent: async ({ providerId, sentAt }) => {
      calls.sent += 1;
      state.email_status = "sent";
      state.email_provider_id = providerId;
      state.email_sent_at = sentAt;
      state.email_last_error = null;
    },
    markDeliveryFailed: async ({ safeError }) => {
      calls.failed += 1;
      state.email_status = "failed";
      state.email_last_error = safeError;
      state.email_sent_at = null;
    },
    sendEmail: async (input) => {
      calls.send += 1;
      return sendEmail(input);
    }
  });

  return { calls, delivery, state };
}

test("sends an access email and marks the row as sent", async () => {
  const harness = createHarness();

  const result = await harness.delivery({ stripeSessionId: "cs_test_123" });

  assert.deepEqual(result, { status: "sent" });
  assert.equal(harness.calls.send, 1);
  assert.equal(harness.state.email_status, "sent");
  assert.equal(harness.state.email_attempt_count, 1);
  assert.equal(harness.state.email_provider_id, "email_provider_123");
});

test("does not send again when a repeated webhook finds email_status sent", async () => {
  const harness = createHarness({ emailStatus: "sent" });

  const result = await harness.delivery({ stripeSessionId: "cs_test_123" });

  assert.deepEqual(result, { status: "already_sent" });
  assert.equal(harness.calls.send, 0);
});

test("uses one stable idempotency key per Stripe purchase", () => {
  const sessionId = "cs_test_same_purchase_123";

  assert.equal(
    getCourseAccessEmailIdempotencyKey(sessionId),
    "subastaspro-access/cs_test_same_purchase_123"
  );
  assert.equal(
    getCourseAccessEmailIdempotencyKey(sessionId),
    getCourseAccessEmailIdempotencyKey(sessionId)
  );
});

test("marks a temporary provider failure with a safe error", async () => {
  const harness = createHarness({
    sendEmail: async () => {
      throw new CourseAccessEmailDeliveryError("provider_unavailable");
    }
  });

  await assert.rejects(
    harness.delivery({ stripeSessionId: "cs_test_123" }),
    (error) => error.safeCode === "provider_unavailable"
  );
  assert.equal(harness.state.email_status, "failed");
  assert.equal(harness.state.email_last_error, "provider_unavailable");
  assert.equal(harness.calls.failed, 1);
});

test("retries an existing failed row with exactly the same code", async () => {
  let deliveredCode;
  const harness = createHarness({
    emailStatus: "failed",
    sendEmail: async ({ code }) => {
      deliveredCode = code;
      return { id: "email_retry_123" };
    }
  });

  await harness.delivery({ stripeSessionId: "cs_test_123" });

  assert.equal(deliveredCode, "SUBASTAS-ABCD-1234");
  assert.equal(harness.state.code, "SUBASTAS-ABCD-1234");
  assert.equal(harness.state.email_status, "sent");
});

test("does not send concurrently while a recent claim is in progress", async () => {
  const harness = createHarness({
    emailStatus: "sending",
    lastAttemptAt: new Date(NOW.getTime() - 60_000).toISOString()
  });

  const result = await harness.delivery({ stripeSessionId: "cs_test_123" });

  assert.deepEqual(result, { status: "in_progress" });
  assert.equal(harness.calls.send, 0);
});

test("recovers a sending claim older than ten minutes", async () => {
  const harness = createHarness({
    emailStatus: "sending",
    lastAttemptAt: new Date(
      NOW.getTime() - EMAIL_SENDING_STALE_AFTER_MS - 1
    ).toISOString()
  });

  const result = await harness.delivery({ stripeSessionId: "cs_test_123" });

  assert.deepEqual(result, { status: "sent" });
  assert.equal(harness.calls.send, 1);
  assert.equal(harness.state.email_status, "sent");
});

test("keeps missing provider configuration safe and retryable", async () => {
  const harness = createHarness({
    sendEmail: async () => {
      throw new CourseAccessEmailDeliveryError("configuration_missing");
    }
  });

  await assert.rejects(
    harness.delivery({ stripeSessionId: "cs_test_123" }),
    (error) => error.safeCode === "configuration_missing"
  );
  assert.equal(harness.state.email_status, "failed");
  assert.equal(harness.state.email_last_error, "configuration_missing");
});

test("builds equivalent HTML and text while escaping credentials", () => {
  const content = buildCourseAccessEmail({
    email: "buyer+<tag>@example.com",
    code: "SUBASTAS-<CODE>-1234"
  });

  assert.match(content.html, /buyer\+&lt;tag&gt;@example\.com/);
  assert.match(content.html, /SUBASTAS-&lt;CODE&gt;-1234/);
  assert.doesNotMatch(content.html, /SUBASTAS-<CODE>-1234/);
  assert.match(content.text, /buyer\+<tag>@example\.com/);
  assert.match(content.text, /SUBASTAS-<CODE>-1234/);
  assert.match(content.text, new RegExp(COURSE_ACCESS_URL));
});
