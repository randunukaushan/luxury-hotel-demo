import { conceptImages } from "@/lib/media/concept-images";
import type { CarouselSlide } from "@/components/media/cinematic-carousel";

export type CarouselPageKey =
  | "home"
  | "stay"
  | "experiences"
  | "dining"
  | "gallery"
  | "kandy"
  | "offers";

const slide = (image: { src: string; alt: string }): CarouselSlide => ({
  imageUrl: image.src,
  alt: image.alt,
});

export const fallbackCarousels: Record<CarouselPageKey, CarouselSlide[]> = {
  home: [
    slide(conceptImages.heroTea),
    slide(conceptImages.hillLake),
    slide(conceptImages.kandyCity),
    slide(conceptImages.roomSriLanka),
    slide(conceptImages.breakfastTerrace),
  ],
  stay: [
    slide(conceptImages.roomSriLanka),
    slide(conceptImages.roomPanoramic),
    slide(conceptImages.roomNature),
    slide(conceptImages.roomCozyMountain),
    slide(conceptImages.roomModernView),
  ],
  experiences: [
    slide(conceptImages.heroTea),
    slide(conceptImages.kandyCity),
    slide(conceptImages.hillLake),
    slide(conceptImages.kandyLake),
    slide(conceptImages.breakfastTerrace),
  ],
  dining: [
    slide(conceptImages.dining),
    slide(conceptImages.breakfastTerrace),
    slide(conceptImages.diningService),
    slide(conceptImages.diningPoached),
    slide(conceptImages.diningSpread),
  ],
  gallery: [
    slide(conceptImages.roomPanoramic),
    slide(conceptImages.heroTea),
    slide(conceptImages.dining),
    slide(conceptImages.kandyCity),
    slide(conceptImages.hillLake),
  ],
  kandy: [
    slide(conceptImages.kandyCity),
    slide(conceptImages.heroTea),
    slide(conceptImages.kandyTemple),
    slide(conceptImages.kandyHillside),
    slide(conceptImages.kandyLake),
  ],
  offers: [
    slide(conceptImages.roomLake),
    slide(conceptImages.roomSriLanka),
    slide(conceptImages.breakfastTerrace),
    slide(conceptImages.hillLake),
    slide(conceptImages.roomBathView),
  ],
};
