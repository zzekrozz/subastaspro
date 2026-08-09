import { notFound, redirect } from "next/navigation";

import { getModuleBySlug, getModulePath } from "@/lib/course-content";

export default async function LegacyCourseModulePage({ params }) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) notFound();

  redirect(getModulePath(module.slug));
}
