import { NextResponse } from "next/server";

import {
  createCourseAccessForCheckout,
  getCourseAccessByStripeSessionId,
  markCourseAccessRefundedByStripeSessionId
} from "@/lib/course-access-repository";
import { deliverCourseAccessEmailForPurchase } from "@/lib/course-access-email";
import { getPurchaseConsentRequiredFromTimestamp } from "@/lib/purchase-consent-config";
import {
  isValidPurchaseConsentId,
  shouldRequirePurchaseConsent
} from "@/lib/purchase-consent-core";
import {
  claimPurchaseConsentForCheckout,
  recordPurchaseConsentReview
} from "@/lib/purchase-consent-repository";
import {
  checkoutSessionContainsPrice,
  getStripeClient,
  getSubastasProPriceId,
  hasStripeWebhookConfig
} from "@/lib/stripe";
import {
  getRefundPaymentIntentId,
  isChargeFullyRefunded
} from "@/lib/stripe-refund";

export const runtime = "nodejs";

const SUPPORTED_EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
  "charge.refunded"
]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function webhookResponse(status = 200) {
  return NextResponse.json({ received: status === 200 }, { status });
}

function logWebhook({ eventId, eventType, sessionId, status }, level = "info") {
  const details = {
    eventId: eventId || "unavailable",
    eventType: eventType || "unavailable",
    sessionId: sessionId || "unavailable",
    status
  };

  if (level === "error") {
    console.error("Stripe webhook", details);
    return;
  }

  console.info("Stripe webhook", details);
}

function getCustomerId(customer) {
  if (typeof customer === "string") {
    return customer;
  }

  return customer && typeof customer.id === "string" ? customer.id : null;
}

async function sendToManualReview({ event, sessionId, reason }) {
  await recordPurchaseConsentReview({
    stripeEventId: event.id,
    stripeSessionId: sessionId,
    eventType: event.type,
    reason
  });
  logWebhook({
    eventId: event.id,
    eventType: event.type,
    sessionId,
    status: "manual_review"
  });
}

async function handleRefundEvent(event) {
  const charge = event.data.object;
  const paymentIntentId = getRefundPaymentIntentId(charge);

  if (!isChargeFullyRefunded(charge)) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      status: "ignored_partial_refund"
    });
    return webhookResponse();
  }

  let sessions;

  try {
    sessions = await getStripeClient().checkout.sessions.list({
      payment_intent: paymentIntentId,
      limit: 100
    });
  } catch {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      status: "failed"
    }, "error");
    return webhookResponse(500);
  }

  for (const session of sessions.data) {
    try {
      const revoked = await markCourseAccessRefundedByStripeSessionId(session.id);

      if (revoked) {
        logWebhook({
          eventId: event.id,
          eventType: event.type,
          sessionId: session.id,
          status: "access_refunded"
        });
        return webhookResponse();
      }
    } catch {
      logWebhook({
        eventId: event.id,
        eventType: event.type,
        sessionId: session.id,
        status: "failed"
      }, "error");
      return webhookResponse(500);
    }
  }

  logWebhook({
    eventId: event.id,
    eventType: event.type,
    status: "ignored_refund_without_access"
  });
  return webhookResponse();
}

export async function POST(request) {
  if (!hasStripeWebhookConfig()) {
    logWebhook({ status: "failed" }, "error");
    return webhookResponse(500);
  }

  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();
  let event;

  try {
    event = getStripeClient().webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    console.warn("Stripe webhook signature verification failed");
    return webhookResponse(400);
  }

  if (!SUPPORTED_EVENTS.has(event.type)) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      status: "ignored"
    });
    return webhookResponse();
  }

  if (event.type === "charge.refunded") {
    return handleRefundEvent(event);
  }

  const session = event.data.object;
  const sessionId = typeof session?.id === "string" ? session.id : null;

  if (
    !sessionId ||
    session?.mode !== "payment" ||
    session?.payment_status !== "paid"
  ) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "ignored"
    });
    return webhookResponse();
  }

  const subastasProPriceId = getSubastasProPriceId();

  if (!subastasProPriceId) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "failed"
    }, "error");
    return webhookResponse(500);
  }

  let containsSubastasProPrice;

  try {
    containsSubastasProPrice = await checkoutSessionContainsPrice(
      sessionId,
      subastasProPriceId
    );
  } catch {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "failed"
    }, "error");
    return webhookResponse(500);
  }

  if (!containsSubastasProPrice) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "ignored_wrong_product"
    });
    return webhookResponse();
  }

  let existingAccess;

  try {
    existingAccess = await getCourseAccessByStripeSessionId(sessionId);
  } catch {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "failed"
    }, "error");
    return webhookResponse(500);
  }

  const requiredFromTimestamp = getPurchaseConsentRequiredFromTimestamp();

  if (!existingAccess && requiredFromTimestamp === null) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "failed_consent_cutoff_configuration"
    }, "error");
    return webhookResponse(500);
  }

  let purchaseConsent = null;

  if (
    shouldRequirePurchaseConsent({
      checkoutCreatedSeconds: session.created,
      requiredFromTimestamp,
      hasExistingAccess: Boolean(existingAccess)
    })
  ) {
    const purchaseConsentId = session.client_reference_id;
    let reviewReason = null;

    if (!purchaseConsentId) {
      reviewReason = "missing_reference";
    } else if (!isValidPurchaseConsentId(purchaseConsentId)) {
      reviewReason = "invalid_reference";
    } else {
      try {
        purchaseConsent = await claimPurchaseConsentForCheckout({
          purchaseConsentId,
          stripeSessionId: sessionId,
          stripeEventId: event.id,
          checkoutCreatedAt: new Date(session.created * 1000).toISOString()
        });
      } catch {
        logWebhook({
          eventId: event.id,
          eventType: event.type,
          sessionId,
          status: "failed"
        }, "error");
        return webhookResponse(500);
      }

      if (!purchaseConsent) reviewReason = "consent_not_found";
    }

    if (reviewReason) {
      try {
        await sendToManualReview({ event, sessionId, reason: reviewReason });
        return webhookResponse();
      } catch {
        logWebhook({
          eventId: event.id,
          eventType: event.type,
          sessionId,
          status: "failed"
        }, "error");
        return webhookResponse(500);
      }
    }
  }

  const rawEmail = session.customer_details?.email || session.customer_email;
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

  if (!email || !EMAIL_PATTERN.test(email)) {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "ignored"
    }, "error");
    return webhookResponse();
  }

  let accessResult;

  try {
    accessResult = await createCourseAccessForCheckout({
      email,
      stripeSessionId: sessionId,
      stripeCustomerId: getCustomerId(session.customer)
    });

    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: accessResult.status
    });
  } catch {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "failed"
    }, "error");
    return webhookResponse(500);
  }

  try {
    const emailResult = await deliverCourseAccessEmailForPurchase({
      stripeSessionId: sessionId,
      purchaseSummary: {
        purchasedAt: new Date(session.created * 1000).toISOString(),
        termsVersion: purchaseConsent?.termsVersion || null,
        immediateAccessRequested:
          purchaseConsent?.immediateAccessRequested === true
      }
    });

    if (emailResult.status === "in_progress") {
      logWebhook({
        eventId: event.id,
        eventType: event.type,
        sessionId,
        status: "email_in_progress"
      });
      return webhookResponse(500);
    }

    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status:
        emailResult.status === "already_sent"
          ? "email_already_sent"
          : "email_sent"
    });
    return webhookResponse();
  } catch {
    logWebhook({
      eventId: event.id,
      eventType: event.type,
      sessionId,
      status: "email_failed"
    }, "error");
    return webhookResponse(500);
  }
}
