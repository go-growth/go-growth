"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * CardCarousel
 * - Continuous auto-scroll (never fully stops)
 * - Slows on hover
 * - Mouse-steer on hover (move pointer left/right to change direction/speed)
 * - Click-and-drag to scroll (desktop): press, drag, release
 * - Seamless infinite loop via content duplication and scroll wrapping
 * - Logos link out to brand websites in a new tab
 */
export default function CardCarousel() {
  // -------- Brand data (update URLs if any differ) --------
  const cards: { logo: string; title: string; subtitle: string; url: string }[] =
    [
      {
        logo: "/case-studies/breezyla-logo.webp",
        title: "Breezy LA",
        subtitle: "E-commerce",
        url: "https://breezyla.com",
      },
      {
        logo: "/case-studies/10k-designers.png",
        title: "10K Designers",
        subtitle: "Ed-Tech",
        url: "https://www.10kdesigners.com",
      },
      {
        logo: "/case-studies/limitless-boxing.jpg",
        title: "Limitless Boxing",
        subtitle: "Local Gym",
url: "#",
      
      },
      {
        logo: "/case-studies/aevy-tv.webp",
        title: "Aevy TV",
        subtitle: "Ed-Tech",
        url: "#",
      },
 {
        logo: "/case-studies/11.png",
        title: "Anything Vegan",
        subtitle: "E-commerce",
        url: "https://anythingvegan.ae/",
      },
 {
        logo: "/case-studies/13.png",
        title: "SwingSaga",
        subtitle: "E-commerce",
        url: "https://swingsaga.com/",
      },
 {
        logo: "/case-studies/14.png",
        title: "SkinVest",
        subtitle: "E-commerce",
        url: "https://skinvest.care/",
      },
      {
        logo: "/case-studies/logo_sthalam.avif",
        title: "Sthalam",
        subtitle: "E-commerce",
        url: "https://sthalam.in",
      },
      {
        logo: "/case-studies/logo_astro.avif",
        title: "AstroVetro",
        subtitle: "E-commerce",
        url: "https://astrovetro.com",
      },
      {
        logo: "/case-studies/craft.png",
        title: "Craft Delights",
        subtitle: "E-commerce",
        url: "https://craftdelights.in",
      },
      {
        logo: "/case-studies/blckline.png",
        title: "Blckline Automotive",
        subtitle: "E-commerce",
        url: "https://blckline.com.au",
      },
      {
        logo: "/case-studies/unaavu.png",
        title: "Unaavu",
        subtitle: "E-commerce",
        url: "https://unaavu.com",
      },
      {
        logo: "/case-studies/maese.png",
        title: "Maese",
        subtitle: "E-commerce",
        url: "https://themaese.com",
      },
      {
        logo: "/case-studies/olio.png",
        title: "Olio Stories",
        subtitle: "E-commerce",
        url: "https://theoliostories.com/",
      },
    ];

  // Duplicate to create a long, seamless strip
  const displayCards = [...cards, ...cards, ...cards, ...cards];

  // -------- Animation state --------
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // Base speeds
  const BASE_SPEED = 60; // px/sec when idle
  const HOVER_BASE_SPEED = 18; // px/sec when hovering
  const [hoverVelocity, setHoverVelocity] = useState(0); // extra px/sec from pointer steer
  const [isHovering, setIsHovering] = useState(false);

  // Drag-to-scroll
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const draggedDistance = useRef(0);

  // Keep the loop seamless by wrapping scrollLeft inside the middle segments
  const wrapScroll = () => {
    const viewport = viewportRef.current;
    const scroller = scrollerRef.current;
    if (!viewport || !scroller) return;
    // We have 4 segments of identical content
    const segment = scroller.scrollWidth / 4;

    // Keep the visible window centered in segment 2–3 to avoid hitting edges
    if (viewport.scrollLeft >= segment * 3) {
      viewport.scrollLeft -= segment * 2;
    } else if (viewport.scrollLeft <= segment * 1) {
      viewport.scrollLeft += segment * 2;
    }
  };

  // Pointer steer (while hovering, pointer position changes extra velocity)
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current) return;
    if (isDragging) return; // drag takes precedence

    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dx = e.clientX - centerX;

    // Normalize to [-1, 1]
    const norm = Math.max(-1, Math.min(1, dx / (rect.width / 2)));

    // Translate to px/sec; invert so moving pointer to the right accelerates leftward motion
    const MAX_STEER = 140;
    setHoverVelocity(norm * MAX_STEER * -1);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverVelocity(0);
  };

  // Drag handlers (desktop)
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScrollLeft.current = viewportRef.current.scrollLeft;
    draggedDistance.current = 0;
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current) return;
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    draggedDistance.current = Math.max(draggedDistance.current, Math.abs(dx));
    // Invert so dragging right moves content right (i.e., decreases scrollLeft)
    viewportRef.current.scrollLeft = dragStartScrollLeft.current - dx;
    wrapScroll();
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!(e.currentTarget as HTMLDivElement).hasPointerCapture(e.pointerId)) return;
    (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
    // No inertia for simplicity; auto-scroll resumes immediately via RAF
  };

  // Prevent accidental clicks on links when user dragged
  const preventClickIfDragged = (e: React.MouseEvent) => {
    if (draggedDistance.current > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
    draggedDistance.current = 0;
  };

  // Animation loop
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.max(0, ts - last) / 1000;
      lastTsRef.current = ts;

      // When dragging, don't auto-scroll; otherwise keep moving
      if (!isDragging) {
        const base = isHovering ? HOVER_BASE_SPEED : BASE_SPEED;
        const velocity = base + hoverVelocity; // px/sec (can go negative for reverse)
        viewport.scrollLeft += velocity * dt;
        wrapScroll();
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
    <section className="lg:py-20 py:10">
      <h1 className="max-w-7xl mx-auto text-center text-4xl font-semibold">
        Our Clients
      </h1>

      <div className="flex items-center justify-center w-full p-8">
        {/* Viewport */}
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
          // Nice feel with trackpad/wheel too
          onWheel={(e) => {
            if (!viewportRef.current) return;
            viewportRef.current.scrollLeft += e.deltaY * 0.5 + e.deltaX;
          }}
        >
          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-8 px-4 py-6 items-center select-none"
            aria-label="Client logos carousel"
          >
            {displayCards.map((card, index) => (
              <a
                key={`${card.title}-${index}`}
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
                <p className="text-gray-400 text-sm text-center">
                  {card.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hide native scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}


