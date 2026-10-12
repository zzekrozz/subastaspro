import "server-only";

import { createCourseAccessStore } from "@/lib/course-access-store";
import { getStore } from "@/lib/redis-store";

function repo() {
  return createCourseAccessStore(getStore());
}

export async function createPurchaseConsent(values) {
  await repo().createConsent(values);
}

export async function claimPurchaseConsentForCheckout({
  purchaseConsentId,
  stripeSessionId,
  stripeEventId,
  checkoutCreatedAt
}) {
  const consent = await repo().claimConsent({
    purchaseConsentId,
    stripeSessionId,
    stripeEventId,
    checkoutCreatedAt
  });

  return consent
    ? {
        id: consent.id,
        termsVersion: consent.terms_version,
        immediateAccessRequested: consent.immediate_access_requested,
        withdrawalAcknowledged: consent.withdrawal_acknowledged,
        googleSub: typeof consent.google_sub === "string" ? consent.google_sub : "",
        googleEmail: typeof consent.google_email === "string" ? consent.google_email : ""
      }
    : null;
}

export async function recordPurchaseConsentReview({
  stripeEventId,
  stripeSessionId,
  eventType,
  reason
}) {
  await repo().recordReview({ stripeEventId, stripeSessionId, eventType, reason });
}
