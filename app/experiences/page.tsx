import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getExperiences } from "@/lib/content/supporting";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Explore the destination and experience direction for the resort concept.",
};

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--forest">
        <Container>
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
                <div className={`editorial-card__visual editorial-card__visual--${(index % 3) + 1}`} />
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
