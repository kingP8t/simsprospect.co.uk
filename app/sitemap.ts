import type { MetadataRoute } from "next";
import { site } from "@/app/lib/site";
import { services } from "@/app/lib/services";
import { caseStudies } from "@/app/lib/case-studies";

/** Generates /sitemap.xml from the same data that drives the routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${site.url}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
