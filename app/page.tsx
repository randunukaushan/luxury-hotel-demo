import Image from "next/image";
import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getRooms } from "@/lib/content/rooms";
import { conceptImages } from "@/lib/media/concept-images";
import { propertyPublicSnapshot } from "@/lib/property-public-snapshot";

export const metadata = createPageMetadata({
  title: "Home",
  description: "A peaceful scenic stay near Kandy, Sri Lanka, with wide views, calm mornings and warm hospitality.",
  path: "/",
});

const stays = [
  {
    number: "01",
    title: "Lake & mountain view stays",
    detail: "A calm stay concept shaped around scenic views, unhurried mornings and direct access to the landscape.",
    meta: "Room inventory to be confirmed",
    tone: "stay-card--lake",
    image: conceptImages.roomPanoramic,
  },
  {
    number: "02",
    title: "Nature-facing suites",
    detail: "A greener, quieter stay direction for guests looking for privacy, fresh air and a slower pace.",
    meta: "Final room facts pending client approval",
    tone: "stay-card--forest",
    image: conceptImages.roomNature,
  },
  {
    number: "03",
    title: "Panoramic room concepts",
    detail: "A panoramic stay direction that gives views and space the attention they deserve.",
    meta: "Names and capacities to be verified",
    tone: "stay-card--stone",
    image: conceptImages.roomLake,
  },
];

const principles = [
  ["Views", "Public guest feedback frequently highlights the surrounding lake and mountain scenery."],
  ["Calm", "A quieter setting gives the stay a slower rhythm away from the busiest parts of Kandy."],
  ["Hospitality", "Recent reviews repeatedly mention friendly, attentive service."],
  ["Dining", "Food and breakfast are recurring positives across public guest feedback."],
];

const galleryPreview = [
  [conceptImages.heroTea, "gallery-tile--a"],
  [conceptImages.roomPanoramic, "gallery-tile--b"],
  [conceptImages.breakfastTerrace, "gallery-tile--c"],
  [conceptImages.kandyCity, "gallery-tile--d"],
] as const;

export default async function HomePage() {
  const [rooms, carousel] = await Promise.all([getRooms(), getPageCarousel("home")]);

  return (
    <main id="main-content">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <CinematicCarousel
          className="hero__carousel"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Home hero photography"
        />

        <Container className="hero__content">
          <p className="eyebrow eyebrow--light">Kandy · Sri Lanka</p>
          <h1 id="hero-title">
            Above the landscape.
            <br />
            Away from the rush.
          </h1>
          <p className="hero__lede">
            A peaceful hill-country stay near Kandy — shaped by wide views, calm mornings and warm
            hospitality.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href="#availability">
              Check availability
            </a>
            <a className="text-link text-link--light" href="#story">
              Discover the retreat <span>↘</span>
            </a>
          </div>
        </Container>
        <div className="hero__note">Concept preview · unofficial · details subject to owner confirmation</div>
      </section>

      <section id="story" className="section section--ivory story">
        <Container>
          <div className="section-index">01 / THE ESCAPE</div>
          <div className="story__grid">
            <div>
              <p className="eyebrow">A quieter side of Kandy</p>
              <h2 className="display-heading">Let the setting do the talking.</h2>
            </div>
            <div className="story__copy">
              <p>
                Arrive somewhere quieter, look out across the landscape, and let the pace of the
                hills take over. Public guest feedback repeatedly highlights the calm setting,
                scenic views and welcoming service.
              </p>
              <p>
                Kandy is close enough for a day of exploring, while the resort’s setting gives the
                stay room to feel slower and more private.
              </p>
            </div>
          </div>

          <div className="landscape-card">
            <Image
              className="landscape-card__photo"
              src={conceptImages.hillLake.src}
              alt={conceptImages.hillLake.alt}
              fill
              sizes="(max-width: 900px) 100vw, 1440px"
            />
            <div className="landscape-card__caption">
              <span>SRI LANKA · HILL COUNTRY</span>
              <span>CONCEPT PHOTOGRAPHY</span>
            </div>
          </div>
        </Container>
      </section>

      <section id="stay" className="section section--linen stays">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">02 / Stay</p>
              <h2 className="display-heading">Rooms presented as reasons to stay.</h2>
            </div>
            <p className="section-intro">
              This preview uses concept room labels until the owner confirms the current room names,
              capacities and amenity details.
            </p>
          </div>

          <div className="stays__grid">
            {stays.map((stay) => (
              <article className={`stay-card ${stay.tone}`} key={stay.number}>
                <div className="stay-card__visual">
                  <Image
                    className="stay-card__image"
                    src={stay.image.src}
                    alt={stay.image.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                  />
                  <span className="concept-media-label">Concept room photography</span>
                </div>
                <div className="stay-card__body">
                  <div className="stay-card__number">{stay.number}</div>
                  <h3>{stay.title}</h3>
                  <p>{stay.detail}</p>
                  <span className="stay-card__meta">{stay.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="section section--forest immersive">
        <Container>
          <div className="section-index section-index--light">03 / THE EXPERIENCE</div>
          <div className="immersive__grid">
            <div>
              <p className="eyebrow eyebrow--light">Wake up here</p>
              <h2 className="display-heading display-heading--light">
                A stay built around what guests already value.
              </h2>
            </div>
            <div className="principles">
              {principles.map(([title, text]) => (
                <div className="principle" key={title}>
                  <span>{title}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--linen review-proof">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Guest proof</p>
              <h2 className="display-heading">The calm, views and service already have a story.</h2>
            </div>
            <p className="section-intro">
              Public review snapshot checked {propertyPublicSnapshot.checkedAt}. Ratings can change
              over time.
            </p>
          </div>

          <div className="review-proof__grid">
            {propertyPublicSnapshot.reviewSnapshot.map((item) => (
              <div className="review-proof__item" key={item.source}>
                <span>{item.source}</span>
                <strong>{item.score}</strong>
                <small>{item.count}</small>
              </div>
            ))}
          </div>

          <div className="review-proof__themes" aria-label="Common guest themes">
            {propertyPublicSnapshot.guestThemes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </Container>
      </section>

      <section id="dine" className="section section--ivory dine">
        <Container>
          <div className="dine__grid">
            <div className="dine__art">
              <Image
                className="dine__image"
                src={conceptImages.dining.src}
                alt={conceptImages.dining.alt}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <span className="concept-media-label">Concept dining photography</span>
            </div>
            <div className="dine__copy">
              <p className="eyebrow">04 / Dine</p>
              <h2 className="display-heading">Slow mornings deserve a place at the table.</h2>
              <p>
                Breakfast and dining are recurring positives in recent guest feedback. The final
                version can pair real dishes, service hours and dietary information with the same
                calm visual story.
              </p>
              <a className="text-link" href="#availability">
                Ask about the stay <span>↘</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="gallery" className="section section--linen gallery-preview">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">05 / Gallery direction</p>
              <h2 className="display-heading">Editorial, not a thumbnail wall.</h2>
            </div>
            <p className="section-intro">
              A preview of the visual rhythm planned for the final gallery. Property-owned imagery
              will replace concept photography before public launch.
            </p>
          </div>

          <div className="gallery-preview__grid" aria-label="Concept photography gallery preview">
            {galleryPreview.map(([image, className]) => (
              <div className={`gallery-tile ${className}`} key={image.src}>
                <Image
                  className="gallery-tile__image"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="kandy" className="section section--ivory location">
        <Container>
          <div className="location__grid">
            <div>
              <p className="eyebrow">06 / Kandy</p>
              <h2 className="display-heading">Close enough to explore. Far enough to breathe.</h2>
            </div>
            <div>
              <p className="location__lead">
                Explore Kandy during the day, then return to a quieter setting where the landscape
                becomes part of the stay.
              </p>
              <div className="location__facts">
                <span>Honest travel context</span>
                <span>Kandy destination storytelling</span>
                <span>Map and transfer guidance</span>
              </div>
            </div>
          </div>

          <div className="location__media">
            <Image
              src={conceptImages.kandyCity.src}
              alt={conceptImages.kandyCity.alt}
              fill
              sizes="(max-width: 980px) 100vw, 1440px"
            />
            <span>Concept destination photography · Kandy, Sri Lanka</span>
          </div>
        </Container>
      </section>

      <section id="availability" className="section section--forest availability">
        <Container>
          <p className="eyebrow eyebrow--light">Plan the stay</p>
          <div className="availability__heading">
            <h2 className="display-heading display-heading--light">
              Your stay in the hills begins here.
            </h2>
            <p>
              Share your preferred dates and guest details to start a direct availability enquiry.
            </p>
          </div>
          <EnquiryForm
            kind="availability"
            rooms={rooms.map((room) => ({ slug: room.slug, title: room.title }))}
          />
        </Container>
      </section>
    </main>
  );
}
