import { NextResponse } from "next/server";

import { COURSE_SESSION_COOKIE } from "@/lib/course-session-config";

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: COURSE_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });

  return response;
}
