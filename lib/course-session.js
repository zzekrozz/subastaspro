import "server-only";

import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  COURSE_SESSION_COOKIE,
  COURSE_SESSION_MAX_AGE_SECONDS
} from "@/lib/course-session-config";
import {
  googleAuthConfigFromEnv,
  isAdminIdentity
} from "@/lib/google-identity-core";
import { LOGIN_ROUTE } from "@/lib/site-config";

const SESSION_VERSION = 2;
const SUPPORTED_SESSION_VERSIONS = new Set([1, 2]);
const SESSION_ROLES = new Set(["student", "admin"]);

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
    SUPPORTED_SESSION_VERSIONS.has(payload.v) &&
    (payload.v === 1 || SESSION_ROLES.has(payload.role)) &&
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

function cleanText(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Crea la cookie firmada del área privada.
 * Acepta el formato antiguo (solo el id del acceso) o un objeto con rol e identidad de Google.
 */
export function createCourseSession(input) {
  const options = typeof input === "object" && input !== null ? input : { accessId: input };
  const role = options.role === "admin" ? "admin" : "student";
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    v: SESSION_VERSION,
    sid: randomUUID(),
    aid: String(options.accessId || (role === "admin" ? "admin" : "")),
    role,
    iat: now,
    exp: now + COURSE_SESSION_MAX_AGE_SECONDS
  };
  const name = cleanText(options.name, 60);
  const email = cleanText(options.email, 254);
  const sub = cleanText(options.sub, 255);

  if (name) payload.name = name;
  if (email) payload.email = email;
  if (sub) payload.sub = sub;
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

/** Un administrador deja de serlo en cuanto se retira de las variables de entorno. */
function sessionStillValid(session) {
  if (!session) return false;
  if (session.role !== "admin") return true;

  return isAdminIdentity(
    { sub: session.sub, email: session.email },
    googleAuthConfigFromEnv()
  );
}

export async function readCourseSession() {
  const cookieStore = await cookies();
  const session = verifyCourseSession(cookieStore.get(COURSE_SESSION_COOKIE)?.value);

  return sessionStillValid(session) ? session : null;
}

export async function requireCourseSession() {
  const session = await readCourseSession();

  if (!session) {
    redirect(LOGIN_ROUTE);
  }

  return session;
}

/** Datos mínimos y seguros para pintar la interfaz del alumno o del administrador. */
export async function getCourseViewer() {
  const session = await requireCourseSession();

  return {
    role: session.role === "admin" ? "admin" : "student",
    name: session.name || "",
    email: session.email || ""
  };
}
