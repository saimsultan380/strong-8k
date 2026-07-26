import type { MetadataRoute } from "next";
import { canonicalUrl, sitemapRoutes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map(({ path, changeFrequency, priority }) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
