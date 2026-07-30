"use client";

import { useMemo } from "react";

function buildEmbedUrl({ videoUrl, youtubeId }) {
  if (videoUrl) {
    return `${videoUrl}?rel=0&modestbranding=1`;
  }

  return youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`
    : "";
}

export function ModuleVideoModal({
  title,
  description,
  duration,
  videoUrl,
  youtubeId,
  status = "coming-soon"
}) {
  const isReady = status === "ready" && (videoUrl || youtubeId);
  const embedUrl = useMemo(
    () => (isReady ? buildEmbedUrl({ videoUrl, youtubeId }) : ""),
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

      {isReady ? (
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
