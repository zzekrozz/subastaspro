import { CourseExperience } from "@/components/course-experience";
import { getCourseViewer } from "@/lib/course-session";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Área privada",
  robots: {
    index: false,
    follow: false
  }
};

export default async function CoursePage() {
  const viewer = await getCourseViewer();

  return <CourseExperience viewer={viewer} />;
}
