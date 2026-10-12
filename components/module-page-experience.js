"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseImageBlock } from "@/components/course-image-block";
import { CourseLearningVisual } from "@/components/course-learning-visuals";
import { CourseTopbar } from "@/components/course-topbar";
import { ModuleVideoModal } from "@/components/module-video-modal";
import { courseModules, courseSections, getModulePath } from "@/lib/course-content";
import {
  loadCompletedModules,
  normalizeCompletedModules,
  saveCompletedModules,
  toggleCompletedModule
} from "@/lib/course-state";
import {
  PRIVATE_ROUTE,
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
  const videos = module.videos?.length
    ? module.videos
    : module.video
      ? [module.video]
      : [];

  if (!videos.length) return null;

  return (
    <section className="module-section-card module-video-section">
      <header className="module-section-heading">
        <p>Contenido audiovisual</p>
        <h2>{videos.length > 1 ? "Vídeos del módulo" : "Vídeo del módulo"}</h2>
      </header>
      <div className="module-video-list">
        {videos.map((video, index) => (
          <ModuleVideoModal
            description={video.description}
            duration={video.duration}
            key={video.youtubeId || video.videoUrl || `${module.id}-video-${index}`}
            status={video.status}
            title={video.title}
            videoUrl={video.videoUrl}
            youtubeId={video.youtubeId}
          />
        ))}
      </div>
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

export function ModulePageExperience({ module, viewer }) {
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
  const tone = courseSection?.id || "final";
  const isCompleted = useMemo(
    () => completedModules.includes(module.id),
    [completedModules, module.id]
  );

  function handleToggleComplete() {
    setCompletedModules((current) => toggleCompletedModule(module.id, current));
  }

  return (
    <main className={`sp sp-course sp-module is-${tone} module-page-shell course-module-page`}>
      <CourseTopbar back={{ href: PRIVATE_ROUTE, label: "Todos los módulos" }} viewer={viewer} />

      <section className="sp-mhero">
        <div className="sp-frame sp-mhero-grid">
          <div className="sp-mhero-copy">
            <p className="sp-mhero-crumb">
              <Link href={PRIVATE_ROUTE}>{courseSection ? `Bloque ${Number(courseSection.number)}: ${courseSection.title}` : "Checklist final"}</Link>
            </p>
            <div className="sp-mhero-title">
              <span className="sp-mhero-num">{String(moduleIndex + 1).padStart(2, "0")}</span>
              <h1>{module.title}</h1>
            </div>
            <p className="sp-mhero-lead">{module.summary}</p>
            <p className="sp-mhero-meta">
              {module.duration} de lectura, {module.learning.length} objetivos
              {isCompleted ? ". Completado." : "."}
            </p>
          </div>

          <aside className="sp-mhero-goals">
            <h2>Al terminar sabrás</h2>
            <ul>
              {module.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
        {courseSection?.independenceNote ? (
          <div className="sp-frame">
            <p className="sp-mhero-note">{courseSection.independenceNote}</p>
          </div>
        ) : null}
      </section>

      <section className="sp-mbody">
        <div className="sp-frame module-content-grid sp-mbody-grid">
          <div className="module-longform">
            <ModuleVideoBlock module={module} />
            {module.sections.map((section, sectionIndex) => (
              <article className="module-section-card" key={`${section.title}-${sectionIndex}`}>
                <header className="module-section-heading">
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

          <aside className="module-sidebar sp-mside">
            <div className="sp-mside-card sp-mside-quote">
              <h2>Para recordar</h2>
              <blockquote>{module.quote}</blockquote>
            </div>
            <div className="sp-mside-card">
              <h2>Checklist del módulo</h2>
              <ul>
                {module.miniChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={`sp-mside-card sp-mside-state${isCompleted ? " is-done" : ""}`}>
              <h2>{isCompleted ? "Módulo completado" : "¿Terminado?"}</h2>
              <button
                className={`sp-btn sp-btn-block ${isCompleted ? "sp-btn-line" : "sp-btn-primary"}`}
                disabled={!ready}
                onClick={handleToggleComplete}
                type="button"
              >
                {isCompleted ? "Marcar como pendiente" : "Marcar como completado"}
              </button>
              <a className="sp-mside-help" href={supportUrl} rel="noreferrer" target="_blank">
                Preguntar una duda de este módulo
              </a>
            </div>
          </aside>
        </div>
      </section>

      <nav className="sp-mnav" aria-label="Navegación entre módulos">
        <div className="sp-frame sp-mnav-grid">
          {previousModule ? (
            <Link className="sp-mnav-link is-prev" href={getModulePath(previousModule.slug)}>
              <span>Anterior</span>
              <strong>{previousModule.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          <p className="sp-mnav-count">Módulo {moduleIndex + 1} de {courseModules.length}</p>
          {nextModule ? (
            <Link className="sp-mnav-link is-next" href={getModulePath(nextModule.slug)}>
              <span>Siguiente</span>
              <strong>{nextModule.title}</strong>
            </Link>
          ) : (
            <Link className="sp-mnav-link is-next" href={PRIVATE_ROUTE}>
              <span>Has llegado al final</span>
              <strong>Volver al curso</strong>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
