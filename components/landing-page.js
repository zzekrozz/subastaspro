import { CourseAccessGate } from "@/components/course-access-gate";
import {
  audienceNo,
  audienceYes,
  courseProgram,
  faqs,
  heroChips,
  learningCards,
  platforms,
  problemCards,
  toolCards
} from "@/lib/course-content";
import { BRAND_NAME, PRICE_COPY } from "@/lib/site-config";

const PURCHASE_ROUTE = "/comprar";

function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`sales-section-intro is-${align}`}>
      <p className="sales-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function LandingPage({ priceExVat, priceWithVatEs }) {
  return (
    <main className="site-shell sales-page">
      <header className="sales-topbar">
        <div className="content-frame sales-topbar-inner">
          <a className="brand-lockup" href="#inicio" aria-label="SubastasPro, inicio">
            <span className="brand-mark">{BRAND_NAME}</span>
            <span className="brand-divider">/</span>
            <span className="brand-course">SubastasPro</span>
          </a>
          <nav className="sales-nav" aria-label="Navegación principal">
            <a href="#programa">Programa</a>
            <a href="#plataformas">Plataformas</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="sales-header-actions">
            <a className="sales-login-link" href="#acceso">
              Acceso alumnos
            </a>
            <a className="button button-primary button-small" href={PURCHASE_ROUTE}>
              Comprar
            </a>
          </div>
        </div>
      </header>

      <section className="sales-hero" id="inicio">
        <div className="sales-hero-image" aria-hidden="true" />
        <div className="content-frame sales-hero-inner">
          <div className="sales-hero-copy">
            <p className="sales-eyebrow">Formación práctica para subastas de vehículos</p>
            <h1>SubastasPro</h1>
            <p className="sales-hero-statement">
              Aprende a comprar en subastas evitando errores que pueden costarte
              mucho más que el precio de acceso.
            </p>
            <p className="sales-hero-description">
              Una ruta directa para filtrar mejor, leer fichas, entender daños y
              documentación, preparar tus pujas y planificar la recogida sin
              aprenderlo todo por ensayo y error.
            </p>
            <div className="sales-chip-row" aria-label="Características principales">
              {heroChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="sales-hero-actions">
              <a className="button button-primary" href={PURCHASE_ROUTE}>
                Comprar SubastasPro
              </a>
              <a className="button button-secondary" href="#programa">
                Ver el programa
              </a>
            </div>
            <div className="sales-hero-proof" aria-label="Precio y condiciones de acceso">
              <div>
                <strong>{priceExVat} € + IVA</strong>
                <span>Pago único</span>
              </div>
              <div>
                <strong>{priceWithVatEs} €</strong>
                <span>IVA incluido en España</span>
              </div>
              <div>
                <strong>18 meses</strong>
                <span>Acceso mínimo garantizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sales-section sales-risks" id="por-que">
        <div className="content-frame">
          <div className="sales-editorial-grid">
            <SectionIntro
              eyebrow="Lo que suele salir caro"
              title="El problema no es solo pagar un coche. Es no entender bien las reglas."
              description="Una subasta exige más que encontrar un precio atractivo. Hay que leer, calcular, decidir y actuar dentro de procesos que cambian según la plataforma."
            />
            <p className="sales-pullquote">
              La mayoría de los errores no parecen graves cuando ocurren. Se vuelven
              caros cuando ya has ganado la puja.
            </p>
          </div>
          <div className="sales-risk-grid">
            {problemCards.map((item, index) => (
              <article className="sales-risk-item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-proof-strip" aria-label="Contenido de SubastasPro">
        <div className="content-frame sales-metric-grid">
          {toolCards.map((item) => (
            <div className="sales-metric" key={item.label}>
              <strong>{item.metric}</strong>
              <div>
                <span>{item.label}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sales-section" id="incluye">
        <div className="content-frame">
          <SectionIntro
            eyebrow="Qué te llevas realmente"
            title="Una forma más ordenada de pensar antes de comprar"
            description="No se trata de memorizar botones. Se trata de aprender qué mirar, qué preguntas hacerte y dónde suele esconderse el riesgo."
          />
          <div className="sales-benefit-grid">
            {learningCards.map((item, index) => (
              <article className="sales-benefit-card" key={item.title}>
                <span className="sales-card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section sales-program-section" id="programa">
        <div className="content-frame">
          <SectionIntro
            eyebrow="El programa"
            title="16 módulos. Tres bloques. Una secuencia con sentido."
            description="Primero entiendes el terreno. Después recorres Auto1 y Copart desde la búsqueda hasta la recogida."
          />
          <div className="sales-program-list">
            {courseProgram.map((block) => (
              <article className="sales-program-row" key={block.number}>
                <div className="sales-program-index">{block.number}</div>
                <div className="sales-program-copy">
                  <div className="sales-program-title">
                    <h3>{block.title}</h3>
                    <span>{block.count}</span>
                  </div>
                  <p>{block.description}</p>
                </div>
                <ul>
                  {block.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section sales-platform-section" id="plataformas">
        <div className="content-frame">
          <SectionIntro
            eyebrow="Dos plataformas, dos formas de trabajar"
            title="AUTO1 y Copart no se analizan con el mismo mapa mental"
            description="SubastasPro dedica un bloque propio a cada plataforma para que entiendas sus señales, tiempos y decisiones sin mezclarlas."
          />
          <div className="sales-platform-grid">
            {platforms.map((platform) => (
              <article className="sales-platform-panel" key={platform.title}>
                <div className="sales-platform-wordmark">
                  <span>{platform.code}</span>
                  <div>
                    <h3>{platform.title}</h3>
                    <p>{platform.subtitle}</p>
                  </div>
                </div>
                <p className="sales-platform-description">{platform.description}</p>
                <ul>
                  {platform.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="sales-independence-note">
            Formación independiente. SubastasPro no es una web oficial ni está
            afiliada a AUTO1 Group o Copart.
          </p>
        </div>
      </section>

      <section className="sales-section sales-value-section">
        <div className="content-frame sales-value-layout">
          <SectionIntro
            eyebrow="Por qué tiene valor"
            title="Condensa una curva de aprendizaje que suele ser lenta y cara"
            description="El contenido traduce experiencia operativa en un recorrido que puedes consultar con calma, repetir y llevar contigo antes de actuar."
          />
          <div className="sales-value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Orden de revisión</h3>
                <p>Una secuencia práctica para no mirar una ficha de forma aleatoria.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Criterio antes que impulso</h3>
                <p>Límites, señales y preguntas para decidir con más cabeza.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Operativa completa</h3>
                <p>La compra no acaba al ganar: pago, documentos, campa y transporte importan.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sales-section sales-audience-section">
        <div className="content-frame sales-audience-grid">
          <div>
            <SectionIntro
              eyebrow="Para quién es"
              title="Para quien quiere dejar de mirar subastas a ciegas"
            />
            <ul className="sales-check-list">
              {audienceYes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sales-not-box">
            <p className="sales-eyebrow">Qué no es SubastasPro</p>
            <h2>Sin promesas fáciles. Sin atajos inventados.</h2>
            <ul>
              {audienceNo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sales-section sales-pricing-section" id="precio">
        <div className="content-frame sales-pricing-layout">
          <div className="sales-pricing-copy">
            <p className="sales-eyebrow">Acceso personal · Pago único</p>
            <h2>Una mala decisión puede costar más que toda la formación.</h2>
            <p>{PRICE_COPY}</p>
          </div>
          <div className="sales-price-panel">
            <p>SubastasPro</p>
            <div className="sales-price">
              <strong>{priceExVat} €</strong>
              <span>+ IVA</span>
            </div>
            <p className="sales-tax-copy">
              {priceWithVatEs} € IVA incluido en España
            </p>
            <ul>
              <li>16 módulos sobre fundamentos, Auto1 y Copart</li>
              <li>Vídeos y herramientas dentro del curso</li>
              <li>Checklist descargable</li>
              <li>Acceso mínimo garantizado de 18 meses</li>
              <li>Email y código personal de acceso</li>
            </ul>
            <a className="button button-primary" href={PURCHASE_ROUTE}>
              Comprar SubastasPro
            </a>
            <small>Pago seguro gestionado por Stripe.</small>
          </div>
        </div>
      </section>

      <section className="sales-section" id="faq">
        <div className="content-frame sales-faq-layout">
          <SectionIntro
            eyebrow="Preguntas frecuentes"
            title="Lo importante, claro antes de comprar"
            description="Contenido, acceso, plataformas y límites de la formación, sin letra pequeña comercial."
          />
          <div className="sales-faq-list">
            {faqs.map((faq) => (
              <details className="sales-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-access-section" id="acceso">
        <div className="content-frame sales-access-layout">
          <div>
            <p className="sales-eyebrow">Acceso para alumnos</p>
            <h2>¿Ya has comprado SubastasPro?</h2>
            <p>
              Esta es la única entrada al área privada. Necesitas el correo utilizado
              durante la compra y tu código personal.
            </p>
          </div>
          <CourseAccessGate
            description="Introduce el correo utilizado durante la compra y tu código personal de acceso."
            title="Área privada del curso"
          />
        </div>
      </section>

      <section className="sales-final-section">
        <div className="content-frame sales-final-inner">
          <p className="sales-eyebrow">Empieza con una base mejor</p>
          <h2>Deja de improvisar justo donde los errores cuestan dinero.</h2>
          <p>
            Aprende a filtrar, revisar y decidir con más criterio antes de tu
            próxima puja.
          </p>
          <a className="button button-primary" href={PURCHASE_ROUTE}>
            Comprar SubastasPro
          </a>
        </div>
      </section>
    </main>
  );
}
