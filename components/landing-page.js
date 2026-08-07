import { CourseAccessGate } from "@/components/course-access-gate";
import { SectionHeading } from "@/components/section-heading";
import {
  audienceNo,
  audienceYes,
  faqs,
  heroChips,
  learningCards,
  platforms,
  problemCards
} from "@/lib/course-content";
import {
  BRAND_NAME,
  PRICE_COPY,
  PRIVATE_ROUTE,
  STRIPE_PAYMENT_LINK
} from "@/lib/site-config";

function CardGrid({ items, className = "" }) {
  return (
    <div className={`card-grid ${className}`.trim()}>
      {items.map((item) => (
        <article className="surface-card" key={item}>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

export function LandingPage({ launchPrice, futurePrice }) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">{BRAND_NAME}</span>
          <span className="brand-divider">/</span>
          <span className="brand-course">Antes de Pujar</span>
        </div>
        <a
          className="button button-secondary button-small"
          href={STRIPE_PAYMENT_LINK}
        >
          Acceso fundador
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="content-frame hero-layout">
          <div className="hero-copy">
            <span className="pill pill-amber">Lanzamiento fundador</span>
            <h1>Antes de pujar, aprende a mirar una subasta como un profesional</h1>
            <p className="lead">
              Curso práctico e interactivo para entender Auto1 y Copart Alemania:
              filtros, fichas, daños, documentación, pujas, recogida, transporte
              y errores que debes evitar. BCA se añadirá próximamente como
              actualización.
            </p>
            <div className="chip-row">
              {heroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={STRIPE_PAYMENT_LINK}
              >
                Quiero acceso fundador
              </a>
              <a className="button button-secondary" href="#incluye">
                Ver qué incluye
              </a>
            </div>
          </div>

          <aside className="price-panel" id="precio">
            <p className="eyebrow-label">Precio fundador</p>
            <div className="price-stack">
              <strong>{launchPrice} € + IVA</strong>
              <span>35,09 € IVA incluido en España</span>
            </div>
            <p>{PRICE_COPY}</p>
            <a
              className="button button-primary"
              href={STRIPE_PAYMENT_LINK}
            >
              Comprar acceso
            </a>
            <a className="button button-secondary" href={PRIVATE_ROUTE}>
              Ver área privada
            </a>
          </aside>
        </div>
      </section>

      <section className="section-block" id="acceso">
        <div className="content-frame">
          <CourseAccessGate
            description="Introduce el correo utilizado durante la compra y tu código personal de acceso."
            title="Área privada del curso"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <SectionHeading
            eyebrow="El problema"
            title="Comprar barato no sirve si calculas mal el resto"
            description="La mayoría entra en subastas pensando que un coche barato es una oportunidad. Pero el precio de puja no es el coste real. Hay comisiones, transporte, documentación, daños, plazos, reclamaciones y errores que pueden convertir un supuesto chollo en una ruina."
          />
          <CardGrid items={problemCards} className="problem-grid" />
        </div>
      </section>

      <section className="section-block" id="incluye">
        <div className="content-frame">
          <SectionHeading
            eyebrow="Qué aprenderás"
            title="Una ruta clara para entender la operativa antes de meter dinero"
            description="Pensado para que puedas revisar lotes, preparar pujas y organizar recogidas con un sistema más sólido."
          />
          <CardGrid items={learningCards} />
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <SectionHeading
            eyebrow="Plataformas"
            title="Auto1 y Copart incluidos. BCA llega después."
            description="La primera edición se centra donde ahora mismo más valor aporta: análisis, puja y recogida en plataformas reales."
          />
          <div className="platform-grid">
            {platforms.map((platform) => (
              <article
                className={`surface-card platform-card ${
                  platform.status === "Próximamente" ? "is-muted" : ""
                }`}
                key={platform.title}
              >
                <div className="platform-header">
                  <h3>{platform.title}</h3>
                  <span className="pill">{platform.status}</span>
                </div>
                <p>{platform.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <SectionHeading
            eyebrow="Qué incluye"
            title="Una experiencia más centrada en contenido y criterio"
            description="La zona privada se enfoca en módulos, progreso, vídeos por módulo cuando estén disponibles, casos reales, checklist final y una metodología clara para filtrar riesgos antes de pujar."
          />
          <div className="tool-grid">
            {[
              {
                icon: "PDF",
                title: "Checklist final",
                description: "Repasa los puntos clave antes de pujar, pagar, recoger o mover un coche."
              },
              {
                icon: "VID",
                title: "Vídeos por módulo",
                description: "Cada módulo puede tener su explicación en pantalla real sin sacarte fuera del curso."
              },
              {
                icon: "CAS",
                title: "Casos reales",
                description: "Bloques preparados para documentar operaciones reales de Auto1 y Copart."
              },
              {
                icon: "MET",
                title: "Metodología de revisión",
                description: "Aprende un proceso repetible para leer fichas, medir riesgos y evitar errores caros."
              },
              {
                icon: "29",
                title: "Acceso fundador",
                description: "Entras ahora y mantienes acceso a futuras mejoras del curso."
              }
            ].map((item) => (
              <article className="surface-card tool-card" key={item.title}>
                <div className="tool-badge">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame two-column-grid">
          <div>
            <SectionHeading eyebrow="Para quién es" title="Quién le sacará partido" />
            <div className="stack-list">
              {audienceYes.map((item) => (
                <article className="surface-card list-card positive" key={item}>
                  {item}
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Para quién no es"
              title="Cuándo este curso no encaja"
            />
            <div className="stack-list">
              {audienceNo.map((item) => (
                <article className="surface-card list-card negative" key={item}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block founder-block">
        <div className="content-frame founder-grid">
          <div>
            <SectionHeading
              eyebrow="Precio fundador"
              title={`${launchPrice} € + IVA hoy. ${futurePrice} € + IVA después.`}
              description="La primera edición incluye el curso web, módulos Auto1 y Copart, vídeos por módulo cuando estén disponibles, checklist final descargable, casos reales y futuras mejoras incluidas."
            />
          </div>
          <div className="surface-card founder-card">
            <p className="eyebrow-label">Acceso fundador</p>
            <div className="price-stack">
              <strong>{launchPrice} € + IVA</strong>
              <span>35,09 € IVA incluido en España</span>
            </div>
            <ul className="feature-list">
              <li>Curso web privado</li>
              <li>Módulos Auto1 y Copart</li>
              <li>BCA próximamente</li>
              <li>Vídeos por módulo</li>
              <li>Casos reales y metodología</li>
              <li>PDF descargable</li>
              <li>Futuras mejoras incluidas</li>
            </ul>
            <a
              className="button button-primary"
              href={STRIPE_PAYMENT_LINK}
            >
              Quiero acceso fundador
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="content-frame">
          <SectionHeading eyebrow="FAQ" title="Dudas frecuentes" />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="surface-card faq-card" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block final-block">
        <div className="content-frame final-cta">
          <SectionHeading
            eyebrow="Cierre del lanzamiento"
            title="Auto1 y Copart incluidos. BCA llegará como actualización."
            description="La idea no es vender humo: es darte una base práctica para que mires subastas con más criterio desde hoy."
          />
          <div className="hero-actions centered">
            <a
              className="button button-primary"
              href={STRIPE_PAYMENT_LINK}
            >
              Quiero acceso fundador
            </a>
            <a className="button button-secondary" href={PRIVATE_ROUTE}>
              Ver acceso privado
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
