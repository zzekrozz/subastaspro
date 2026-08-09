function VisualHeader({ eyebrow, title, description }) {
  return (
    <header className="learning-visual-header">
      {eyebrow ? <p className="learning-visual-eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

function CourseComparison({ visual }) {
  return (
    <div className="learning-comparison-grid">
      {visual.columns.map((column) => (
        <section className="learning-comparison-column" key={column.title}>
          <p className="learning-comparison-title">{column.title}</p>
          <dl>
            {column.items.map((item) => (
              <div key={`${column.title}-${item.label}`}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

function CourseTimeline({ visual }) {
  return (
    <ol className="learning-timeline">
      {visual.steps.map((step, index) => (
        <li key={`${step.title}-${index}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{step.title}</strong>
            {step.text ? <p>{step.text}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function CourseCostStack({ visual }) {
  return (
    <div className="learning-cost-stack">
      <div className="learning-cost-items">
        {visual.items.map((item, index) => (
          <div key={item}>
            <span>{index === 0 ? "" : "+"}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
      <div className="learning-cost-result">
        <span>=</span>
        <strong>{visual.result}</strong>
      </div>
    </div>
  );
}

function CourseDecisionTree({ visual }) {
  return (
    <div className="learning-decision-tree">
      {visual.nodes.map((node, index) => (
        <section key={`${node.question}-${index}`}>
          <span className="learning-decision-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{node.question}</strong>
            <div className="learning-decision-options">
              {node.options.map((option) => (
                <p className={option.tone ? `is-${option.tone}` : ""} key={option.label}>
                  <b>{option.label}</b>
                  <span>{option.text}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function CourseRiskSignals({ visual }) {
  return (
    <div className="learning-risk-grid">
      {visual.items.map((item) => (
        <section className={`learning-risk-item is-${item.tone}`} key={item.label}>
          <p>{item.label}</p>
          <strong>{item.title}</strong>
          <span>{item.text}</span>
        </section>
      ))}
    </div>
  );
}

function CourseSequence({ visual }) {
  return (
    <ol className="learning-sequence">
      {visual.items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

function CourseMatrix({ visual }) {
  return (
    <div className="learning-matrix">
      {visual.rows.map((row) => (
        <article key={row.title}>
          <h4>{row.title}</h4>
          {row.cells.map((cell) => (
            <div key={cell.label}>
              <strong>{cell.label}</strong>
              <p>{cell.text}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

const renderers = {
  comparison: CourseComparison,
  timeline: CourseTimeline,
  costStack: CourseCostStack,
  decisionTree: CourseDecisionTree,
  riskSignals: CourseRiskSignals,
  sequence: CourseSequence,
  matrix: CourseMatrix
};

export function CourseLearningVisual({ visual }) {
  const Renderer = renderers[visual.type];

  if (!Renderer) return null;

  return (
    <section className={`course-learning-visual is-${visual.type}`}>
      <VisualHeader
        description={visual.description}
        eyebrow={visual.eyebrow}
        title={visual.title}
      />
      <Renderer visual={visual} />
      {visual.note ? <p className="learning-visual-note">{visual.note}</p> : null}
    </section>
  );
}

export function CourseChecklistGroups({ groups, compact = false }) {
  return (
    <div className={`course-checklist-groups ${compact ? "is-compact" : ""}`}>
      {groups.map((group, index) => (
        <section key={group.id}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
