import Image from "next/image";
import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getAttractions } from "@/lib/content/supporting";
import { conceptImages } from "@/lib/media/concept-images";

export const metadata = createPageMetadata({
  title: "Kandy",
  description: "Discover destination context for a scenic stay near Kandy, Sri Lanka.",
  path: "/kandy",
});

export default async function KandyPage() {
  const [attractions, carousel] = await Promise.all([getAttractions(), getPageCarousel("kandy")]);

  return (
    <main id="main-content" className="inner-page">
      <section className="cinematic-page-hero">
        <CinematicCarousel
          className="cinematic-page-hero__media"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Kandy destination photography"
        />
        <Container className="cinematic-page-hero__content">
          <p className="eyebrow eyebrow--light">Kandy · Sri Lanka</p>
          <h1>Close enough to explore. Far enough to breathe.</h1>
          <p>
            The destination page makes location a strength while staying honest about travel,
            transfers and the quieter setting outside the busiest city streets.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="destination-intro">
            <p className="eyebrow">The destination layer</p>
            <h2 className="display-heading">Give guests context before they arrive.</h2>
          </div>

          <div className="destination-hero-media">
            <Image
              src={conceptImages.kandyCity.src}
              alt={conceptImages.kandyCity.alt}
              fill
              sizes="(max-width: 980px) 100vw, 1440px"
            />
            <span>Concept destination photography · Kandy</span>
          </div>

          <div className="destination-list">
            {attractions.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  {item.travelContext && <small>{item.travelContext}</small>}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
