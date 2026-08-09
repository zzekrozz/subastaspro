import { PrintToolbar } from "@/components/print-toolbar";
import { finalChecklistGroups } from "@/lib/course-content";
import { requireCourseSession } from "@/lib/course-session";
import { PDF_DOWNLOAD_PATH } from "@/lib/site-config";

export const metadata = {
  title: "Checklist operativo",
  robots: { index: false, follow: false }
};

function PrintableList({ items }) {
  return (
    <ul className="printable-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default async function ChecklistSubastasPdfPage() {
  await requireCourseSession();

  return (
    <main className="print-page">
      <PrintToolbar />
      <div className="print-sheet">
        <header className="print-hero">
          <p className="print-eyebrow">SubastasPro · Checklist operativo</p>
          <h1>Antes de pujar, comprueba la operación completa</h1>
          <p>
            Guía imprimible para revisar ficha, coste, puja, documentación, pago y
            recogida con el mismo orden del curso.
          </p>
          <a className="inline-download" download href={PDF_DOWNLOAD_PATH}>
            Descargar PDF directo
          </a>
        </header>

        <div className="print-checklist-grid">
          {finalChecklistGroups.map((group, index) => (
            <section className="print-section print-checklist-section" key={group.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{group.title}</h2>
                <PrintableList items={group.items} />
              </div>
            </section>
          ))}
        </div>

        <footer className="print-disclaimer">
          <strong>Última comprobación</strong>
          <p>
            Las comisiones, plazos, documentación y condiciones de cada plataforma
            pueden cambiar. Consulta siempre la información oficial vigente antes de operar.
          </p>
        </footer>
      </div>
    </main>
  );
}
