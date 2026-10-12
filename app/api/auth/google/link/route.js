import {
  GOOGLE_PENDING_COOKIE,
  attachCourseSession,
  jsonResponse,
  originAllowed,
  readSignedValue
} from "@/lib/google-auth-flow";
import { PRIVATE_ROUTE } from "@/lib/site-config";
import {
  findActiveAccessByCode,
  hasSupabaseAdminConfig,
  linkAccessToGoogleIdentity,
  recordCourseAccess
} from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CODE_PATTERN = /^SUBASTAS-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
const INVALID_CODE = "Ese código no corresponde a ninguna compra activa.";

export async function POST(request) {
  if (!originAllowed(request)) {
    return jsonResponse({ ok: false, message: INVALID_CODE }, 403);
  }

  const pending = readSignedValue("pending", request.cookies.get(GOOGLE_PENDING_COOKIE)?.value);

  if (!pending?.sub) {
    return jsonResponse({ ok: false, expired: true, message: "Vuelve a entrar con Google para continuar." }, 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: INVALID_CODE }, 400);
  }

  const code = String(body?.code || "").trim().toUpperCase().replace(/\s+/g, "");

  if (!CODE_PATTERN.test(code)) {
    return jsonResponse({ ok: false, message: "El código tiene este formato: SUBASTAS-XXXX-XXXX." }, 400);
  }

  if (!hasSupabaseAdminConfig()) {
    return jsonResponse({ ok: false, message: "No se ha podido comprobar el código ahora mismo." }, 503);
  }

  try {
    const { access, googleColumns } = await findActiveAccessByCode(code);

    if (!access) {
      return jsonResponse({ ok: false, message: INVALID_CODE }, 401);
    }

    if (googleColumns) {
      if (access.google_sub && access.google_sub !== pending.sub) {
        return jsonResponse(
          { ok: false, message: "Este código ya está vinculado a otra cuenta de Google. Entra con esa cuenta o escríbenos por WhatsApp." },
          409
        );
      }

      if (!access.google_sub) {
        await linkAccessToGoogleIdentity({ id: access.id, sub: pending.sub, email: pending.email });
      }
    }

    await recordCourseAccess({ id: access.id, accessCount: access.access_count }).catch(() => false);

    return attachCourseSession(
      jsonResponse({ ok: true, redirectTo: PRIVATE_ROUTE }),
      { accessId: access.id, role: "student", email: pending.email, name: pending.name }
    );
  } catch {
    return jsonResponse({ ok: false, message: "No se ha podido comprobar el código ahora mismo." }, 500);
  }
}
