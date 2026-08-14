export const SUBASTASPRO_STRIPE_PRICE_ID =
  "price_1U4FKxKObJpxV8PydM7xzl2N";
export const SUBASTASPRO_STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/00w9AU8ZGgibfaz1wQ8N208";

export function resolveSubastasProPriceId(configuredPriceId) {
  const normalizedPriceId = configuredPriceId?.trim() || "";

  return normalizedPriceId === SUBASTASPRO_STRIPE_PRICE_ID
    ? SUBASTASPRO_STRIPE_PRICE_ID
    : "";
}

export function resolveSubastasProPaymentLink(configuredPaymentLink) {
  const normalizedPaymentLink = configuredPaymentLink?.trim() || "";

  return normalizedPaymentLink === SUBASTASPRO_STRIPE_PAYMENT_LINK
    ? SUBASTASPRO_STRIPE_PAYMENT_LINK
    : "";
}
