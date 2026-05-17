import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Block backend API endpoints from indexation
    },
    sitemap: "https://dhruv.systems/sitemap.xml",
  };
}
