import { createHash, randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

import {
  LEGAL_ACCEPTANCE_TEXTS,
  PRIVACY_VERSION,
  TERMS_VERSION,
  WITHDRAWAL_VERSION
} from "@/lib/legal-config";
import { createPurchaseConsent } from "@/lib/purchase-consent-repository";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 120;
const rateLimitState = globalThis.__subastasProConsentRateLimit || {
  startedAt: Date.now(),
  count: 0
};
globalThis.__subastasProConsentRateLimit = rateLimitState;

function jsonResponse(body, status) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      Pragma: "no-cache"
    }
  });
}

function hasAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");

  return (
    origin === request.nextUrl.origin &&
    (!fetchSite || fetchSite === "same-origin")
  );
}

function isRateLimited() {
  const now = Date.now();

  if (now - rateLimitState.startedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitState.startedAt = now;
    rateLimitState.count = 0;
  }

  rateLimitState.count += 1;
  return rateLimitState.count > RATE_LIMIT_MAX_REQUESTS;
}

function hashText(text) {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

export async function POST(request) {
  if (!hasAllowedOrigin(request)) {
    return jsonResponse({ error: "forbidden" }, 403);
  }

  if (isRateLimited()) {
    return jsonResponse({ error: "rate_limited" }, 429);
  }

  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > 1024) {
    return jsonResponse({ error: "request_too_large" }, 413);
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ error: "invalid_request" }, 415);
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "invalid_request" }, 400);
  }

  if (
    body?.termsAccepted !== true ||
    body?.immediateAccessRequested !== true ||
    Object.keys(body).some(
      (key) => !["termsAccepted", "immediateAccessRequested"].includes(key)
    )
  ) {
    return jsonResponse({ error: "acceptance_required" }, 400);
  }

  const id = randomUUID();
  const acceptedAt = new Date().toISOString();

  try {
    await createPurchaseConsent({
      id,
      terms_version: TERMS_VERSION,
      privacy_version: PRIVACY_VERSION,
      withdrawal_version: WITHDRAWAL_VERSION,
      terms_text_sha256: hashText(LEGAL_ACCEPTANCE_TEXTS.terms),
      withdrawal_text_sha256: hashText(LEGAL_ACCEPTANCE_TEXTS.withdrawal),
      terms_accepted: true,
      terms_accepted_at: acceptedAt,
      immediate_access_requested: true,
      withdrawal_acknowledged: true,
      withdrawal_accepted_at: acceptedAt,
      status: "pending"
    });

    return jsonResponse({ purchaseConsentId: id }, 201);
  } catch {
    console.error("Purchase consent creation failed");
    return jsonResponse({ error: "service_unavailable" }, 500);
  }
}
