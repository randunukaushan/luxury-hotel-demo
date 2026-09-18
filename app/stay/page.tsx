import { CinematicCarousel } from "@/components/media/cinematic-carousel";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { RoomCard } from "@/components/room/room-card";
import { Container } from "@/components/ui/container";
import { getPageCarousel } from "@/lib/content/carousels";
import { getRooms } from "@/lib/content/rooms";

export const metadata = createPageMetadata({
  title: "Stay",
  description: "Explore the accommodation experience and room presentation for Kandy Victoria Eco Resort.",
  path: "/stay",
});

export default async function StayPage() {
  const [rooms, carousel] = await Promise.all([getRooms(), getPageCarousel("stay")]);

  return (
    <main id="main-content" className="inner-page">
      <section className="cinematic-page-hero">
        <CinematicCarousel
          className="cinematic-page-hero__media"
          slides={carousel.slides}
          intervalMs={carousel.intervalMs}
          priority
          label="Stay photography"
        />
        <Container className="cinematic-page-hero__content stay-hero__content">
          <p className="eyebrow eyebrow--light">Stay · Kandy</p>
          <div className="stay-hero__grid">
            <h1>Choose the feeling before the room number.</h1>
            <div>
              <p>
                A premium accommodation journey should make differences easy to understand without
                reducing the stay to a spreadsheet.
              </p>
              <p className="concept-note">
                Current room cards are clearly marked concept content until the owner confirms the
                definitive inventory and photography.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="room-list">
            {rooms.map((room, index) => (
              <RoomCard room={room} index={index} key={room.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--linen stay-confidence">
        <Container>
          <p className="eyebrow">What the final room data will make clear</p>
          <div className="stay-confidence__grid">
            <div><span>01</span><h2>Fit</h2><p>Capacity, bed and room size without hunting through prose.</p></div>
            <div><span>02</span><h2>Feeling</h2><p>Real photography, outlook and the reason this room feels different.</p></div>
            <div><span>03</span><h2>Confidence</h2><p>Verified amenities, policies and a clear route to direct enquiry.</p></div>
          </div>
          <Link className="button button--dark" href="/#availability">
            Plan your stay
          </Link>
        </Container>
      </section>
    </main>
  );
}
