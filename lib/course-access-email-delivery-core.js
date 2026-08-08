export const EMAIL_SENDING_STALE_AFTER_MS = 10 * 60 * 1000;

const SAFE_ERROR_CODES = new Set([
  "access_missing",
  "configuration_missing",
  "provider_rejected",
  "provider_unavailable",
  "provider_response_invalid",
  "status_update_failed"
]);

export class CourseAccessEmailDeliveryError extends Error {
  constructor(safeCode) {
    super("Course access email delivery failed");
    this.name = "CourseAccessEmailDeliveryError";
    this.safeCode = SAFE_ERROR_CODES.has(safeCode)
      ? safeCode
      : "provider_unavailable";
  }
}

export function getSafeEmailDeliveryError(error) {
  return SAFE_ERROR_CODES.has(error?.safeCode)
    ? error.safeCode
    : "provider_unavailable";
}

export function getCourseAccessEmailIdempotencyKey(stripeSessionId) {
  return `subastaspro-access/${stripeSessionId}`;
}

export function createCourseAccessEmailDelivery({
  claimDelivery,
  getAccessByStripeSessionId,
  markDeliveryFailed,
  markDeliverySent,
  now = () => new Date(),
  sendEmail
}) {
  return async function deliverCourseAccessEmail({
    stripeSessionId,
    purchaseSummary = null
  }) {
    const claimTime = now();
    const claimedAccess = await claimDelivery({
      stripeSessionId,
      staleBefore: new Date(
        claimTime.getTime() - EMAIL_SENDING_STALE_AFTER_MS
      ).toISOString()
    });

    if (!claimedAccess) {
      const currentAccess = await getAccessByStripeSessionId(stripeSessionId);

      if (!currentAccess) {
        throw new CourseAccessEmailDeliveryError("access_missing");
      }

      return {
        status:
          currentAccess.email_status === "sent"
            ? "already_sent"
            : "in_progress"
      };
    }

    try {
      const providerResult = await sendEmail({
        email: claimedAccess.email,
        code: claimedAccess.code,
        stripeSessionId,
        purchaseSummary
      });

      await markDeliverySent({
        stripeSessionId,
        providerId: providerResult.id,
        sentAt: now().toISOString()
      });

      return { status: "sent" };
    } catch (error) {
      const safeError = getSafeEmailDeliveryError(error);

      try {
        await markDeliveryFailed({
          stripeSessionId,
          safeError
        });
      } catch {
        throw new CourseAccessEmailDeliveryError("status_update_failed");
      }

      throw new CourseAccessEmailDeliveryError(safeError);
    }
  };
}
