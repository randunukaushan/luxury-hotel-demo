export const roomsQuery = `
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
`;

export const roomBySlugQuery = `
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
`;

export const experiencesQuery = `
  *[_type == "experience"] | order(title asc) {
    title,
    "slug": slug.current,
    category,
    summary,
    verified,
    "imageUrl": image.asset->url
  }
`;

export const diningQuery = `
  *[_type == "dining"] | order(_createdAt asc) {
    title,
    summary,
    cuisine,
    openingHours,
    "imageUrl": image.asset->url
  }
`;

export const offersQuery = `
  *[_type == "offer" && active == true] | order(title asc) {
    title,
    "slug": slug.current,
    summary,
    conditions
  }
`;

export const faqsQuery = `
  *[_type == "faq"] | order(sortOrder asc, question asc) {
    question,
    answer,
    sortOrder
  }
`;

export const galleryQuery = `
  *[_type == "galleryItem"] | order(sortOrder asc) {
    alt,
    category,
    "imageUrl": image.asset->url
  }
`;

export const attractionsQuery = `
  *[_type == "attraction"] | order(title asc) {
    title,
    summary,
    travelContext,
    verified
  }
`;


export const heroCarouselQuery = `
  *[_type == "heroCarousel" && page == $page][0] {
    intervalSeconds,
    "slides": slides[] {
      alt,
      "imageUrl": image.asset->url
    }
  }
`;
