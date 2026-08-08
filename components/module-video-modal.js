"use client";

import { useMemo } from "react";

import { useExternalContentConsent } from "@/components/cookie-consent-provider";
import { buildYouTubeNoCookieUrl } from "@/lib/cookie-consent";

export function ModuleVideoModal({
  title,
  description,
  duration,
  videoUrl,
  youtubeId,
  status = "coming-soon"
}) {
  const { allowExternalContent, externalContentAllowed } =
    useExternalContentConsent();
  const isReady = status === "ready" && (videoUrl || youtubeId);
  const embedUrl = useMemo(
    () => (isReady ? buildYouTubeNoCookieUrl({ videoUrl, youtubeId }) : ""),
    [isReady, videoUrl, youtubeId]
  );

  return (
    <div className={`module-video-card ${isReady ? "is-ready" : "is-soon"}`}>
      <div className="module-video-copy">
        <span aria-hidden="true" className="module-video-icon">
          {isReady ? "▶" : "○"}
        </span>
        <div>
          <p className="module-video-eyebrow">
            {isReady ? "Explicación completa del módulo" : "Vídeo próximamente"}
          </p>
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
      </div>

      {duration ? <span className="pill module-video-duration">{duration}</span> : null}

      {isReady && externalContentAllowed ? (
        <div className="module-video-frame">
          <iframe
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-embed"
            referrerPolicy="strict-origin-when-cross-origin"
            src={embedUrl}
            title={title}
          />
        </div>
      ) : isReady ? (
        <div className="module-video-consent">
          <div>
            <strong>Contenido de YouTube</strong>
            <p>
              Para reproducir este vídeo debes permitir contenido externo de
              YouTube.
            </p>
          </div>
          <button
            className="button button-secondary"
            onClick={allowExternalContent}
            type="button"
          >
            Permitir y reproducir
          </button>
        </div>
      ) : (
        <div className="module-video-actions">
          <div className="module-video-soon-copy">
            <strong>Vídeo próximamente</strong>
            <span>Este módulo tendrá una explicación completa en pantalla real.</span>
          </div>
        </div>
      )}
    </div>
  );
}
