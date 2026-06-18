import { PrintToolbar } from "@/components/print-toolbar";
import {
  auto1ChecklistItems,
  copartAvoidItems,
  copartKeys,
  pickupChecklistItems
} from "@/lib/course-content";
import { PDF_DOWNLOAD_PATH, SITE_NAME } from "@/lib/site-config";

export const metadata = {
  title: `Checklist imprimible ${SITE_NAME}`,
  robots: {
    index: false,
    follow: false
  }
};

function PrintableList({ items }) {
  return (
    <ul className="printable-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ChecklistSubastasPdfPage() {
  return (
    <main className="print-page">
      <PrintToolbar />
      <div className="print-sheet">
        <header className="print-hero">
          <p className="print-eyebrow">Ivan Imports</p>
          <h1>Checklist de Subastas: Antes de Pujar</h1>
          <p>
            Guía imprimible para revisar registros, fichas, recogidas, pujas y
            señales de riesgo antes de meter dinero.
          </p>
          <a
            className="inline-download"
            download
            href={PDF_DOWNLOAD_PATH}
            target="_blank"
          >
            Descargar PDF directo
          </a>
        </header>

        <section className="print-section">
          <h2>1. Documentos para registrarte</h2>
          <div className="print-grid">
            <article className="print-card">
              <h3>Autónomo</h3>
              <PrintableList items={["DNI", "IAE", "Dirección"]} />
            </article>
            <article className="print-card">
              <h3>Empresa</h3>
              <PrintableList
                items={["CIF", "IAE", "Dirección", "A veces escrituras"]}
              />
            </article>
          </div>
        </section>

        <section className="print-section">
          <h2>2. Checklist Auto1</h2>
          <PrintableList items={auto1ChecklistItems} />
        </section>

        <section className="print-section">
          <h2>3. Regla 15:00 Auto1</h2>
          <p>
            Para recoger al día siguiente, normalmente hay que seleccionar la
            recogida antes de las 15:00.
          </p>
        </section>

        <section className="print-section">
          <h2>4. Recogida Auto1</h2>
          <PrintableList items={pickupChecklistItems} />
        </section>

        <section className="print-section">
          <h2>5. Claves Copart</h2>
          <div className="print-grid">
            {copartKeys.map((item) => (
              <article className="print-card" key={item.term}>
                <h3>{item.term}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="print-section">
          <h2>6. Coches que evitar en Copart</h2>
          <PrintableList items={copartAvoidItems} />
        </section>

        <section className="print-section">
          <h2>7. Óptimo vs máximo</h2>
          <PrintableList
            items={[
              "Define tu precio óptimo antes de entrar en la subasta.",
              "Define tu precio máximo absoluto sin moverlo en caliente.",
              "No superes el máximo aunque falten 100 euros."
            ]}
          />
        </section>

        <section className="print-section print-quotes">
          <h2>Frases destacadas</h2>
          <blockquote>El precio de puja no es el coste real.</blockquote>
          <blockquote>
            En subasta no compras información perfecta, compras información
            suficiente para decidir.
          </blockquote>
          <blockquote>
            La subasta no te arruina de golpe, te arruina de 100 en 100.
          </blockquote>
          <blockquote>Si no compras ese coche, comprarás otro.</blockquote>
        </section>
      </div>
    </main>
  );
}
