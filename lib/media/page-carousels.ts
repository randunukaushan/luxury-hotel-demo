import { conceptImages } from "@/lib/media/concept-images";
import type { CarouselSlide } from "@/components/media/cinematic-carousel";

export type CarouselPageKey = "home" | "experiences" | "dining" | "gallery" | "kandy" | "offers";

const slide = (image: { src: string; alt: string }): CarouselSlide => ({
  imageUrl: image.src,
  alt: image.alt,
});

export const fallbackCarousels: Record<CarouselPageKey, CarouselSlide[]> = {
  home: [
    slide(conceptImages.heroTea),
    slide(conceptImages.hillLake),
    slide(conceptImages.kandyCity),
  ],
  experiences: [
    slide(conceptImages.heroTea),
    slide(conceptImages.kandyCity),
    slide(conceptImages.breakfastTerrace),
  ],
  dining: [
    slide(conceptImages.dining),
    slide(conceptImages.breakfastTerrace),
    slide(conceptImages.heroTea),
  ],
  gallery: [
    slide(conceptImages.roomPanoramic),
    slide(conceptImages.breakfastTerrace),
    slide(conceptImages.kandyCity),
    slide(conceptImages.hillLake),
  ],
  kandy: [
    slide(conceptImages.kandyCity),
    slide(conceptImages.heroTea),
    slide(conceptImages.hillLake),
  ],
  offers: [
    slide(conceptImages.roomLake),
    slide(conceptImages.breakfastTerrace),
    slide(conceptImages.hillLake),
  ],
};
