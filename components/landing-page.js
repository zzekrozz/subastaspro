import { LotSheet } from "@/components/lot-sheet";
import {
  audienceNo,
  audienceYes,
  courseMethodSteps,
  courseModules,
  courseSections,
  faqs,
  finalCourseModuleId,
  platforms,
  problemCards
} from "@/lib/course-content";
import { BRAND_NAME, LOGIN_ROUTE } from "@/lib/site-config";

const PURCHASE_ROUTE = "/comprar";

const COST_PARTS = [
  { label: "Puja", share: 58, tone: "bid" },
  { label: "Comisiones", share: 10 },
  { label: "Transporte", share: 14 },
  { label: "Papeles y matrícula", share: 12 },
  { label: "Imprevistos", share: 6 }
];

const PLATFORM_EXTRA = {
  auto1: {
    tone: "auto1",
    lead: "Stock profesional de concesionarios y particulares, con informe de estado.",
    detail: platforms[0]
  },
  copart: {
    tone: "copart",
    lead: "Coches siniestrados o con incidencias, subasta en vivo y mucha letra pequeña.",
    detail: platforms[1]
  }
};

function modulesFor(section) {
  return section.moduleIds
    .map((id) => courseModules.find((module) => module.id === id))
    .filter(Boolean);
}

function moduleNumber(module) {
  return String(courseModules.indexOf(module) + 1).padStart(2, "0");
}

export function LandingPage({ priceExVat, priceWithVatEs }) {
  const finalModule = courseModules.find((module) => module.id === finalCourseModuleId);
  const platformSections = courseSections.filter((section) => PLATFORM_EXTRA[section.id]);

  return (
    <main className="sp sp-landing">
      <header className="sp-top">
        <div className="sp-frame sp-top-inner">
          <a className="sp-wordmark" href="#inicio" aria-label="SubastasPro, inicio">
            <strong>SubastasPro</strong>
            <span>por {BRAND_NAME}</span>
          </a>
          <nav className="sp-nav" aria-label="Secciones">
            <a href="#plataformas">Auto1 y Copart</a>
            <a href="#programa">Programa</a>
            <a href="#precio">Precio</a>
            <a href="#faq">Dudas</a>
          </nav>
          <div className="sp-top-actions">
            <a className="sp-btn sp-btn-ghost sp-btn-sm" href={LOGIN_ROUTE}>
              Entrar
            </a>
            <a className="sp-btn sp-btn-primary sp-btn-sm" href={PURCHASE_ROUTE}>
              Comprar
            </a>
          </div>
        </div>
      </header>

      <section className="sp-hero" id="inicio">
        <div className="sp-hero-photo" aria-hidden="true" />
        <div className="sp-frame sp-hero-grid">
          <div className="sp-hero-copy">
            <p className="sp-hero-tag">Curso práctico de Auto1 y Copart Alemania</p>
            <h1>Aprende a leer el lote antes de pujar.</h1>
            <p className="sp-hero-lead">
              Cada ficha de subasta esconde el precio real del coche: daños, papeles,
              indicadores y costes que no salen en la puja. Te enseño a leerla en orden,
              a fijar tu máximo y a traer el coche sin improvisar.
            </p>
            <div className="sp-hero-actions">
              <a className="sp-btn sp-btn-primary" href={PURCHASE_ROUTE}>
                Comprar SubastasPro
              </a>
              <a className="sp-btn sp-btn-line" href="#programa">
                Ver los 16 módulos
              </a>
            </div>
            <p className="sp-hero-price">
              Pago único de <strong>{priceExVat} € + IVA</strong> ({priceWithVatEs} € con IVA en
              España). Acceso mínimo de 18 meses.
            </p>
          </div>
          <LotSheet />
        </div>
      </section>

      <section className="sp-section sp-cost" id="coste">
        <div className="sp-frame sp-cost-grid">
          <div className="sp-cost-copy">
            <h2>El precio de la puja no es lo que pagas.</h2>
            <p>
              La mayoría de errores no parecen graves cuando ocurren. Se vuelven caros
              cuando ya has ganado la puja y empiezan a llegar el resto de partidas.
            </p>
            <div className="sp-cost-bar" role="img" aria-label="Reparto ilustrativo del coste total de un coche de subasta">
              {COST_PARTS.map((part) => (
                <span
                  className={part.tone === "bid" ? "is-bid" : ""}
                  key={part.label}
                  style={{ flexGrow: part.share }}
                >
                  <em>{part.label}</em>
                </span>
              ))}
            </div>
            <p className="sp-footnote">Reparto ilustrativo. Cada operación tiene sus propias cifras.</p>
          </div>
          <ul className="sp-risk-list">
            {problemCards.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sp-section sp-platforms" id="plataformas">
        <div className="sp-frame">
          <div className="sp-intro">
            <h2>Dos plataformas, dos formas de pensar.</h2>
            <p>
              Auto1 y Copart no se analizan igual. Cada una tiene su bloque, con sus
              señales, sus tiempos y su forma de recoger el coche.
            </p>
          </div>
          <div className="sp-platform-grid">
            {platformSections.map((section) => {
              const extra = PLATFORM_EXTRA[section.id];
              const modules = modulesFor(section);

              return (
                <article className={`sp-platform is-${extra.tone}`} key={section.id}>
                  <header>
                    <h3>{section.title}</h3>
                    <p>{extra.lead}</p>
                  </header>
                  <p className="sp-platform-desc">{extra.detail.description}</p>
                  <ol className="sp-platform-modules">
                    {modules.map((module) => (
                      <li key={module.id}>
                        <span>{moduleNumber(module)}</span>
                        <strong>{module.title}</strong>
                      </li>
                    ))}
                  </ol>
                  <ul className="sp-platform-points">
                    {extra.detail.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="sp-footnote">
            Formación independiente. SubastasPro no es una web oficial ni está afiliada a
            AUTO1 Group ni a Copart.
          </p>
        </div>
      </section>

      <section className="sp-section sp-route" id="programa">
        <div className="sp-frame sp-route-grid">
          <div className="sp-intro sp-route-intro">
            <h2>16 módulos en el orden en que vas a necesitarlos.</h2>
            <p>
              Primero el terreno: requisitos, coste real y reglas. Después Auto1 y Copart,
              de la búsqueda a la recogida. Al final, un checklist para cada operación.
            </p>
            <ol className="sp-method" aria-label="Orden de trabajo del método">
              {courseMethodSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="sp-route-list">
            {courseSections.map((section) => (
              <section className={`sp-route-block is-${section.id}`} key={section.id}>
                <h3>
                  <span>Bloque {Number(section.number)}</span>
                  {section.title}
                </h3>
                <ol>
                  {modulesFor(section).map((module) => (
                    <li key={module.id}>
                      <span className="sp-route-num">{moduleNumber(module)}</span>
                      <div>
                        <strong>{module.title}</strong>
                        <p>{module.summary}</p>
                      </div>
                      <small>{module.duration}</small>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
            {finalModule ? (
              <section className="sp-route-block is-final">
                <h3>
                  <span>Para cada operación</span>
                  Checklist final
                </h3>
                <ol>
                  <li>
                    <span className="sp-route-num">{moduleNumber(finalModule)}</span>
                    <div>
                      <strong>{finalModule.title}</strong>
                      <p>{finalModule.summary}</p>
                    </div>
                    <small>{finalModule.duration}</small>
                  </li>
                </ol>
              </section>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sp-section sp-fit">
        <div className="sp-frame sp-fit-grid">
          <div>
            <h2>Para quien quiere dejar de mirar subastas a ciegas.</h2>
            <ul className="sp-yes">
              {audienceYes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sp-no">
            <h2>Lo que no te voy a vender.</h2>
            <ul>
              {audienceNo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sp-section sp-price" id="precio">
        <div className="sp-frame sp-price-grid">
          <div className="sp-price-copy">
            <h2>Una mala puja cuesta más que el curso entero.</h2>
            <p>
              Un solo error de lectura (un papel que falta, un daño mal valorado, un
              transporte que no habías contado) se come varias veces el precio de esta
              formación.
            </p>
          </div>
          <div className="sp-ticket">
            <div className="sp-ticket-head">
              <span>Tu acceso</span>
              <strong>SubastasPro</strong>
            </div>
            <div className="sp-ticket-price">
              <strong>{priceExVat} €</strong>
              <span>+ IVA, pago único</span>
            </div>
            <p className="sp-ticket-vat">{priceWithVatEs} € con IVA incluido en España</p>
            <ul>
              <li>16 módulos: fundamentos, Auto1 y Copart Alemania</li>
              <li>Vídeos, herramientas y casos dentro del curso</li>
              <li>Checklist descargable para cada operación</li>
              <li>Entras con tu cuenta de Google</li>
              <li>Acceso mínimo garantizado de 18 meses</li>
            </ul>
            <a className="sp-btn sp-btn-primary sp-btn-block" href={PURCHASE_ROUTE}>
              Comprar SubastasPro
            </a>
            <small>Pago seguro con Stripe.</small>
          </div>
        </div>
      </section>

      <section className="sp-section sp-faq" id="faq">
        <div className="sp-frame sp-faq-grid">
          <div className="sp-intro">
            <h2>Dudas antes de comprar.</h2>
            <p>Contenido, acceso, plataformas y límites de la formación, sin letra pequeña.</p>
          </div>
          <div className="sp-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-closing">
        <div className="sp-frame sp-closing-grid">
          <div>
            <h2>Tu próxima puja, con la ficha bien leída.</h2>
            <p>Filtra, revisa y decide con criterio antes de pulsar el botón.</p>
            <a className="sp-btn sp-btn-primary" href={PURCHASE_ROUTE}>
              Comprar SubastasPro
            </a>
          </div>
          <div className="sp-closing-access" id="acceso">
            <strong>¿Ya tienes el curso?</strong>
            <p>Entra con la cuenta de Google del correo con el que compraste.</p>
            <a className="sp-btn sp-btn-line" href={LOGIN_ROUTE}>
              Entrar al área privada
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
