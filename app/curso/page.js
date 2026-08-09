import { CourseExperience } from "@/components/course-experience";
export const metadata = {
  title: "Área privada",
  robots: {
    index: false,
    follow: false
  }
};

export default function CoursePage() {
  return <CourseExperience />;
}
