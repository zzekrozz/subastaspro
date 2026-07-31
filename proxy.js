import { NextResponse } from "next/server";

import { COURSE_SESSION_COOKIE } from "@/lib/course-session-config";
import { PUBLIC_ROUTE } from "@/lib/site-config";

function redirectToAccess(request, clearCookie = false) {
  const response = NextResponse.redirect(new URL(PUBLIC_ROUTE, request.url));

  if (clearCookie) {
    response.cookies.set({
      name: COURSE_SESSION_COOKIE,
      value: "",
      path: "/",
      maxAge: 0
    });
  }

  return response;
}

function hasValidSessionShape(value) {
  if (typeof value !== "string") return false;

  const parts = value.split(".");
  return parts.length === 2 && Boolean(parts[0]) && Boolean(parts[1]);
}

export function proxy(request) {
  const session = request.cookies.get(COURSE_SESSION_COOKIE)?.value;

  if (!session) {
    return redirectToAccess(request);
  }

  if (!hasValidSessionShape(session)) {
    return redirectToAccess(request, true);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/curso-subastas-fundador/:path*", "/checklist-subastas-pdf"]
};
