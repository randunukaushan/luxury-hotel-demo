import type { Metadata } from "next";
import Link from "next/link";
import { RoomCard } from "@/components/room/room-card";
import { Container } from "@/components/ui/container";
import { getRooms } from "@/lib/content/rooms";

export const metadata: Metadata = {
  title: "Stay",
  description:
    "Explore the premium room-presentation concept for Kandy Victoria Eco Resort.",
};

export default async function StayPage() {
  const rooms = await getRooms();

  return (
    <main id="main-content" className="inner-page">
      <section className="stay-hero">
        <Container>
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
