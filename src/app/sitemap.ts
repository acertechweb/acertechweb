import type { MetadataRoute } from "next";
import { allPageEntries, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPageEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: new Date(),
    changeFrequency: entry.pageKey === "home" ? "weekly" : "monthly",
    priority: entry.pageKey === "home" ? 1 : 0.7
  }));
}
