import type { MetadataRoute } from "next";
import { site } from "@/app/lib/site";

/** Generates /robots.txt — allow everything, point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
