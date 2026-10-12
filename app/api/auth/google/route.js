import {
  GOOGLE_NONCE_COOKIE,
  GOOGLE_PENDING_COOKIE,
  GOOGLE_PENDING_TTL_SECONDS,
  attachCourseSession,
  cookieOptions,
  getSessionSecret,
  jsonResponse,
  originAllowed,
  readSignedValue,
  signValue
} from "@/lib/google-auth-flow";
import {
  GoogleAuthError,
  googleAuthConfigFromEnv,
  isAdminIdentity,
  verifyGoogleIdToken
} from "@/lib/google-identity-core";
import { PRIVATE_ROUTE } from "@/lib/site-config";
import {
  findActiveAccessForGoogleIdentity,
  hasSupabaseAdminConfig,
  linkAccessToGoogleIdentity,
  recordCourseAccess
} from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GENERIC_ERROR = "No se ha podido iniciar sesión con Google. Inténtalo de nuevo.";

export async function POST(request) {
  const config = googleAuthConfigFromEnv();

  if (!config.clientId || !getSessionSecret()) {
    return jsonResponse({ ok: false, message: "El acceso con Google todavía no está configurado." }, 503);
  }

  if (!originAllowed(request)) {
    return jsonResponse({ ok: false, message: GENERIC_ERROR }, 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: GENERIC_ERROR }, 400);
  }

  const nonceState = readSignedValue("nonce", request.cookies.get(GOOGLE_NONCE_COOKIE)?.value);

  if (!nonceState?.nonce) {
    return jsonResponse({ ok: false, message: "La sesión de acceso ha caducado. Recarga la página." }, 401);
  }

  let identity;
  try {
    identity = await verifyGoogleIdToken(body?.credential, {
      clientId: config.clientId,
      nonce: nonceState.nonce
    });
  } catch (error) {
    const status = error instanceof GoogleAuthError ? error.status : 401;
    console.warn("Google login rejected", { reason: error?.reason || "unknown" });
    return jsonResponse({ ok: false, message: GENERIC_ERROR }, status);
  }

  // 1. Administrador: entra gratis siempre.
  if (isAdminIdentity(identity, config)) {
    return attachCourseSession(
      jsonResponse({ ok: true, role: "admin", redirectTo: PRIVATE_ROUTE }),
      { role: "admin", sub: identity.sub, email: identity.email, name: identity.name }
    );
  }

  if (!hasSupabaseAdminConfig()) {
    return jsonResponse({ ok: false, message: "No se ha podido comprobar tu compra ahora mismo." }, 503);
  }

  // 2. Alumno con compra vinculada a su Google o hecha con el mismo email.
  try {
    const { access, googleColumns } = await findActiveAccessForGoogleIdentity(identity);

    if (access) {
      if (googleColumns && !access.google_sub) {
        await linkAccessToGoogleIdentity({ id: access.id, sub: identity.sub, email: identity.email }).catch(() => false);
      }

      await recordCourseAccess({ id: access.id, accessCount: access.access_count }).catch(() => false);

      return attachCourseSession(
        jsonResponse({ ok: true, role: "student", redirectTo: PRIVATE_ROUTE }),
        { accessId: access.id, role: "student", email: identity.email, name: identity.name }
      );
    }
  } catch {
    return jsonResponse({ ok: false, message: "No se ha podido comprobar tu compra ahora mismo." }, 500);
  }

  // 3. Sin compra asociada: puede vincular su código (compró con otro email) o comprar.
  const response = jsonResponse({
    ok: false,
    needsCode: true,
    email: identity.email,
    name: identity.name
  });

  response.cookies.set({
    name: GOOGLE_PENDING_COOKIE,
    value: signValue(
      "pending",
      { sub: identity.sub, email: identity.email, name: identity.name },
      GOOGLE_PENDING_TTL_SECONDS
    ),
    ...cookieOptions(GOOGLE_PENDING_TTL_SECONDS)
  });
  response.cookies.set({ name: GOOGLE_NONCE_COOKIE, value: "", ...cookieOptions(0) });

  return response;
}
