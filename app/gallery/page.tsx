import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getGalleryItems } from "@/lib/content/supporting";

export const metadata: Metadata = {
  title: "Gallery",
  description: "An editorial gallery direction for the resort website concept.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--stone">
        <Container>
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
            <div className="real-gallery">
              {items.map((item, index) => (
                <figure key={`${item.imageUrl}-${index}`}>
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                  )}
                  <figcaption>{item.category}</figcaption>
                </figure>
              ))}
            </div>
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
