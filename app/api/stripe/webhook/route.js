import { NextResponse } from "next/server";

import { createCourseAccessForCheckout } from "@/lib/course-access-repository";
import { deliverCourseAccessEmailForPurchase } from "@/lib/course-access-email";
import {
  checkoutSessionContainsPrice,
  getStripeClient,
  getSubastasProPriceId,
  hasStripeWebhookConfig
} from "@/lib/stripe";

export const runtime = "nodejs";

const SUPPORTED_EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded"
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
      stripeSessionId: sessionId
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
