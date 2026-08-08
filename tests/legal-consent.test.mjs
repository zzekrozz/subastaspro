import assert from "node:assert/strict";
import test from "node:test";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  buildYouTubeNoCookieUrl,
  createCookiePreferences,
  parseCookiePreferences
} from "../lib/cookie-consent.js";
import {
  buildPurchaseCheckoutUrl,
  isPurchaseConsentRequired,
  isValidPurchaseConsentId,
  parsePurchaseConsentRequiredFrom,
  shouldRequirePurchaseConsent
} from "../lib/purchase-consent-core.js";
import {
  getRefundPaymentIntentId,
  isChargeFullyRefunded
} from "../lib/stripe-refund.js";

const NOW = new Date("2026-08-07T12:00:00.000Z");
const CONSENT_ID = "123e4567-e89b-42d3-a456-426614174000";

test("cookie preferences start with only necessary storage enabled", () => {
  const preferences = createCookiePreferences({ externalContent: false, now: NOW });

  assert.equal(preferences.necessary, true);
  assert.equal(preferences.externalContent, false);
  assert.equal(COOKIE_CONSENT_STORAGE_KEY, "subastaspro-cookie-consent");
  assert.deepEqual(
    parseCookiePreferences(JSON.stringify(preferences), NOW),
    preferences
  );
});

test("accepting external content is explicit and expires after one year", () => {
  const preferences = createCookiePreferences({ externalContent: true, now: NOW });

  assert.equal(preferences.externalContent, true);
  assert.equal(
    parseCookiePreferences(
      JSON.stringify(preferences),
      new Date("2027-08-08T12:00:00.000Z")
    ),
    null
  );
});

test("YouTube embeds use privacy-enhanced mode", () => {
  assert.equal(
    buildYouTubeNoCookieUrl({
      videoUrl: "https://www.youtube.com/embed/X2m0R44KdMs",
      youtubeId: "X2m0R44KdMs"
    }),
    "https://www.youtube-nocookie.com/embed/X2m0R44KdMs?rel=0&modestbranding=1"
  );
});

test("purchase checkout uses only an opaque UUID client reference", () => {
  const checkoutUrl = buildPurchaseCheckoutUrl(
    "https://buy.stripe.com/example?locale=es",
    CONSENT_ID
  );
  const url = new URL(checkoutUrl);

  assert.equal(url.searchParams.get("client_reference_id"), CONSENT_ID);
  assert.equal(url.searchParams.get("locale"), "es");
  assert.equal(isValidPurchaseConsentId(CONSENT_ID), true);
  assert.equal(isValidPurchaseConsentId("buyer@example.com"), false);
});

test("historic Stripe sessions remain distinguishable from new purchases", () => {
  const requiredFromTimestamp = parsePurchaseConsentRequiredFrom(
    "2026-08-07T18:30:00.000Z"
  );

  assert.equal(
    isPurchaseConsentRequired(
      Date.parse("2026-08-07T18:29:59.000Z") / 1000,
      requiredFromTimestamp
    ),
    false
  );
  assert.equal(
    isPurchaseConsentRequired(
      Date.parse("2026-08-07T18:30:00.000Z") / 1000,
      requiredFromTimestamp
    ),
    true
  );
  assert.equal(parsePurchaseConsentRequiredFrom(""), null);
  assert.equal(parsePurchaseConsentRequiredFrom("not-a-date"), null);
  assert.equal(parsePurchaseConsentRequiredFrom("2026-08-07T18:30:00"), null);
});

test("an existing access remains historical even after the cutoff", () => {
  assert.equal(
    shouldRequirePurchaseConsent({
      checkoutCreatedSeconds: Date.parse("2026-08-07T19:00:00.000Z") / 1000,
      requiredFromTimestamp: Date.parse("2026-08-07T18:30:00.000Z"),
      hasExistingAccess: true
    }),
    false
  );
  assert.equal(
    shouldRequirePurchaseConsent({
      checkoutCreatedSeconds: undefined,
      requiredFromTimestamp: Date.parse("2026-08-07T18:30:00.000Z"),
      hasExistingAccess: false
    }),
    true
  );
});

test("only a fully refunded charge revokes access", () => {
  const partialRefund = {
    payment_intent: "pi_live_123",
    refunded: false,
    amount: 3509,
    amount_refunded: 1000
  };
  const fullRefund = {
    payment_intent: { id: "pi_live_123" },
    refunded: true,
    amount: 3509,
    amount_refunded: 3509
  };

  assert.equal(isChargeFullyRefunded(partialRefund), false);
  assert.equal(isChargeFullyRefunded(fullRefund), true);
  assert.equal(getRefundPaymentIntentId(fullRefund), "pi_live_123");
});
