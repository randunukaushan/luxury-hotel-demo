"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type CarouselSlide = {
  imageUrl: string;
  alt: string;
};

type CinematicCarouselProps = {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
  priority?: boolean;
  label?: string;
};

export function CinematicCarousel({
  slides,
  intervalMs = 6500,
  className = "",
  priority = false,
  label = "Photography slideshow",
}: CinematicCarouselProps) {
  const validSlides = useMemo(
    () => slides.filter((slide) => slide.imageUrl && slide.alt),
    [slides],
  );
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (validSlides.length <= 1 || paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % validSlides.length);
    }, Math.max(4000, intervalMs));

    return () => window.clearInterval(timer);
  }, [intervalMs, paused, reduceMotion, validSlides.length]);

  if (!validSlides.length) return null;

  const currentIndex = active % validSlides.length;

  function move(direction: number) {
    setActive((current) => (current + direction + validSlides.length) % validSlides.length);
  }

  return (
    <div
      ref={rootRef}
      className={`cinematic-carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="cinematic-carousel__slides" aria-live="off">
        {validSlides.map((slide, index) => (
          <div
            className={`cinematic-carousel__slide ${
              index === currentIndex ? "cinematic-carousel__slide--active" : ""
            }`}
            aria-hidden={index !== active}
            key={`${slide.imageUrl}-${index}`}
          >
            <Image
              src={slide.imageUrl}
              alt={index === currentIndex ? slide.alt : ""}
              fill
              priority={priority && index === 0}
              sizes="100vw"
              className="cinematic-carousel__image"
            />
          </div>
        ))}
      </div>

      {validSlides.length > 1 && (
        <div className="cinematic-carousel__controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous image">
            ←
          </button>

          <div className="cinematic-carousel__dots" aria-label="Choose image">
            {validSlides.map((slide, index) => (
              <button
                type="button"
                key={`dot-${slide.imageUrl}-${index}`}
                className={index === currentIndex ? "is-active" : ""}
                aria-label={`Show image ${index + 1} of ${validSlides.length}`}
                aria-current={index === currentIndex ? "true" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>

          <button type="button" onClick={() => move(1)} aria-label="Next image">
            →
          </button>
        </div>
      )}
    </div>
  );
}
