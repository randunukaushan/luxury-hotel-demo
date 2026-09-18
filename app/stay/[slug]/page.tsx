import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RoomVisual } from "@/components/room/room-visual";
import { Container } from "@/components/ui/container";
import { demoRooms } from "@/lib/content/demo-rooms";
import { getRoomBySlug } from "@/lib/content/rooms";
import { createPageMetadata } from "@/lib/seo/metadata";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demoRooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);

  if (!room) return { title: "Room not found" };

  return createPageMetadata({
    title: room.title,
    description: room.summary,
    path: `/stay/${room.slug}`,
  });
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);

  if (!room) notFound();

  return (
    <main id="main-content" className="inner-page room-page">
      <section className="room-detail-hero">
        <RoomVisual room={room} priority className="room-detail-hero__visual" />
        <div className="room-detail-hero__overlay" />
        <Container className="room-detail-hero__content">
          <Link href="/stay" className="room-detail-hero__back">
            ← All stays
          </Link>
          <p className="eyebrow eyebrow--light">{room.eyebrow}</p>
          <h1>{room.title}</h1>
          <p>{room.summary}</p>
        </Container>
      </section>

      <section className="section section--ivory room-overview">
        <Container>
          {room.isConcept && (
            <div className="concept-banner">
              <strong>Private sales concept</strong>
              <span>
                Room name and facts are presentation placeholders until the property confirms its
                current inventory.
              </span>
            </div>
          )}

          <div className="room-overview__grid">
            <div>
              <p className="eyebrow">The stay</p>
              <h2 className="display-heading">Space to understand the room before you enquire.</h2>
            </div>
            <div className="room-overview__copy">
              <p>{room.description}</p>
              <dl className="room-facts">
                <div><dt>Size</dt><dd>{room.size || "Ask property"}</dd></div>
                <div><dt>Guests</dt><dd>{room.occupancy || "Ask property"}</dd></div>
                <div><dt>Bed</dt><dd>{room.bed || "Ask property"}</dd></div>
                <div><dt>View</dt><dd>{room.view || "Ask property"}</dd></div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--forest room-features">
        <Container>
          <div className="room-features__grid">
            <div>
              <p className="eyebrow eyebrow--light">Highlights</p>
              <h2 className="display-heading display-heading--light">
                Details grouped for faster decisions.
              </h2>
            </div>
            <div className="room-feature-list">
              {room.features.map((feature, index) => (
                <div key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--linen room-gallery-section">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="display-heading">Photography will carry the final room story.</h2>
            </div>
            <p className="section-intro">
              Real client-owned photography will replace these concept frames before public launch.
            </p>
          </div>
          <div className="room-gallery-concept">
            <RoomVisual room={room} />
            {room.galleryImageUrls.slice(0, 2).map((imageUrl, index) => (
              <div className="room-gallery-concept__image" key={imageUrl}>
                <Image
                  src={imageUrl}
                  alt={`${room.title} concept gallery image ${index + 2}`}
                  fill
                  sizes="(max-width: 980px) 50vw, 36vw"
                />
                {room.isConcept && (
                  <span className="concept-media-label">Concept photography</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="availability" className="section section--ivory room-booking">
        <Container>
          <p className="eyebrow">Direct enquiry</p>
          <div className="room-booking__grid">
            <h2 className="display-heading">Interested in this stay?</h2>
            <div>
              <p>
                The final flow will pass this room and selected dates into the availability enquiry
                or the hotel’s booking engine.
              </p>
              <div className="room-booking__actions">
                <Link className="button button--dark" href={`/availability?room=${encodeURIComponent(room.slug)}`}>
                  Check availability
                </Link>
                <Link className="text-link" href="/stay">
                  Compare stays <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
