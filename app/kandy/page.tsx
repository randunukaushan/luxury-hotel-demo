import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { getAttractions } from "@/lib/content/supporting";

export const metadata = createPageMetadata({
  title: "Kandy",
  description: "Discover destination context for a scenic stay near Kandy, Sri Lanka.",
  path: "/kandy",
});

export default async function KandyPage() {
  const attractions = await getAttractions();

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--lake">
        <Container>
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
