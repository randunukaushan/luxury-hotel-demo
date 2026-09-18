import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getGalleryItems } from "@/lib/content/supporting";

export const metadata = createPageMetadata({
  title: "Gallery",
  description: "Explore the editorial property gallery and photography experience.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const [items, carousel] = await Promise.all([getGalleryItems(), getPageCarousel("gallery")]);

  return (
    <main id="main-content" className="inner-page">
      <section className="cinematic-page-hero">
        <CinematicCarousel
          className="cinematic-page-hero__media"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Gallery hero photography"
        />
        <Container className="cinematic-page-hero__content">
          <p className="eyebrow eyebrow--light">Gallery</p>
          <h1>Show the truth beautifully.</h1>
          <p>
            The final gallery will use client-owned or licensed property imagery. Until then, the
            layout demonstrates composition without borrowing OTA photographs.
          </p>
        </Container>
      </section>

      <section className="section section--linen">
        <Container>
          {items.length > 0 ? (
            <GalleryGrid items={items} />
          ) : (
            <div className="concept-gallery" aria-label="Editorial gallery layout preview">
              <div className="concept-gallery__a" />
              <div className="concept-gallery__b" />
              <div className="concept-gallery__c" />
              <div className="concept-gallery__d" />
              <div className="concept-gallery__e" />
            </div>
          )}
          <p className="gallery-disclaimer">
            No unlicensed hotel photography is included in this repository.
          </p>
        </Container>
      </section>
    </main>
  );
}
