import { sanityClient } from "@/sanity/lib/client";
import { heroCarouselQuery } from "@/sanity/lib/queries";
import {
  fallbackCarousels,
  type CarouselPageKey,
} from "@/lib/media/page-carousels";
import type { CarouselSlide } from "@/components/media/cinematic-carousel";

type CarouselQueryResult = {
  intervalSeconds?: number;
  slides?: Array<{
    alt?: string;
    imageUrl?: string;
  }>;
} | null;

export type PageCarousel = {
  intervalMs: number;
  slides: CarouselSlide[];
};

export async function getPageCarousel(page: CarouselPageKey): Promise<PageCarousel> {
  const fallback: PageCarousel = {
    intervalMs: 6500,
    slides: fallbackCarousels[page],
  };

  if (!sanityClient) return fallback;

  try {
    const result = await sanityClient.fetch<CarouselQueryResult>(heroCarouselQuery, { page });

    const slides =
      result?.slides
        ?.filter((item) => item.imageUrl)
        .map((item, index) => ({
          imageUrl: item.imageUrl!,
          alt: item.alt?.trim() || `${page} slideshow image ${index + 1}`,
        })) ?? [];

    return {
      intervalMs: Math.min(12000, Math.max(4000, (result?.intervalSeconds ?? 6.5) * 1000)),
      slides: slides.length ? slides : fallback.slides,
    };
  } catch {
    return fallback;
  }
}
