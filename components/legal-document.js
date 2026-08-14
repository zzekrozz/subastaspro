import { LEGAL_LAST_UPDATED, LEGAL_OWNER, LEGAL_ROUTES } from "@/lib/legal-config";

export function LegalDocument({
  children,
  description,
  lastUpdated = LEGAL_LAST_UPDATED,
  title,
  toc
}) {
  return (
    <main className="legal-page">
      <header className="legal-topbar">
        <a className="brand-lockup" href="/antes-de-pujar" aria-label="Volver a SubastasPro">
          <span className="brand-mark">{LEGAL_OWNER.brand}</span>
          <span className="brand-divider">·</span>
          <span className="brand-course">{LEGAL_OWNER.product}</span>
        </a>
        <a className="button button-secondary button-small" href="/antes-de-pujar">
          Volver
        </a>
      </header>

      <div className="legal-layout content-frame">
        <aside className="legal-index" aria-label="Índice de la página">
          <p>En esta página</p>
          <nav>
            {toc.map((item) => (
              <a href={`#${item.id}`} key={item.id}>{item.label}</a>
            ))}
          </nav>
        </aside>

        <article className="legal-article">
          <header className="legal-hero">
            <p className="section-eyebrow">Información legal</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Última actualización: {lastUpdated}</span>
          </header>
          {children}
          <nav className="legal-related" aria-label="Otras páginas legales">
            <a href={LEGAL_ROUTES.notice}>Aviso legal</a>
            <a href={LEGAL_ROUTES.privacy}>Privacidad</a>
            <a href={LEGAL_ROUTES.cookies}>Cookies</a>
            <a href={LEGAL_ROUTES.terms}>Condiciones</a>
          </nav>
        </article>
      </div>
    </main>
  );
}

export function LegalSection({ children, id, title }) {
  return (
    <section className="legal-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalDataTable({ columns, rows }) {
  return (
    <div className="legal-table-wrap">
      <table>
        <thead>
          <tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
