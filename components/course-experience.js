"use client";

import { useEffect, useMemo, useState } from "react";

import {
  auto1ChecklistItems,
  courseModules,
  pickupChecklistItems
} from "@/lib/course-content";
import {
  BRAND_NAME,
  COURSE_PASSWORD,
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

function percentage(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

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

function loadStoredMap(key, items) {
  if (typeof window === "undefined") {
    return {};
  }

  const emptyState = Object.fromEntries(items.map((item) => [item, false]));
  const raw = window.localStorage.getItem(key);

  if (!raw) {
    return emptyState;
  }

  try {
    return { ...emptyState, ...JSON.parse(raw) };
  } catch {
    return emptyState;
  }
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
    const unlocked = window.localStorage.getItem(STORAGE_KEYS.access) === "1";
    const storedModules = window.localStorage.getItem(STORAGE_KEYS.completedModules);
    const storedTool = window.localStorage.getItem(STORAGE_KEYS.activeTool);
    let parsedModules = [];

    if (storedModules) {
      try {
        parsedModules = JSON.parse(storedModules);
      } catch {
        parsedModules = [];
      }
    }

    setHasAccess(unlocked);
    setAuto1Checklist(loadStoredMap(STORAGE_KEYS.auto1Checklist, auto1ChecklistItems));
    setPickupChecklist(loadStoredMap(STORAGE_KEYS.pickupChecklist, pickupChecklistItems));
    setCompletedModules(Array.isArray(parsedModules) ? parsedModules : []);
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
      notes.push("La S no confirma movimiento del vehiculo.");
    }

    if (riskInputs.indicator === "sin-letra") {
      score += 2;
      notes.push("Sin letra suele implicar menos certeza y mas riesgo.");
    }

    if (riskInputs.airbag === "si") {
      score += 2;
      notes.push("Airbag desplegado suele elevar coste y complejidad.");
    }

    if (riskInputs.usaDocs === "si") {
      score += 1;
      notes.push("La documentacion USA o sospechosa exige mucha mas revision.");
    }

    if (riskInputs.rust === "si") {
      score += 2;
      notes.push("El oxido fuerte puede esconder una reparacion mucho mayor.");
    }

    if (riskInputs.mechanical === "si") {
      score += 2;
      notes.push("Dano mecanico declarado: mejor no improvisar.");
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
      notes.push("El COC ayuda en homologacion, pero no borra otros riesgos.");
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
        label: "Riesgo alto, mejor evitar si estas empezando",
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
        title: "Zona comoda",
        text: "La puja sigue dentro del precio optimo."
      };
    }

    if (current <= maximum) {
      return {
        tone: "medium",
        title: "Zona emocional",
        text: "Solo seguir si lo tienes muy claro. El maximo esta para protegerte, no para alcanzarlo siempre."
      };
    }

    return {
      tone: "critical",
      title: "No pujar mas",
      text: "Has pasado tu limite absoluto. Sal de la puja."
    };
  }, [limits]);

  function unlockCourse() {
    if (password.trim().toUpperCase() === COURSE_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEYS.access, "1");
      setHasAccess(true);
      setAccessError("");
      return;
    }

    setAccessError("Clave incorrecta. Revisa el mensaje de acceso.");
  }

  function toggleChecklistItem(setter, currentState, item) {
    setter((previous) => ({ ...previous, [item]: !previous[item] }));
  }

  function toggleModule(id) {
    setCompletedModules((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  if (!ready) {
    return <main className="site-shell loading-shell">Preparando curso...</main>;
  }

  if (!hasAccess) {
    return (
      <main className="site-shell gate-shell">
        <div className="gate-card">
          <p className="pill pill-amber">{BRAND_NAME}</p>
          <h1>Area privada del curso</h1>
          <p>
            Introduce la clave simple para acceder al MVP fundador de Antes de
            Pujar.
          </p>
          <input
            className="text-input gate-input"
            maxLength={32}
            onChange={(event) => setPassword(event.target.value)}
            onInput={() => setAccessError("")}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                unlockCourse();
              }
            }}
            placeholder="FUNDADOR29"
            type="password"
            value={password}
          />
          <button className="button button-primary" onClick={unlockCourse} type="button">
            Entrar al curso
          </button>
          {accessError ? <p className="error-copy">{accessError}</p> : null}
        </div>
      </main>
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
                Este curso esta pensado para que entiendas como funcionan las
                subastas antes de meter dinero. No es teoria vacia: es un proceso
                practico para mirar fichas, detectar riesgos, preparar pujas y
                organizar recogidas.
              </p>
            </div>
            <div className="dashboard-actions">
              <button
                className="button button-primary"
                onClick={() =>
                  document
                    .getElementById("module-1-anchor")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                type="button"
              >
                Empezar modulo 1
              </button>
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
                Abrir version imprimible
              </a>
            </div>
          </div>

          <div className="progress-card">
            <div>
              <p className="eyebrow-label">Progreso guardado en local</p>
              <strong>{overallProgress}% completado</strong>
            </div>
            <p>
              {moduleDone}/{courseModules.length} modulos marcados, {auto1Done}/
              {auto1ChecklistItems.length} puntos revisados en Auto1 y {pickupDone}/
              {pickupChecklistItems.length} en recogida.
            </p>
            <div className="progress-bar">
              <span style={{ width: `${overallProgress}%` }} />
            </div>
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
              Optimo vs maximo
            </ToolToggle>
          </div>

          {activeTool === "checklist-auto1" ? (
            <ChecklistTool
              items={auto1ChecklistItems}
              onToggle={(item) =>
                toggleChecklistItem(setAuto1Checklist, auto1Checklist, item)
              }
              state={auto1Checklist}
              statusText={
                percentage(auto1Done, auto1ChecklistItems.length) <= 50
                  ? "Faltan puntos importantes."
                  : percentage(auto1Done, auto1ChecklistItems.length) <= 85
                    ? "Revision parcial."
                    : "Ficha bastante revisada."
              }
              subtitle="Checklist persistente para analizar una ficha antes de pujar."
              title="Checklist Auto1"
            />
          ) : null}

          {activeTool === "checklist-recogida" ? (
            <ChecklistTool
              items={pickupChecklistItems}
              onToggle={(item) =>
                toggleChecklistItem(setPickupChecklist, pickupChecklist, item)
              }
              state={pickupChecklist}
              statusText="Usalo para pago, campa, seguro temporal y transporte."
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
                    Combina senales utiles para decidir si seguir, exigir mas
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
                  ["rust", "Oxido fuerte"],
                  ["mechanical", "Dano mecanico"],
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
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                ))}
              </div>

              <div className={`status-card ${riskResult.tone}`}>
                <h4>{riskResult.label}</h4>
                <p>
                  {riskInputs.unsafeToDrive === "si"
                    ? "Calcula transporte si o si antes de pujar."
                    : "No te quedes solo con la puntuacion: revisa la ficha completa."}
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
                  <h3>Calculadora basica de coste de compra</h3>
                  <p>El precio de puja no es el coste real.</p>
                </div>
                <span className="pill pill-amber">Coste total</span>
              </div>
              <div className="form-grid">
                {[
                  ["bidPrice", "Precio de puja"],
                  ["fee", "Comision"],
                  ["transport", "Transporte"],
                  ["repair", "Reparacion estimada"],
                  ["paperwork", "Documentacion / matriculacion"],
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
                  cuadra aqui, no te lo arregla la emocion de la subasta.
                </p>
              </div>
            </section>
          ) : null}

          {activeTool === "limites" ? (
            <section className="tool-panel">
              <div className="tool-panel-header">
                <div>
                  <h3>Optimo vs maximo</h3>
                  <p>El maximo esta para protegerte, no para alcanzarlo siempre.</p>
                </div>
              </div>
              <div className="form-grid">
                {[
                  ["optimum", "Precio optimo"],
                  ["maximum", "Precio maximo"],
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
            <p className="section-eyebrow">Modulos del curso</p>
            <h2>Contenido real del MVP fundador</h2>
            <p className="section-description">
              BCA queda fuera del temario principal por ahora y se dejara como
              actualizacion futura.
            </p>
          </div>
          <div className="module-stack">
            {courseModules.map((module, index) => {
              const done = completedModules.includes(module.id);

              return (
                <details
                  className={`module-card ${done ? "done" : ""}`}
                  id={index === 0 ? "module-1-anchor" : undefined}
                  key={module.id}
                >
                  <summary>
                    <div>
                      <p className="module-index">Modulo {index + 1}</p>
                      <h3>{module.title}</h3>
                      <p>{module.summary}</p>
                    </div>
                    <span className="pill">{done ? "Completado" : "Pendiente"}</span>
                  </summary>
                  <div className="module-content">
                    <ul className="inline-list">
                      {module.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {module.quote ? <blockquote>{module.quote}</blockquote> : null}
                    <button
                      className={`button ${done ? "button-secondary" : "button-primary"}`}
                      onClick={() => toggleModule(module.id)}
                      type="button"
                    >
                      {done ? "Marcar como pendiente" : "Marcar como completado"}
                    </button>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
