import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { programmes } from "@/content/programmes";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/programmes",
    ...programmes.map((p) => `/programmes/${p.slug}`),
    "/whole-school",
    "/poetry",
    "/about",
    "/request",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
