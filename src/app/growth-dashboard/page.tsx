/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { AccentHalo, GridDots, IconAudit, IconSEO, IconContent, IconPlan } from "@/components/SiteSvgs";

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
      { "@type": "Offer", price: "20000", priceCurrency: "INR", name: "Consult Call (optional)", availability: "https://schema.org/InStock" },
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

      {/* Background SVGs */}
      <AccentHalo className="absolute -top-20 -left-10 w-[1200px] h-[700px] -z-10" accent={ACCENT} />
      <GridDots className="absolute top-[40%] -right-10 w-[260px] h-[260px] opacity-60 -z-10" accent={ACCENT} />
      <GridDots className="absolute top-[72%] left-0 w-[220px] h-[220px] opacity-40 -z-10" accent={ACCENT} />


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
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border bg-white/10 hover:bg-white/20"
                style={{ borderColor: ACCENT }}
              >
                View Pricing
              </Link>
              <Link
                href="/consult"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,.25)" }}
              >
                Book a 15-min Demo Call
              </Link>
            </div>
            <p className="mt-3 text-sm text-center" style={{ color: "rgba(255,255,255,.6)" }}>
              Pay <span style={{ color: ACCENT }}>₹25,000</span> and get your Growth Dashboard in 5 days.
            </p>
          </div>
        </div>
      </section>
      <div className="absolute top-5 left-10 text-white text-2xl">*</div>
			<div className="absolute top-5 right-10 text-white text-2xl">*</div>
			<div className="absolute bottom-20 left-60 text-white text-2xl">*</div>
			<div className="absolute top-1/2 right-32 text-white text-2xl">*</div>
			<div className="hidden lg:block absolute top-1/4 left-1/4 text-gray-700 transform rotate-45">
				<svg
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 12L21 4L13 22L11 13L3 12Z"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
			</div>
			<div className="hidden lg:block absolute bottom-1/4 right-1/4 text-gray-700">
				<svg
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</svg>
			</div>

      {/* PROBLEM */}
      <section className="w-full border-t border-white/10 relative">
        <GridDots className="absolute -top-6 right-6 w-[180px] h-[180px] opacity-40" accent={ACCENT} />
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
        <div className="absolute top-1/4 left-[15%]">
				<svg
					width="80"
					height="80"
					viewBox="0 0 80 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40 10L10 70H70L40 10Z"
						stroke="white"
						strokeWidth="1"
						fill="none"
					/>
				</svg>
			</div>
      </section>
   

      {/* SOLUTION */}
      <section className="w-full border-t border-white/10 relative">
        <GridDots className="absolute -top-10 left-8 w-[180px] h-[180px] opacity-35" accent={ACCENT} />
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
        <GridDots className="absolute -top-8 right-4 w-[160px] h-[160px] opacity-35" accent={ACCENT} />
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>
              Only 10 new dashboards onboarded per month. We keep it high-touch.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border bg-white/10 hover:bg-white/20"
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
                  ₹5,000 <span className="text-base font-normal">per month</span>
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

            {/* Consult */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,.6)" }}>
                  Consult Call (Optional)
                </div>
                <div className="mt-2 text-3xl font-extrabold">
                  ₹20,000 <span className="text-base font-normal">1:1 Strategy</span>
                </div>
                <ul className="mt-4 space-y-2" style={{ color: MUTED }}>
                  <li>• 60–90 min with senior growth expert</li>
                  <li>• Roadmap & blockers review</li>
                  <li>• Prioritized next actions</li>
                </ul>
              </div>
              <Link
                href="/consult"
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold transition border hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,.25)" }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-32 right-10 text-white opacity-40">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
					<circle cx="10" cy="10" r="8" />
				</svg>
			</div>
			<div className="absolute bottom-16 left-16 text-white opacity-40">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
					<circle cx="10" cy="10" r="8" />
				</svg>
			</div>
			<div className="absolute left-40 top-40 text-white opacity-20">
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					stroke="currentColor"
				>
					<polygon points="30,5 55,45 5,45" strokeWidth="2" />
				</svg>
			</div>
			<div className="absolute right-40 bottom-40 text-white opacity-20">
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					stroke="currentColor"
				>
					<polygon points="30,5 55,45 5,45" strokeWidth="2" />
				</svg>
			</div>
			<div className="absolute right-10 top-1/2 text-white opacity-20">
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10,20 L30,20 M20,10 L20,30" strokeWidth="4" />
				</svg>
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

      {/* CTA */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div
            className="rounded-3xl border border-white/10 p-8 md:p-12 text-center"
            style={{ background: `linear-gradient(0deg, ${ACCENT}0d, transparent 65%)` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Stop running blind. Start scaling smart.</h2>
            <p className="mt-4" style={{ color: MUTED }}>
              Pay <span style={{ color: ACCENT }}>₹25,000</span> and get your Growth Dashboard in 5 days.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consult"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition border bg-white/10 hover:bg-white/20"
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

      {/* Testimonials */}
      <section className="w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Testimonials />
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
