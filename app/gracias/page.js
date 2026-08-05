import { PaymentSuccessExperience } from "@/components/payment-success-experience";

export const metadata = {
  title: {
    absolute: "Pago confirmado | SubastasPro"
  },
  description:
    "Confirmación de compra y preparación del acceso privado a SubastasPro.",
  robots: {
    index: false,
    follow: false
  }
};

export const dynamic = "force-dynamic";

export default async function GraciasPage({ searchParams }) {
  const params = await searchParams;
  const sessionId =
    typeof params?.session_id === "string" ? params.session_id : null;
  const hasInvalidSessionParameter = Array.isArray(params?.session_id);

  return (
    <PaymentSuccessExperience
      hasInvalidSessionParameter={hasInvalidSessionParameter}
      sessionId={sessionId}
    />
  );
}
