import Link from "next/link";
import { RoomVisual } from "@/components/room/room-visual";
import type { Room } from "@/lib/content/types";

type RoomCardProps = {
  room: Room;
  index: number;
};

export function RoomCard({ room, index }: RoomCardProps) {
  return (
    <article className="room-list-card">
      <Link href={`/stay/${room.slug}`} className="room-list-card__visual-link">
        <RoomVisual room={room} />
      </Link>
      <div className="room-list-card__content">
        <div className="room-list-card__topline">
          <span>{String(index + 1).padStart(2, "0")}</span>
          {room.isConcept ? <span>Concept data</span> : <span>Verified room</span>}
        </div>
        <p className="eyebrow">{room.eyebrow}</p>
        <h2>{room.title}</h2>
        <p className="room-list-card__summary">{room.summary}</p>
        <dl className="room-facts room-facts--compact">
          <div><dt>Size</dt><dd>{room.size || "Ask property"}</dd></div>
          <div><dt>Guests</dt><dd>{room.occupancy || "Ask property"}</dd></div>
          <div><dt>Bed</dt><dd>{room.bed || "Ask property"}</dd></div>
          <div><dt>View</dt><dd>{room.view || "Ask property"}</dd></div>
        </dl>
        <div className="room-list-card__actions">
          <Link className="button button--dark" href={`/stay/${room.slug}`}>
            View room
          </Link>
          <Link className="text-link" href={`/stay/${room.slug}#availability`}>
            Check availability <span>↘</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
