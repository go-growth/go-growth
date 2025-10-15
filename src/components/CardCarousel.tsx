"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Infinite, steerable, drag-enabled logo carousel (transform-based)
 * - Auto-scroll via virtual `pos` + translate3d()
 * - Infinite loop with modulo wrapping
 * - Slows on hover; mouse X steers speed/direction
 * - Drag only after threshold; links click normally otherwise
 * - Uses pointer capture ONLY after threshold so anchor clicks work
 * - ResizeObserver keeps widths in sync
 */
export default function CardCarousel() {
  // -------- Brand data --------
  const cards: { logo: string; title: string; subtitle: string; url: string }[] =
    [
      { logo: "/case-studies/breezyla-logo.webp", title: "Breezy LA", subtitle: "E-commerce", url: "https://breezyla.com" },
      { logo: "/case-studies/10k-designers.png", title: "10K Designers", subtitle: "Ed-Tech", url: "https://www.10kdesigners.com" },
      { logo: "/case-studies/limitless-boxing.jpg", title: "Limitless Boxing", subtitle: "Local Gym", url: "https://example.com/limitless-boxing" }, // replace with real URL
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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const startPosRef = useRef(0);
  const [segmentWidth, setSegmentWidth] = useState(0);

  // Motion tuning
  const BASE_SPEED = 60;        // px/s when idle
  const HOVER_BASE_SPEED = 18;  // px/s when hovering
  const MAX_STEER = 140;        // px/s extra based on mouse x
  const DRAG_THRESHOLD = 8;     // px before we consider it a drag

  // Interaction state
  const [isHovering, setIsHovering] = useState(false);
  const [hoverVelocity, setHoverVelocity] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isPointerDown = useRef(false);
  const capturedPointerId = useRef<number | null>(null);
  const dragStartX = useRef(0);
  const moved = useRef(0);

  // -------- Measurement & wrapping --------
  const applyTransform = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${-posRef.current}px,0,0)`;
  };

  const wrap = () => {
    if (!segmentWidth) return;
    if (posRef.current >= segmentWidth) {
      posRef.current = posRef.current % segmentWidth;
    } else if (posRef.current < 0) {
      posRef.current = ((posRef.current % segmentWidth) + segmentWidth) % segmentWidth;
    }
  };

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.scrollWidth;
    const seg = Math.floor(total / REPEATS);
    setSegmentWidth(seg || 1);
    posRef.current = seg; // start at middle segment
    applyTransform();
  };

  useEffect(() => {
    measure();

    const track = trackRef.current;
    if (!track) return;

    const ro = new ResizeObserver(() => {
      const prevSeg = segmentWidth;
      measure();
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
    setHoverVelocity(-norm * MAX_STEER);
  };

  // -------- Dragging with delayed pointer capture --------
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    isPointerDown.current = true;
    setIsDragging(false); // not dragging yet
    moved.current = 0;
    dragStartX.current = e.clientX;
    startPosRef.current = posRef.current;
    // IMPORTANT: do NOT setPointerCapture here
    (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isPointerDown.current) return;
    const dx = e.clientX - dragStartX.current;
    moved.current = Math.max(moved.current, Math.abs(dx));

    // Crossed threshold? Start dragging and capture then.
    if (!isDragging && Math.abs(dx) > DRAG_THRESHOLD) {
      setIsDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
        capturedPointerId.current = e.pointerId;
      } catch {
        // some browsers might throw if capture not possible; safe to ignore
      }
    }

    if (isDragging) {
      posRef.current = startPosRef.current - dx;
      wrap();
      applyTransform();
    }
  };

  const endInteraction = (target: HTMLDivElement, pointerId: number) => {
    // Release capture only if we actually captured
    if (capturedPointerId.current === pointerId && target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
    capturedPointerId.current = null;
    isPointerDown.current = false;
    setIsDragging(false);
    target.style.cursor = "grab";
    // If the user dragged, the browser will not dispatch a click on the anchor anyway.
    // If the user didn't drag past threshold, a normal click will fire on the <a>.
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    endInteraction(e.currentTarget as HTMLDivElement, e.pointerId);
  };

  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = (e) => {
    endInteraction(e.currentTarget as HTMLDivElement, e.pointerId);
  };

  // -------- Animation loop (never stops) --------
  useEffect(() => {
    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.max(0, ts - last) / 1000;
      lastTsRef.current = ts;

      if (!isDragging) {
        const base = isHovering ? HOVER_BASE_SPEED : BASE_SPEED;
        const v = base + hoverVelocity;
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
        {/* Viewport */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden relative select-none touch-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setIsHovering(false); setHoverVelocity(0); }}
          onMouseMove={onMouseMove}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onPointerLeave={onPointerCancel}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          aria-roledescription="carousel"
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
