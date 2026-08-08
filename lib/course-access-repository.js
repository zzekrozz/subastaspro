import "server-only";

import { generateCourseAccessCode } from "@/lib/access-code";
import { hasSupabaseAdminConfig } from "@/lib/supabase-admin";

const MAX_CODE_GENERATION_ATTEMPTS = 5;
const ACCESS_ROW_SELECT = [
  "id",
  "email",
  "code",
  "status",
  "stripe_session_id",
  "email_status",
  "email_sent_at",
  "email_last_attempt_at",
  "email_attempt_count"
].join(",");

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

export async function getCourseAccessByStripeSessionId(stripeSessionId) {
  const { url, key } = getSupabaseConfig();
  const searchParams = new URLSearchParams({
    select: ACCESS_ROW_SELECT,
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
  return Boolean(await getCourseAccessByStripeSessionId(stripeSessionId));
}

export async function markCourseAccessRefundedByStripeSessionId(stripeSessionId) {
  const { url, key } = getSupabaseConfig();
  const searchParams = new URLSearchParams({
    stripe_session_id: `eq.${stripeSessionId}`,
    status: "eq.active"
  });
  const response = await fetch(
    `${url}/rest/v1/course_access_codes?${searchParams.toString()}`,
    {
      method: "PATCH",
      headers: getSupabaseHeaders(key, "return=representation"),
      body: JSON.stringify({ status: "refunded" }),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Supabase refund access update failed");
  }

  const rows = await response.json();
  if (Array.isArray(rows) && rows.length > 0) return true;

  const access = await getCourseAccessByStripeSessionId(stripeSessionId);
  return access?.status === "refunded";
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
    headers: getSupabaseHeaders(key, "return=representation"),
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
    const rows = await response.json();
    const access = Array.isArray(rows) ? rows[0] : null;

    if (!access) {
      throw new Error("Supabase checkout insert response failed");
    }

    return { status: "created", access };
  }

  if (response.status === 409) {
    return { status: "conflict", access: null };
  }

  throw new Error("Supabase checkout insert failed");
}

export async function createCourseAccessForCheckout({
  email,
  stripeSessionId,
  stripeCustomerId
}) {
  const existingAccess = await getCourseAccessByStripeSessionId(stripeSessionId);

  if (existingAccess) {
    return { status: "already_processed", access: existingAccess };
  }

  for (let attempt = 0; attempt < MAX_CODE_GENERATION_ATTEMPTS; attempt += 1) {
    const result = await insertCourseAccess({
      email,
      code: generateCourseAccessCode(),
      stripeSessionId,
      stripeCustomerId
    });

    if (result.status === "created") {
      return { status: "processed", access: result.access };
    }

    // A concurrent delivery can lose the initial lookup race.
    const concurrentAccess = await getCourseAccessByStripeSessionId(
      stripeSessionId
    );

    if (concurrentAccess) {
      return { status: "already_processed", access: concurrentAccess };
    }
  }

  throw new Error("Course access code generation failed");
}

export async function claimCourseAccessEmailDelivery({
  stripeSessionId,
  staleBefore
}) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(
    `${url}/rest/v1/rpc/claim_course_access_email_delivery`,
    {
      method: "POST",
      headers: getSupabaseHeaders(key),
      body: JSON.stringify({
        p_stripe_session_id: stripeSessionId,
        p_stale_before: staleBefore
      }),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Supabase email delivery claim failed");
  }

  const rows = await response.json();
  const row = Array.isArray(rows) ? rows[0] : null;

  if (!row) {
    return null;
  }

  return {
    id: row.access_id,
    email: row.access_email,
    code: row.access_code,
    email_status: row.access_email_status,
    email_attempt_count: row.access_email_attempt_count
  };
}

async function updateCourseAccessEmailDelivery({
  stripeSessionId,
  values
}) {
  const { url, key } = getSupabaseConfig();
  const searchParams = new URLSearchParams({
    stripe_session_id: `eq.${stripeSessionId}`,
    email_status: "eq.sending"
  });
  const response = await fetch(
    `${url}/rest/v1/course_access_codes?${searchParams.toString()}`,
    {
      method: "PATCH",
      headers: getSupabaseHeaders(key, "return=representation"),
      body: JSON.stringify(values),
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Supabase email delivery update failed");
  }

  const rows = await response.json();
  return Array.isArray(rows) && rows.length > 0;
}

export async function markCourseAccessEmailSent({
  stripeSessionId,
  providerId,
  sentAt
}) {
  const updated = await updateCourseAccessEmailDelivery({
    stripeSessionId,
    values: {
      email_status: "sent",
      email_sent_at: sentAt,
      email_provider_id: providerId,
      email_last_error: null
    }
  });

  if (updated) {
    return;
  }

  const access = await getCourseAccessByStripeSessionId(stripeSessionId);

  if (access?.email_status !== "sent") {
    throw new Error("Supabase email delivery completion failed");
  }
}

export async function markCourseAccessEmailFailed({
  stripeSessionId,
  safeError
}) {
  const updated = await updateCourseAccessEmailDelivery({
    stripeSessionId,
    values: {
      email_status: "failed",
      email_sent_at: null,
      email_last_error: safeError.slice(0, 80)
    }
  });

  if (updated) {
    return;
  }

  const access = await getCourseAccessByStripeSessionId(stripeSessionId);

  if (access?.email_status !== "sent") {
    throw new Error("Supabase email delivery failure update failed");
  }
}
