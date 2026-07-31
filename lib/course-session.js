import "server-only";

import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  COURSE_SESSION_COOKIE,
  COURSE_SESSION_MAX_AGE_SECONDS
} from "@/lib/course-session-config";
import { PUBLIC_ROUTE } from "@/lib/site-config";

const SESSION_VERSION = 1;

function getSessionSecret() {
  return process.env.COURSE_SESSION_SECRET;
}

function encodeJson(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function decodeJson(value) {
  return JSON.parse(Buffer.from(value, "base64url").toString("utf8"));
}

function signPayload(encodedPayload) {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("Missing course session secret");
  }

  return createHmac("sha256", secret).update(encodedPayload).digest("base64url");
}

function signaturesMatch(actual, expected) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);

  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

function isValidSessionPayload(payload) {
  const now = Math.floor(Date.now() / 1000);

  return (
    payload &&
    payload.v === SESSION_VERSION &&
    typeof payload.sid === "string" &&
    payload.sid.length > 0 &&
    typeof payload.aid === "string" &&
    payload.aid.length > 0 &&
    Number.isInteger(payload.iat) &&
    Number.isInteger(payload.exp) &&
    payload.iat <= now + 60 &&
    payload.exp > now &&
    payload.exp > payload.iat &&
    payload.exp - payload.iat <= COURSE_SESSION_MAX_AGE_SECONDS + 60
  );
}

export function hasCourseSessionSecret() {
  return Boolean(getSessionSecret());
}

export function createCourseSession(accessId) {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    v: SESSION_VERSION,
    sid: randomUUID(),
    aid: String(accessId),
    iat: now,
    exp: now + COURSE_SESSION_MAX_AGE_SECONDS
  };
  const encodedPayload = encodeJson(payload);
  const signature = signPayload(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyCourseSession(sessionValue) {
  if (typeof sessionValue !== "string" || !sessionValue) {
    return null;
  }

  const parts = sessionValue.split(".");

  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return null;
  }

  try {
    const expectedSignature = signPayload(parts[0]);

    if (!signaturesMatch(parts[1], expectedSignature)) {
      return null;
    }

    const payload = decodeJson(parts[0]);
    return isValidSessionPayload(payload) ? payload : null;
  } catch {
    return null;
  }
}

export async function requireCourseSession() {
  const cookieStore = await cookies();
  const session = verifyCourseSession(
    cookieStore.get(COURSE_SESSION_COOKIE)?.value
  );

  if (!session) {
    redirect(PUBLIC_ROUTE);
  }

  return session;
}
