import { redirect } from "next/navigation";

import { PUBLIC_ROUTE } from "@/lib/site-config";

export default function HomePage() {
  redirect(PUBLIC_ROUTE);
}
