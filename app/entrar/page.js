import { redirect } from "next/navigation";

import { GoogleAccess } from "@/components/google-access";
import { readCourseSession } from "@/lib/course-session";
import { googleAuthConfigFromEnv } from "@/lib/google-identity-core";
import { PRIVATE_ROUTE } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Entrar",
  description: "Accede al área privada de SubastasPro con tu cuenta de Google.",
  robots: { index: false, follow: false }
};

export default async function EntrarPage() {
  if (await readCourseSession()) {
    redirect(PRIVATE_ROUTE);
  }

  const { clientId } = googleAuthConfigFromEnv();

  return <GoogleAccess clientId={clientId} />;
}
