import { NextResponse } from "next/server";

import { hasCourseAccessForStripeSession } from "@/lib/course-access-repository";
import {
  checkoutSessionContainsPrice,
  getStripeClient,
  getSubastasProPriceId
} from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_ID_PATTERN = /^cs_(?:test_|live_)?[A-Za-z0-9]{10,200}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function statusResponse(body, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      Pragma: "no-cache"
    }
  });
}

function maskEmail(value) {
  if (typeof value !== "string") {
    return null;
  }

  const email = value.trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return null;
  }

  const [localPart, domain] = email.split("@");
  const visiblePart = localPart.slice(0, Math.min(2, localPart.length));
  return `${visiblePart}***@${domain}`;
}

function isMissingStripeSession(error) {
  return (
    error?.type === "StripeInvalidRequestError" &&
    (error?.code === "resource_missing" || error?.statusCode === 404)
  );
}

export async function GET(request) {
  const sessionIds = request.nextUrl.searchParams.getAll("session_id");
  const sessionId = sessionIds[0];

  if (
    sessionIds.length !== 1 ||
    typeof sessionId !== "string" ||
    !SESSION_ID_PATTERN.test(sessionId)
  ) {
    return statusResponse({ status: "invalid" }, 400);
  }

  const priceId = getSubastasProPriceId();

  if (!process.env.STRIPE_SECRET_KEY || !priceId) {
    console.error("Stripe order status configuration is incomplete");
    return statusResponse({ status: "error" }, 500);
  }

  let session;

  try {
    session = await getStripeClient().checkout.sessions.retrieve(sessionId);
  } catch (error) {
    if (isMissingStripeSession(error)) {
      return statusResponse({ status: "invalid" });
    }

    console.error("Stripe order status lookup failed");
    return statusResponse({ status: "error" }, 500);
  }

  if (session.mode !== "payment") {
    return statusResponse({ status: "invalid" });
  }

  if (session.payment_status !== "paid") {
    return statusResponse({ status: "pending" });
  }

  let validProduct;

  try {
    validProduct = await checkoutSessionContainsPrice(session.id, priceId);
  } catch {
    console.error("Stripe order line items lookup failed");
    return statusResponse({ status: "error" }, 500);
  }

  if (!validProduct) {
    return statusResponse({ status: "invalid" });
  }

  const maskedEmail = maskEmail(
    session.customer_details?.email || session.customer_email
  );

  try {
    const accessCreated = await hasCourseAccessForStripeSession(session.id);

    return statusResponse({
      status: accessCreated ? "ready" : "processing",
      paymentConfirmed: true,
      accessCreated,
      maskedEmail
    });
  } catch {
    console.error("Course access status lookup failed");
    return statusResponse({ status: "error" }, 500);
  }
}
