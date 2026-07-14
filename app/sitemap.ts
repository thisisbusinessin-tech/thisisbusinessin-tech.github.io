import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { indexableRoutes } from "@/lib/seo/urls";
import { getAllArticles } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = indexableRoutes.map((path) => ({
    url: `${siteConfig.domain}${path === "/" ? "/" : path}`,
    lastModified: "2026-07-14",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog/") ? 0.7 : 0.8
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles()
    .filter((a) => a.indexable)
    .map((article) => ({
      url: `${siteConfig.domain}${article.canonicalPath}`,
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }));

  return [...staticEntries, ...articleEntries];
}
