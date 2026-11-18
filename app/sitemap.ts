import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/work",
    "/de",
    ...getCaseStudies().map((p) => "/work/" + p.study.slug),
  ].map((path) => ({ url: new URL(path, "https://michel-merae.com").href }));
}
