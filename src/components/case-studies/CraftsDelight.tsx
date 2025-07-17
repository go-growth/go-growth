import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CraftDelightsCaseStudy() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden px-4 py-12 flex flex-col items-center justify-center bg-black">
            <div className="absolute top-5 left-10 text-white text-2xl">*</div>
            <div className="absolute top-5 right-10 text-white text-2xl">*</div>
            <div className="absolute bottom-20 left-60 text-white text-2xl">*</div>
            <div className="absolute top-1/2 right-32 text-white text-2xl">*</div>

            <div className="max-w-5xl mx-auto w-full">
                <div className="flex items-center mb-10">
                    <Link href="/case-studies" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span>Back to Case Studies</span>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="relative w-40 h-40 flex-shrink-0">
                        <Image src="/case-studies/logo_craftdelights.png" alt="Craft Delights logo" fill className="object-contain rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Craft Delights Case Study</h1>
                        <p className="text-gray-300 text-lg md:text-xl">From Instagram-Only to 40 Purchases in 7 Days</p>
                    </div>
                </div>

                <div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 mb-16 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">What We Had</h2>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>A home decor and garden brand operating only via Instagram DMs</li>
                            <li>No website, no checkout system, no analytics or purchase tracking</li>
                            <li>No listings on marketplaces like Amazon or search visibility on Google</li>
                            <li>Entirely dependent on organic engagement and manual fulfillment</li>
                            <li>No advertising history or customer retargeting setup</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Craft Delights had a beautifully curated product range but lacked the systems and structure to scale. We stepped in to build a complete digital growth engine from the ground up.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">What We Did</h2>
                        <ol className="text-gray-300 space-y-6">
                            <li>
                                <h3 className="text-xl font-bold text-white">1. Built the Digital Foundation</h3>
                                <ul className="list-disc pl-6">
                                    <li>Designed and launched a conversion-focused Shopify website</li>
                                    <li>Structured collections for indoor pots, birdhouses, vases, and seasonal decor</li>
                                    <li>Enabled full event tracking using Google Analytics 4 and Meta Pixel</li>
                                    <li>Implemented backend automation and conversion APIs for accurate attribution</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-white">2. Full-Funnel Meta Ads Strategy</h3>
                                <ul className="list-disc pl-6">
                                    <li>Created engaging Meta ads using lifestyle visuals and first-time offer hooks</li>
                                    <li>Launched Top-of-Funnel prospecting campaigns and Mid-Funnel retargeting flows</li>
                                    <li>Optimized audience targeting based on product categories and lookalikes</li>
                                </ul>
                                <p className="mt-2">Ad Spend: ₹14,196 | Revenue: ₹58,102 | ROAS: 4.09</p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-white">3. Platform & SEO Expansion</h3>
                                <ul className="list-disc pl-6">
                                    <li>Listed products on Amazon and ran Sponsored Ads for relevant decor categories</li>
                                    <li>Optimized product titles, descriptions, and metadata for organic visibility</li>
                                    <li>Secured category-specific placements on Indian decor directories and discovery platforms</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-white">4. Search Optimization</h3>
                                <ul className="list-disc pl-6">
                                    <li>Developed SEO-focused collection and product page content</li>
                                    <li>Structured schema, alt tags, and internal linking for indexation</li>
                                    <li>Submitted site to Google Search Console and business listings</li>
                                </ul>
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">What Was the Outcome</h2>
                        <table className="min-w-full text-left text-sm text-gray-300 border border-gray-700 mb-6">
                            <thead className="bg-gray-800 text-white uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3 border-b border-gray-700">Metric</th>
                                    <th className="px-6 py-3 border-b border-gray-700">Result</th>
                                    <th className="px-6 py-3 border-b border-gray-700">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-900">
                                    <td className="px-6 py-4 border-b border-gray-700">Total Users</td>
                                    <td className="px-6 py-4 border-b border-gray-700">980</td>
                                    <td className="px-6 py-4 border-b border-gray-700">+114.4%</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 border-b border-gray-700">New Users</td>
                                    <td className="px-6 py-4 border-b border-gray-700">928</td>
                                    <td className="px-6 py-4 border-b border-gray-700">+104.9%</td>
                                </tr>
                                <tr className="bg-gray-900">
                                    <td className="px-6 py-4 border-b border-gray-700">Add to Carts</td>
                                    <td className="px-6 py-4 border-b border-gray-700">124</td>
                                    <td className="px-6 py-4 border-b border-gray-700">+342.9%</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 border-b border-gray-700">Purchases</td>
                                    <td className="px-6 py-4 border-b border-gray-700">40</td>
                                    <td className="px-6 py-4 border-b border-gray-700">+1,900%</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl font-bold text-white mb-2">Early Purchase Impact</h3>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>40 orders fulfilled within one week of website + ad launch</li>
                            <li>Strong response to Clay Magnets, DIY birdhouse kits, embossed pot collection, and planters</li>
                            <li>Customers now buying directly from site without manual intervention</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Digital Visibility Transformation</h2>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2">
                            <li>Indexed on Google for relevant keywords and brand queries</li>
                            <li>Active Amazon product listings with visibility through paid placements</li>
                            <li>Traffic now coming from a combination of Meta Ads, organic search, and marketplace exposure</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Summary</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-2">Before</h3>
                                <ul className="text-gray-300 list-disc pl-6">
                                    <li>No website</li>
                                    <li>No data, automation, or digital infrastructure</li>
                                    <li>Manual sales via Instagram DMs</li>
                                    <li>No discoverability outside social media</li>
                                </ul>
                            </div>
                            <div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-2">After</h3>
                                <ul className="text-gray-300 list-disc pl-6">
                                    <li>980 users in 7 days</li>
                                    <li>124 add-to-carts</li>
                                    <li>40 purchases from ₹14,196 in ad spend</li>
                                    <li>₹58,102 in revenue</li>
                                    <li>Active listings on Amazon and across search</li>
                                    <li>A complete e-commerce growth engine, live</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
