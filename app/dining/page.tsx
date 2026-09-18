import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { getDining } from "@/lib/content/supporting";
import { conceptImages } from "@/lib/media/concept-images";

export const metadata = createPageMetadata({
  title: "Dining",
  description: "Explore the dining and breakfast experience for the premium hotel website concept.",
  path: "/dining",
});

export default async function DiningPage() {
  const dining = await getDining();
  const primary = dining[0];

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--bronze">
        <Container>
          <p className="eyebrow eyebrow--light">Dine</p>
          <h1>Taste should feel like part of the stay.</h1>
          <p>
            Real food photography and verified service details will turn breakfast and dining into
            decision-making content instead of a small amenity icon.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="split-story">
            <div className="food-concept-art">
              <Image
                className="food-concept-art__image"
                src={primary?.imageUrl || conceptImages.dining.src}
                alt={conceptImages.dining.alt}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <span className="concept-media-label">Concept dining photography</span>
            </div>
            <div className="split-story__copy">
              <p className="eyebrow">The dining story</p>
              <h2 className="display-heading">{primary?.title || "Dining details pending"}</h2>
              <p>{primary?.summary}</p>
              <dl className="info-list">
                <div><dt>Cuisine</dt><dd>{primary?.cuisine || "To be confirmed"}</dd></div>
                <div><dt>Hours</dt><dd>{primary?.openingHours || "To be confirmed"}</dd></div>
              </dl>
              <Link className="button button--dark" href="/availability">
                Ask about your stay
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
