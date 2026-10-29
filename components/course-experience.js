"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CourseTopbar } from "@/components/course-topbar";
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
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const moduleIds = courseModules.map((module) => module.id);

function sectionFor(moduleId) {
  return courseSections.find((section) => section.moduleIds.includes(moduleId));
}

function toneFor(moduleId) {
  return sectionFor(moduleId)?.id || "final";
}

function numberFor(module) {
  return String(courseModules.indexOf(module) + 1).padStart(2, "0");
}

function modulesOf(section) {
  return section.moduleIds
    .map((id) => courseModules.find((module) => module.id === id))
    .filter(Boolean);
}

function ModuleRow({ done, module, onToggle }) {
  return (
    <li className={`sp-mrow${done ? " is-done" : ""}`}>
      <span className="sp-mrow-num">{numberFor(module)}</span>
      <div className="sp-mrow-copy">
        <Link className="sp-mrow-title" href={getModulePath(module.slug)}>
          {module.title}
        </Link>
        <p>{module.summary}</p>
      </div>
      <div className="sp-mrow-meta">
        <small>{module.duration}</small>
        <button
          aria-label={done ? `Marcar ${module.title} como no visto` : `Marcar ${module.title} como completado`}
          aria-pressed={done}
          className="sp-check"
          onClick={() => onToggle(module.id)}
          type="button"
        >
          <span aria-hidden="true" />
          {done ? "Hecho" : "Por ver"}
        </button>
      </div>
    </li>
  );
}

export function CourseExperience({ viewer }) {
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
  const percentage = Math.round((completedCount / courseModules.length) * 100);
  const continueModule = useMemo(
    () => getNextIncompleteModule(courseModules, completedModules) || courseModules.at(-1),
    [completedModules]
  );
  const continueSection = sectionFor(continueModule.id);
  const finalModule = courseModules.find((module) => module.id === finalCourseModuleId);
  const firstName = viewer?.name?.split(" ")[0] || "";
  const allDone = completedCount === courseModules.length;

  function toggleModule(id) {
    setCompletedModules((current) => toggleCompletedModule(id, current));
  }

  return (
    <main className="sp sp-course">
      <CourseTopbar viewer={viewer} />

      <section className="sp-dash-hero">
        <div className="sp-frame sp-dash-grid">
          <div className="sp-dash-intro">
            <h1>{firstName ? `Hola, ${firstName}.` : "Tu curso."}</h1>
            <p>
              {!ready
                ? "Cargando tu progreso…"
                : allDone
                  ? "Has completado los 16 módulos. Usa el checklist final en cada operación."
                  : completedCount
                    ? `Llevas ${completedCount} de ${courseModules.length} módulos. Sigue donde lo dejaste.`
                    : "Empieza por los fundamentos: son los que te ahorran los errores caros."}
            </p>

            <div className="sp-progress" aria-label={`${completedCount} de ${courseModules.length} módulos completados`}>
              <div className="sp-progress-head">
                <strong>{percentage}%</strong>
                <span>{completedCount}/{courseModules.length} módulos</span>
              </div>
              <ol className="sp-progress-ticks">
                {courseModules.map((module) => (
                  <li
                    className={`is-${toneFor(module.id)}${completedModules.includes(module.id) ? " is-done" : ""}${
                      module.id === continueModule.id && !allDone ? " is-next" : ""
                    }`}
                    key={module.id}
                    title={`${numberFor(module)} · ${module.title}`}
                  />
                ))}
              </ol>
              <ul className="sp-progress-legend">
                {courseSections.map((section) => (
                  <li className={`is-${section.id}`} key={section.id}>{section.title}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link className={`sp-next is-${continueSection?.id || "final"}`} href={getModulePath(continueModule.slug)}>
            <div className="sp-next-head">
              <span>{allDone ? "Repasar" : completedCount ? "Siguiente módulo" : "Primer módulo"}</span>
              <span>{continueSection ? continueSection.title : "Checklist final"}</span>
            </div>
            <strong className="sp-next-num">{numberFor(continueModule)}</strong>
            <h2>{continueModule.title}</h2>
            <p>{continueModule.summary}</p>
            <div className="sp-next-foot">
              <span>{continueModule.duration}</span>
              <span className="sp-btn sp-btn-primary sp-btn-sm">
                {completedCount ? "Continuar" : "Empezar"}
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="sp-dash-method">
        <div className="sp-frame">
          <h2>El orden de trabajo en cada operación</h2>
          <ol className="sp-method is-dark">
            {courseMethodSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sp-curriculum">
        <div className="sp-frame">
          {courseSections.map((section) => {
            const modules = modulesOf(section);
            const done = modules.filter((module) => completedModules.includes(module.id)).length;

            return (
              <section className={`sp-cblock is-${section.id}`} key={section.id}>
                <header className="sp-cblock-head">
                  <div>
                    <span className="sp-cblock-kicker">Bloque {Number(section.number)}</span>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                  <div className="sp-cblock-count" aria-label={`${done} de ${modules.length} completados`}>
                    <strong>{done}/{modules.length}</strong>
                    <span className="sp-cblock-bar" aria-hidden="true">
                      <i style={{ width: `${Math.round((done / modules.length) * 100)}%` }} />
                    </span>
                  </div>
                </header>
                {section.independenceNote ? (
                  <p className="sp-cblock-note">{section.independenceNote}</p>
                ) : null}
                <ol className="sp-mlist">
                  {modules.map((module) => (
                    <ModuleRow
                      done={completedModules.includes(module.id)}
                      key={module.id}
                      module={module}
                      onToggle={toggleModule}
                    />
                  ))}
                </ol>
              </section>
            );
          })}

          {finalModule ? (
            <section className="sp-cblock is-final">
              <header className="sp-cblock-head">
                <div>
                  <span className="sp-cblock-kicker">Para cada operación</span>
                  <h2>Checklist final</h2>
                  <p>
                    Ficha, coste, puja, papeles, pago y recogida en una sola hoja. Ábrela antes
                    de cada compra.
                  </p>
                </div>
                <div className="sp-cblock-links">
                  <a className="sp-btn sp-btn-line sp-btn-sm" href={PRINT_ROUTE}>
                    Versión imprimible
                  </a>
                  <a className="sp-btn sp-btn-ghost sp-btn-sm" download href={PDF_DOWNLOAD_PATH}>
                    Descargar PDF
                  </a>
                </div>
              </header>
              <ol className="sp-mlist">
                <ModuleRow
                  done={completedModules.includes(finalModule.id)}
                  module={finalModule}
                  onToggle={toggleModule}
                />
              </ol>
            </section>
          ) : null}
        </div>
      </section>

      <footer className="sp-support">
        <div className="sp-frame sp-support-inner">
          <div>
            <h2>¿Una duda concreta?</h2>
            <p>Escríbeme por WhatsApp indicando el módulo y el punto exacto que estás revisando.</p>
          </div>
          <a className="sp-btn sp-btn-primary" href={supportUrl} rel="noreferrer" target="_blank">
            Abrir WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
