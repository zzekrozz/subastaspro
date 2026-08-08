export const PURCHASE_CONSENT_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const ISO_UTC_TIMESTAMP_PATTERN =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;

export function isValidPurchaseConsentId(value) {
  return typeof value === "string" && PURCHASE_CONSENT_ID_PATTERN.test(value);
}

export function buildPurchaseCheckoutUrl(paymentLink, purchaseConsentId) {
  if (!isValidPurchaseConsentId(purchaseConsentId)) {
    throw new Error("Invalid purchase consent identifier");
  }

  const url = new URL(paymentLink);
  url.searchParams.set("client_reference_id", purchaseConsentId);
  return url.toString();
}

export function parsePurchaseConsentRequiredFrom(value) {
  if (
    typeof value !== "string" ||
    !ISO_UTC_TIMESTAMP_PATTERN.test(value.trim())
  ) {
    return null;
  }

  const timestamp = Date.parse(value.trim());
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function isPurchaseConsentRequired(
  checkoutCreatedSeconds,
  requiredFromTimestamp
) {
  const createdAt = Number(checkoutCreatedSeconds) * 1000;

  return (
    Number.isFinite(createdAt) &&
    Number.isFinite(requiredFromTimestamp) &&
    createdAt >= requiredFromTimestamp
  );
}

export function shouldRequirePurchaseConsent({
  checkoutCreatedSeconds,
  requiredFromTimestamp,
  hasExistingAccess
}) {
  if (hasExistingAccess) return false;

  if (
    !Number.isFinite(Number(checkoutCreatedSeconds)) ||
    !Number.isFinite(requiredFromTimestamp)
  ) {
    return true;
  }

  return isPurchaseConsentRequired(
    checkoutCreatedSeconds,
    requiredFromTimestamp
  );
}
