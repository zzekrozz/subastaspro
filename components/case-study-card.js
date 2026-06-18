"use client";

import { useState } from "react";

import { CaseStudyPage } from "@/components/case-study-page";

export function CaseStudyCard({ caseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="module-card case-study-card">
      <div className="case-study-summary">
        <div>
          <p className="module-index">Caso real</p>
          <h3>{caseStudy.title}</h3>
          <p>{caseStudy.summary}</p>
        </div>
        <div className="case-study-badges">
          <span className={`pill risk-${caseStudy.riskTone}`}>{caseStudy.riskLabel}</span>
          <span className="pill">{caseStudy.decisionLabel}</span>
        </div>
      </div>

      <div className="case-study-actions">
        <span className="case-study-platform">{caseStudy.platform}</span>
        <button
          className={`button ${open ? "button-secondary" : "button-primary"}`}
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? "Ocultar análisis" : "Ver análisis"}
        </button>
      </div>

      {open ? <CaseStudyPage caseStudy={caseStudy} /> : null}
    </article>
  );
}
