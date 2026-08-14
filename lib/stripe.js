import "server-only";

import Stripe from "stripe";

import { resolveSubastasProPriceId } from "@/lib/subastaspro-product";

let stripeClient;

export function hasStripeWebhookConfig() {
  return Boolean(
    process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET
  );
}

export function getStripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe server configuration");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  return stripeClient;
}

export function getSubastasProPriceId() {
  return resolveSubastasProPriceId(
    process.env.STRIPE_SUBASTASPRO_PRICE_ID
  );
}

export async function checkoutSessionContainsPrice(sessionId, priceId) {
  const lineItems = await getStripeClient().checkout.sessions.listLineItems(
    sessionId,
    { limit: 100 }
  );

  return lineItems.data.some((lineItem) => lineItem.price?.id === priceId);
}
