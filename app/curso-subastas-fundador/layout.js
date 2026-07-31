import { requireCourseSession } from "@/lib/course-session";

export default async function CursoSubastasFundadorLayout({ children }) {
  await requireCourseSession();

  return children;
}
