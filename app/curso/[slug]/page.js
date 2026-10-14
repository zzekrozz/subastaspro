import { notFound } from "next/navigation";

import { ModulePageExperience } from "@/components/module-page-experience";
import { courseModules, getModuleBySlug } from "@/lib/course-content";
import { getCourseViewer } from "@/lib/course-session";

export function generateStaticParams() {
  return courseModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) return { title: "Módulo no encontrado" };

  return {
    title: module.title,
    robots: { index: false, follow: false }
  };
}

export default async function CourseModulePage({ params }) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) notFound();

  const viewer = await getCourseViewer();

  return <ModulePageExperience module={module} viewer={viewer} />;
}
