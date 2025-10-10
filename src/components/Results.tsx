"use client";
import { useEffect, useRef, useState } from "react";

const ACCENT = "#e0a695";
const MUTED = "rgba(255,255,255,.75)";

type Milestone = {
  label: string;
  title: string;
  bullets?: string[];
  paragraph?: string;
};

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
      {
        root,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.01, 0.5, 0.99],
      }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          What Results Can You Expect?
        </h2>
        <p className="mt-4" style={{ color: MUTED }}>
          This isn’t theory. These are typical outcomes teams achieve using the Growth Dashboard system.
        </p>
      </div>

      {/* Timeline — centered below text, same column width as heading */}
      <div className="mt-10 mb-8 max-w-3xl mx-auto">
        <div className="flex items-start justify-between">
          {MILESTONES.map((m, i) => {
            const isActive = i === active;
            const isLast = i === MILESTONES.length - 1;

            return (
              <div key={m.label} className="flex items-start flex-1">
                <button
                  onClick={() => scrollTo(i)}
                  className="flex flex-col items-center text-center"
                  aria-current={isActive ? "true" : "false"}
                >
                  <span
                    className="inline-block h-3 w-3 rounded-full transition-transform"
                    style={{
                      background: isActive ? ACCENT : "rgba(255,255,255,.28)",
                      transform: isActive ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                  <span
                    className="mt-2 text-[11px] md:text-xs uppercase tracking-wider"
                    style={{
                      color: isActive ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.6)",
                    }}
                  >
                    {m.label}
                  </span>
                </button>

                {/* connector line */}
                {!isLast && (
                  <div className="flex-1 mx-2 md:mx-3">
                    {/* circle is 12px tall, so margin-top 6px centers the 2px line */}
                    <div
                      className="h-[2px] mt-[6px]"
                      style={{ background: "rgba(255,255,255,.28)" }}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll rail: one-at-a-time with visible gap between cards */}
      <div
        ref={containerRef}
        className="
          relative mt-6
          h-[70vh] md:h-[70vh]
          overflow-y-auto pr-1 no-scrollbar
          snap-y snap-mandatory
        "
        style={{
          scrollBehavior: "smooth",
          scrollPaddingTop: "35vh",
          scrollPaddingBottom: "35vh",
        }}
        aria-label="Results timeline"
      >
        <div className="space-y-8 pb-10">
          {MILESTONES.map((m, i) => (
            <div
              key={m.label}
              data-index={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="
                [scroll-snap-stop:always]
                snap-center snap-always
                mx-auto
                w-[92%] max-w-[440px]
                h-[52vh] flex-none
                rounded-lg
                border border-white/15
                bg-white/6 backdrop-blur
                ring-1 ring-black/5
                shadow-[0_1px_0_rgba(255,255,255,.05)_inset,0_10px_30px_rgba(0,0,0,.35)]
                p-5 md:p-6
                text-center
                flex flex-col justify-center
              "
            >
              <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                {m.title}
              </h3>

              {m.bullets ? (
                <ul
                  className="space-y-2 text-[13px] md:text-[14px] leading-6"
                  style={{ color: MUTED }}
                >
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[13px] md:text-[14px] leading-6" style={{ color: MUTED }}>
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
