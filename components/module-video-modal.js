"use client";

import { useEffect, useMemo, useState } from "react";

function buildEmbedUrl(youtubeId) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;
}

export function ModuleVideoModal({
  title,
  description,
  duration,
  youtubeId,
  status = "coming-soon"
}) {
  const [open, setOpen] = useState(false);
  const isReady = status === "ready" && youtubeId;
  const embedUrl = useMemo(() => (isReady ? buildEmbedUrl(youtubeId) : ""), [isReady, youtubeId]);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
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
            <p>{description}</p>
          </div>
        </div>

        <div className="module-video-actions">
          {duration ? <span className="pill module-video-duration">{duration}</span> : null}
          {isReady ? (
            <button className="button button-primary" onClick={() => setOpen(true)} type="button">
              Ver vídeo
            </button>
          ) : (
            <div className="module-video-soon-copy">
              <strong>Vídeo próximamente</strong>
              <span>Este módulo tendrá una explicación completa en pantalla real.</span>
            </div>
          )}
        </div>
      </div>

      {open ? (
        <div
          aria-hidden="true"
          className="module-video-overlay"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            aria-labelledby="module-video-title"
            aria-modal="true"
            className="module-video-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="module-video-header">
              <div>
                <p className="module-video-eyebrow">Reproduciendo dentro del curso</p>
                <h3 id="module-video-title">{title}</h3>
              </div>
              <button
                aria-label="Cerrar vídeo"
                className="module-video-close"
                onClick={() => setOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="module-video-frame">
              {open && isReady ? (
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-embed"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={embedUrl}
                  title={title}
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
