import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", lastModified: "2026-01-13" },
    { path: "/articles", lastModified: "2025-12-27" },
    { path: "/contact", lastModified: "2025-12-27" },
    { path: "/work", lastModified: "2025-12-27" },
    { path: "/about", lastModified: "2025-12-27" },
  ];

  return pages.map((page) => ({
    url: `https://wiktorchudy.me${page.path}`,
    lastModified: new Date(page.lastModified),
  }));
}
