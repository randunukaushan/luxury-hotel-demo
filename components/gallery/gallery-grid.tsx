"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryItem = {
  alt: string;
  category: string;
  imageUrl?: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const selected = selectedIndex === null ? null : items[selectedIndex];

  const close = useCallback(() => {
    const previousIndex = selectedIndex;
    setSelectedIndex(null);

    if (previousIndex !== null) {
      window.setTimeout(() => triggerRefs.current[previousIndex]?.focus(), 0);
    }
  }, [selectedIndex]);

  const move = useCallback(
    (direction: number) => {
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex + direction + items.length) % items.length);
    },
    [items.length, selectedIndex],
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, move, selectedIndex]);

  return (
    <>
      <div className="real-gallery">
        {items.map((item, index) => (
          <figure key={`${item.imageUrl}-${index}`}>
            {item.imageUrl && (
              <button
                className="gallery-open"
                type="button"
                aria-label={`Open image ${index + 1}: ${item.alt}`}
                onClick={() => setSelectedIndex(index)}
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </button>
            )}
            <figcaption>{item.category}</figcaption>
          </figure>
        ))}
      </div>

      {selected?.imageUrl && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${selectedIndex! + 1} of ${items.length}`}
        >
          <button
            ref={closeRef}
            className="gallery-lightbox__close"
            type="button"
            onClick={close}
            aria-label="Close gallery"
          >
            Close
          </button>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="gallery-lightbox__image">
            <Image
              src={selected.imageUrl}
              alt={selected.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            type="button"
            onClick={() => move(1)}
            aria-label="Next image"
          >
            →
          </button>

          <div className="gallery-lightbox__caption">
            <span>{selected.category}</span>
            <span>
              {selectedIndex! + 1} / {items.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
