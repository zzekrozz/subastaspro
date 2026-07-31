import { NextResponse } from "next/server";

import {
  COURSE_SESSION_COOKIE,
  COURSE_SESSION_MAX_AGE_SECONDS
} from "@/lib/course-session-config";
import {
  createCourseSession,
  hasCourseSessionSecret
} from "@/lib/course-session";
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

  if (!hasCourseSessionSecret()) {
    console.error("Missing course session configuration");
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

    const response = jsonResponse({ valid: true }, 200);
    response.cookies.set({
      name: COURSE_SESSION_COOKIE,
      value: createCourseSession(accessCode.id),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: COURSE_SESSION_MAX_AGE_SECONDS
    });

    return response;
  } catch {
    return jsonResponse({ valid: false, message: ACCESS_CHECK_ERROR_MESSAGE }, 500);
  }
}
