"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseImageBlock } from "@/components/course-image-block";
import { CourseLogoutButton } from "@/components/course-logout-button";
import { ModuleVideoModal } from "@/components/module-video-modal";
import { courseModules, getModulePath } from "@/lib/course-content";
import {
  BRAND_NAME,
  PDF_DOWNLOAD_PATH,
  PRIVATE_ROUTE,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";
import {
  loadCompletedModules,
  saveCompletedModules,
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
  if (!module.video) return null;

  return (
    <section className="module-section-card">
      <h2>Vídeo del módulo</h2>
      <ModuleVideoModal
        description={module.video.description}
        duration={module.video.duration}
        status={module.video.status}
        title={module.video.title}
        videoUrl={module.video.videoUrl}
        youtubeId={module.video.youtubeId}
      />
    </section>
  );
}

function SectionImagesBlock({ images }) {
  if (!images?.length) return null;

  const countClass =
    images.length === 1 ? "count-1" : images.length === 2 ? "count-2" : "count-3-plus";

  return (
    <div className={`course-image-grid ${countClass}`}>
      {images.map((image) => (
        <CourseImageBlock
          alt={image.alt}
          blurSensitive={image.blurSensitive}
          caption={image.caption}
          key={`${image.src}-${image.alt}`}
          label={image.label}
          layout={image.layout}
          src={image.src}
        />
      ))}
    </div>
  );
}

export function ModulePageExperience({ module }) {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const [ready, setReady] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
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

  function handleToggleComplete() {
    setCompletedModules((current) => toggleCompletedModule(module.id, current));
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando módulo...</main>;
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
          <CourseLogoutButton />
        </div>
      </header>

      <section className="module-hero">
        <div className="content-frame module-hero-grid">
          <div className="module-hero-copy">
            <p className="section-eyebrow">Módulo {moduleIndex + 1}</p>
            <h1>{module.title}</h1>
            <p className="lead">{module.summary}</p>

            <div className="module-hero-chips">
              <span className="pill">Duración: {module.duration}</span>
              <span className="pill">Objetivos: {module.learning.length}</span>
              <span className="pill">Nivel: práctico</span>
            </div>

            <div className="module-meta-card module-learning-card">
              <p className="eyebrow-label">En este módulo aprenderás</p>
              <ul className="inline-list module-learning-list">
                {module.learning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="module-meta-card module-hero-sidecard">
            <p className="eyebrow-label">Resumen rápido</p>
            <strong>{module.duration}</strong>
            <p className="module-sidecard-copy">
              {module.learning.length} objetivos clave para avanzar con criterio y sin ir a
              ciegas.
            </p>
            <ul className="inline-list module-sidecard-list">
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
                <SectionImagesBlock images={section.images} />
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
