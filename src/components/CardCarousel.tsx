"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Infinite, steerable, drag-enabled logo carousel (transform-based)
 * - Continuous auto-scroll driven by a virtual `pos` (px) + translate3d()
 * - Infinite loop via modulo wrapping against a measured segment width
 * - Slows on hover; mouse position steers direction/speed
 * - Click-and-drag to scroll; links suppressed if user actually dragged
 * - Robust against image loads/resizes via ResizeObserver re-measure
 */
export default function CardCarousel() {
  // -------- Brand data --------
  const cards: { logo: string; title: string; subtitle: string; url: string }[] =
    [
      { logo: "/case-studies/breezyla-logo.webp", title: "Breezy LA", subtitle: "E-commerce", url: "https://breezyla.com" },
      { logo: "/case-studies/10k-designers.png", title: "10K Designers", subtitle: "Ed-Tech", url: "https://www.10kdesigners.com" },
      { logo: "/case-studies/limitless-boxing.jpg", title: "Limitless Boxing", subtitle: "Local Gym", url: "#" },
      { logo: "/case-studies/aevy-tv.webp", title: "Aevy TV", subtitle: "Ed-Tech", url: "https://www.aevytv.com/" },
      { logo: "/case-studies/11.png", title: "Anything Vegan", subtitle: "E-commerce", url: "https://anythingvegan.ae/" },
      { logo: "/case-studies/13.png", title: "SwingSaga", subtitle: "E-commerce", url: "https://swingsaga.com/" },
      { logo: "/case-studies/14.png", title: "Skinvest", subtitle: "E-commerce", url: "https://skinvest.care/" },
      { logo: "/case-studies/logo_sthalam.avif", title: "Sthalam", subtitle: "E-commerce", url: "https://sthalam.in" },
      { logo: "/case-studies/logo_astro.avif", title: "AstroVetro", subtitle: "E-commerce", url: "https://astrovetro.com" },
      { logo: "/case-studies/craft.png", title: "Craft Delights", subtitle: "E-commerce", url: "https://craftdelights.in" },
      { logo: "/case-studies/blckline.png", title: "Blckline Automotive", subtitle: "E-commerce", url: "https://blckline.com.au" },
      { logo: "/case-studies/unaavu.png", title: "Unaavu", subtitle: "E-commerce", url: "https://unaavu.com" },
      { logo: "/case-studies/maese.png", title: "Maese", subtitle: "E-commerce", url: "https://themaese.com" },
      { logo: "/case-studies/olio.png", title: "Olio Stories", subtitle: "E-commerce", url: "https://theoliostories.com/" },
    ];

  // Repeat 3× for a long, seamless track
  const REPEATS = 3 as const;
  const displayCards = Array.from({ length: REPEATS }, () => cards).flat();

  // -------- Refs & state --------
  const viewportRef = useRef<HTMLDivElement | null>(null); // clipper
  const trackRef = useRef<HTMLDivElement | null>(null);     // moving strip
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const posRef = useRef(0);            // virtual x position (px)
  const startPosRef = useRef(0);       // pos at drag start
  const [segmentWidth, setSegmentWidth] = useState(0); // width of 1× cards

  // Motion tuning
  const BASE_SPEED = 60;       // px/s when idle
  const HOVER_BASE_SPEED = 18; // px/s when hovering
  const MAX_STEER = 140;       // px/s extra based on mouse x

  // Interaction state
  const [isHovering, setIsHovering] = useState(false);
  const [hoverVelocity, setHoverVelocity] = useState(0); // px/s (±)
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const draggedDistance = useRef(0);

  // -------- Measurement & wrapping --------
  const applyTransform = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${-posRef.current}px,0,0)`;
  };

  const wrap = () => {
    if (!segmentWidth) return;
    // Keep pos within [0, segmentWidth)
    if (posRef.current >= segmentWidth) {
      posRef.current = posRef.current % segmentWidth;
    } else if (posRef.current < 0) {
      // proper modulo for negatives
      posRef.current = ((posRef.current % segmentWidth) + segmentWidth) % segmentWidth;
    }
  };

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    // Since we rendered 3×, 1 segment = total width / 3
    const total = el.scrollWidth;
    const seg = Math.floor(total / REPEATS);
    setSegmentWidth(seg || 1);
    // optional: start somewhere in the middle
    posRef.current = seg; // middle segment
    applyTransform();
  };

  useEffect(() => {
    measure();

    const track = trackRef.current;
    if (!track) return;

    // Re-measure when content/layout changes
    const ro = new ResizeObserver(() => {
      const prevSeg = segmentWidth;
      measure();
      // keep motion continuous by proportionally mapping old pos if seg changed
      if (prevSeg && segmentWidth && prevSeg !== segmentWidth) {
        posRef.current = (posRef.current / prevSeg) * segmentWidth;
        wrap();
        applyTransform();
      }
    });
    ro.observe(track);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------- Mouse steer (while hovering, not dragging) --------
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current || isDragging) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const norm = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    setHoverVelocity(-norm * MAX_STEER); // right pointer => faster leftward motion
  };

  // -------- Dragging --------
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget as HTMLDivElement;
    target.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    startPosRef.current = posRef.current;
    draggedDistance.current = 0;
    // Cursor feedback
    target.style.cursor = "grabbing";
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current; // dragging right => positive dx
    draggedDistance.current = Math.max(draggedDistance.current, Math.abs(dx));
    posRef.current = startPosRef.current - dx; // natural drag
    wrap();
    applyTransform();
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget as HTMLDivElement;
    if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
    setIsDragging(false);
    target.style.cursor = "grab";
    // No inertia; auto-scroll loop continues to advance posRef
  };

  const preventClickIfDragged = (e: React.MouseEvent) => {
    if (draggedDistance.current > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
    draggedDistance.current = 0;
  };

  // -------- Animation loop (never stops) --------
  useEffect(() => {
    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.max(0, ts - last) / 1000;
      lastTsRef.current = ts;

      if (!isDragging) {
        const base = isHovering ? HOVER_BASE_SPEED : BASE_SPEED;
        const v = base + hoverVelocity; // px/s (can be negative)
        posRef.current += v * dt;
        wrap();
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [isDragging, isHovering, hoverVelocity]);

  return (
    <section className="lg:py-20 py-10">
      <h1 className="max-w-7xl mx-auto text-center text-4xl font-semibold">
        Our Clients
      </h1>

      <div className="flex items-center justify-center w-full p-8">
        {/* Viewport (no native scrollbars; we drive via transform) */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden relative select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setIsHovering(false); setHoverVelocity(0); }}
          onMouseMove={onMouseMove}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* Moving track */}
          <div
            ref={trackRef}
            className="flex gap-8 px-4 py-6 items-center will-change-transform"
            aria-label="Client logos carousel"
          >
            {displayCards.map((card, i) => (
              <a
                key={`${card.title}-${i}`}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.title} website (opens in a new tab)`}
                title={card.title}
                className="flex flex-col items-center flex-shrink-0 w-36 group"
                onClick={preventClickIfDragged}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-700/60 mb-3 flex items-center justify-center bg-white/5">
                  <Image
                    src={card.logo}
                    alt={`${card.title} logo`}
                    width={128}
                    height={128}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <h3 className="text-white font-semibold text-center leading-tight group-hover:opacity-90">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm text-center">{card.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


