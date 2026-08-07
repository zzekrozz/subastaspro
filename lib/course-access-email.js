import "server-only";

import {
  claimCourseAccessEmailDelivery,
  getCourseAccessByStripeSessionId,
  markCourseAccessEmailFailed,
  markCourseAccessEmailSent
} from "@/lib/course-access-repository";
import {
  createCourseAccessEmailDelivery,
  getCourseAccessEmailIdempotencyKey
} from "@/lib/course-access-email-delivery-core";
import { buildCourseAccessEmail } from "@/lib/course-access-email-template";
import { sendResendEmail } from "@/lib/resend";

export async function sendCourseAccessEmail({
  email,
  code,
  stripeSessionId
}) {
  const content = buildCourseAccessEmail({ email, code });

  return sendResendEmail({
    ...content,
    to: email,
    idempotencyKey: getCourseAccessEmailIdempotencyKey(stripeSessionId)
  });
}

export const deliverCourseAccessEmailForPurchase =
  createCourseAccessEmailDelivery({
    claimDelivery: claimCourseAccessEmailDelivery,
    getAccessByStripeSessionId: getCourseAccessByStripeSessionId,
    markDeliveryFailed: markCourseAccessEmailFailed,
    markDeliverySent: markCourseAccessEmailSent,
    sendEmail: sendCourseAccessEmail
  });
