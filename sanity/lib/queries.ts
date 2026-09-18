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

export const experiencesQuery = defineQuery(`
  *[_type == "experience"] | order(title asc) {
    title,
    "slug": slug.current,
    category,
    summary,
    verified,
    "imageUrl": image.asset->url
  }
`);

export const diningQuery = defineQuery(`
  *[_type == "dining"] | order(_createdAt asc) {
    title,
    summary,
    cuisine,
    openingHours,
    "imageUrl": image.asset->url
  }
`);

export const offersQuery = defineQuery(`
  *[_type == "offer" && active == true] | order(title asc) {
    title,
    "slug": slug.current,
    summary,
    conditions
  }
`);

export const faqsQuery = defineQuery(`
  *[_type == "faq"] | order(sortOrder asc, question asc) {
    question,
    answer,
    sortOrder
  }
`);

export const galleryQuery = defineQuery(`
  *[_type == "galleryItem"] | order(sortOrder asc) {
    alt,
    category,
    "imageUrl": image.asset->url
  }
`);

export const attractionsQuery = defineQuery(`
  *[_type == "attraction"] | order(title asc) {
    title,
    summary,
    travelContext,
    verified
  }
`);


export const heroCarouselQuery = defineQuery(`
  *[_type == "heroCarousel" && page == $page][0] {
    intervalSeconds,
    "slides": slides[] {
      alt,
      "imageUrl": image.asset->url
    }
  }
`);
