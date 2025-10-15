/* RESULTS SECTION + SCROLLER (fully responsive) */
"use client";
import { useEffect, useRef, useState } from "react";

const ACCENT = "#e0a695";
const MUTED = "rgba(255,255,255,.75)";

type Milestone = { label: string; title: string; bullets?: string[]; paragraph?: string };

const MILESTONES: Milestone[] = [
  {
    label: "1 Week",
    title: "Within 1 Week — Clarity",
    bullets: [
      "Know exactly where ad spend is leaking",
      "Revenue-generating ad structure with step-by-step actions",
      "Top 10 revenue keywords + untapped SEO clusters",
      "High-converting blog draft tailored to your audience",
      "Clean dashboard highlighting your top growth actions",
    ],
  },
  {
    label: "1 Month",
    title: "Within 1 Month — Momentum",
    bullets: [
      "Higher-performing campaigns using suggested angles and copy",
      "Rank for 5–10 long-tail keywords via blog + technical fixes",
      "Reusable monthly checklists to build internal systems",
      "Plug-and-play CTAs to convert blog traffic",
    ],
  },
  {
    label: "3 Months",
    title: "Within 3 Months — Growth",
    bullets: [
      "Lower CAC by 10–30% with better targeting and funnel insights",
      "Noticeable lift in ROAS",
      "Organic traffic compounding — baseline traffic rises",
      "Team executes confidently without strategy guesswork",
      "Save ₹50,000+/month vs. retainers with more control",
    ],
  },
  {
    label: "6 Months",
    title: "Within 6 Months — Scalable",
    paragraph:
      "The system compounds across channels. Most founders report transformative, repeatable growth and actively refer peers.",
  },
];

export function ResultsScroller() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile 100vh fix (sets --vh CSS var)
  useEffect(() => {
    const setVH = () => {
      const vh = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    window.visualViewport?.addEventListener("resize", setVH as any);
    return () => {
      window.removeEventListener("resize", setVH);
      window.visualViewport?.removeEventListener("resize", setVH as any);
    };
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!top) return;
        const idx = Number((top.target as HTMLElement).dataset.index || "0");
        setActive(idx);
      },
      { root, rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.5, 0.99] }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) =>
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-0 py-6 md:py-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white font-bold text-[22px] sm:text-[26px] md:text-[32px]">
          What Results Can You Expect?
        </h2>
        <p className="mt-2 text-[13px] sm:text-sm md:text-base" style={{ color: MUTED }}>
          This isn’t theory. These are typical outcomes teams achieve using the Growth Dashboard system.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-5 sm:mt-6 mb-5 sm:mb-7 relative max-w-4xl mx-auto px-4">
        <div
          className="absolute top-[6px] left-0 right-0 h-[1px]"
          style={{
            background: "rgba(255,255,255,.15)",
            marginLeft: `calc(50% / ${MILESTONES.length} + 20px)`,
            marginRight: `calc(50% / ${MILESTONES.length} + 20px)`,
          }}
        />
        <div className="flex justify-between items-center relative">
          {MILESTONES.map((m, i) => {
            const isActive = i === active;
            return (
              <button
                key={m.label}
                onClick={() => scrollTo(i)}
                className="flex flex-col items-center text-center flex-1 relative z-10"
                aria-current={isActive ? "true" : "false"}
              >
                <span
                  className="inline-block rounded-full transition-all h-2.5 w-2.5 sm:h-3 sm:w-3"
                  style={{
                    background: isActive ? ACCENT : "rgba(255,255,255,.28)",
                    transform: isActive ? "scale(1.25)" : "scale(1)",
                  }}
                />
                <span
                  className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider"
                  style={{
                    color: isActive ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.6)",
                  }}
                >
                  {m.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scroll rail — responsive heights */}
      <div
        ref={containerRef}
        className="
          relative
          mt-2 md:mt-3
          h-[56dvh] sm:h-[48dvh] md:h-[42vh] lg:h-[40vh]
          overflow-y-auto pr-1 no-scrollbar
          snap-y snap-mandatory
        "
        style={{
          // fallback for dvh on older browsers
          height: "calc(var(--vh, 1vh) * 56)",
          scrollPaddingTop: "18vh",
          scrollPaddingBottom: "12vh",
        }}
        aria-label="Results timeline"
      >
        <div className="space-y-4 sm:space-y-5 pb-2 sm:pb-4">
          {MILESTONES.map((m, i) => (
            <div
              key={m.label}
              data-index={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="
                [scroll-snap-stop:always] snap-center snap-always
                mx-auto w-[92%] max-w-[480px]
                h-auto min-h-[30dvh] sm:min-h-[28dvh] md:h-[26vh] lg:h-[24vh]
                rounded-lg border border-white/15
                bg-white/5 backdrop-blur
                ring-1 ring-black/5
                shadow-[0_1px_0_rgba(255,255,255,.05)_inset,0_10px_30px_rgba(0,0,0,.35)]
                p-4 sm:p-5
                text-center flex flex-col justify-center
              "
              style={{ minHeight: "calc(var(--vh, 1vh) * 30)" }}
            >
              <h3 className="text-white font-semibold mb-2 text-[14px] sm:text-[15px] md:text-lg">
                {m.title}
              </h3>

              {m.bullets ? (
                <ul
                  className="space-y-1.5 text-[12px] sm:text-[12.5px] md:text-[13px] leading-5"
                  style={{ color: MUTED }}
                >
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-[12px] sm:text-[12.5px] md:text-[13px] leading-5"
                  style={{ color: MUTED }}
                >
                  {m.paragraph}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}