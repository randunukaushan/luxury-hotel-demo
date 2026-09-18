import { EnquiryForm } from "@/components/forms/enquiry-form";\nimport { Container } from "@/components/ui/container";\nimport { getRooms } from "@/lib/content/rooms";

const stays = [
  {
    number: "01",
    title: "Lake & mountain view stays",
    detail: "A room-story direction built around verified scenic views and unhurried mornings.",
    meta: "Room inventory to be confirmed",
    tone: "stay-card--lake",
  },
  {
    number: "02",
    title: "Nature-facing suites",
    detail: "A calmer, greener visual direction designed for guests seeking privacy and a slower pace.",
    meta: "Final room facts pending client approval",
    tone: "stay-card--forest",
  },
  {
    number: "03",
    title: "Panoramic room concepts",
    detail: "Editorial layouts that make views, space and verified room details easy to compare.",
    meta: "Names and capacities to be verified",
    tone: "stay-card--stone",
  },
];

const principles = [
  ["Views", "Lake, mountain and garden context become the visual anchor."],
  ["Calm", "The experience is positioned away from city noise without hiding travel distance."],
  ["Hospitality", "Real guest proof and clear practical information build confidence."],
  ["Dining", "Breakfast and food receive the visual weight guests already respond to."],
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero__art" aria-hidden="true">
          <div className="hero__sun" />
          <div className="hero__ridge hero__ridge--back" />
          <div className="hero__ridge hero__ridge--front" />
          <div className="hero__water" />
          <div className="hero__grain" />
        </div>
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
        <div className="hero__note">Private concept · verified facts only</div>
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
          <div className="landscape-card" aria-label="Abstract scenic concept preview">
            <div className="landscape-card__caption">
              <span>VICTORIA · KANDY</span>
              <span>SCENIC CONCEPT FRAME</span>
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
                <div className="stay-card__visual" aria-hidden="true" />
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
            <div className="dine__art" aria-hidden="true">
              <div className="dine__plate" />
              <div className="dine__leaf dine__leaf--one" />
              <div className="dine__leaf dine__leaf--two" />
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
              Original property photography will replace these art-directed placeholders before any
              public client launch.
            </p>
          </div>
          <div className="gallery-preview__grid" aria-label="Abstract gallery layout preview">
            <div className="gallery-tile gallery-tile--a" />
            <div className="gallery-tile gallery-tile--b" />
            <div className="gallery-tile gallery-tile--c" />
            <div className="gallery-tile gallery-tile--d" />
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
                The destination page will make travel context clear instead of pretending the
                property is a city-centre hotel.
              </p>
              <div className="location__facts">
                <span>Honest travel context</span>
                <span>Kandy destination storytelling</span>
                <span>Map and transfer guidance</span>
              </div>
            </div>
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
