const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteStatus =
  process.env.NEXT_PUBLIC_SITE_STATUS === "production" ? "production" : "preview";

export const isProductionSite = siteStatus === "production";

export const siteConfig = {
  name: "Kandy Victoria Eco Resort",
  shortName: "Kandy Victoria",
  description:
    "A peaceful scenic stay near Kandy, Sri Lanka, shaped by wide views, calm mornings and warm hospitality.",
  url: configuredUrl.replace(/\/$/, ""),
} as const;

export const navigation = [
  { label: "Stay", href: "/stay" },
  { label: "Experience", href: "/experiences" },
  { label: "Dine", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Kandy", href: "/kandy" },
  { label: "Offers", href: "/offers" },
] as const;
