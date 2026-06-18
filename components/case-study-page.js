"use client";

export function CaseStudyPage({ caseStudy }) {
  return (
    <div className="case-study-detail">
      <div className="case-study-meta">
        <span className={`pill risk-${caseStudy.riskTone}`}>{caseStudy.riskLabel}</span>
        <span className="pill">{caseStudy.platform}</span>
        <span className="pill">{caseStudy.decisionLabel}</span>
      </div>

      <div className="case-study-image-grid">
        {caseStudy.imageSlots.map((slot) => (
          <div className="case-study-image-slot" key={slot}>
            <span>{slot}</span>
          </div>
        ))}
      </div>

      <div className="case-study-analysis">
        <h4>Explicación de Iván</h4>
        <p>{caseStudy.explanation}</p>
      </div>
    </div>
  );
}
