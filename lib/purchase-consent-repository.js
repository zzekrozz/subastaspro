import "server-only";

import { hasSupabaseAdminConfig } from "@/lib/supabase-admin";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!url || !key || !hasSupabaseAdminConfig()) {
    throw new Error("Missing Supabase server configuration");
  }

  return { url, key };
}

function getHeaders(key, prefer) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    ...(prefer ? { Prefer: prefer } : {})
  };
}

export async function createPurchaseConsent(values) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/purchase_consents`, {
    method: "POST",
    headers: getHeaders(key, "return=minimal"),
    body: JSON.stringify(values),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Purchase consent insert failed");
  }
}

export async function claimPurchaseConsentForCheckout({
  purchaseConsentId,
  stripeSessionId,
  stripeEventId,
  checkoutCreatedAt
}) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(
    `${url}/rest/v1/rpc/claim_purchase_consent_for_checkout`,
    {
      method: "POST",
      headers: getHeaders(key),
      body: JSON.stringify({
        p_purchase_consent_id: purchaseConsentId,
        p_stripe_session_id: stripeSessionId,
        p_stripe_event_id: stripeEventId,
        p_checkout_created_at: checkoutCreatedAt
      }),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Purchase consent claim failed");
  }

  const rows = await response.json();
  const row = Array.isArray(rows) ? rows[0] : null;

  return row
    ? {
        id: row.consent_id,
        termsVersion: row.consent_terms_version,
        immediateAccessRequested: row.consent_immediate_access_requested,
        withdrawalAcknowledged: row.consent_withdrawal_acknowledged
      }
    : null;
}

export async function recordPurchaseConsentReview({
  stripeEventId,
  stripeSessionId,
  eventType,
  reason
}) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/purchase_consent_reviews`, {
    method: "POST",
    headers: getHeaders(key, "resolution=merge-duplicates,return=minimal"),
    body: JSON.stringify({
      stripe_event_id: stripeEventId,
      stripe_session_id: stripeSessionId,
      event_type: eventType,
      reason,
      status: "manual_review"
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Purchase consent review insert failed");
  }
}

