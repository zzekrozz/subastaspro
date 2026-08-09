"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseLogoutButton } from "@/components/course-logout-button";
import {
  courseMethodSteps,
  courseModules,
  courseSections,
  finalCourseModuleId,
  getModulePath
} from "@/lib/course-content";
import {
  getNextIncompleteModule,
  loadCompletedModules,
  normalizeCompletedModules,
  saveCompletedModules,
  toggleCompletedModule
} from "@/lib/course-state";
import {
  PDF_DOWNLOAD_PATH,
  PRINT_ROUTE,
  SITE_NAME,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const moduleIds = courseModules.map((module) => module.id);

function SectionProgress({ completedModules, modules }) {
  const completed = modules.filter((module) => completedModules.includes(module.id)).length;
  const percentage = Math.round((completed / modules.length) * 100);

  return (
    <div className="course-block-progress" aria-label={`${completed} de ${modules.length} módulos completados`}>
      <div>
        <strong>{completed}/{modules.length}</strong>
        <span>{percentage}%</span>
      </div>
      <div className="course-progress-track" aria-hidden="true">
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function CourseModuleCard({ completedModules, module, moduleNumber, onToggle }) {
  const done = completedModules.includes(module.id);

  return (
    <article className={`course-module-row ${done ? "is-complete" : ""}`}>
      <div className="course-module-number">
        <span>{String(moduleNumber).padStart(2, "0")}</span>
        <small>{module.duration}</small>
      </div>
      <div className="course-module-copy">
        <div className="course-module-title-line">
          <h3>{module.title}</h3>
          <span className={`course-status ${done ? "is-complete" : ""}`}>
            {done ? "Completado" : "Pendiente"}
          </span>
        </div>
        <p>{module.summary}</p>
        <div className="course-module-actions">
          <Link className="button button-primary" href={getModulePath(module.slug)}>
            Entrar al módulo
          </Link>
          <button className="button button-secondary" onClick={() => onToggle(module.id)} type="button">
            {done ? "Marcar como pendiente" : "Marcar como completado"}
          </button>
        </div>
      </div>
    </article>
  );
}

export function CourseExperience() {
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

  const completedCount = completedModules.length;
  const overallProgress = Math.round((completedCount / courseModules.length) * 100);
  const continueModule = useMemo(
    () => getNextIncompleteModule(courseModules, completedModules) || courseModules.at(-1),
    [completedModules]
  );
  const finalModule = courseModules.find((module) => module.id === finalCourseModuleId);

  function toggleModule(id) {
    setCompletedModules((current) => toggleCompletedModule(id, current));
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando SubastasPro...</main>;
  }

  return (
    <main className="site-shell course-dashboard-shell">
      <header className="topbar course-topbar">
        <Link className="course-brand" href="/curso" aria-label="Ir al dashboard de SubastasPro">
          <span>SP</span>
          <div>
            <strong>{SITE_NAME}</strong>
            <small>Área privada</small>
          </div>
        </Link>
        <div className="header-actions course-header-actions">
          <a className="button button-secondary button-small" download href={PDF_DOWNLOAD_PATH}>
            Descargar checklist
          </a>
          <a className="button button-primary button-small" href={supportUrl} rel="noreferrer" target="_blank">
            Soporte WhatsApp
          </a>
          <CourseLogoutButton />
        </div>
      </header>

      <section className="course-dashboard-hero">
        <div className="content-frame course-dashboard-hero-grid">
          <div className="course-dashboard-intro">
            <p className="course-kicker">Formación privada · Auto1 + Copart Alemania</p>
            <h1>SubastasPro</h1>
            <p className="course-dashboard-lead">
              Aprende a buscar, analizar y completar una operación con un proceso claro,
              desde la primera ficha hasta la revisión en campa.
            </p>
            <div className="course-dashboard-actions">
              <Link className="button button-primary" href={getModulePath(continueModule.slug)}>
                {completedCount ? "Continuar el curso" : "Empezar el curso"}
              </Link>
              <a className="button button-secondary" href={PRINT_ROUTE}>
                Abrir checklist final
              </a>
            </div>
            <p className="course-next-module">
              Siguiente: <strong>{continueModule.title}</strong>
            </p>
          </div>

          <aside className="course-overall-progress">
            <div className="course-progress-dial" style={{ "--course-progress": `${overallProgress * 3.6}deg` }}>
              <div>
                <strong>{overallProgress}%</strong>
                <span>completado</span>
              </div>
            </div>
            <div>
              <p>Progreso del curso</p>
              <strong>{completedCount} de {courseModules.length} módulos</strong>
              <span>Guardado en este navegador con la misma clave local existente.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="course-method-band">
        <div className="content-frame">
          <header className="course-band-heading">
            <div>
              <p className="course-kicker">Hilo conductor</p>
              <h2>Método SubastasPro</h2>
            </div>
            <p>Un orden de trabajo para decidir con criterio, no una promesa de resultado.</p>
          </header>
          <ol className="course-method-steps">
            {courseMethodSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="course-block-overview section-block">
        <div className="content-frame">
          <header className="course-section-heading">
            <p className="course-kicker">Ruta completa</p>
            <h2>Tres bloques, una forma de trabajar</h2>
            <p>Empieza por los fundamentos, aplica el criterio en AUTO1 y entra en Copart con una gestión de riesgo más exigente.</p>
          </header>
          <div className="course-block-grid">
            {courseSections.map((section) => {
              const sectionModules = section.moduleIds
                .map((id) => courseModules.find((module) => module.id === id))
                .filter(Boolean);

              return (
                <article className={`course-block-card is-${section.id}`} key={section.id}>
                  <div className="course-block-card-top">
                    <span>{section.number}</span>
                    <small>{section.code}</small>
                  </div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <SectionProgress completedModules={completedModules} modules={sectionModules} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="course-curriculum section-block">
        <div className="content-frame course-curriculum-inner">
          <header className="course-section-heading">
            <p className="course-kicker">Contenido</p>
            <h2>Ruta de aprendizaje</h2>
            <p>Los módulos mantienen su progreso individual. Puedes avanzar en orden o volver directamente a una consulta concreta.</p>
          </header>

          <div className="course-section-stack">
            {courseSections.map((section) => {
              const sectionModules = section.moduleIds
                .map((id) => courseModules.find((module) => module.id === id))
                .filter(Boolean);

              return (
                <section className={`course-curriculum-block is-${section.id}`} key={section.id}>
                  <header className="course-curriculum-header">
                    <div className="course-curriculum-code">
                      <span>{section.number}</span>
                      <small>{section.code}</small>
                    </div>
                    <div>
                      <p>Bloque {section.number}</p>
                      <h2>{section.title}</h2>
                      <span>{section.description}</span>
                    </div>
                    <div className="course-curriculum-count">
                      <strong>{sectionModules.length}</strong>
                      <span>módulos</span>
                    </div>
                  </header>
                  {section.independenceNote ? <p className="course-platform-notice">{section.independenceNote}</p> : null}
                  <div className="course-module-list">
                    {sectionModules.map((module) => (
                      <CourseModuleCard
                        completedModules={completedModules}
                        key={module.id}
                        module={module}
                        moduleNumber={courseModules.indexOf(module) + 1}
                        onToggle={toggleModule}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {finalModule ? (
        <section className="course-final-resource section-block">
          <div className="content-frame course-final-resource-grid">
            <div>
              <p className="course-kicker">Aplicación práctica</p>
              <h2>Convierte el contenido en una rutina</h2>
              <p>El checklist final reúne ficha, coste, puja, documentación, pago y recogida para volver a él en cada operación.</p>
              <div className="course-dashboard-actions">
                <Link className="button button-primary" href={getModulePath(finalModule.slug)}>
                  Abrir módulo final
                </Link>
                <a className="button button-secondary" href={PRINT_ROUTE}>
                  Versión imprimible
                </a>
              </div>
            </div>
            <CourseModuleCard
              completedModules={completedModules}
              module={finalModule}
              moduleNumber={courseModules.indexOf(finalModule) + 1}
              onToggle={toggleModule}
            />
          </div>
        </section>
      ) : null}

      <footer className="course-support-footer">
        <div className="content-frame">
          <div>
            <p className="course-kicker">Soporte</p>
            <h2>¿Una duda concreta del contenido?</h2>
            <p>Escribe indicando el módulo y el punto exacto que estás revisando.</p>
          </div>
          <a className="button button-primary" href={supportUrl} rel="noreferrer" target="_blank">
            Abrir WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
