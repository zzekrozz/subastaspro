"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseImageBlock } from "@/components/course-image-block";
import { CourseLearningVisual } from "@/components/course-learning-visuals";
import { CourseLogoutButton } from "@/components/course-logout-button";
import { ModuleVideoModal } from "@/components/module-video-modal";
import { courseModules, courseSections, getModulePath } from "@/lib/course-content";
import {
  loadCompletedModules,
  normalizeCompletedModules,
  saveCompletedModules,
  toggleCompletedModule
} from "@/lib/course-state";
import {
  PDF_DOWNLOAD_PATH,
  PRIVATE_ROUTE,
  SITE_NAME,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const moduleIds = courseModules.map((item) => item.id);

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
    <section className="module-section-card module-video-section">
      <header className="module-section-heading">
        <p>Contenido audiovisual</p>
        <h2>Vídeo del módulo</h2>
      </header>
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

  const countClass = images.length === 1 ? "count-1" : images.length === 2 ? "count-2" : "count-3-plus";

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

function SectionVisuals({ visuals }) {
  if (!visuals?.length) return null;

  return (
    <div className="module-visual-stack">
      {visuals.map((visual, index) => (
        <CourseLearningVisual key={`${visual.type}-${visual.title}-${index}`} visual={visual} />
      ))}
    </div>
  );
}

export function ModulePageExperience({ module }) {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const [ready, setReady] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    setCompletedModules(normalizeCompletedModules(loadCompletedModules(), moduleIds));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCompletedModules(completedModules);
  }, [completedModules, ready]);

  const moduleIndex = courseModules.findIndex((item) => item.id === module.id);
  const previousModule = moduleIndex > 0 ? courseModules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < courseModules.length - 1 ? courseModules[moduleIndex + 1] : null;
  const courseSection = courseSections.find((section) => section.moduleIds.includes(module.id));
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
    <main className="site-shell module-page-shell course-module-page">
      <header className="topbar course-topbar">
        <Link className="course-brand" href={PRIVATE_ROUTE} aria-label="Volver al dashboard de SubastasPro">
          <span>SP</span>
          <div>
            <strong>{SITE_NAME}</strong>
            <small>Área privada</small>
          </div>
        </Link>
        <div className="header-actions course-header-actions">
          <Link className="button button-secondary button-small" href={PRIVATE_ROUTE}>
            Volver al curso
          </Link>
          <a className="button button-secondary button-small" download href={PDF_DOWNLOAD_PATH}>
            Checklist PDF
          </a>
          <a className="button button-primary button-small" href={supportUrl} rel="noreferrer" target="_blank">
            Soporte
          </a>
          <CourseLogoutButton />
        </div>
      </header>

      <section className={`module-hero ${module.platform ? `is-${module.platform.toLowerCase()}` : ""}`}>
        <div className="content-frame module-hero-grid">
          <div className="module-hero-copy">
            <div className="module-breadcrumb">
              <span>{courseSection ? `Bloque ${courseSection.number}` : "Aplicación"}</span>
              <i aria-hidden="true" />
              <span>Módulo {String(moduleIndex + 1).padStart(2, "0")}</span>
            </div>
            <h1>{module.title}</h1>
            <p className="lead">{module.summary}</p>
            <div className="module-hero-chips">
              <span className="pill">{module.duration}</span>
              <span className="pill">{module.learning.length} objetivos</span>
              {module.platform ? <span className="pill">{module.platform}</span> : null}
            </div>
          </div>

          <aside className="module-objectives-panel">
            <p className="eyebrow-label">En este módulo</p>
            <ul>
              {module.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
        {courseSection?.independenceNote ? (
          <div className="content-frame">
            <p className="module-platform-notice">{courseSection.independenceNote}</p>
          </div>
        ) : null}
      </section>

      <section className="section-block module-reading-section">
        <div className="content-frame module-content-grid">
          <div className="module-longform">
            <ModuleVideoBlock module={module} />
            {module.sections.map((section, sectionIndex) => (
              <article className="module-section-card" key={`${section.title}-${sectionIndex}`}>
                <header className="module-section-heading">
                  <p>{String(sectionIndex + 1).padStart(2, "0")} · Contenido</p>
                  <h2>{section.title}</h2>
                </header>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? (
                  <ul className="inline-list module-bullet-list">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
                <SectionVisuals visuals={section.visuals} />
                {section.callout ? (
                  <ContentBlock label={section.callout.label} text={section.callout.text} tone={section.callout.tone} />
                ) : null}
                {section.alert ? (
                  <ContentBlock label={section.alert.label} text={section.alert.text} tone={section.alert.tone} />
                ) : null}
                {section.example ? (
                  <ContentBlock label={section.example.title} text={section.example.text} tone="example" />
                ) : null}
                <SectionImagesBlock images={section.images} />
              </article>
            ))}
          </div>

          <aside className="module-sidebar">
            <div className="module-sticky-card module-quote-card">
              <p className="eyebrow-label">Idea para recordar</p>
              <blockquote>{module.quote}</blockquote>
            </div>
            <div className="module-sticky-card">
              <p className="eyebrow-label">Checklist del módulo</p>
              <ul className="inline-list module-sidebar-checklist">
                {module.miniChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={`module-sticky-card module-state-card ${isCompleted ? "is-complete" : ""}`}>
              <p className="eyebrow-label">Tu progreso</p>
              <strong>{isCompleted ? "Módulo completado" : "Módulo pendiente"}</strong>
              <button className={`button ${isCompleted ? "button-secondary" : "button-primary"}`} onClick={handleToggleComplete} type="button">
                {isCompleted ? "Marcar como pendiente" : "Marcar como completado"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block module-footer-block">
        <div className="content-frame module-footer-card">
          <div>
            <p className="eyebrow-label">Navegación</p>
            <strong>Módulo {moduleIndex + 1} de {courseModules.length}</strong>
          </div>
          <div className="module-footer-actions">
            {previousModule ? (
              <Link className="button button-secondary" href={getModulePath(previousModule.slug)}>
                Módulo anterior
              </Link>
            ) : null}
            <Link className="button button-secondary" href={PRIVATE_ROUTE}>
              Ver dashboard
            </Link>
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
