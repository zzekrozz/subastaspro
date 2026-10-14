import {
  GOOGLE_NONCE_COOKIE,
  GOOGLE_NONCE_TTL_SECONDS,
  cookieOptions,
  getSessionSecret,
  jsonResponse,
  signValue
} from "@/lib/google-auth-flow";
import { googleAuthConfigFromEnv, randomToken } from "@/lib/google-identity-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const { clientId } = googleAuthConfigFromEnv();

  if (!clientId || !getSessionSecret()) {
    return jsonResponse({ ok: false, message: "El acceso con Google todavía no está configurado." }, 503);
  }

  const nonce = randomToken(18);
  const response = jsonResponse({ ok: true, nonce });

  response.cookies.set({
    name: GOOGLE_NONCE_COOKIE,
    value: signValue("nonce", { nonce }, GOOGLE_NONCE_TTL_SECONDS),
    ...cookieOptions(GOOGLE_NONCE_TTL_SECONDS)
  });

  return response;
}
