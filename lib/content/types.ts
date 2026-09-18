export type Room = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  size?: string;
  occupancy?: string;
  bed?: string;
  view?: string;
  features: string[];
  amenities: string[];
  heroImageUrl?: string;
  galleryImageUrls: string[];
  visualTone: "lake" | "forest" | "stone";
  isConcept?: boolean;
};

export type RoomQueryResult = {
  slug?: string;
  title?: string;
  eyebrow?: string;
  summary?: string;
  description?: string;
  size?: string;
  occupancy?: string;
  bed?: string;
  view?: string;
  features?: string[];
  amenities?: string[];
  heroImageUrl?: string;
  galleryImageUrls?: Array<string | null>;
  visualTone?: Room["visualTone"];
  isConcept?: boolean;
};
