import { notFound } from "next/navigation";

import { ModulePageExperience } from "@/components/module-page-experience";
import { courseModules, getModuleBySlug } from "@/lib/course-content";
import { SITE_NAME } from "@/lib/site-config";

export function generateStaticParams() {
  return courseModules.map((module) => ({ slug: module.slug }));
}

export function generateMetadata({ params }) {
  const module = getModuleBySlug(params.slug);

  if (!module) {
    return {
      title: "Módulo no encontrado"
    };
  }

  return {
    title: `${module.title} | ${SITE_NAME}`,
    robots: {
      index: false,
      follow: false
    }
  };
}

export default function CourseModulePage({ params }) {
  const module = getModuleBySlug(params.slug);

  if (!module) {
    notFound();
  }

  return <ModulePageExperience module={module} />;
}
