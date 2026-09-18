import { defineQuery } from "next-sanity";

export const roomsQuery = defineQuery(`
  *[_type == "room" && coalesce(active, true) == true]
  | order(sortOrder asc, title asc) {
    "slug": slug.current,
    title,
    eyebrow,
    summary,
    description,
    size,
    occupancy,
    bed,
    view,
    features,
    amenities,
    visualTone,
    isConcept,
    "heroImageUrl": heroImage.asset->url,
    "galleryImageUrls": gallery[].asset->url
  }
`);

export const roomBySlugQuery = defineQuery(`
  *[_type == "room" && slug.current == $slug && coalesce(active, true) == true][0] {
    "slug": slug.current,
    title,
    eyebrow,
    summary,
    description,
    size,
    occupancy,
    bed,
    view,
    features,
    amenities,
    visualTone,
    isConcept,
    "heroImageUrl": heroImage.asset->url,
    "galleryImageUrls": gallery[].asset->url
  }
`);
