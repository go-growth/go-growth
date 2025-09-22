"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Infinite, steerable, drag-enabled carousel
 * - Auto-scrolls continuously
 * - Slows on hover; mouse position steers direction/speed
 * - Click-and-drag left/right (links won’t fire if you dragged)
 * - True infinite loop using 3x duplication and midpoint start + wrap
 * - Recomputes on image load/resize for reliability
 */
export default function CardCarousel() {
  // -------- Brand data --------
  const cards: { logo: string; title: string; subtitle: string; url: string }[] =
    [
      { logo: "/case-studies/breezyla-logo.webp", title: "Breezy LA", subtitle: "E-commerce", url: "https://breezyla.com" },
      { logo: "/case-studies/10k-designers.png", title: "10K Designers", subtitle: "Ed-Tech", url: "https://www.10kdesigners.com" },
      { logo: "/case-studies/limitless-boxing.jpg", title: "Limitless Boxing", subtitle: "Local Gym", url: "#" },
      { logo: "/case-studies/aevy-tv.webp", title: "Aevy TV", subtitle: "Ed-Tech", url: "#" },
      { logo: "/case-studies/11.png", title: "Anything Vegan", subtitle: "E-commerce", url: "https://anythingvegan.ae/" },
      { logo: "/case-studies/13.png", title: "SwingSaga", subtitle: "E-commerce", url: "https://swingsaga.com/" },
      { logo: "/case-studies/14.png", title: "SkinVest", subtitle: "E-commerce", url: "https://skinvest.care/" },
      { logo: "/case-studies/logo_sthalam.avif", title: "Sthalam", subtitle: "E-commerce", url: "https://sthalam.in" },
      { logo: "/case-studies/logo_astro.avif", title: "AstroVetro", subtitle: "E-commerce", url: "https://astrovetro.com" },
      { logo: "/case-studies/craft.png", title: "Craft Delights", subtitle: "E-commerce", url: "https://craftdelights.in" },
      { logo: "/case-studies/blckline.png", title: "Blckline Automotive", subtitle: "E-commerce", url: "https://blckline.com.au" },
      { logo: "/case-studies/unaavu.png", title: "Unaavu", subtitle: "E-commerce", url: "https://unaavu.com" },
      { logo: "/case-studies/maese.png", title: "Maese", subtitle: "E-commerce", url: "https://themaese.com" },
      { logo: "/case-studies/olio.png", title: "Olio Stories", subtitle: "E-commerce", url: "https://theoliostories.com/" },
    ];

  // -------- Duplication strategy (3x) for seamless wrap --------
  const REPEATS = 3 as const;
  const displayCards = Array.from({ length: REPEATS }, () => cards).flat();

  // -------- Refs & state --------
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const segmentRef = useRef<number>(0); // width of one cards strip (1x)

  // Speeds
  const BASE_SPEED = 60;        // px/s idle
  const HOVER_BASE_SPEED = 18;  // px/s when hovering
  const [hoverVelocity, setHoverVelocity] = useState(0); // extra px/s from mouse steer
  const [isHovering, setIsHovering] = useState(false);

  // Dragging
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const draggedDistance = useRef(0);

  // ---- Helpers ----
  const measureAndCenter = () => {
    const viewport = viewportRef.current;
    const scroller = scrollerRef.current;
    if (!viewport || !scroller) return;

    // Compute the width of a single segment (1x cards)
    const full = scroller.scrollWidth;
    const segment = full / REPEATS;
    segmentRef.current = segment;

    // Start at the middle segment for infinite wrap (index 1 of 0..2)
    viewport.scrollLeft = segment;
  };

  const wrapScroll = () => {
    const viewport = viewportRef.current;
    const segment = segmentRef.current;
    if (!viewport || !segment) return;

    // With REPEATS=3 and start at middle, wrap when reaching edges
    if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += segment;
    } else if (viewport.scrollLeft >= segment * 2) {
      viewport.scrollLeft -= segment;
    }
  };

  // Re-measure on mount, on image load/size change, and on resize
  useEffect(() => {
    measureAndCenter();

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const ro = new ResizeObserver(() => measureAndCenter());
    ro.observe(scroller);

    const onResize = () => measureAndCenter();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Pointer steer while hovering (ignored during drag)
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current || isDragging) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const norm = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const MAX_STEER = 140; // px/s
    setHoverVelocity(norm * MAX_STEER * -1); // right pointer => faster left movement
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => { setIsHovering(false); setHoverVelocity(0); };

  // Drag handlers
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const vp = viewportRef.current;
    if (!vp) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScrollLeft.current = vp.scrollLeft;
    draggedDistance.current = 0;
  };
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const vp = viewportRef.current;
    if (!vp || !isDragging) return;
    const dx = e.clientX - dragStartX.current;
    draggedDistance.current = Math.max(draggedDistance.current, Math.abs(dx));
    vp.scrollLeft = dragStartScrollLeft.current - dx; // natural drag direction
    wrapScroll();
  };
  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget as HTMLDivElement;
    if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
    setIsDragging(false); // auto-scroll resumes via RAF
  };
  const preventClickIfDragged = (e: React.MouseEvent) => {
    if (draggedDistance.current > 5) { e.preventDefault(); e.stopPropagation(); }
    draggedDistance.current = 0;
  };

  // Animation loop
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.max(0, ts - last) / 1000;
      lastTsRef.current = ts;

      if (!isDragging) {
        const base = isHovering ? HOVER_BASE_SPEED : BASE_SPEED;
        const v = base + hoverVelocity; // px/s (can go negative)
        vp.scrollLeft += v * dt;
        wrapScroll();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); lastTsRef.current = null; };
  }, [isDragging, isHovering, hoverVelocity]);

  return (
    <section className="lg:py-20 py-10">
      <h1 className="max-w-7xl mx-auto text-center text-4xl font-semibold">Our Clients</h1>

      <div className="flex items-center justify-center w-full p-8">
        {/* Viewport (scroll container) */}
        <div
          ref={viewportRef}
          className="w-full overflow-x-scroll no-scrollbar relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={(e) => { if (viewportRef.current) { viewportRef.current.scrollLeft += e.deltaY * 0.5 + e.deltaX; wrapScroll(); } }}
        >
          {/* Scroller (very wide) */}
          <div
            ref={scrollerRef}
            className="flex gap-8 px-4 py-6 items-center select-none"
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
                <h3 className="text-white font-semibold text-center leading-tight group-hover:opacity-90">{card.title}</h3>
                <p className="text-gray-400 text-sm text-center">{card.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hide native scrollbar */}
      <style jsx global>{`
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
