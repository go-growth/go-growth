import React from "react";
import Image from "next/image";
import Link from "next/link";

// Create a dedicated page for the Sthalam case study
export default function BlacklineAutomotiveCaseStudy() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden px-4 py-12 flex flex-col items-center justify-center bg-black">
            {/* Decorative elements - same as case studies page */}
            <div className="absolute top-5 left-10 text-white text-2xl">*</div>
            <div className="absolute top-5 right-10 text-white text-2xl">*</div>
            <div className="absolute bottom-20 left-60 text-white text-2xl">*</div>
            <div className="absolute top-1/2 right-32 text-white text-2xl">*</div>
            <div className="absolute bottom-1/4 right-1/4 text-gray-700">
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

            <div className="max-w-5xl mx-auto w-full">
                {/* Header with back button */}
                <div className="flex items-center mb-10">
                    <Link
                        href="/case-studies"
                        className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Back to Case Studies</span>
                    </Link>
                </div>

                {/* Case Study Header */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="relative w-40 h-40 flex-shrink-0">
                        <Image
                            src="/case-studies/logo_sthalam.avif"
                            alt="Sthalam logo"
                            fill
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Blackline Automotive Case Study
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl">
                            From Zero Sales to ROAS 8+ in Just 30 Days
                        </p>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="mb-12 relative w-full h-64 md:h-96 overflow-hidden rounded-2xl">
                    <Image
                        src="/case-studies/sthalam/sthalam-hero.png"
                        alt="Sthalam products showcase"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Case Study Content */}
                <div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 mb-16">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            What We Had
                        </h2>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>A brand-new automotive e-commerce brand with no online recognition</li>
                            <li>Zero sales and minimal traffic on launch</li>
                            <li>No presence on search engines or local directories</li>
                            <li>No conversion tracking or retargeting systems in place</li>
                            <li>Unoptimized product pages and no structured advertising</li>
                            <li>Blckline was passionate about premium aftermarket lighting—but had no digital engine running. We stepped in to build it from the ground up.</li>
                        </ul>
                    </div>

                    {/* 
                    Ad Spend: 631 AUD
                    Revenue Generated: 4162 AUD
                    ROAS: 8.1x */}

                    {/* Analytics Image */}
                    <div className="mb-12 relative w-full h-64 rounded-xl overflow-hidden">
                        <Image
                            src="/case-studies/sthalam/sthalam-low.png"
                            alt="Sthalam analytics screenshot"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">What We Did</h2>
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Built the Digital Infrastructure</h3>
                                    <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                        <li>
                                            Set up Google Analytics 4 with full event tracking (Add to Cart, Checkout Steps, Purchases)
                                        </li>
                                        <li>
                                            Created a Google Merchant Center account and connected product feeds
                                        </li>
                                        <li>
                                            Claimed and optimized Google My Business (GMB) listing
                                        </li>
                                        <li>Listed Blckline on relevant Australian directories and marketplaces to boost local trust </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Enhanced Brand Presence
                                    </h3>
                                    <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                        <li className="">Added branded metadata, schema, and local signals to boost SEO</li>
                                        <li className="">Built SEO heavy content for category pages (e.g., aftermarket headlights, LED tail lights)</li>
                                        <li className="">Designed a performance optimized Shopify experience with clear CTAs, trust icons, and mobile first UI</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Launched Full-Funnel Meta Ads</h3>
                                    <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                        <li className="">Created high-impact Meta ad creatives focused on before/after transformations</li>
                                        <li className="">Ran a Top-of-Funnel prospecting campaign targeting auto enthusiasts, Hilux owners, 4x4 modders</li>
                                        <li className="">Built Middle of Funnel retargeting ads for viewers, cart abandoners, and engagers</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <p><strong>Ad Spend:</strong> 631 AUD</p>
                        <p><strong>Revenue Generated:</strong> 4162 AUD</p>
                        <p><strong>ROAS: 8.1x</strong></p>
                    </div>

                    {/* Advertisement Showcase */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Ad Campaign Showcase
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/case-studies/sthalam/sthalam-ad.png"
                                    alt="Sthalam ad creative 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/case-studies/sthalam/sthalam-analytics.png"
                                    alt="Sthalam ad creative 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/case-studies/sthalam/sthalam-product.png"
                                    alt="Sthalam ad creative 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6">What Was the Outcome</h2>
                    <p className="text-gray-300 text-lg mb-4">Real Growth, Real Fast</p>
                    <div className="overflow-x-auto mb-12">
                        <table className="min-w-full text-left text-sm text-gray-300 border border-gray-700">
                            <thead className="bg-gray-800 text-white uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3 border-b border-gray-700">Metric</th>
                                    <th className="px-6 py-3 border-b border-gray-700">Result</th>
                                    <th className="px-6 py-3 border-b border-gray-700">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-900">
                                    <td className="px-6 py-4 border-b border-gray-700">Active Users</td>
                                    <td className="px-6 py-4 border-b border-gray-700">3.1K</td>
                                    <td className="px-6 py-4 border-b border-gray-700">↑ 809.9%</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 border-b border-gray-700">Event Count</td>
                                    <td className="px-6 py-4 border-b border-gray-700">47K</td>
                                    <td className="px-6 py-4 border-b border-gray-700">↑ 323.4%</td>
                                </tr>
                                <tr className="bg-gray-900">
                                    <td className="px-6 py-4 border-b border-gray-700">Add to Carts</td>
                                    <td className="px-6 py-4 border-b border-gray-700">57</td>
                                    <td className="px-6 py-4 border-b border-gray-700">↑ 280.0%</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 border-b border-gray-700">Total Orders</td>
                                    <td className="px-6 py-4 border-b border-gray-700">10+ Paid</td>
                                    <td className="px-6 py-4 border-b border-gray-700">From 0</td>
                                </tr>
                                <tr className="bg-gray-900">
                                    <td className="px-6 py-4">Order Value Range</td>
                                    <td className="px-6 py-4">$322–$2,699</td>
                                    <td className="px-6 py-4">High-ticket</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-2">Key Order Highlights</h3>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>High AOV orders</li>
                            <li>All orders marked Paid and Fulfilled in Shopify backend</li>
                            <li>Fulfillment exclusively through online store channel</li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-2">Enhanced Visibility on Google</h3>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>Indexed for branded and high-intent product queries</li>
                            <li>Knowledge Panel created on Google within the first 30 days</li>
                            <li>Products actively visible on Shopping via Merchant Center Feeds
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Ad Spents</h2>
                        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                            <Image
                                src="/case-studies/sthalam/sthalam-ad-spent.png"
                                alt="Sthalam geographic performance"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mb-12 bg-gray-900 bg-opacity-40 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Summary</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-2">Before</h3>
                                <ul className="text-gray-300 list-disc pl-6">
                                    <li>No sales</li>
                                    <li>No visibility</li>
                                    <li>
                                        No tracking
                                    </li>
                                    <li>No digital presence</li>
                                </ul>
                            </div>
                            <div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-2">After</h3>
                                <ul className="text-gray-300 list-disc pl-6">
                                    <li>3.1K users, 57 add-to-carts</li>
                                    <li>10+ paid orders</li>
                                    <li>$4.1K+ in revenue from $631 ad spend</li>
                                    <li>ROAS 8.1</li>
                                    <li>Active across Meta, Google, Shopify, and local platforms</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
