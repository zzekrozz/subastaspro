const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ADMIN_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

export function hasSupabaseAdminConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ADMIN_KEY);
}

export async function queryCourseAccessCode({ email, code }) {
  if (!hasSupabaseAdminConfig()) {
    throw new Error("Missing Supabase server configuration");
  }

  const searchParams = new URLSearchParams({
    select: "id,access_count",
    email: `eq.${email}`,
    code: `eq.${code}`,
    status: "eq.active",
    limit: "1"
  });

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/course_access_codes?${searchParams.toString()}`,
    {
      headers: {
        apikey: SUPABASE_ADMIN_KEY,
        Authorization: `Bearer ${SUPABASE_ADMIN_KEY}`
      },
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Supabase access lookup failed");
  }

  const rows = await response.json();
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}

export async function recordCourseAccess({ id, accessCount }) {
  if (!hasSupabaseAdminConfig()) {
    return false;
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/course_access_codes?id=eq.${id}`, {
    body: JSON.stringify({
      last_access_at: new Date().toISOString(),
      access_count: Number.isInteger(accessCount) ? accessCount + 1 : 1
    }),
    headers: {
      apikey: SUPABASE_ADMIN_KEY,
      Authorization: `Bearer ${SUPABASE_ADMIN_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    method: "PATCH",
    cache: "no-store"
  });

  return response.ok;
}
