import Image from "next/image";
import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getRooms } from "@/lib/content/rooms";
import { conceptImages } from "@/lib/media/concept-images";

export const metadata = createPageMetadata({
  title: "Home",
  description: "A premium scenic-stay website concept for Kandy Victoria Eco Resort.",
  path: "/",
});

const stays = [
  {
    number: "01",
    title: "Lake & mountain view stays",
    detail: "A room-story direction built around verified scenic views and unhurried mornings.",
    meta: "Room inventory to be confirmed",
    tone: "stay-card--lake",
    image: conceptImages.roomPanoramic,
  },
  {
    number: "02",
    title: "Nature-facing suites",
    detail: "A calmer, greener visual direction designed for guests seeking privacy and a slower pace.",
    meta: "Final room facts pending client approval",
    tone: "stay-card--forest",
    image: conceptImages.roomNature,
  },
  {
    number: "03",
    title: "Panoramic room concepts",
    detail: "Editorial layouts that make views, space and verified room details easy to compare.",
    meta: "Names and capacities to be verified",
    tone: "stay-card--stone",
    image: conceptImages.roomLake,
  },
];

const principles = [
  ["Views", "Lake, mountain and garden context become the visual anchor."],
  ["Calm", "The experience is positioned away from city noise without hiding travel distance."],
  ["Hospitality", "Real guest proof and clear practical information build confidence."],
  ["Dining", "Breakfast and food receive the visual weight guests already respond to."],
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
            A premium website concept for a peaceful scenic stay near Kandy — shaped by nature,
            warm hospitality and direct guest connection.
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
        <div className="hero__note">Private concept · stock photography · verified facts only</div>
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
                The strongest version of this property is not a list of amenities. It is the feeling
                of arriving somewhere calmer, looking across the landscape, and having enough space
                to slow down.
              </p>
              <p>
                This first build turns that verified positioning into an editorial guest journey —
                then keeps room facts, location context and enquiry actions close when the guest is
                ready.
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
              Final names, capacities and amenities stay deliberately unclaimed until the owner
              confirms the current room inventory.
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
              <h2 className="display-heading">Give breakfast more than an amenity icon.</h2>
              <p>
                Public guest feedback gives food and breakfast enough weight to deserve their own
                visual story. The final site will use real dishes, opening hours and dietary details
                after client confirmation.
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
              Licensed stock concept photography shows the intended art direction. Client-owned
              property photography replaces it before any public launch.
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
                The destination page makes travel context clear instead of pretending the property
                is a city-centre hotel.
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
              Demo conversion shell. Real contact channels and booking logic will be connected only
              after owner verification.
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
