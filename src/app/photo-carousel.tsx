"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PhotoSlide = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function PhotoCarousel({
  slides,
}: {
  slides: PhotoSlide[];
}) {
  const photos = slides;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardStep, setCardStep] = useState(0);

  useEffect(() => {
    function updateLayout() {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const firstCard = track?.firstElementChild;
      if (!viewport || !track || !(firstCard instanceof HTMLElement)) return;

      const gap =
        Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      if (step <= 0) return;

      setCardStep(step);
      setVisibleCount(
        Math.max(1, Math.round((viewport.clientWidth + gap) / step)),
      );
    }

    updateLayout();
    const viewport = viewportRef.current;
    const firstCard = trackRef.current?.firstElementChild;
    if (!viewport || !(firstCard instanceof HTMLElement)) return;

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(viewport);
    resizeObserver.observe(firstCard);

    return () => {
      resizeObserver.disconnect();
    };
  }, [photos.length]);

  const maxStartIndex = Math.max(0, photos.length - visibleCount);
  const activeIndex = Math.min(firstVisibleIndex, maxStartIndex);

  function moveByCard(direction: -1 | 1) {
    setFirstVisibleIndex((index) =>
      Math.min(maxStartIndex, Math.max(0, index + direction)),
    );
  }

  return (
    <div
      className="home-work-carousel"
      role="region"
      aria-label="Photos of our work with children"
      aria-roledescription="carousel"
    >
      <div className="home-work-grid" ref={viewportRef}>
        <div
          className="home-work-track"
          ref={trackRef}
          style={{ transform: `translateX(-${activeIndex * cardStep}px)` }}
        >
          {photos.map((photo, index) => (
            <article
              className="home-work-card"
              key={photo.title}
              aria-label={`${index + 1} of ${photos.length}: ${photo.title}`}
              aria-roledescription="slide"
            >
              <div className="home-work-image">
                {photo.image ? (
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1168px) 33vw, 360px"
                  />
                ) : (
                  <div
                    className="home-work-image-placeholder"
                    role="img"
                    aria-label="Photo to be added"
                  >
                    Photo coming soon
                  </div>
                )}
                <span className="home-work-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="home-work-card-copy">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="home-photo-controls">
        <button
          className="home-photo-previous"
          type="button"
          onClick={() => moveByCard(-1)}
          disabled={activeIndex === 0}
          aria-label="Show previous photos"
        >
          &lt;
        </button>
        <button
          className="home-photo-next"
          type="button"
          onClick={() => moveByCard(1)}
          disabled={activeIndex >= maxStartIndex}
          aria-label="Show next photos"
        >
          &gt;
        </button>
      </div>
      <div className="home-photo-count" aria-live="polite">
        {activeIndex + 1}–
        {Math.min(activeIndex + visibleCount, photos.length)} /{" "}
        {photos.length}
      </div>
    </div>
  );
}
