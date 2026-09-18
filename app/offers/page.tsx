import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getOffers } from "@/lib/content/supporting";

export const metadata = createPageMetadata({
  title: "Offers",
  description: "Explore current property-approved direct offers and stay packages.",
  path: "/offers",
});

export default async function OffersPage() {
  const [offers, carousel] = await Promise.all([getOffers(), getPageCarousel("offers")]);

  return (
    <main id="main-content" className="inner-page">
      <section className="cinematic-page-hero">
        <CinematicCarousel
          className="cinematic-page-hero__media"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Offers photography"
        />
        <Container className="cinematic-page-hero__content">
          <p className="eyebrow eyebrow--light">Offers</p>
          <h1>Value without fake urgency.</h1>
          <p>
            Only real, owner-approved direct offers belong here. The demo deliberately avoids
            invented discounts, countdowns and “best rate” claims.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          {offers.length ? (
            <div className="offer-grid">
              {offers.map((offer) => (
                <article key={offer.slug}>
                  <p className="eyebrow">Direct offer</p>
                  <h2>{offer.title}</h2>
                  <p>{offer.summary}</p>
                  {offer.conditions && <small>{offer.conditions}</small>}
                  <Link className="text-link" href="/availability">
                    Enquire <span>↘</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-editorial">
              <p className="eyebrow">No approved offers yet</p>
              <h2 className="display-heading">The design is ready. The claim waits for the client.</h2>
              <p>
                Once the property approves a real direct-booking benefit or seasonal package, the CMS
                can publish it here without a code change.
              </p>
              <Link className="button button--dark" href="/availability">
                Check availability
              </Link>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
