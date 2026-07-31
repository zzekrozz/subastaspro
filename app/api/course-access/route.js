import { NextResponse } from "next/server";

import { isValidEmail, normalizeCourseAccessCredentials } from "@/lib/course-state";
import {
  hasSupabaseAdminConfig,
  queryCourseAccessCode,
  recordCourseAccess
} from "@/lib/supabase-admin";

const INVALID_ACCESS_MESSAGE = "El correo o el código de acceso no son correctos.";
const INVALID_INPUT_MESSAGE =
  "Introduce un correo electrónico y un código de acceso válidos.";
const ACCESS_CHECK_ERROR_MESSAGE =
  "No se ha podido comprobar el acceso. Inténtalo de nuevo.";

function jsonResponse(body, status) {
  return NextResponse.json(body, { status });
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ valid: false, message: INVALID_INPUT_MESSAGE }, 400);
  }

  if (typeof body?.email !== "string" || typeof body?.code !== "string") {
    return jsonResponse({ valid: false, message: INVALID_INPUT_MESSAGE }, 400);
  }

  const credentials = normalizeCourseAccessCredentials({
    email: body.email,
    code: body.code
  });

  if (!credentials.email || !credentials.code || !isValidEmail(credentials.email)) {
    return jsonResponse({ valid: false, message: INVALID_INPUT_MESSAGE }, 400);
  }

  if (!hasSupabaseAdminConfig()) {
    return jsonResponse({ valid: false, message: ACCESS_CHECK_ERROR_MESSAGE }, 500);
  }

  try {
    const accessCode = await queryCourseAccessCode(credentials);

    if (!accessCode) {
      return jsonResponse({ valid: false, message: INVALID_ACCESS_MESSAGE }, 401);
    }

    try {
      await recordCourseAccess({
        id: accessCode.id,
        accessCount: accessCode.access_count
      });
    } catch {}

    return jsonResponse({ valid: true }, 200);
  } catch {
    return jsonResponse({ valid: false, message: ACCESS_CHECK_ERROR_MESSAGE }, 500);
  }
}
