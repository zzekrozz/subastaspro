import "server-only";

import { generateCourseAccessCode } from "@/lib/access-code";
import { hasSupabaseAdminConfig } from "@/lib/supabase-admin";

const MAX_CODE_GENERATION_ATTEMPTS = 5;

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!url || !key || !hasSupabaseAdminConfig()) {
    throw new Error("Missing Supabase server configuration");
  }

  return { url, key };
}

function getSupabaseHeaders(key, prefer) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    ...(prefer ? { Prefer: prefer } : {})
  };
}

async function findByStripeSessionId(stripeSessionId) {
  const { url, key } = getSupabaseConfig();
  const searchParams = new URLSearchParams({
    select: "id",
    stripe_session_id: `eq.${stripeSessionId}`,
    limit: "1"
  });
  const response = await fetch(
    `${url}/rest/v1/course_access_codes?${searchParams.toString()}`,
    {
      headers: getSupabaseHeaders(key),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Supabase checkout lookup failed");
  }

  const rows = await response.json();
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}

export async function hasCourseAccessForStripeSession(stripeSessionId) {
  return Boolean(await findByStripeSessionId(stripeSessionId));
}

async function insertCourseAccess({
  email,
  code,
  stripeSessionId,
  stripeCustomerId
}) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/course_access_codes`, {
    method: "POST",
    headers: getSupabaseHeaders(key, "return=minimal"),
    body: JSON.stringify({
      email,
      code,
      status: "active",
      stripe_session_id: stripeSessionId,
      stripe_customer_id: stripeCustomerId,
      assigned_at: new Date().toISOString()
    }),
    cache: "no-store"
  });

  if (response.ok) {
    return "created";
  }

  if (response.status === 409) {
    return "conflict";
  }

  throw new Error("Supabase checkout insert failed");
}

export async function createCourseAccessForCheckout({
  email,
  stripeSessionId,
  stripeCustomerId
}) {
  if (await findByStripeSessionId(stripeSessionId)) {
    return "already_processed";
  }

  for (let attempt = 0; attempt < MAX_CODE_GENERATION_ATTEMPTS; attempt += 1) {
    const result = await insertCourseAccess({
      email,
      code: generateCourseAccessCode(),
      stripeSessionId,
      stripeCustomerId
    });

    if (result === "created") {
      return "processed";
    }

    // A concurrent delivery can lose the initial lookup race.
    if (await findByStripeSessionId(stripeSessionId)) {
      return "already_processed";
    }
  }

  throw new Error("Course access code generation failed");
}
