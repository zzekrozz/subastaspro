"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/case-study-card";
import { CourseAccessGate } from "@/components/course-access-gate";
import {
  auto1ChecklistItems,
  caseStudies,
  courseModules,
  getModulePath,
  pickupChecklistItems
} from "@/lib/course-content";
import {
  hasStoredCourseAccess,
  isValidCoursePassword,
  loadCompletedModules,
  loadStoredMap,
  storeCourseAccess,
  toggleCompletedModule
} from "@/lib/course-state";
import {
  BRAND_NAME,
  PDF_DOWNLOAD_PATH,
  PRINT_ROUTE,
  STORAGE_KEYS,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const defaultCalculator = {
  bidPrice: "",
  fee: "",
  transport: "",
  repair: "",
  paperwork: "",
  other: ""
};

const defaultRisk = {
  indicator: "",
  airbag: "no",
  usaDocs: "no",
  rust: "no",
  mechanical: "no",
  suspiciousPrice: "no",
  unsafeToDrive: "no",
  zbDocs: "si",
  coc: "si"
};

const defaultLimits = {
  optimum: "",
  maximum: "",
  current: ""
};

function asCurrency(value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function safeParse(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function ChecklistTool({ title, subtitle, items, state, onToggle, statusText }) {
  const checkedCount = items.filter((item) => state[item]).length;

  return (
    <section className="tool-panel">
      <div className="tool-panel-header">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="pill pill-amber">
          {checkedCount}/{items.length}
        </span>
      </div>

      <div className="checklist-stack">
        {items.map((item) => (
          <button
            className={`checklist-item ${state[item] ? "checked" : ""}`}
            key={item}
            onClick={() => onToggle(item)}
            type="button"
          >
            <span className="checkmark">{state[item] ? "OK" : ""}</span>
            <span>{item}</span>
          </button>
        ))}
      </div>

      <p className="tool-footnote">{statusText}</p>
    </section>
  );
}

function ToolToggle({ active, onClick, children }) {
  return (
    <button
      className={`tool-toggle ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function CourseExperience() {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const [ready, setReady] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [accessError, setAccessError] = useState("");
  const [activeTool, setActiveTool] = useState("checklist-auto1");
  const [completedModules, setCompletedModules] = useState([]);
  const [auto1Checklist, setAuto1Checklist] = useState({});
  const [pickupChecklist, setPickupChecklist] = useState({});
  const [calculator, setCalculator] = useState(defaultCalculator);
  const [riskInputs, setRiskInputs] = useState(defaultRisk);
  const [limits, setLimits] = useState(defaultLimits);

  useEffect(() => {
    const unlocked = hasStoredCourseAccess();
    const storedTool = window.localStorage.getItem(STORAGE_KEYS.activeTool);

    setHasAccess(unlocked);
    setAuto1Checklist(
      loadStoredMap(STORAGE_KEYS.auto1Checklist, auto1ChecklistItems)
    );
    setPickupChecklist(
      loadStoredMap(STORAGE_KEYS.pickupChecklist, pickupChecklistItems)
    );
    setCompletedModules(loadCompletedModules());
    setActiveTool(storedTool || "checklist-auto1");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEYS.auto1Checklist, JSON.stringify(auto1Checklist));
  }, [auto1Checklist, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEYS.pickupChecklist, JSON.stringify(pickupChecklist));
  }, [pickupChecklist, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(
      STORAGE_KEYS.completedModules,
      JSON.stringify(completedModules)
    );
  }, [completedModules, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEYS.activeTool, activeTool);
  }, [activeTool, ready]);

  const auto1Done = auto1ChecklistItems.filter((item) => auto1Checklist[item]).length;
  const pickupDone = pickupChecklistItems.filter((item) => pickupChecklist[item]).length;
  const moduleDone = completedModules.length;
  const auto1Percent = Math.round((auto1Done / auto1ChecklistItems.length) * 100);

  const overallProgress = useMemo(() => {
    const totalUnits = courseModules.length + 2;
    const raw =
      moduleDone +
      auto1Done / auto1ChecklistItems.length +
      pickupDone / pickupChecklistItems.length;
    return Math.round((raw / totalUnits) * 100);
  }, [auto1Done, moduleDone, pickupDone]);

  const calculatorTotal = useMemo(() => {
    return (
      safeParse(calculator.bidPrice) +
      safeParse(calculator.fee) +
      safeParse(calculator.transport) +
      safeParse(calculator.repair) +
      safeParse(calculator.paperwork) +
      safeParse(calculator.other)
    );
  }, [calculator]);

  const riskResult = useMemo(() => {
    const notes = [];
    let score = 0;

    if (riskInputs.indicator === "S") {
      score += 1;
      notes.push("La S no confirma movimiento del vehículo.");
    }

    if (riskInputs.indicator === "sin-letra") {
      score += 2;
      notes.push("Sin letra suele implicar menos certeza y más riesgo.");
    }

    if (riskInputs.airbag === "si") {
      score += 2;
      notes.push("Airbag desplegado suele elevar coste y complejidad.");
    }

    if (riskInputs.usaDocs === "si") {
      score += 1;
      notes.push("La documentación USA o sospechosa exige mucha más revisión.");
    }

    if (riskInputs.rust === "si") {
      score += 2;
      notes.push("El óxido fuerte puede esconder una reparación mucho mayor.");
    }

    if (riskInputs.mechanical === "si") {
      score += 2;
      notes.push("Daño mecánico declarado: mejor no improvisar.");
    }

    if (riskInputs.suspiciousPrice === "si") {
      score += 1;
      notes.push("Un precio demasiado bajo puede ser una trampa, no una ganga.");
    }

    if (riskInputs.unsafeToDrive === "si") {
      score += 2;
      notes.push("Si no es seguro circular, calcula transporte antes de pujar.");
    }

    if (riskInputs.zbDocs === "no") {
      score += 1;
      notes.push("Sin ZB1/ZB2 tienes menos claridad documental.");
    }

    if (riskInputs.coc === "si") {
      score = Math.max(0, score - 1);
      notes.push("El COC ayuda en homologación, pero no borra otros riesgos.");
    }

    if (score <= 2) {
      return {
        score,
        tone: "low",
        label: "Riesgo bajo/moderado, revisar igualmente",
        notes
      };
    }

    if (score <= 5) {
      return {
        score,
        tone: "medium",
        label: "Riesgo medio, solo con margen y experiencia",
        notes
      };
    }

    if (score <= 8) {
      return {
        score,
        tone: "high",
        label: "Riesgo alto, mejor evitar si estás empezando",
        notes
      };
    }

    return {
      score,
      tone: "critical",
      label: "Evitar salvo caso muy especial",
      notes
    };
  }, [riskInputs]);

  const limitResult = useMemo(() => {
    const optimum = safeParse(limits.optimum);
    const maximum = safeParse(limits.maximum);
    const current = safeParse(limits.current);

    if (!optimum || !maximum || !current) {
      return null;
    }

    if (current <= optimum) {
      return {
        tone: "low",
        title: "Zona cómoda",
        text: "La puja sigue dentro del precio óptimo."
      };
    }

    if (current <= maximum) {
      return {
        tone: "medium",
        title: "Zona emocional",
        text: "Solo seguir si lo tienes muy claro. El máximo está para protegerte, no para alcanzarlo siempre."
      };
    }

    return {
      tone: "critical",
      title: "No pujar más",
      text: "Has pasado tu límite absoluto. Sal de la puja."
    };
  }, [limits]);

  function unlockCourse() {
    if (isValidCoursePassword(password)) {
      storeCourseAccess();
      setHasAccess(true);
      setAccessError("");
      return;
    }

    setAccessError("Clave incorrecta. Revisa el mensaje de acceso.");
  }

  function toggleChecklistItem(setter, item) {
    setter((previous) => ({ ...previous, [item]: !previous[item] }));
  }

  function toggleModule(id) {
    setCompletedModules((current) => toggleCompletedModule(id, current));
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando curso...</main>;
  }

  if (!hasAccess) {
    return (
      <CourseAccessGate
        accessError={accessError}
        description="Introduce la clave simple para acceder al MVP fundador de Antes de Pujar."
        onPasswordChange={(value) => {
          setPassword(value);
          setAccessError("");
        }}
        onSubmit={unlockCourse}
        password={password}
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
                Este curso está pensado para que entiendas cómo funcionan las
                subastas antes de meter dinero. No es teoría vacía: es un proceso
                práctico para mirar fichas, detectar riesgos, preparar pujas y
                organizar recogidas.
              </p>
            </div>
            <div className="dashboard-actions">
              <Link
                className="button button-primary"
                href={getModulePath(courseModules[0].slug)}
              >
                Empezar módulo 1
              </Link>
              <button
                className="button button-secondary"
                onClick={() => setActiveTool("checklist-auto1")}
                type="button"
              >
                Abrir checklist Auto1
              </button>
              <button
                className="button button-secondary"
                onClick={() => setActiveTool("riesgo-copart")}
                type="button"
              >
                Abrir detector Copart
              </button>
              <a className="button button-secondary" href={PRINT_ROUTE}>
                Abrir versión imprimible
              </a>
            </div>
          </div>

          <div className="progress-card">
            <div>
              <p className="eyebrow-label">Progreso guardado en local</p>
              <strong>{overallProgress}% completado</strong>
            </div>
            <p>
              {moduleDone}/{courseModules.length} módulos marcados, {auto1Done}/
              {auto1ChecklistItems.length} puntos revisados en Auto1 y {pickupDone}/
              {pickupChecklistItems.length} en recogida.
            </p>
            <div className="progress-bar">
              <span style={{ width: `${overallProgress}%` }} />
            </div>
            <p>
              Checklist Auto1: {auto1Percent <= 50
                ? "Faltan puntos importantes."
                : auto1Percent <= 85
                  ? "Revisión parcial."
                  : "Ficha bastante revisada."}
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <div className="tool-toggle-row">
            <ToolToggle
              active={activeTool === "checklist-auto1"}
              onClick={() => setActiveTool("checklist-auto1")}
            >
              Checklist Auto1
            </ToolToggle>
            <ToolToggle
              active={activeTool === "checklist-recogida"}
              onClick={() => setActiveTool("checklist-recogida")}
            >
              Checklist recogida
            </ToolToggle>
            <ToolToggle
              active={activeTool === "riesgo-copart"}
              onClick={() => setActiveTool("riesgo-copart")}
            >
              Riesgo Copart
            </ToolToggle>
            <ToolToggle
              active={activeTool === "calculadora"}
              onClick={() => setActiveTool("calculadora")}
            >
              Calculadora
            </ToolToggle>
            <ToolToggle
              active={activeTool === "limites"}
              onClick={() => setActiveTool("limites")}
            >
              Óptimo vs máximo
            </ToolToggle>
          </div>

          {activeTool === "checklist-auto1" ? (
            <ChecklistTool
              items={auto1ChecklistItems}
              onToggle={(item) => toggleChecklistItem(setAuto1Checklist, item)}
              state={auto1Checklist}
              statusText={
                auto1Percent <= 50
                  ? "Faltan puntos importantes."
                  : auto1Percent <= 85
                    ? "Revisión parcial."
                    : "Ficha bastante revisada."
              }
              subtitle="Checklist persistente para analizar una ficha antes de pujar."
              title="Checklist Auto1"
            />
          ) : null}

          {activeTool === "checklist-recogida" ? (
            <ChecklistTool
              items={pickupChecklistItems}
              onToggle={(item) => toggleChecklistItem(setPickupChecklist, item)}
              state={pickupChecklist}
              statusText="Úsalo para pago, campa, seguro temporal y transporte."
              subtitle="Recuerda la regla 15:00 y deja trazabilidad antes de moverte."
              title="Checklist recogida Auto1"
            />
          ) : null}

          {activeTool === "riesgo-copart" ? (
            <section className="tool-panel">
              <div className="tool-panel-header">
                <div>
                  <h3>Detector de riesgo Copart</h3>
                  <p>
                    Combina señales útiles para decidir si seguir, exigir más
                    margen o pasar al siguiente lote.
                  </p>
                </div>
                <span className={`risk-pill ${riskResult.tone}`}>
                  {riskResult.score} puntos
                </span>
              </div>

              <div className="form-grid">
                <label>
                  Indicador
                  <select
                    className="text-input"
                    onChange={(event) =>
                      setRiskInputs({ ...riskInputs, indicator: event.target.value })
                    }
                    value={riskInputs.indicator}
                  >
                    <option value="">Selecciona</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                    <option value="sin-letra">Sin letra</option>
                  </select>
                </label>
                {[
                  ["airbag", "Airbag desplegado"],
                  ["usaDocs", "Documentos USA o sospechosos"],
                  ["rust", "Óxido fuerte"],
                  ["mechanical", "Daño mecánico"],
                  ["suspiciousPrice", "Precio extremadamente bajo"],
                  ["unsafeToDrive", "No apto para circular con seguridad"],
                  ["zbDocs", "ZB1/ZB2 disponible"],
                  ["coc", "COC disponible"]
                ].map(([field, label]) => (
                  <label key={field}>
                    {label}
                    <select
                      className="text-input"
                      onChange={(event) =>
                        setRiskInputs({ ...riskInputs, [field]: event.target.value })
                      }
                      value={riskInputs[field]}
                    >
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                ))}
              </div>

              <div className={`status-card ${riskResult.tone}`}>
                <h4>{riskResult.label}</h4>
                <p>
                  {riskInputs.unsafeToDrive === "si"
                    ? "Calcula transporte sí o sí antes de pujar."
                    : "No te quedes solo con la puntuación: revisa la ficha completa."}
                </p>
                <ul className="inline-list">
                  {riskResult.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {activeTool === "calculadora" ? (
            <section className="tool-panel">
              <div className="tool-panel-header">
                <div>
                  <h3>Calculadora básica de coste de compra</h3>
                  <p>El precio de puja no es el coste real.</p>
                </div>
                <span className="pill pill-amber">Coste total</span>
              </div>
              <div className="form-grid">
                {[
                  ["bidPrice", "Precio de puja"],
                  ["fee", "Comisión"],
                  ["transport", "Transporte"],
                  ["repair", "Reparación estimada"],
                  ["paperwork", "Documentación / matriculación"],
                  ["other", "Otros gastos"]
                ].map(([field, label]) => (
                  <label key={field}>
                    {label}
                    <input
                      className="text-input"
                      inputMode="decimal"
                      onChange={(event) =>
                        setCalculator({ ...calculator, [field]: event.target.value })
                      }
                      placeholder="0"
                      type="number"
                      value={calculator[field]}
                    />
                  </label>
                ))}
              </div>
              <div className="status-card low">
                <h4>{asCurrency(calculatorTotal)}</h4>
                <p>
                  Coste real aproximado con los datos actuales. Si el coche no te
                  cuadra aquí, no te lo arregla la emoción de la subasta.
                </p>
              </div>
            </section>
          ) : null}

          {activeTool === "limites" ? (
            <section className="tool-panel">
              <div className="tool-panel-header">
                <div>
                  <h3>Óptimo vs máximo</h3>
                  <p>El máximo está para protegerte, no para alcanzarlo siempre.</p>
                </div>
              </div>
              <div className="form-grid">
                {[
                  ["optimum", "Precio óptimo"],
                  ["maximum", "Precio máximo"],
                  ["current", "Puja actual"]
                ].map(([field, label]) => (
                  <label key={field}>
                    {label}
                    <input
                      className="text-input"
                      inputMode="decimal"
                      onChange={(event) =>
                        setLimits({ ...limits, [field]: event.target.value })
                      }
                      placeholder="0"
                      type="number"
                      value={limits[field]}
                    />
                  </label>
                ))}
              </div>
              {limitResult ? (
                <div className={`status-card ${limitResult.tone}`}>
                  <h4>{limitResult.title}</h4>
                  <p>{limitResult.text}</p>
                </div>
              ) : (
                <p className="tool-footnote">
                  Introduce tus tres cifras para ver la lectura.
                </p>
              )}
            </section>
          ) : null}
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <div className="section-heading">
            <p className="section-eyebrow">Módulos del curso</p>
            <h2>Contenido real del MVP fundador</h2>
            <p className="section-description">
              BCA queda fuera del temario principal por ahora y se dejará como
              actualización futura.
            </p>
          </div>
          <div className="module-stack">
            {courseModules.map((module, index) => {
              const done = completedModules.includes(module.id);

              return (
                <article
                  className={`module-card module-card-compact ${done ? "done" : ""}`}
                  id={index === 0 ? "module-1-anchor" : undefined}
                  key={module.id}
                >
                  <div className="module-card-summary">
                    <div>
                      <p className="module-index">Módulo {index + 1}</p>
                      <h3>{module.title}</h3>
                      <p>{module.summary}</p>
                    </div>
                    <div className="module-card-meta">
                      <span className="pill">{done ? "Completado" : "Pendiente"}</span>
                      <span className="module-duration">{module.duration}</span>
                    </div>
                  </div>
                  <div className="module-card-actions">
                    <Link
                      className="button button-secondary"
                      href={getModulePath(module.slug)}
                    >
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
            })}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <div className="section-heading">
            <p className="section-eyebrow">Casos reales</p>
            <h2>Referencias preparadas para ampliar el dashboard</h2>
            <p className="section-description">
              Tres placeholders listos para documentar operaciones reales de Auto1 y
              Copart sin cambiar el diseño base del MVP.
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
