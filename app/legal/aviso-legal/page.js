import { LegalDocument, LegalSection } from "@/components/legal-document";
import { LEGAL_OWNER } from "@/lib/legal-config";

export const metadata = {
  title: "Aviso legal",
  description: "Identificación y condiciones de uso del sitio web de SubastasPro.",
  alternates: { canonical: "/legal/aviso-legal" }
};

const toc = [
  { id: "titular", label: "Titular del sitio" },
  { id: "finalidad", label: "Finalidad y uso" },
  { id: "propiedad", label: "Propiedad intelectual" },
  { id: "enlaces", label: "Servicios y enlaces externos" },
  { id: "responsabilidad", label: "Responsabilidad" },
  { id: "legislacion", label: "Legislación aplicable" }
];

export default function AvisoLegalPage() {
  return (
    <LegalDocument
      description="Aquí puedes identificar al responsable de SubastasPro y conocer las reglas básicas de uso del sitio."
      title="Aviso legal"
      toc={toc}
    >
      <LegalSection id="titular" title="1. Titular del sitio">
        <dl className="legal-details">
          <div><dt>Titular</dt><dd>{LEGAL_OWNER.name}</dd></div>
          <div><dt>Condición</dt><dd>{LEGAL_OWNER.status}</dd></div>
          <div><dt>NIF</dt><dd>{LEGAL_OWNER.taxId}</dd></div>
          <div><dt>Domicilio</dt><dd>{LEGAL_OWNER.address}</dd></div>
          <div><dt>Teléfono</dt><dd><a href={`tel:${LEGAL_OWNER.phone.replaceAll(" ", "")}`}>{LEGAL_OWNER.phone}</a></dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a></dd></div>
          <div><dt>Marca y producto</dt><dd>{LEGAL_OWNER.brand} · {LEGAL_OWNER.product}</dd></div>
          <div><dt>Dominio</dt><dd><a href={LEGAL_OWNER.domain}>{LEGAL_OWNER.domain}</a></dd></div>
        </dl>
        <p>
          La actividad del sitio es la venta y prestación de formación digital online
          relacionada con subastas de vehículos. El mercado principal es España,
          aunque el servicio no aplica por sí mismo un bloqueo técnico general a
          compradores de otros países.
        </p>
      </LegalSection>

      <LegalSection id="finalidad" title="2. Finalidad y uso del sitio">
        <p>
          El sitio ofrece información comercial, contratación y acceso privado a
          SubastasPro. Debes utilizarlo de forma lícita, respetar la seguridad del
          servicio y no intentar acceder a zonas o datos ajenos.
        </p>
        <p>
          La información del curso tiene finalidad formativa. Las plataformas de
          subastas, sus precios, comisiones y reglas pueden cambiar; antes de operar
          debes comprobar siempre la información oficial vigente de cada tercero.
        </p>
      </LegalSection>

      <LegalSection id="propiedad" title="3. Propiedad intelectual e industrial">
        <p>
          Los textos, vídeos, estructura didáctica, materiales y elementos propios de
          SubastasPro están protegidos por la normativa aplicable. La compra concede un
          derecho de acceso personal, no una cesión de derechos de explotación.
        </p>
        <p>
          Auto1, Copart, Stripe, YouTube y las demás marcas o servicios de terceros
          pertenecen a sus respectivos titulares. Su mención tiene finalidad
          informativa o educativa y no implica afiliación, patrocinio ni titularidad.
        </p>
      </LegalSection>

      <LegalSection id="enlaces" title="4. Servicios y enlaces externos">
        <p>
          Algunos procesos se realizan en servicios externos, como el pago alojado por
          Stripe o la reproducción consentida de vídeos de YouTube. Al salir de este
          dominio resultan aplicables las condiciones y políticas del proveedor
          correspondiente. Se revisan los enlaces razonablemente, pero no se controla
          de forma continua el contenido de sitios ajenos.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidad" title="5. Disponibilidad y responsabilidad">
        <p>
          Se aplican medidas razonables para mantener el servicio disponible y seguro,
          pero pueden producirse interrupciones por mantenimiento, incidencias de red
          o fallos de terceros. Esto no excluye responsabilidades legales ni limita los
          derechos obligatorios de consumidores y usuarios.
        </p>
        <p>
          El titular responderá en los términos exigidos por la normativa aplicable.
          No se garantiza un resultado económico, una adjudicación concreta ni la
          permanencia sin cambios de las condiciones de plataformas externas.
        </p>
      </LegalSection>

      <LegalSection id="legislacion" title="6. Legislación aplicable">
        <p>
          Este sitio se rige por la legislación española. Cuando el usuario tenga la
          condición de consumidor, cualquier controversia se resolverá respetando los
          fueros y protecciones imperativas que le correspondan. El titular no está
          adherido voluntariamente al Sistema Arbitral de Consumo.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}

