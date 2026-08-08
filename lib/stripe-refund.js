export function getRefundPaymentIntentId(charge) {
  if (typeof charge?.payment_intent === "string") {
    return charge.payment_intent;
  }

  return typeof charge?.payment_intent?.id === "string"
    ? charge.payment_intent.id
    : null;
}

export function isChargeFullyRefunded(charge) {
  return charge?.refunded === true && Boolean(getRefundPaymentIntentId(charge));
}
