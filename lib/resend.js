import "server-only";

import { CourseAccessEmailDeliveryError } from "@/lib/course-access-email-delivery-core";

const RESEND_EMAILS_URL = "https://api.resend.com/emails";

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const replyTo = process.env.RESEND_REPLY_TO_EMAIL?.trim();

  if (!apiKey || !from || !replyTo) {
    throw new CourseAccessEmailDeliveryError("configuration_missing");
  }

  return { apiKey, from, replyTo };
}

export async function sendResendEmail({
  html,
  idempotencyKey,
  subject,
  text,
  to
}) {
  const { apiKey, from, replyTo } = getResendConfig();
  let response;

  try {
    response = await fetch(RESEND_EMAILS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject,
        html,
        text
      }),
      cache: "no-store"
    });
  } catch {
    throw new CourseAccessEmailDeliveryError("provider_unavailable");
  }

  if (!response.ok) {
    throw new CourseAccessEmailDeliveryError("provider_rejected");
  }

  let data;

  try {
    data = await response.json();
  } catch {
    throw new CourseAccessEmailDeliveryError("provider_response_invalid");
  }

  if (typeof data?.id !== "string" || !data.id) {
    throw new CourseAccessEmailDeliveryError("provider_response_invalid");
  }

  return { id: data.id };
}
