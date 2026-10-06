import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/projects";

const baseUrl = "https://seungwon9-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    ...getPublishedProjects().map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      priority: 0.8,
    })),
  ];
}
