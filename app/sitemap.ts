import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
    return ["/", "/work", ...getProjects().map(project => "/work/" + project.slug)]
        .map(path => ({ url: new URL(path, "https://michel-merae.com").href }));
}
