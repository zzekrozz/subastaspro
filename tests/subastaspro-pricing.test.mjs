import assert from "node:assert/strict";
import test from "node:test";

import {
  SUBASTASPRO_PRICE_EX_VAT,
  SUBASTASPRO_PRICE_WITH_VAT_ES
} from "../lib/site-config.js";
import {
  resolveSubastasProPaymentLink,
  SUBASTASPRO_STRIPE_PRICE_ID,
  SUBASTASPRO_STRIPE_PAYMENT_LINK,
  resolveSubastasProPriceId
} from "../lib/subastaspro-product.js";

test("SubastasPro exposes the current commercial price", () => {
  assert.equal(SUBASTASPRO_PRICE_EX_VAT, 99);
  assert.equal(SUBASTASPRO_PRICE_WITH_VAT_ES, "119,79");
});

test("only the current production Price ID identifies SubastasPro", () => {
  assert.equal(
    SUBASTASPRO_STRIPE_PRICE_ID,
    "price_1U4FKxKObJpxV8PydM7xzl2N"
  );
  assert.equal(
    resolveSubastasProPriceId(` ${SUBASTASPRO_STRIPE_PRICE_ID} `),
    SUBASTASPRO_STRIPE_PRICE_ID
  );
  assert.equal(resolveSubastasProPriceId("old-price-id"), "");
  assert.equal(resolveSubastasProPriceId(""), "");
});

test("only the current live Payment Link can start checkout", () => {
  assert.equal(
    SUBASTASPRO_STRIPE_PAYMENT_LINK,
    "https://buy.stripe.com/00w9AU8ZGgibfaz1wQ8N208"
  );
  assert.equal(
    resolveSubastasProPaymentLink(` ${SUBASTASPRO_STRIPE_PAYMENT_LINK} `),
    SUBASTASPRO_STRIPE_PAYMENT_LINK
  );
  assert.equal(
    resolveSubastasProPaymentLink("https://buy.stripe.com/old-link"),
    ""
  );
  assert.equal(resolveSubastasProPaymentLink(""), "");
});
