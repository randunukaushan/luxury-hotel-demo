export const siteConfig = {
  name: "Kandy Victoria Eco Resort",
  shortName: "Kandy Victoria",
  description:
    "A premium website concept for a peaceful scenic stay near Kandy, Sri Lanka.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navigation = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Dine", href: "#dine" },
  { label: "Gallery", href: "#gallery" },
  { label: "Kandy", href: "#kandy" },
] as const;
