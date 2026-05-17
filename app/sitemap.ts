import { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dhruv.systems";
  
  // Base routes mapping
  const staticRoutes = ["", "/systems", "/engineering-notes", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Fetch dynamic blog routes
  const notes = getAllNotes();
  const dynamicRoutes = notes.map((note) => ({
    url: `${baseUrl}/engineering-notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
