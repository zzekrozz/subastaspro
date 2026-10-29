"use client";

import { useEffect, useState } from "react";

export function CourseImageBlock({
  src,
  alt,
  caption,
  label,
  layout = "single",
  blurSensitive = false
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

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

  // Si la imagen no existe o falla al cargar, no se muestra nada:
  // el alumno nunca ve huecos ni avisos de "imagen pendiente".
  if (!src || failed) return null;

  return (
    <>
      <figure className={`course-image-card ${blurSensitive ? "is-sensitive" : ""} ${layout}`}>
        <div className="course-image-frame">
          {label ? <span className="course-image-label">{label}</span> : null}
          <button
            className="course-image-trigger"
            onClick={() => setOpen(true)}
            type="button"
          >
            <img
              alt={alt}
              className="course-image"
              loading="lazy"
              onError={() => setFailed(true)}
              src={src}
            />
          </button>
        </div>

        {caption ? (
          <figcaption className="course-image-caption">
            <span>{caption}</span>
          </figcaption>
        ) : null}
      </figure>

      {open ? (
        <div
          aria-hidden="true"
          className="course-image-overlay"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            aria-label={alt}
            aria-modal="true"
            className="course-image-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Cerrar imagen"
              className="course-image-close"
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>
            <img alt={alt} className="course-image-expanded" src={src} />
            {(caption || label) ? (
              <div className="course-image-modal-copy">
                {label ? <p className="course-image-label course-image-label-inline">{label}</p> : null}
                {caption ? <p>{caption}</p> : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
