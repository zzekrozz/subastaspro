import { CourseExperience } from "@/components/course-experience";
import { SITE_NAME } from "@/lib/site-config";

export const metadata = {
  title: `Area privada ${SITE_NAME}`,
  robots: {
    index: false,
    follow: false
  }
};

export default function CursoSubastasFundadorPage() {
  return <CourseExperience />;
}
