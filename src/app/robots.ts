import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://seungwon9-portfolio.vercel.app/sitemap.xml",
  };
}
