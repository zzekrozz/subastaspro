import { requireCourseSession } from "@/lib/course-session";

export default async function CourseLayout({ children }) {
  await requireCourseSession();

  return children;
}
