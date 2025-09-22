"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Smooth, mouse-steerable, infinite carousel
 * - Auto-scrolls left continuously
 * - On hover: slows down AND lets mouse steer speed/direction
 * - Clickable logos -> brand websites (update any URL you want)
 */
export default function CardCarousel() {
  // -------- Brand data (edit URLs if any are different) --------
  const cards: {
    logo: string;
    title: string;
    subtitle: string;
    url: string;
  }[] = [
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
      url: "https://limitlessboxing.com", // ← update if different
    },
    {
      logo: "/case-studies/aevy-tv.webp",
      title: "Aevy TV",
      subtitle: "Ed-Tech",
      url: "https://www.aevy.tv",
    },
    {
      logo: "/case-studies/logo_sthalam.avif",
      title: "Sthalam",
      subtitle: "E-commerce",
      url: "https://sthalam.in", // ← update if different
    },
    {
      logo: "/case-studies/logo_astro.avif",
      title: "AstroVetro",
      subtitle: "E-commerce",
      url: "https://astrovetro.com", // ← update if different
    },
    {
      logo: "/case-studies/craft.png",
      title: "Craft Delights",
      subtitle: "E-commerce",
      url: "https://craftdelights.in", // ← update if different
    },
    {
      logo: "/case-studies/blckline.png",
      title: "Blckline Automotive",
      subtitle: "E-commerce",
      url: "https://blckline.com.au", // ← update if different
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
      url: "https://oliostories.com", // ← update if different
    },
  ];

  // Duplicate to create a seamless loop (x4 gives plenty of runway)
  const displayCards = [...cards, ...cards, ...cards, ...cards];

  // -------- Refs & state for animation --------
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // baseSpeed: px per second when NOT hovering
  const baseSpeed = 60; // smooth slow drift
  // When hovering we reduce base speed (so it "slows down")
  const hoverBaseSpeed = 18;

  // hoverVelocity is added/subtracted on hover based on mouse X
  const [hoverVelocity, setHoverVelocity] = useState(0); // px/sec
  const [isHovering, setIsHovering] = useState(false);

  // Compute hover steering based on mouse position within the viewport
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!viewportRef.current) return;

    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dx = e.clientX - centerX;

    // Normalize to [-1, 1]
    const norm = Math.max(-1, Math.min(1, dx / (rect.width / 2)));

    // Convert to px/sec steering velocity:
    // Positive norm -> scroll right to left faster (i.e., more negative scrollLeft step)
    // Negative norm -> reverse (allow scrolling the other way)
    const maxSteer = 140; // cap steering speed for control
    setHoverVelocity(norm * maxSteer * -1); // invert so mouse-right pushes leftward motion
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverVelocity(0);
  };

  // Keep the loop seamless by wrapping scrollLeft
  const wrapScroll = () => {
    const viewport = viewportRef.current;
    const scroller = scrollerRef.current;
    if (!viewport || !scroller) return;

    // The content is repeated 4x; one quarter of scrollWidth is a seamless segment
    const segment = scroller.scrollWidth / 4;
    if (viewport.scrollLeft >= segment * 3) {
      // too far right: pull back by 2 segments
      viewport.scrollLeft -= segment * 2;
    } else if (viewport.scrollLeft <= segment * 1) {
      // too far left: push forward by 2 segments
      viewport.scrollLeft += segment * 2;
    }
  };

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const tick = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.max(0, ts - last) / 1000; // seconds
      lastTsRef.current = ts;

      // Choose base speed depending on hover state
      const currentBase = isHovering ? hoverBaseSpeed : baseSpeed;

      // Move left continuously (increasing scrollLeft moves content left-to-right visually, so we subtract)
      const velocity = (currentBase + hoverVelocity) * 1; // px/sec
      viewport.scrollLeft += velocity * dt;

      wrapScroll();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [isHovering, hoverVelocity]);

  return (
    <section className="lg:py-20 py-10">
      <h1 className="max-w-7xl mx-auto text-center text-4xl font-semibold">
        Our Clients
      </h1>

      <div className="flex items-center justify-center w-full p-8">
        {/* Viewport */}
        <div
          ref={viewportRef}
          className="w-full overflow-x-scroll no-scrollbar relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // Increase scroll friction slightly on wheel for desktop feel
          onWheel={(e) => {
            if (!viewportRef.current) return;
            viewportRef.current.scrollLeft += e.deltaY * 0.5 + e.deltaX;
          }}
        >
          {/* Scroller (very wide) */}
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
                className="flex flex-col items-center flex-shrink-0 w-36 group"
                title={card.title}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-700/60 mb-3 flex items-center justify-center bg-white/5">
                  <Image
                    src={card.logo}
                    alt={`${card.title} logo`}
                    width={128}
                    height={128}
                    className="object-cover"
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

      {/* Hide native scrollbar in WebKit/Firefox */}
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
