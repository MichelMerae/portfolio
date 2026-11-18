import { getCaseStudies } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return getCaseStudies().map(({ study }) => ({ slug: study.slug }));
}

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
