import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { posts } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = ["", "/about", "/courses", "/academy", ...posts.map((post) => `/academy/${post.slug}`), "/resources", "/mentors", "/contact", "/register"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/register" ? 0.9 : 0.8,
  }));
}
