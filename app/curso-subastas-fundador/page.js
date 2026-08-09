import { redirect } from "next/navigation";

import { PRIVATE_ROUTE } from "@/lib/site-config";

export default function LegacyCoursePage() {
  redirect(PRIVATE_ROUTE);
}
