import type { MetadataRoute } from "next";
import { allPageEntries, absoluteUrl, pageImage } from "@/lib/seo";

const lastModified = new Date("2026-07-17");

function priorityFor(pageKey: string) {
  if (pageKey === "home") return 1;
  if (pageKey === "machines" || pageKey === "services" || pageKey === "used" || pageKey === "projects") return 0.9;
  if (pageKey === "contact") return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return allPageEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.pageKey === "home" ? "weekly" : "monthly",
    priority: priorityFor(entry.pageKey),
    images: [absoluteUrl(pageImage(entry.pageKey))]
  }));
}
