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

/* ---- Acceso con Google ---------------------------------------------------- */

const GOOGLE_ACCESS_SELECT = "id,email,status,access_count,google_sub";
const BASIC_ACCESS_SELECT = "id,email,status,access_count";

function supabaseHeaders(prefer) {
  return {
    apikey: SUPABASE_ADMIN_KEY,
    Authorization: `Bearer ${SUPABASE_ADMIN_KEY}`,
    "Content-Type": "application/json",
    ...(prefer ? { Prefer: prefer } : {})
  };
}

async function selectAccessRows(filters, select = GOOGLE_ACCESS_SELECT) {
  if (!hasSupabaseAdminConfig()) {
    throw new Error("Missing Supabase server configuration");
  }

  const searchParams = new URLSearchParams({ select, ...filters });
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/course_access_codes?${searchParams.toString()}`,
    { headers: supabaseHeaders(), cache: "no-store" }
  );

  // 400 = la columna google_sub todavía no existe (migración pendiente).
  if (response.status === 400 && select === GOOGLE_ACCESS_SELECT) {
    return { rows: null, missingGoogleColumns: true };
  }

  if (!response.ok) {
    throw new Error("Supabase access lookup failed");
  }

  const rows = await response.json();
  return { rows: Array.isArray(rows) ? rows : [], missingGoogleColumns: false };
}

/** Busca una compra activa ya vinculada a la cuenta de Google o comprada con su mismo email. */
export async function findActiveAccessForGoogleIdentity({ sub, email }) {
  const bySub = await selectAccessRows({
    google_sub: `eq.${sub}`,
    status: "eq.active",
    order: "created_at.asc",
    limit: "1"
  });

  if (bySub.rows?.length) {
    return { access: bySub.rows[0], googleColumns: true };
  }

  if (!email) return { access: null, googleColumns: !bySub.missingGoogleColumns };

  const byEmail = await selectAccessRows(
    { email: `eq.${email}`, status: "eq.active", order: "created_at.asc", limit: "1" },
    bySub.missingGoogleColumns ? BASIC_ACCESS_SELECT : GOOGLE_ACCESS_SELECT
  );

  return {
    access: byEmail.rows?.[0] || null,
    googleColumns: !bySub.missingGoogleColumns
  };
}

export async function findActiveAccessByCode(code) {
  const result = await selectAccessRows({
    code: `eq.${code}`,
    status: "eq.active",
    limit: "1"
  });

  if (result.missingGoogleColumns) {
    const fallback = await selectAccessRows(
      { code: `eq.${code}`, status: "eq.active", limit: "1" },
      BASIC_ACCESS_SELECT
    );
    return { access: fallback.rows?.[0] || null, googleColumns: false };
  }

  return { access: result.rows?.[0] || null, googleColumns: true };
}

/** Vincula una compra a una cuenta de Google solo si todavía no tiene otra vinculada. */
export async function linkAccessToGoogleIdentity({ id, sub, email }) {
  if (!hasSupabaseAdminConfig()) return false;

  const searchParams = new URLSearchParams({
    id: `eq.${id}`,
    google_sub: "is.null"
  });
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/course_access_codes?${searchParams.toString()}`,
    {
      method: "PATCH",
      headers: supabaseHeaders("return=representation"),
      body: JSON.stringify({
        google_sub: sub,
        google_email: email || null,
        google_linked_at: new Date().toISOString()
      }),
      cache: "no-store"
    }
  );

  if (!response.ok) return false;

  const rows = await response.json();
  return Array.isArray(rows) && rows.length > 0;
}

/** Listado para el panel del administrador. Nunca devuelve códigos completos. */
export async function listCourseAccessesForAdmin({ limit = 200 } = {}) {
  const fullSelect =
    "id,email,status,created_at,last_access_at,access_count,email_status,google_sub,google_linked_at";
  const basicSelect = "id,email,status,created_at,last_access_at,access_count";

  if (!hasSupabaseAdminConfig()) {
    return { configured: false, rows: [], googleColumns: false };
  }

  for (const select of [fullSelect, basicSelect]) {
    const searchParams = new URLSearchParams({
      select,
      order: "created_at.desc",
      limit: String(limit)
    });
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/course_access_codes?${searchParams.toString()}`,
      { headers: supabaseHeaders(), cache: "no-store" }
    );

    if (response.ok) {
      const rows = await response.json();
      return {
        configured: true,
        rows: Array.isArray(rows) ? rows : [],
        googleColumns: select === fullSelect
      };
    }

    if (response.status !== 400) break;
  }

  throw new Error("Supabase admin listing failed");
}
