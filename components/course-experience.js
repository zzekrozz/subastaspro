"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/case-study-card";
import { CourseAccessGate } from "@/components/course-access-gate";
import { caseStudies, courseModules, getModulePath } from "@/lib/course-content";
import {
  hasStoredCourseAccess,
  loadCompletedModules,
  toggleCompletedModule
} from "@/lib/course-state";
import {
  BRAND_NAME,
  PDF_DOWNLOAD_PATH,
  PRINT_ROUTE,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const courseSections = [
  {
    id: "subastas",
    label: "Bloque 01",
    title: "Sobre las subastas",
    description:
      "Entiende cómo funcionan las subastas profesionales, qué requisitos necesitas y en qué se diferencian de una compra tradicional.",
    moduleNumbers: [1, 2]
  },
  {
    id: "auto1",
    label: "Bloque 02",
    title: "Auto1",
    description:
      "Aprende a buscar, filtrar, analizar y recoger vehículos dentro de Auto1 con un proceso claro y práctico.",
    moduleNumbers: [3, 4, 5, 6]
  },
  {
    id: "copart",
    label: "Bloque 03",
    title: "Copart",
    description:
      "Domina las pujas, fichas, daños, documentación, pagos y recogida de vehículos comprados en Copart.",
    moduleNumbers: [7, 8, 9, 10, 11]
  }
];

const categorizedModuleNumbers = new Set(
  courseSections.flatMap((section) => section.moduleNumbers)
);

export function CourseExperience() {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const [ready, setReady] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    setHasAccess(hasStoredCourseAccess());
    setCompletedModules(loadCompletedModules());
    setReady(true);
  }, []);

  const moduleDone = completedModules.length;
  const overallProgress = useMemo(() => {
    return Math.round((moduleDone / courseModules.length) * 100);
  }, [moduleDone]);

  function toggleModule(id) {
    setCompletedModules((current) => toggleCompletedModule(id, current));
  }

  function renderModuleCard(module, moduleNumber) {
    const done = completedModules.includes(module.id);

    return (
      <article
        className={`module-card module-card-compact ${done ? "done" : ""}`}
        id={moduleNumber === 1 ? "module-1-anchor" : undefined}
        key={module.id}
      >
        <div className="module-card-summary">
          <div>
            <p className="module-index">Módulo {moduleNumber}</p>
            <h3>{module.title}</h3>
            <p>{module.summary}</p>
          </div>
          <div className="module-card-meta">
            <span className="pill">{done ? "Completado" : "Pendiente"}</span>
            <span className="module-duration">{module.duration}</span>
          </div>
        </div>
        <div className="module-card-actions">
          <Link className="button button-secondary" href={getModulePath(module.slug)}>
            Entrar al módulo
          </Link>
          <button
            className={`button ${done ? "button-secondary" : "button-primary"}`}
            onClick={() => toggleModule(module.id)}
            type="button"
          >
            {done ? "Marcar como pendiente" : "Marcar como completado"}
          </button>
        </div>
      </article>
    );
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando curso...</main>;
  }

  if (!hasAccess) {
    return (
      <CourseAccessGate
        description="Introduce el correo utilizado durante la compra y tu código personal de acceso."
        onAccessGranted={() => setHasAccess(true)}
        title="Área privada del curso"
      />
    );
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">{BRAND_NAME}</span>
          <span className="brand-divider">/</span>
          <span className="brand-course">Antes de Pujar</span>
        </div>
        <div className="header-actions">
          <a
            className="button button-secondary button-small"
            download
            href={PDF_DOWNLOAD_PATH}
            target="_blank"
          >
            Descargar PDF
          </a>
          <a className="button button-secondary button-small" href={PRINT_ROUTE}>
            Ver checklist final
          </a>
          <a
            className="button button-primary button-small"
            href={supportUrl}
            rel="noreferrer"
            target="_blank"
          >
            Soporte WhatsApp
          </a>
        </div>
      </header>

      <section className="course-hero">
        <div className="content-frame">
          <div className="dashboard-card">
            <div className="dashboard-copy">
              <p className="section-eyebrow">Dashboard del curso</p>
              <h1>Bienvenido al curso Antes de Pujar</h1>
              <p>
                Este curso está pensado para que entiendas cómo funcionan las subastas
                antes de meter dinero. La idea no es distraerte con mini-apps, sino
                darte un proceso claro para revisar fichas, detectar riesgos, preparar
                pujas y organizar recogidas con más criterio.
              </p>
            </div>
            <div className="dashboard-actions">
              <Link className="button button-primary" href={getModulePath(courseModules[0].slug)}>
                Empezar módulo 1
              </Link>
              <a className="button button-secondary" href={PRINT_ROUTE}>
                Abrir checklist final
              </a>
              <a
                className="button button-secondary"
                href={supportUrl}
                rel="noreferrer"
                target="_blank"
              >
                Resolver duda por WhatsApp
              </a>
            </div>
          </div>

          <div className="progress-card">
            <div>
              <p className="eyebrow-label">Progreso guardado en local</p>
              <strong>{overallProgress}% completado</strong>
            </div>
            <p>
              {moduleDone}/{courseModules.length} módulos marcados. Avanza a tu ritmo y
              vuelve a cualquier módulo cuando quieras repasar una ficha, una puja o una
              recogida.
            </p>
            <div className="progress-bar">
              <span style={{ width: `${overallProgress}%` }} />
            </div>
            <p>
              El progreso solo afecta al seguimiento dentro del curso. Los módulos, los
              vídeos y el PDF siguen disponibles siempre que mantengas el acceso.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <article className="surface-card course-guide-card">
            <div className="section-heading compact">
              <p className="section-eyebrow">Cómo usar este curso</p>
              <h2>Una forma simple de sacarle partido de verdad</h2>
              <p className="section-description">
                Lee el módulo, mira la explicación en vídeo cuando esté disponible y
                aplica la checklist final antes de pujar. La idea no es memorizar
                teoría, sino aprender un proceso repetible para filtrar riesgos.
              </p>
            </div>

            <div className="course-guide-steps">
              <article className="surface-card course-guide-step">
                <p className="module-index">Paso 1</p>
                <h3>Lee el módulo.</h3>
              </article>
              <article className="surface-card course-guide-step">
                <p className="module-index">Paso 2</p>
                <h3>Mira el vídeo explicativo.</h3>
              </article>
              <article className="surface-card course-guide-step">
                <p className="module-index">Paso 3</p>
                <h3>Aplica el criterio en una ficha real.</h3>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <div className="section-heading">
            <p className="section-eyebrow">Módulos del curso</p>
            <h2>Ruta del curso por bloques</h2>
            <p className="section-description">
              Avanza por cada bloque en orden: primero entiende la lógica de la subasta,
              después trabaja Auto1 y termina con la operativa de Copart.
            </p>
          </div>
          <div className="course-section-stack">
            {courseSections.map((section) => {
              const sectionModules = section.moduleNumbers
                .map((moduleNumber) => ({
                  module: courseModules[moduleNumber - 1],
                  moduleNumber
                }))
                .filter(({ module }) => Boolean(module));

              return (
                <section className="course-module-section" key={section.id}>
                  <div className="course-module-section-header">
                    <div>
                      <p className="course-module-section-label">{section.label}</p>
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                    <span className="course-module-section-count">
                      {sectionModules.length} módulos
                    </span>
                  </div>
                  <div className="module-stack">
                    {sectionModules.map(({ module, moduleNumber }) =>
                      renderModuleCard(module, moduleNumber)
                    )}
                  </div>
                </section>
              );
            })}

            {courseModules
              .map((module, index) => ({
                module,
                moduleNumber: index + 1
              }))
              .filter(({ moduleNumber }) => !categorizedModuleNumbers.has(moduleNumber))
              .map(({ module, moduleNumber }) => renderModuleCard(module, moduleNumber))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <div className="section-heading">
            <p className="section-eyebrow">Casos reales</p>
            <h2>Referencias preparadas para ampliar el curso</h2>
            <p className="section-description">
              Bloques listos para documentar operaciones reales de Auto1 y Copart sin
              cambiar el diseño base del área privada.
            </p>
          </div>
          <div className="module-stack">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard caseStudy={caseStudy} key={caseStudy.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
