/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { IconAudit, IconSEO, IconContent, IconPlan } from "@/components/SiteSvgs";

export const metadata: Metadata = {
  title: "Growth Dashboard • One Dashboard. All the Growth You Need.",
  description:
    "Expert SEO, ad audits, content ideas, and monthly growth plans—without ₹1L/month retainers. Get your private Growth Dashboard in 5 days.",
  alternates: { canonical: "https://gogrowth.in/growth-dashboard" },
  openGraph: {
    title: "Growth Dashboard • One Dashboard. All the Growth You Need.",
    description:
      "Expert SEO, ad audits, content ideas, and monthly growth plans—without ₹1L/month retainers.",
    url: "https://gogrowth.in/growth-dashboard",
    siteName: "Go Growth",
    type: "website",
  },
};

const ACCENT = "#e0a695";
const MUTED = "rgba(255,255,255,.7)";

export default function GrowthDashboardPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GoGrowth Growth Dashboard",
    description:
      "A monthly marketing OS for D2C brands: SEO strategy, ad audits, content, and action plans in one dashboard.",
    brand: { "@type": "Brand", name: "GoGrowth" },
    offers: [
      { "@type": "Offer", price: "25000", priceCurrency: "INR", name: "Kickstart Plan (one-time)", availability: "https://schema.org/InStock" },
      { "@type": "Offer", price: "5000", priceCurrency: "INR", name: "Monthly Plan", availability: "https://schema.org/InStock" },
    ],
    url: "https://gogrowth.in/growth-dashboard",
  };

  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* === DECOR SVG (potrace logo) ===
          - Visible only on lg+ (hidden on small)
          - Absolutely positioned relative to <main>
          - Uses currentColor; parent sets it to black
      */}
      <div className="fixed inset-0 block z-0 pointer-events-none flex items-center justify-center text-gray-700/15">
  <svg
    className="w-[80vmin] h-[80vmin] "
    viewBox="0 0 300 300"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    <g transform="translate(0,300) scale(0.1,-0.1)" fill="currentColor" stroke="none">
      <path d="M1283 2232 c-121 -70 -236 -135 -254 -145 l-33 -18 81 -80 80 -81 63
41 c189 122 432 116 608 -16 l34 -26 79 79 c73 72 78 80 62 92 -28 21 -484
282 -491 282 -4 0 -107 -57 -229 -128z m435 -34 c108 -62 204 -120 214 -128
18 -14 17 -17 -26 -59 l-46 -45 -79 42 c-176 94 -352 94 -538 0 l-84 -42 -40
40 c-22 21 -38 44 -37 51 3 15 405 252 427 252 8 1 102 -50 209 -111z"/>
      <path d="M847 1983 l-77 -45 2 -431 3 -431 80 -48 80 -47 89 88 89 89 -31 38
c-136 171 -134 449 6 632 l25 33 -84 85 c-46 46 -88 84 -94 83 -5 -1 -45 -21
-88 -46z m157 -72 l49 -50 -42 -83 c-98 -194 -88 -396 29 -598 l20 -34 -22
-23 c-12 -13 -24 -21 -27 -18 -2 3 -21 -11 -42 -31 -36 -35 -38 -36 -73 -23
-20 7 -36 17 -36 21 0 4 -7 8 -15 8 -8 0 -15 5 -15 11 0 5 -4 7 -10 4 -7 -4
-10 135 -10 411 0 230 3 415 6 411 4 -3 12 -1 20 6 44 40 84 57 104 47 8 -5
37 -31 64 -59z"/>
      <path d="M1996 1941 c-77 -77 -86 -90 -71 -99 27 -15 11 -42 -24 -42 -20 0
-44 13 -76 40 -107 93 -201 125 -342 118 -83 -5 -102 -10 -171 -43 -149 -74
-242 -211 -250 -370 -8 -150 37 -273 131 -363 127 -119 296 -159 462 -108 45
14 94 41 163 92 l22 16 0 -172 c0 -94 3 -170 8 -168 4 2 31 18 60 36 l52 34
-2 206 -3 207 -71 3 -72 3 -35 -43 c-161 -196 -470 -154 -579 79 -111 236 77
500 343 481 87 -7 166 -45 224 -110 l43 -48 223 2 222 3 1 119 1 120 -80 48
c-44 26 -82 47 -85 48 -3 0 -45 -40 -94 -89z m167 -1 l48 -30 -3 -88 -3 -87
-188 -3 -187 -2 -39 39 c-120 122 -291 155 -442 84 -153 -72 -247 -244 -219
-401 21 -124 106 -239 213 -291 49 -24 171 -43 219 -35 86 15 176 62 228 119
31 34 66 48 101 40 l27 -6 0 -165 c0 -136 -2 -167 -15 -180 -27 -26 -34 2 -31
123 3 103 1 114 -18 134 -24 23 -48 21 -80 -9 -27 -26 -121 -70 -174 -81 -59
-13 -174 -6 -228 13 -52 19 -116 62 -164 111 -110 114 -140 309 -70 458 42 91
100 150 189 194 65 32 86 37 163 41 123 6 185 -15 297 -99 37 -28 80 -53 97
-56 43 -7 86 28 86 69 0 24 12 43 53 85 30 29 63 53 74 53 10 0 40 -14 66 -30z"/>
      <path d="M1448 1769 c-116 -28 -202 -138 -202 -259 0 -108 60 -202 159 -250
47 -23 135 -27 197 -8 45 13 122 77 144 119 l15 29 134 0 135 0 2 -224 3 -223
108 63 109 62 -1 264 0 263 -244 3 -243 2 -16 28 c-61 102 -189 158 -300 131z
m159 -54 c20 -8 62 -43 94 -78 l58 -62 223 -5 223 -5 0 -234 0 -234 -60 -33
c-43 -24 -61 -30 -67 -21 -4 7 -8 88 -8 181 0 225 7 216 -177 216 l-134 0 -67
-69 c-48 -50 -78 -72 -107 -80 -67 -18 -118 -13 -176 17 -163 85 -159 327 6
403 49 23 142 25 192 4z"/>
      <path d="M1078 1024 l-76 -75 36 -23 c21 -12 87 -51 147 -86 61 -34 159 -92
219 -128 99 -59 111 -64 130 -52 12 8 68 41 125 74 l103 61 2 123 c0 67 -2
122 -6 122 -4 0 -22 -9 -40 -19 -55 -31 -132 -44 -237 -39 -108 6 -181 29
-262 84 -28 19 -54 34 -58 34 -3 0 -40 -34 -83 -76z m287 -68 c100 -27 334
-14 357 19 4 5 7 -30 7 -80 0 -49 -3 -84 -6 -77 -4 10 -7 10 -17 -2 -6 -8 -51
-38 -101 -66 l-90 -52 -80 43 c-44 23 -111 62 -150 85 -38 24 -100 60 -137 81
-41 23 -68 45 -68 55 0 9 18 32 41 51 l41 35 71 -38 c40 -22 99 -46 132 -54z"/>
    </g>
  </svg>
</div>


      {/* HERO */}
      <section className="relative w-full">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center">
              One Dashboard. <span style={{ color: ACCENT }}>All the Growth You Need.</span>
            </h1>
            <p className="mt-6 text-lg" style={{ color: MUTED }}>
              Get expert SEO, ad audits, content ideas, and monthly growth plans —{" "}
              <span className="font-semibold text-white">without paying ₹1L/month retainers.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border hover:bg-white/5"
                style={{ borderColor: ACCENT }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="w-full border-t border-white/10 relative">
        <div className="mx-auto max-w-6xl px-5 py-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center">The Problem</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center" style={{ color: MUTED }}>
            Running an e-commerce brand today is overwhelming. You’re expected to do it all — while still running your business.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl p-6 border bg-white/5 border-white/10">
              <h3 className="text-xl font-semibold">You’re expected to:</h3>
              <ul className="mt-4 space-y-3" style={{ color: MUTED }}>
                <li>• Run great ads</li>
                <li>• Nail SEO and GEO (technical, content, and off-page)</li>
                <li>• Publish content</li>
                <li>• Manage performance</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 border bg-white/5 border-white/10">
              <h3 className="text-xl font-semibold">Most founders either:</h3>
              <ul className="mt-4 space-y-3" style={{ color: MUTED }}>
                <li>• Waste money on agencies that overpromise</li>
                <li>• Try to do everything alone — and burn out</li>
                <li>• Don’t know what’s actually working</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="w-full border-t border-white/10 relative">
        <div className="mx-auto max-w-6xl px-5 py-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Your New Marketing OS — Delivered Monthly.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center" style={{ color: MUTED }}>
            We’ve built a system that acts like your growth strategist. Except it lives in a dashboard. And it costs less than your weekend Zomato bill.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Ad Audit", desc: "Know what’s burning money. What to fix. What to scale. How to execute.", Icon: IconAudit },
              { title: "SEO Strategy", desc: "Technical fixes, keyword clusters, and blogs that rank.", Icon: IconSEO },
              { title: "Written Content", desc: "Monthly blogs and website content — done for you.", Icon: IconContent },
              { title: "Growth Plan", desc: "Actionable steps, custom to your business — inside your private dashboard.", Icon: IconPlan },
            ].map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-2xl p-6 border bg-white/5 border-white/10 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: `${ACCENT}1a` }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                    Module
                  </div>
                </div>
                <div className="mt-3 text-2xl font-bold">{title}</div>
                <p className="mt-2" style={{ color: MUTED }}>{desc}</p>
                <span className="mt-4 inline-flex h-1 w-10 rounded-full" style={{ background: ACCENT }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="w-full border-t border-white/10 relative">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              Only 10 new dashboards onboarded per month. We keep it high-touch.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Kickstart */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                  Kickstart Plan
                </div>
                <div className="mt-2 text-3xl font-extrabold">
                  ₹25,000 <span className="text-base font-normal">one-time</span>
                </div>
                <ul className="mt-4 space-y-2" style={{ color: MUTED }}>
                  <li>• SEO + Ads Audit with actionable scale plan</li>
                  <li>• Keyword Plan</li>
                  <li>• Content Ideas</li>
                  <li>• CRO suggestions</li>
                </ul>
              </div>
              <Link
                href="/consult"
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border hover:bg白/10"
                style={{ borderColor: ACCENT }}
              >
                Start with Kickstart
              </Link>
            </div>

            {/* Monthly */}
            <div
              className="rounded-2xl p-6 border flex flex-col justify-between"
              style={{ borderColor: ACCENT, boxShadow: `0 0 0 2px ${ACCENT}66 inset`, background: "rgba(255,255,255,0.05)" }}
            >
              <div>
                <div className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
                  Monthly Plan (Optional)
                </div>
                <div className="mt-2 text-3xl font-extrabold">
                  ₹25,000 + ₹5,000 <span className="text-base font-normal">per month</span>
                </div>
                <ul className="mt-4 space-y-2" style={{ color: MUTED }}>
                  <li>• Updated SEO/Ad Audit</li>
                  <li>• Fresh blogs</li>
                  <li>• Action Checklist</li>
                  <li>• Custom updated ad account solutions</li>
                </ul>
              </div>
              <Link
                href="/consult"
                className="mt-8 inline-flex w/full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border"
                style={{ borderColor: ACCENT, background: `${ACCENT}26` }}
              >
                Subscribe Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Who This is For</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "D2C founders scaling profitably",
              "Bootstrapped brands who want guidance, not fluff",
              "Teams with in-house execution who need direction",
              "Brands not ready for ₹1L/month agency retainers",
            ].map((item) => (
              <div key={item} className="rounded-2xl p-6 border bg-white/5 border-white/10">
                <p className="text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What You&apos;ll Get Monthly</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "SEO Keyword Clusters",
              "Ad Account Audit (Meta and/or Google)",
              "5 Blogs",
              "Growth Actions",
              "Consultancy call (Optional)",
              "Hosted on your dashboard",
            ].map((d) => (
              <div key={d} className="rounded-2xl p-6 border bg-white/5 border-white/10">
                <p className="text-white/90">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div
            className="rounded-3xl border border-white/10 p-8 md:p-12"
            style={{ background: `linear-gradient(0deg, ${ACCENT}0d, transparent 60%)` }}
          >
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-4xl font-extrabold" style={{ color: ACCENT }}>4.2x</div>
                <p className="mt-2" style={{ color: "rgba(255,255,255,.7)" }}>Median ROAS improvement after first audit</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold" style={{ color: ACCENT }}>-28%</div>
                <p className="mt-2" style={{ color: "rgba(255,255,255,.7)" }}>Wasted ad spend reduced in 2 weeks</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold" style={{ color: ACCENT }}>5 days</div>
                <p className="mt-2" style={{ color: "rgba(255,255,255,.7)" }}>Average delivery time for the dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS (dots only) */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: ACCENT }}>
              What Results Can You Expect?
            </h2>
            <p className="mt-4" style={{ color: MUTED }}>
              This isn’t theory. These are typical outcomes teams achieve using the Growth Dashboard system.
            </p>
          </div>

          <div className="mt-12 mb-10 flex justify-between items-center max-w-4xl mx-auto">
            {["1 Week", "1 Month", "3 Months", "6 Months"].map((label) => (
              <div key={label} className="flex flex-col items-center text-center flex-1">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: ACCENT }} />
                <span className="mt-2 text-xs md:text-sm uppercase tracking-wider opacity-80">{label}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6 text-center" style={{ background: `linear-gradient(180deg, ${ACCENT}0d, transparent 70%)` }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: ACCENT }}>Within 1 Week — Clarity</h3>
              <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
                <li>Know exactly where ad spend is leaking</li>
                <li>Revenue-generating ad structure with step-by-step actions</li>
                <li>Top 10 revenue keywords + untapped SEO clusters</li>
                <li>High-converting blog draft tailored to your audience</li>
                <li>Clean dashboard highlighting your top growth actions</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center" style={{ background: `linear-gradient(180deg, ${ACCENT}0d, transparent 70%)` }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: ACCENT }}>Within 1 Month — Momentum</h3>
              <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
                <li>Higher-performing campaigns using suggested angles and copy</li>
                <li>Rank for 5–10 long-tail keywords via blog + technical fixes</li>
                <li>Reusable monthly checklists to build internal systems</li>
                <li>Plug-and-play CTAs to convert blog traffic</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center" style={{ background: `linear-gradient(180deg, ${ACCENT}0d, transparent 70%)` }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: ACCENT }}>Within 3 Months — Growth</h3>
              <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
                <li>Lower CAC by 10–30% with better targeting and funnel insights</li>
                <li>Noticeable lift in ROAS</li>
                <li>Organic traffic compounding — baseline traffic rises</li>
                <li>Team executes confidently without strategy guesswork</li>
                <li>Save ₹50,000+/month vs. retainers with more control</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center" style={{ background: `linear-gradient(180deg, ${ACCENT}0d, transparent 70%)` }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: ACCENT }}>Within 6 Months — Scalable</h3>
              <p className="text-sm" style={{ color: MUTED }}>
                The system compounds across channels. Most founders report transformative, repeatable growth and actively refer peers.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "ROAS (Return on Ad Spend)", v: "+15% to +40%" },
              { k: "Organic Traffic (90 days)", v: "+25% to +100%" },
              { k: "Cost Per Lead", v: "↓ 10% to 30%" },
              { k: "Time Saved / Month", v: "10–15 hours" },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-2xl border border-white/10 p-5 text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-sm opacity-80">{k}</div>
                <div className="mt-1 text-2xl font-extrabold" style={{ color: ACCENT }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-white/10 p-8 md:p-12 text-center" style={{ background: `linear-gradient(0deg, ${ACCENT}0d, transparent 65%)` }}>
            <h2 className="text-3xl md:text-4xl font-bold">Stop running blind. Start scaling smart.</h2>
            <p className="mt-4" style={{ color: MUTED }}>
              Pay <span style={{ color: ACCENT }}>₹25,000</span> and get your Growth Dashboard in 5 days.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consult"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border hover:bg-white/10"
                style={{ borderColor: ACCENT }}
              >
                Get Started Now
              </Link>
              <Link
                href="/consult"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,.25)" }}
              >
                Book a 15-min Demo Call
              </Link>
            </div>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              DIY growth. Strategist insights. ₹5,000/month.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <FAQ />
        </div>
      </section>
    </main>
  );
}
