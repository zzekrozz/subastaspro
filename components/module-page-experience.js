"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseAccessGate } from "@/components/course-access-gate";
import { courseModules, getModulePath } from "@/lib/course-content";
import {
  BRAND_NAME,
  PDF_DOWNLOAD_PATH,
  PRIVATE_ROUTE,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";
import {
  hasStoredCourseAccess,
  isValidCoursePassword,
  loadCompletedModules,
  saveCompletedModules,
  storeCourseAccess,
  toggleCompletedModule
} from "@/lib/course-state";

function ContentBlock({ label, text, tone }) {
  return (
    <div className={`module-aside ${tone || "note"}`}>
      <p className="module-aside-label">{label}</p>
      <p>{text}</p>
    </div>
  );
}

function ModuleVideoBlock({ module }) {
  if (module.youtubeId) {
    return (
      <section className="module-section-card">
        <h2>Vídeo del módulo</h2>
        <div className="video-embed-shell">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-embed"
            src={`https://www.youtube.com/embed/${module.youtubeId}`}
            title={`Vídeo de ${module.title}`}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="module-section-card">
      <h2>Vídeo del módulo</h2>
      <div className="video-placeholder">
        <p>Espacio preparado para un vídeo privado o no listado de YouTube.</p>
        <p>Cuando se añada el enlace, aparecerá aquí sin cambiar la estructura del módulo.</p>
      </div>
    </section>
  );
}

export function ModulePageExperience({ module }) {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const [ready, setReady] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [accessError, setAccessError] = useState("");
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    setHasAccess(hasStoredCourseAccess());
    setCompletedModules(loadCompletedModules());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCompletedModules(completedModules);
  }, [completedModules, ready]);

  const moduleIndex = courseModules.findIndex((item) => item.id === module.id);
  const previousModule = moduleIndex > 0 ? courseModules[moduleIndex - 1] : null;
  const nextModule =
    moduleIndex < courseModules.length - 1 ? courseModules[moduleIndex + 1] : null;
  const isCompleted = useMemo(
    () => completedModules.includes(module.id),
    [completedModules, module.id]
  );

  function unlockCourse() {
    if (isValidCoursePassword(password)) {
      storeCourseAccess();
      setHasAccess(true);
      setAccessError("");
      return;
    }

    setAccessError("Clave incorrecta. Revisa el mensaje de acceso.");
  }

  function handleToggleComplete() {
    setCompletedModules((current) => toggleCompletedModule(module.id, current));
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando módulo...</main>;
  }

  if (!hasAccess) {
    return (
      <CourseAccessGate
        accessError={accessError}
        description="Introduce la misma clave del curso para acceder a este módulo detallado."
        onPasswordChange={(value) => {
          setPassword(value);
          setAccessError("");
        }}
        onSubmit={unlockCourse}
        password={password}
        title={module.title}
      />
    );
  }

  return (
    <main className="site-shell module-page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">{BRAND_NAME}</span>
          <span className="brand-divider">/</span>
          <span className="brand-course">Antes de Pujar</span>
        </div>
        <div className="header-actions">
          <Link className="button button-secondary button-small" href={PRIVATE_ROUTE}>
            Volver al curso
          </Link>
          <a
            className="button button-secondary button-small"
            download
            href={PDF_DOWNLOAD_PATH}
            target="_blank"
          >
            Descargar PDF
          </a>
          <a
            className="button button-primary button-small"
            href={supportUrl}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp soporte
          </a>
        </div>
      </header>

      <section className="module-hero">
        <div className="content-frame module-hero-grid">
          <div className="module-hero-copy">
            <p className="section-eyebrow">Módulo {moduleIndex + 1}</p>
            <h1>{module.title}</h1>
            <p className="lead">{module.summary}</p>
          </div>
          <aside className="module-meta-card">
            <p className="eyebrow-label">Duración estimada</p>
            <strong>{module.duration}</strong>
            <ul className="inline-list">
              {module.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame module-content-grid">
          <div className="module-longform">
            <ModuleVideoBlock module={module} />
            {module.sections.map((section) => (
              <article className="module-section-card" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="inline-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.callout ? (
                  <ContentBlock
                    label={section.callout.label}
                    text={section.callout.text}
                    tone={section.callout.tone}
                  />
                ) : null}
                {section.alert ? (
                  <ContentBlock
                    label={section.alert.label}
                    text={section.alert.text}
                    tone={section.alert.tone}
                  />
                ) : null}
                {section.example ? (
                  <ContentBlock
                    label={section.example.title}
                    text={section.example.text}
                    tone="example"
                  />
                ) : null}
              </article>
            ))}
          </div>

          <aside className="module-sidebar">
            <div className="module-sticky-card">
              <p className="eyebrow-label">Frase importante</p>
              <blockquote>{module.quote}</blockquote>
            </div>
            <div className="module-sticky-card">
              <p className="eyebrow-label">Mini checklist del módulo</p>
              <ul className="inline-list">
                {module.miniChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block module-footer-block">
        <div className="content-frame module-footer-card">
          <div>
            <p className="eyebrow-label">Estado del módulo</p>
            <strong>{isCompleted ? "Completado" : "Pendiente"}</strong>
          </div>
          <div className="module-footer-actions">
            <button
              className={`button ${isCompleted ? "button-secondary" : "button-primary"}`}
              onClick={handleToggleComplete}
              type="button"
            >
              {isCompleted ? "Marcar como pendiente" : "Marcar módulo como completado"}
            </button>
            <Link className="button button-secondary" href={PRIVATE_ROUTE}>
              Volver al curso
            </Link>
            {previousModule ? (
              <Link className="button button-secondary" href={getModulePath(previousModule.slug)}>
                Módulo anterior
              </Link>
            ) : null}
            {nextModule ? (
              <Link className="button button-primary" href={getModulePath(nextModule.slug)}>
                Siguiente módulo
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
