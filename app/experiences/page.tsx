import Image from "next/image";
import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getExperiences } from "@/lib/content/supporting";

export const metadata = createPageMetadata({
  title: "Experiences",
  description: "Explore destination stories and verified experience content for a scenic stay near Kandy.",
  path: "/experiences",
});

export default async function ExperiencesPage() {
  const [experiences, carousel] = await Promise.all([getExperiences(), getPageCarousel("experiences")]);

  return (
    <main id="main-content" className="inner-page">
      <section className="cinematic-page-hero">
        <CinematicCarousel
          className="cinematic-page-hero__media"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Experience photography"
        />
        <Container className="cinematic-page-hero__content">
          <p className="eyebrow eyebrow--light">Experience</p>
          <h1>The stay should be more than the room.</h1>
          <p>
            Destination stories and verified activities give guests a reason to imagine their time
            here before they ask about a booking.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="editorial-cards">
            {experiences.map((item, index) => (
              <article className="editorial-card" key={item.slug}>
                <div className={`editorial-card__visual editorial-card__visual--${(index % 3) + 1}`}>
                  {item.imageUrl && (
                    <Image
                      className="editorial-card__image"
                      src={item.imageUrl}
                      alt={`${item.title} concept photography`}
                      fill
                      sizes="(max-width: 980px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="editorial-card__body">
                  <div className="editorial-card__meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.category}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  {!item.verified && <span className="concept-pill">Concept content</span>}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
