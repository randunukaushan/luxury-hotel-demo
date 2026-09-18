import { demoRooms } from "@/lib/content/demo-rooms";
import type { Room, RoomQueryResult } from "@/lib/content/types";
import { sanityClient } from "@/sanity/lib/client";
import { roomBySlugQuery, roomsQuery } from "@/sanity/lib/queries";

function normalizeRoom(room: RoomQueryResult): Room | null {
  if (!room.slug || !room.title || !room.summary || !room.description) {
    return null;
  }

  return {
    slug: room.slug,
    title: room.title,
    eyebrow: room.eyebrow || "Stay",
    summary: room.summary,
    description: room.description,
    size: room.size,
    occupancy: room.occupancy,
    bed: room.bed,
    view: room.view,
    features: room.features ?? [],
    amenities: room.amenities ?? [],
    heroImageUrl: room.heroImageUrl,
    galleryImageUrls: (room.galleryImageUrls ?? []).filter(
      (url): url is string => Boolean(url),
    ),
    visualTone: room.visualTone ?? "forest",
    isConcept: room.isConcept ?? false,
  };
}

export async function getRooms(): Promise<Room[]> {
  if (!sanityClient) return demoRooms;

  try {
    const result = await sanityClient.fetch<RoomQueryResult[]>(roomsQuery);
    const rooms = result.map(normalizeRoom).filter((room): room is Room => Boolean(room));
    return rooms.length > 0 ? rooms : demoRooms;
  } catch {
    return demoRooms;
  }
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  if (!sanityClient) {
    return demoRooms.find((room) => room.slug === slug) ?? null;
  }

  try {
    const result = await sanityClient.fetch<RoomQueryResult | null>(
      roomBySlugQuery,
      { slug },
    );
    return result ? normalizeRoom(result) : null;
  } catch {
    return demoRooms.find((room) => room.slug === slug) ?? null;
  }
}
