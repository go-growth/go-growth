/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { ResultsScroller } from "@/components/Results";
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

      {/* Full-page decor SVG */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center text-gray-700/15">
        {/* … SVG unchanged … */}
      </div>

      {/* HERO */}
      <section className="relative w-full">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center">
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
      <section className="w-full relative">
        <div className="mx-auto max-w-6xl px-5 py-16 relative">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">The Problem</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center" style={{ color: MUTED }}>
            Running an e-commerce brand today is overwhelming. You’re expected to do it all — while still running your business.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* background removed */}
            <div className="rounded-2xl p-6 border border-white/15 bg-transparent">
              <h3 className="text-white text-xl font-semibold">You’re expected to:</h3>
              <ul className="mt-4 space-y-3" style={{ color: MUTED }}>
                <li>• Run great ads</li>
                <li>• Nail SEO and GEO (technical, content, and off-page)</li>
                <li>• Publish content</li>
                <li>• Manage performance</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 border border-white/15 bg-transparent">
              <h3 className="text-white text-xl font-semibold">Most founders either:</h3>
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
      <section className="w-full relative">
        <div className="mx-auto max-w-6xl px-5 py-16 relative">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Your New Marketing OS — Delivered Monthly.</h2>
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
              <div key={title} className="rounded-2xl p-6 border border-white/15 bg-transparent flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: `${ACCENT}1a` }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                    Module
                  </div>
                </div>
                <div className="mt-3 text-white text-2xl font-bold">{title}</div>
                <p className="mt-2" style={{ color: MUTED }}>{desc}</p>
                <span className="mt-4 inline-flex h-1 w-10 rounded-full" style={{ background: ACCENT }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="w-full relative">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Pricing Plans</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              Only 10 new dashboards onboarded per month. We keep it high-touch.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Kickstart */}
            <div className="rounded-2xl p-6 border border-white/15 bg-transparent flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                  Kickstart Plan
                </div>
                <div className="mt-2 text-white text-3xl font-extrabold">
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border hover:bg-white/5"
                style={{ borderColor: ACCENT }}
              >
                Start with Kickstart
              </Link>
            </div>

            {/* Monthly */}
            <div
              className="rounded-2xl p-6 border flex flex-col justify-between bg-transparent"
              style={{ borderColor: ACCENT, boxShadow: `0 0 0 2px ${ACCENT}66 inset` }}
            >
              <div>
                <div className="text-xs uppercase tracking-wider" style={{ color: ACCENT }}>
                  Monthly Plan (Optional)
                </div>
                <div className="mt-2 text-white text-3xl font-extrabold">
                  ₹25,000<span className="text-base font-normal"> one-time </span> + ₹5,000 <span className="text-base font-normal">per month</span>
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border"
                style={{ borderColor: ACCENT, background: `${ACCENT}26` }}
              >
                Subscribe Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Who This is For</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center" style={{ color: MUTED }}>
            If this sounds like you, the Growth Dashboard will fit right in.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "D2C founders scaling profitably",
              "Bootstrapped brands who want guidance, not fluff",
              "Teams with in-house execution who need direction",
              "Brands not ready for ₹1L/month agency retainers",
            ].map((item) => (
              <div key={item} className="rounded-2xl p-6 border border-white/15 bg-transparent flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: `${ACCENT}1a` }}>
                    <span className="text-xs font-semibold" style={{ color: ACCENT }}>✓</span>
                  </span>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                    Ideal For
                  </div>
                </div>
                <div className="mt-3 text-white text-lg font-bold">{item}</div>
                <span className="mt-4 inline-flex h-1 w-10 rounded-full" style={{ background: ACCENT }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">What You&apos;ll Get Monthly</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "SEO Keyword Clusters",
              "Ad Account Audit (Meta and/or Google)",
              "5 Blogs",
              "Growth Actions",
              "Consultancy call (Optional)",
              "Hosted on your dashboard",
            ].map((d) => (
              <div key={d} className="rounded-2xl p-6 border border-white/15 bg-transparent">
                <p className="text-white/90">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 py-16">
          {/* RESULTS (scrollable timeline) */}
          <section className="w-full">
            <ResultsScroller />
          </section>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "ROAS (Return on Ad Spend)", v: "+15% to +40%" },
              { k: "Organic Traffic (90 days)", v: "+25% to +100%" },
              { k: "Cost Per Lead", v: "↓ 10% to 30%" },
              { k: "Time Saved / Month", v: "10–15 hours" },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-2xl border border-white/15 p-5 text-center bg-transparent">
                <div className="text-sm opacity-80">{k}</div>
                <div className="mt-1 text-2xl font-extrabold" style={{ color: ACCENT }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-white/15 p-8 md:p-12 text-center bg-transparent">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Stop running blind. Start scaling smart.</h2>
            <p className="mt-4" style={{ color: MUTED }}>
              Pay <span style={{ color: ACCENT }}>₹25,000</span> and get your Growth Dashboard in 5 days.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consult"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border hover:bg-white/5"
                style={{ borderColor: ACCENT }}
              >
                Get Started Now
              </Link>
            </div>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              DIY growth. Strategist insights. ₹5,000/month.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">FAQ</h2>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
