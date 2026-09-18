import { sanityClient } from "@/sanity/lib/client";
import { conceptImages } from "@/lib/media/concept-images";
import {
  attractionsQuery,
  diningQuery,
  experiencesQuery,
  faqsQuery,
  galleryQuery,
  offersQuery,
} from "@/sanity/lib/queries";

export type Experience = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  verified: boolean;
  imageUrl?: string;
};

export type Dining = {
  title: string;
  summary: string;
  cuisine?: string;
  openingHours?: string;
  imageUrl?: string;
};

export type Offer = {
  title: string;
  slug: string;
  summary: string;
  conditions?: string;
};

export type Faq = {
  question: string;
  answer: string;
  sortOrder: number;
};

export type GalleryItem = {
  alt: string;
  category: string;
  imageUrl?: string;
};

export type Attraction = {
  title: string;
  summary: string;
  travelContext?: string;
  verified: boolean;
};

const demoExperiences: Experience[] = [
  {
    title: "Discover Kandy",
    slug: "discover-kandy",
    category: "Destination",
    summary:
      "A destination-led content pattern for culture, landscapes and independently visited Kandy highlights. Final property-arranged activities remain unpublished until verified.",
    verified: true,
    imageUrl: conceptImages.kandyCity.src,
  },
  {
    title: "Slow mornings",
    slug: "slow-mornings",
    category: "Stay concept",
    summary:
      "A concept story showing how real breakfast, views and morning routines can become a memorable reason to stay once the property supplies final content.",
    verified: false,
    imageUrl: conceptImages.breakfastTerrace.src,
  },
  {
    title: "Nature around Victoria",
    slug: "nature-around-victoria",
    category: "Destination",
    summary:
      "An editorial direction for the wider landscape and quieter setting, without inventing a resort-operated excursion.",
    verified: true,
    imageUrl: conceptImages.heroTea.src,
  },
];

const demoDining: Dining[] = [
  {
    title: "Dining, given room to matter",
    summary:
      "The final page will present verified breakfast, cuisine, dietary support, opening hours and real property food photography. This private demo uses licensed concept imagery to show the intended premium presentation.",
    cuisine: "Final cuisine details pending property confirmation",
    openingHours: "Hours to be confirmed",
    imageUrl: conceptImages.dining.src,
  },
];

const demoGalleryItems: GalleryItem[] = [
  {
    alt: conceptImages.heroTea.alt,
    category: "Hill Country",
    imageUrl: conceptImages.heroTea.src,
  },
  {
    alt: conceptImages.roomPanoramic.alt,
    category: "Stay Concept",
    imageUrl: conceptImages.roomPanoramic.src,
  },
  {
    alt: conceptImages.breakfastTerrace.alt,
    category: "Dining Concept",
    imageUrl: conceptImages.breakfastTerrace.src,
  },
  {
    alt: conceptImages.kandyCity.alt,
    category: "Kandy",
    imageUrl: conceptImages.kandyCity.src,
  },
  {
    alt: conceptImages.roomNature.alt,
    category: "Stay Concept",
    imageUrl: conceptImages.roomNature.src,
  },
  {
    alt: conceptImages.hillLake.alt,
    category: "Landscape",
    imageUrl: conceptImages.hillLake.src,
  },
];

const demoFaqs: Faq[] = [
  {
    question: "How do I check availability?",
    answer:
      "Use the availability form to send your preferred dates and guest count. In this private demo, email delivery activates only after the property inbox is connected.",
    sortOrder: 10,
  },
  {
    question: "Are the room names and amenities final?",
    answer:
      "No. Concept room labels are deliberately marked as unverified until the property confirms its current inventory, capacities, amenities and photography.",
    sortOrder: 20,
  },
  {
    question: "Will the final site support direct booking?",
    answer:
      "Yes. The architecture supports direct enquiry now and can later hand dates and guest details to a client-selected booking engine.",
    sortOrder: 30,
  },
  {
    question: "Are the images on this demo the hotel's real photos?",
    answer:
      "Not yet. The private demo uses licensed stock concept photography that is clearly separate from the property's real imagery. Client-owned or approved property media will replace it before public launch.",
    sortOrder: 40,
  },
];

const demoAttractions: Attraction[] = [
  {
    title: "Kandy heritage",
    summary:
      "A dedicated destination layer can introduce Kandy's cultural importance and help guests plan a stay without pretending the resort sits in the city centre.",
    travelContext: "Exact travel context to be verified for production.",
    verified: true,
  },
  {
    title: "Hill-country landscapes",
    summary:
      "The site's location story connects the property to the wider scenic character of the Central Province while keeping travel claims conservative.",
    travelContext: "Route and transfer details require client confirmation.",
    verified: true,
  },
  {
    title: "Victoria surroundings",
    summary:
      "Landscape-led content can explain why guests may choose a quieter setting outside the busiest parts of Kandy.",
    travelContext: "Specific activities are not presented as hotel-operated unless confirmed.",
    verified: true,
  },
];

type SanityExperience = Partial<Experience>;
type SanityDining = Partial<Dining>;
type SanityOffer = Partial<Offer>;
type SanityFaq = Partial<Faq>;
type SanityGallery = Partial<GalleryItem>;
type SanityAttraction = Partial<Attraction>;

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    return await sanityClient.fetch<T>(query);
  } catch {
    return fallback;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  const data = await safeFetch<SanityExperience[]>(experiencesQuery, demoExperiences);
  const normalized = data
    .filter((item) => item.title && item.summary)
    .map((item, index) => ({
      title: item.title!,
      slug: item.slug || `experience-${index + 1}`,
      category: item.category || "Experience",
      summary: item.summary!,
      verified: item.verified ?? false,
      imageUrl: item.imageUrl,
    }));
  return normalized.length ? normalized : demoExperiences;
}

export async function getDining(): Promise<Dining[]> {
  const data = await safeFetch<SanityDining[]>(diningQuery, demoDining);
  const normalized = data
    .filter((item) => item.title && item.summary)
    .map((item) => ({
      title: item.title!,
      summary: item.summary!,
      cuisine: item.cuisine,
      openingHours: item.openingHours,
      imageUrl: item.imageUrl,
    }));
  return normalized.length ? normalized : demoDining;
}

export async function getOffers(): Promise<Offer[]> {
  const data = await safeFetch<SanityOffer[]>(offersQuery, []);
  return data
    .filter((item) => item.title && item.summary)
    .map((item, index) => ({
      title: item.title!,
      slug: item.slug || `offer-${index + 1}`,
      summary: item.summary!,
      conditions: item.conditions,
    }));
}

export async function getFaqs(): Promise<Faq[]> {
  const data = await safeFetch<SanityFaq[]>(faqsQuery, demoFaqs);
  const normalized = data
    .filter((item) => item.question && item.answer)
    .map((item) => ({
      question: item.question!,
      answer: item.answer!,
      sortOrder: item.sortOrder ?? 100,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
  return normalized.length ? normalized : demoFaqs;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const data = await safeFetch<SanityGallery[]>(galleryQuery, demoGalleryItems);
  const normalized = data
    .filter((item) => item.imageUrl)
    .map((item) => ({
      alt: item.alt || "Concept gallery image",
      category: item.category || "Concept",
      imageUrl: item.imageUrl,
    }));
  return normalized.length ? normalized : demoGalleryItems;
}

export async function getAttractions(): Promise<Attraction[]> {
  const data = await safeFetch<SanityAttraction[]>(attractionsQuery, demoAttractions);
  const normalized = data
    .filter((item) => item.title && item.summary)
    .map((item) => ({
      title: item.title!,
      summary: item.summary!,
      travelContext: item.travelContext,
      verified: item.verified ?? false,
    }));
  return normalized.length ? normalized : demoAttractions;
}
