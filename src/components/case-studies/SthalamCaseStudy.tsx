import React from "react";
import Image from "next/image";
import Link from "next/link";

// Create a dedicated page for the Sthalam case study
export default function SthalamCaseStudy() {
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
							Sthalam Case Study
						</h1>
						<p className="text-gray-300 text-lg md:text-xl">
							How GoGrowth transformed Sthalam from zero to daily orders in just
							4 months
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
							Client Overview
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							Sthalam is a niche brand specializing in Indian-styled home decor,
							aiming to establish itself as a recognizable name in the industry
							while driving online sales through its website.
						</p>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Key Challenges
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Low Traffic
								</h3>
								<p className="text-gray-300">
									Only 3,900 users visited the website in October.
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									High Abandonment
								</h3>
								<p className="text-gray-300">
									Just 10 users added products to their cart from all traffic.
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Poor Conversion
								</h3>
								<p className="text-gray-300">
									Only a single purchase completed throughout the month.
								</p>
							</div>
						</div>
					</div>

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
						<h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
						<div className="space-y-8">
							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									1
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Paid Advertising & Outreach
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Launched targeted ad campaigns through Meta and Google Ads
										</li>
										<li>
											Created engaging ad creatives with precise audience
											segmentation
										</li>
										<li>
											Identified Meta Ads as highest performing channel and
											optimized budget allocation
										</li>
									</ul>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									2
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										SEO Optimization & Website Improvements
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Resolved technical SEO issues hampering organic traffic
										</li>
										<li>
											Optimized meta tags and restructured website content
										</li>
										<li>
											Enhanced site speed and improved keyword optimization
										</li>
										<li>
											Updated Google My Business page with relevant content
										</li>
									</ul>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									3
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Conversion Funnel Enhancements
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>Identified drop-off points in the purchase journey</li>
										<li>
											Implemented product page strategies including stock
											updates
										</li>
										<li>
											Improved product descriptions, visuals, and checkout
											experience
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Advertisement Showcase */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Ad Campaign Showcase
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="relative w-full h-96 rounded-xl overflow-hidden">
								<Image
									src="/case-studies/sthalam/sthalam-ad.png"
									alt="Sthalam ad creative 1"
									fill
									className="object-contain"
								/>
							</div>
							<div className="relative w-full h-96 rounded-xl overflow-hidden">
								<Image
									src="/case-studies/sthalam/sthalam-analytics.png"
									alt="Sthalam ad creative 1"
									fill
									className="object-contain"
								/>
							</div>
							<div className="relative w-full h-96 rounded-xl overflow-hidden">
								<Image
									src="/case-studies/sthalam/sthalam-product.png"
									alt="Sthalam ad creative 1"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">Results</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gradient-to-br from-green-900/40 to-green-700/20 p-6 rounded-xl border border-green-800">
								<div className="text-5xl font-bold text-green-400 mb-2">6x</div>
								<p className="text-white">Increase in Website Traffic</p>
								<p className="text-gray-300 text-sm">
									Over 25,000 new users visited the site
								</p>
							</div>
							<div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-xl border border-blue-800">
								<div className="text-5xl font-bold text-blue-400 mb-2">
									120x
								</div>
								<p className="text-white">Increase in Add-to-Cart Actions</p>
								<p className="text-gray-300 text-sm">
									From 10 to 1,200 users adding products
								</p>
							</div>
							<div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-6 rounded-xl border border-purple-800">
								<div className="text-5xl font-bold text-purple-400 mb-2">
									150+
								</div>
								<p className="text-white">Completed Purchases</p>
								<p className="text-gray-300 text-sm">
									From 1 to 168 purchases in 4 months
								</p>
							</div>
							<div className="bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-xl border border-yellow-800">
								<div className="text-5xl font-bold text-yellow-400 mb-2">
									8x
								</div>
								<p className="text-white">Return on Ad Spend (ROAS)</p>
								<p className="text-gray-300 text-sm">
									Through optimized ad campaigns
								</p>
							</div>
						</div>
					</div>

					{/* Results Visualization */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Growth Visualization
						</h2>
						<div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
							<Image
								src="/case-studies/sthalam/sthalam-growth-chart.png"
								alt="Sthalam growth visualization"
								fill
								className="object-contain bg-gray-900"
							/>
						</div>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Strategy Optimization
						</h2>
						<div className="space-y-6 text-gray-300">
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Platform Performance Analysis
								</h3>
								<p>
									We continuously monitored ad performance across different
									platforms and identified that Meta Ads were yielding the best
									engagement and conversions. This allowed us to allocate more
									budget towards high-performing campaigns.
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									City-Based Optimization
								</h3>
								<p>
									By analyzing purchase data, we identified which cities were
									generating the highest return on ad spend (ROAS). We scaled
									campaigns in these cities while optimizing underperforming
									locations.
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Ad Scaling & Refinement
								</h3>
								<p>
									Through A/B testing, we optimized creatives, audience
									targeting, products, and bidding strategies to maximize
									conversions while keeping costs low.
								</p>
							</div>
						</div>
					</div>

					{/* City Performance Map */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Geographic Performance
						</h2>
						<div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
							<Image
								src="/case-studies/sthalam/sthalam-map.png"
								alt="Sthalam geographic performance"
								fill
								className="object-contain"
							/>
						</div>
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

					<div>
						<h2 className="text-2xl font-bold text-white mb-6">
							Future Growth Strategies
						</h2>
						<div className="space-y-4 text-gray-300">
							<p>To sustain and further amplify growth, we are focusing on:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Strengthening Sthalam&apos;s presence on social media
									platforms that resonate with its target audience
								</li>
								<li>
									Implementing email campaigns, loyalty programs, and
									remarketing initiatives for customer retention
								</li>
								<li>
									Refining audience segmentation in ad campaigns to maximize
									efficiency and ROI
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Testimonial */}
				<div className="mb-12 bg-gray-900 bg-opacity-40 rounded-3xl p-8">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
							<Image
								src="/case-studies/logo_sthalam.avif"
								alt="Sthalam founder"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<p className="text-gray-300 italic text-lg mb-4">
								&quot;GoGrowth transformed our business from having barely any
								online presence to generating consistent daily orders. Their
								strategic approach and data-driven decision making completely
								changed our trajectory.&quot;
							</p>
							<p className="text-white font-bold">Founder, Sthalam</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
