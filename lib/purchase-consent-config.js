import "server-only";

import { parsePurchaseConsentRequiredFrom } from "@/lib/purchase-consent-core";

export function getPurchaseConsentRequiredFromTimestamp() {
  return parsePurchaseConsentRequiredFrom(
    process.env.PURCHASE_CONSENT_REQUIRED_FROM
  );
}

