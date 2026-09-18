import type { MetadataRoute } from "next";
import { getRooms } from "@/lib/content/rooms";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/stay",
  "/experiences",
  "/dining",
  "/gallery",
  "/kandy",
  "/offers",
  "/faq",
  "/contact",
  "/availability",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rooms = await getRooms();
  const now = new Date();

  return [
    ...routes.map((route, index) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.7,
    })),
    ...rooms.map((room) => ({
      url: `${siteConfig.url}/stay/${room.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
