import "server-only";

import { NextResponse } from "next/server";

import {
  COURSE_SESSION_COOKIE,
  COURSE_SESSION_MAX_AGE_SECONDS
} from "@/lib/course-session-config";
import { createCourseSession } from "@/lib/course-session";
import { constantTimeEqual, hmac } from "@/lib/google-identity-core";

export const GOOGLE_NONCE_COOKIE = "subastaspro_gnonce";
export const GOOGLE_PENDING_COOKIE = "subastaspro_gpending";
export const GOOGLE_NONCE_TTL_SECONDS = 10 * 60;
export const GOOGLE_PENDING_TTL_SECONDS = 20 * 60;

const isProduction = () => process.env.NODE_ENV === "production";

export function getSessionSecret() {
  const secret = process.env.COURSE_SESSION_SECRET || "";
  return secret.length >= 16 ? secret : "";
}

export function cookieOptions(maxAge) {
  return {
    httpOnly: true,
    secure: isProduction(),
    sameSite: "lax",
    path: "/",
    maxAge
  };
}

/** Valor firmado y con caducidad: base64url(JSON).firma */
export function signValue(purpose, data, ttlSeconds) {
  const secret = getSessionSecret();
  const payload = Buffer.from(
    JSON.stringify({ ...data, exp: Math.floor(Date.now() / 1000) + ttlSeconds })
  ).toString("base64url");

  return `${payload}.${hmac(secret, `${purpose}:${payload}`)}`;
}

export function readSignedValue(purpose, value) {
  const secret = getSessionSecret();
  if (!secret || typeof value !== "string") return null;

  const [payload, mac] = value.split(".");
  if (!payload || !mac || !constantTimeEqual(mac, hmac(secret, `${purpose}:${payload}`))) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Number.isInteger(data.exp) && data.exp > Math.floor(Date.now() / 1000) ? data : null;
  } catch {
    return null;
  }
}

/** Solo se aceptan peticiones hechas desde la propia web. */
export function originAllowed(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function attachCourseSession(response, sessionInput) {
  response.cookies.set({
    name: COURSE_SESSION_COOKIE,
    value: createCourseSession(sessionInput),
    ...cookieOptions(COURSE_SESSION_MAX_AGE_SECONDS)
  });
  response.cookies.set({ name: GOOGLE_PENDING_COOKIE, value: "", ...cookieOptions(0) });
  response.cookies.set({ name: GOOGLE_NONCE_COOKIE, value: "", ...cookieOptions(0) });

  return response;
}

export function jsonResponse(body, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" }
  });
}
