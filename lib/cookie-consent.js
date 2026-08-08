import { COOKIES_VERSION } from "./legal-config.js";

export const COOKIE_CONSENT_STORAGE_KEY = "subastaspro-cookie-consent";
export const COOKIE_SETTINGS_EVENT = "subastaspro:open-cookie-settings";
export const COOKIE_CONSENT_MAX_AGE_DAYS = 365;

export function createCookiePreferences({ externalContent, now = new Date() }) {
  const expiresAt = new Date(
    now.getTime() + COOKIE_CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000
  );

  return {
    version: COOKIES_VERSION,
    necessary: true,
    externalContent: externalContent === true,
    decidedAt: now.toISOString(),
    expiresAt: expiresAt.toISOString()
  };
}

export function parseCookiePreferences(rawValue, now = new Date()) {
  if (!rawValue) return null;

  try {
    const value = JSON.parse(rawValue);
    const expiresAt = Date.parse(value?.expiresAt);

    if (
      value?.version !== COOKIES_VERSION ||
      value?.necessary !== true ||
      typeof value?.externalContent !== "boolean" ||
      !Number.isFinite(expiresAt) ||
      expiresAt <= now.getTime()
    ) {
      return null;
    }

    return value;
  } catch {
    return null;
  }
}

export function buildYouTubeNoCookieUrl({ videoUrl, youtubeId }) {
  const idFromUrl =
    typeof videoUrl === "string"
      ? videoUrl.match(/(?:youtube(?:-nocookie)?\.com\/embed\/)([A-Za-z0-9_-]+)/)?.[1]
      : null;
  const id = youtubeId || idFromUrl;

  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`
    : "";
}
