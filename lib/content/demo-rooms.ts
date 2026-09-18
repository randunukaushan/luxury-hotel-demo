import type { Room } from "@/lib/content/types";

export const demoRooms: Room[] = [
  {
    slug: "panoramic-stay-concept",
    title: "Panoramic Stay",
    eyebrow: "Concept room 01",
    summary:
      "An editorial room concept designed around open landscape views, quiet mornings and clear decision details.",
    description:
      "This private sales-demo room shows how a verified room can be presented once the property confirms its current inventory. The final version will replace concept labels with the official room name, real photography, capacity, bed type, size, view and amenities supplied by the owner.",
    size: "To be verified",
    occupancy: "To be verified",
    bed: "To be verified",
    view: "Scenic view concept",
    features: ["Landscape-first presentation", "Clear room facts", "Direct enquiry path"],
    amenities: ["Official amenity list pending client confirmation"],
    galleryImageUrls: [],
    visualTone: "lake",
    isConcept: true,
  },
  {
    slug: "nature-stay-concept",
    title: "Nature Stay",
    eyebrow: "Concept room 02",
    summary:
      "A calmer visual direction for a room or suite whose real strength is privacy, greenery and an unhurried stay.",
    description:
      "This room detail is intentionally factual about what is not yet known. Once the hotel confirms the current room category, the design can surface accurate dimensions, occupancy, bedding, balcony or terrace details, bathroom features and included services without changing the page architecture.",
    size: "To be verified",
    occupancy: "To be verified",
    bed: "To be verified",
    view: "Nature-facing concept",
    features: ["Quiet-luxury layout", "Grouped amenities", "Mobile-first booking actions"],
    amenities: ["Official amenity list pending client confirmation"],
    galleryImageUrls: [],
    visualTone: "forest",
    isConcept: true,
  },
  {
    slug: "lake-outlook-concept",
    title: "Lake Outlook",
    eyebrow: "Concept room 03",
    summary:
      "A premium comparison pattern for a verified room with a strong outlook or balcony experience.",
    description:
      "The purpose of this concept is to demonstrate the quality of the room-shopping experience before using uncertain public room names as production facts. The final data can come from Sanity and will automatically populate the Stay listing and individual room route.",
    size: "To be verified",
    occupancy: "To be verified",
    bed: "To be verified",
    view: "Lake-view concept",
    features: ["Comparison-ready metadata", "Editorial gallery", "Availability CTA"],
    amenities: ["Official amenity list pending client confirmation"],
    galleryImageUrls: [],
    visualTone: "stone",
    isConcept: true,
  },
];
