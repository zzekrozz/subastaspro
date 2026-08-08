import { LegalDataTable, LegalDocument, LegalSection } from "@/components/legal-document";
import { LEGAL_OWNER } from "@/lib/legal-config";

export const metadata = {
  title: "Política de privacidad",
  description: "Cómo trata SubastasPro los datos personales de compradores y usuarios.",
  alternates: { canonical: "/legal/privacidad" }
};

const toc = [
  { id: "responsable", label: "Responsable" },
  { id: "tratamientos", label: "Datos y finalidades" },
  { id: "proveedores", label: "Proveedores" },
  { id: "conservacion", label: "Conservación" },
  { id: "derechos", label: "Tus derechos" },
  { id: "seguridad", label: "Seguridad y cambios" }
];

export default function PrivacidadPage() {
  return (
    <LegalDocument
      description="Esta política describe los datos que realmente intervienen en la compra, el acceso, la entrega del curso y el soporte."
      title="Política de privacidad"
      toc={toc}
    >
      <LegalSection id="responsable" title="1. Responsable del tratamiento">
        <p>
          El responsable es {LEGAL_OWNER.name}, NIF {LEGAL_OWNER.taxId}, {LEGAL_OWNER.status},
          con domicilio en {LEGAL_OWNER.address}. Puedes contactar en{" "}
          <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a> o en{" "}
          <a href={`tel:${LEGAL_OWNER.phone.replaceAll(" ", "")}`}>{LEGAL_OWNER.phone}</a>.
        </p>
      </LegalSection>

      <LegalSection id="tratamientos" title="2. Qué datos tratamos y para qué">
        <LegalDataTable
          columns={["Tratamiento", "Datos", "Finalidad", "Base jurídica"]}
          rows={[
            ["Compra y contratación", "Nombre y datos de facturación facilitados a Stripe, email, país, NIF/VAT si se aporta, identificadores Stripe, importe y estado del pago.", "Gestionar la compra, impuestos, prueba contractual y acceso al producto.", "Ejecución del contrato y cumplimiento de obligaciones legales, incluidas las fiscales y contables."],
            ["Consentimiento de compra", "UUID opaco, fecha y hora, versiones y hashes de los textos aceptados, estados de aceptación e identificador de sesión Stripe.", "Acreditar las condiciones aceptadas y la solicitud de suministro inmediato.", "Ejecución y prueba del contrato; cumplimiento de obligaciones de información y defensa frente a reclamaciones."],
            ["Acceso al curso", "Email, código personal, identificadores internos, estado, fecha del último acceso y contador de accesos.", "Autorizar el acceso, evitar usos abusivos y mantener la seguridad.", "Ejecución del contrato e interés legítimo en proteger el servicio."],
            ["Email transaccional", "Email, código de acceso, estado de entrega e identificador técnico del proveedor.", "Enviar las credenciales y comunicaciones necesarias sobre la compra.", "Ejecución del contrato. No se usa para marketing."],
            ["Soporte", "Email o teléfono, contenido de la consulta y datos que decidas aportar.", "Resolver dudas, incidencias y reclamaciones.", "Ejecución del contrato, medidas precontractuales o interés legítimo en atender al usuario."],
            ["Seguridad técnica", "Identificadores de eventos y sesiones, estado técnico y registros mínimos de error. La infraestructura puede tratar datos de conexión para operar y proteger el servicio.", "Prevenir fraude, diagnosticar fallos y asegurar la plataforma.", "Interés legítimo y cumplimiento de obligaciones de seguridad."],
            ["Contenido de YouTube", "Datos técnicos que YouTube/Google pueda recibir cuando autorizas y cargas el reproductor.", "Mostrar los vídeos del curso.", "Consentimiento para contenido externo, que puedes retirar desde Configurar cookies."]
          ]}
        />
        <p>
          El email de compra y el código son necesarios para acceder. Los datos de pago
          que Stripe marque como obligatorios deben facilitarse para completar la
          contratación. No se adoptan decisiones con efectos jurídicos basadas
          exclusivamente en perfiles ni se envían comunicaciones promocionales.
        </p>
      </LegalSection>

      <LegalSection id="proveedores" title="3. Destinatarios y proveedores">
        <ul>
          <li><strong>Stripe:</strong> checkout alojado, gestión del pago, impuestos y prevención del fraude. Los datos completos de tarjeta se introducen directamente en Stripe y no se almacenan en SubastasPro.</li>
          <li><strong>Supabase:</strong> base de datos de accesos, estados de entrega y evidencias de consentimiento.</li>
          <li><strong>Resend:</strong> envío exclusivo de emails transaccionales con las credenciales.</li>
          <li><strong>Vercel:</strong> alojamiento, ejecución de la aplicación y registros técnicos necesarios.</li>
          <li><strong>YouTube/Google:</strong> solo cuando permites contenido externo y se carga un reproductor.</li>
        </ul>
        <p>
          Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo.
          En esos casos deberán aplicar el mecanismo de transferencia y las garantías
          exigibles según su documentación y el contrato aplicable. La configuración
          contractual concreta de cada cuenta debe revisarse periódicamente; no se
          afirma aquí una garantía específica que no haya sido verificada.
        </p>
        <p>
          También podrán comunicarse datos a administraciones, juzgados o autoridades
          cuando exista una obligación legal. No se venden datos personales.
        </p>
      </LegalSection>

      <LegalSection id="conservacion" title="4. Conservación">
        <ul>
          <li>Los datos contractuales, de pago y facturación se conservarán durante los plazos exigidos por la normativa fiscal, contable, de consumo y de prescripción de responsabilidades.</li>
          <li>Los datos de acceso se mantienen mientras el acceso esté vigente y, después, bloqueados durante los plazos necesarios para atender responsabilidades.</li>
          <li>Los registros de consentimiento se conservan durante la relación contractual y los plazos razonables de defensa o cumplimiento legal.</li>
          <li>Las consultas de soporte se eliminan o anonimizan cuando dejan de ser necesarias, salvo que deban conservarse por una reclamación.</li>
          <li>Los registros técnicos se conservan durante periodos limitados definidos por la operación y seguridad de cada proveedor.</li>
        </ul>
      </LegalSection>

      <LegalSection id="derechos" title="5. Derechos de las personas">
        <p>
          Puedes solicitar acceso, rectificación, supresión, oposición, limitación y
          portabilidad cuando corresponda. También puedes retirar un consentimiento sin
          que ello afecte a la licitud del tratamiento anterior.
        </p>
        <p>
          Escribe a <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>,
          indicando el derecho que deseas ejercer. Podrá solicitarse información
          adicional proporcionada para verificar tu identidad, evitando recoger más
          datos de los necesarios.
        </p>
        <p>
          Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la{" "}
          <a href="https://www.aepd.es" rel="noreferrer">Agencia Española de Protección de Datos</a>.
        </p>
      </LegalSection>

      <LegalSection id="seguridad" title="6. Seguridad, menores y cambios">
        <p>
          Se emplean controles server-side, cookies de sesión firmadas, validación de
          firma y producto en Stripe, acceso administrativo a Supabase y minimización
          de logs. Ningún sistema es infalible; las medidas se revisarán en función del
          riesgo y la evolución técnica.
        </p>
        <p>
          La persona que contrata debe tener capacidad legal. En caso de menores,
          deberá actuar quien tenga la autorización o representación legal necesaria.
          Esta política puede actualizarse cuando cambie el servicio o la normativa;
          la fecha y versión visibles permiten identificar el texto vigente.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}

