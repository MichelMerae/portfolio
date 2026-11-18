import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/lib/content";

export const alt = "Case study from Michel Merae’s automation portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudies().find((p) => p.study.slug === slug);
  if (!project) notFound();
  return new ImageResponse(
    (
      <div
        style={{
          background: "#19161e",
          color: "#faf8ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 65,
        }}
      >
        <div style={{ display: "flex", color: "#cfb8ff", fontSize: 30 }}>
          {project.study.organization} · {project.category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            lineHeight: 1.05,
            maxWidth: 1020,
          }}
        >
          {project.title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#cbc6d1" }}>
          Michel Merae · michel-merae.com
        </div>
      </div>
    ),
    size,
  );
}
