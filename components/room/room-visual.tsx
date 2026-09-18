import Image from "next/image";
import type { Room } from "@/lib/content/types";

type RoomVisualProps = {
  room: Room;
  priority?: boolean;
  className?: string;
};

export function RoomVisual({ room, priority = false, className = "" }: RoomVisualProps) {
  if (room.heroImageUrl) {
    return (
      <div className={`room-visual room-visual--image ${className}`.trim()}>
        <Image
          src={room.heroImageUrl}
          alt={`${room.title} room preview`}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 42vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      className={`room-visual room-visual--${room.visualTone} ${className}`.trim()}
      aria-label={`${room.title} concept visual placeholder`}
      role="img"
    >
      <div className="room-visual__sun" />
      <div className="room-visual__ridge room-visual__ridge--back" />
      <div className="room-visual__ridge room-visual__ridge--front" />
      <div className="room-visual__water" />
      <span className="room-visual__label">Concept visual · photography pending</span>
    </div>
  );
}
