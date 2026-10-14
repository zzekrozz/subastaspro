import "server-only";

import { generateCourseAccessCode } from "@/lib/access-code";
import { createCourseAccessStore } from "@/lib/course-access-store";
import { getStore, hasRedisConfig } from "@/lib/redis-store";

const MAX_CODE_GENERATION_ATTEMPTS = 5;

export function hasAccessStoreConfig() {
  return hasRedisConfig();
}

function repo() {
  return createCourseAccessStore(getStore());
}

/* ---- Compra (webhook de Stripe y página de gracias) ---- */

export async function getCourseAccessByStripeSessionId(stripeSessionId) {
  return repo().getCourseAccessByStripeSessionId(stripeSessionId);
}

export async function hasCourseAccessForStripeSession(stripeSessionId) {
  return repo().hasCourseAccessForStripeSession(stripeSessionId);
}

export async function markCourseAccessRefundedByStripeSessionId(stripeSessionId) {
  return repo().markRefundedByStripeSessionId(stripeSessionId);
}

export async function createCourseAccessForCheckout({
  email,
  stripeSessionId,
  stripeCustomerId,
  googleSub = "",
  googleEmail = ""
}) {
  const store = repo();

  for (let attempt = 0; attempt < MAX_CODE_GENERATION_ATTEMPTS; attempt += 1) {
    const result = await store.insertAccess({
      id: crypto.randomUUID(),
      email,
      code: generateCourseAccessCode(),
      stripeSessionId,
      stripeCustomerId,
      googleSub,
      googleEmail
    });

    if (result.status === "created") {
      return { status: "processed", access: result.access };
    }

    if (result.status === "existing") {
      return { status: "already_processed", access: result.access };
    }
  }

  throw new Error("Course access code generation failed");
}

export async function claimCourseAccessEmailDelivery({ stripeSessionId, staleBefore }) {
  const access = await repo().claimEmailDelivery({ stripeSessionId, staleBefore });

  return access
    ? {
        id: access.id,
        email: access.email,
        code: access.code,
        email_status: access.email_status,
        email_attempt_count: access.email_attempt_count
      }
    : null;
}

export async function markCourseAccessEmailSent({ stripeSessionId, providerId, sentAt }) {
  const store = repo();
  const updated = await store.patchEmailDelivery({
    stripeSessionId,
    values: {
      email_status: "sent",
      email_sent_at: sentAt,
      email_provider_id: providerId || null,
      email_last_error: null
    }
  });

  if (updated) return;

  const access = await store.getCourseAccessByStripeSessionId(stripeSessionId);
  if (access?.email_status !== "sent") {
    throw new Error("Email delivery completion failed");
  }
}

export async function markCourseAccessEmailFailed({ stripeSessionId, safeError }) {
  const store = repo();
  const updated = await store.patchEmailDelivery({
    stripeSessionId,
    values: {
      email_status: "failed",
      email_sent_at: null,
      email_last_error: String(safeError).slice(0, 80)
    }
  });

  if (updated) return;

  const access = await store.getCourseAccessByStripeSessionId(stripeSessionId);
  if (access?.email_status !== "sent") {
    throw new Error("Email delivery failure update failed");
  }
}

/* ---- Entrada al curso ---- */

export async function findActiveAccessByEmailAndCode({ email, code }) {
  return repo().findActiveByEmailAndCode({ email, code });
}

export async function findActiveAccessByCode(code) {
  return repo().findActiveByCode(code);
}

export async function findActiveAccessForGoogleIdentity(identity) {
  return repo().findActiveForGoogleIdentity(identity);
}

export async function linkAccessToGoogleIdentity({ id, sub, email }) {
  return repo().linkGoogleIdentity({ id, sub, email });
}

export async function recordCourseAccess(id) {
  return repo().recordAccess(id);
}

/* ---- Administración ---- */

export async function listCourseAccessesForAdmin({ limit = 200 } = {}) {
  if (!hasRedisConfig()) return { configured: false, rows: [], reviews: [] };

  const store = repo();
  const [rows, reviews] = await Promise.all([
    store.listAccesses({ limit }),
    store.listReviews({ limit: 50 })
  ]);

  return { configured: true, rows, reviews };
}
