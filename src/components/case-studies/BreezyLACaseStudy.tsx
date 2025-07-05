import React from "react";
import Image from "next/image";
import Link from "next/link";

// Create a dedicated page for the Breezy LA case study
export default function BreezyLACaseStudy() {
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
							src="/case-studies/breezyla-logo.webp"
							alt="Breezy LA logo"
							fill
							className="object-contain rounded-full"
						/>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
							Breezy LA Case Study
						</h1>
						<p className="text-gray-300 text-lg md:text-xl">
							How we transformed Breezy LA&apos;s digital presence to increase
							visibility, engagement, and customer conversions
						</p>
					</div>
				</div>

				{/* Hero Image Section */}
				<div className="mb-12 relative w-full h-64 md:h-96 overflow-hidden rounded-2xl">
					<Image
						src="/case-studies/breezy/breezy-hero.png"
						alt="Breezy LA digital presence"
						fill
						className="object-contain"
					/>
				</div>

				{/* Case Study Content */}
				<div className="p-8 mb-16">
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Client Overview
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							Breezy LA is a cannabis delivery dispensary based in Los Angeles,
							seeking to enhance its online presence and improve customer
							engagement across multiple digital channels. Our goal was to
							optimize their website, improve social media performance, and
							strengthen their local SEO for increased visibility and customer
							reach.
						</p>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Primary Objectives
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Website Enhancement
								</h3>
								<p className="text-gray-300">
									Revamp website functionality, design, and performance
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Social Media Growth
								</h3>
								<p className="text-gray-300">
									Optimize Instagram and Twitter for better engagement
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Local SEO Improvement
								</h3>
								<p className="text-gray-300">
									Set up and optimize accounts to drive local traffic
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Business Credibility
								</h3>
								<p className="text-gray-300">
									Establish merchant accounts and update business details
								</p>
							</div>
						</div>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Key Challenges
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Outdated Website
								</h3>
								<p className="text-gray-300">
									The existing website had UX issues, slow load times, and
									lacked conversion optimization
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Inconsistent Social Media
								</h3>
								<p className="text-gray-300">
									Their Instagram feed was unstructured, and Twitter lacked
									active engagement
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Poor Local SEO
								</h3>
								<p className="text-gray-300">
									Limited online visibility due to missing and unoptimized
									business listings
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Lack of Credible Merchant Accounts
								</h3>
								<p className="text-gray-300">
									No verified platforms for easy transactions and trust-building
								</p>
							</div>
						</div>
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
										Website Renovation & Optimization
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Redesigned the website for a cleaner, more user-friendly
											experience
										</li>
										<li>
											Fixed technical SEO issues, improved loading speed, and
											optimized product pages for conversions
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
										Social Media Enhancement
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Instagram: Reorganized the feed, designed consistent
											branding, and optimized post timing
										</li>
										<li>
											Twitter: Actively engaged with the audience through timely
											updates, discussions, and cannabis industry trends
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
										Local SEO & Business Listing Improvements
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Created and optimized a Google My Business account,
											ensuring accurate and updated details
										</li>
										<li>
											Set up additional local business listings to improve
											discoverability in search results
										</li>
										<li>
											Built citations and backlinks to strengthen Breezy
											LA&apos;s online authority
										</li>
									</ul>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									4
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Merchant Account Setup
									</h3>
									<ul className="text-gray-300 list-disc pl-6 space-y-2">
										<li>
											Established and verified a merchant account to streamline
											transactions and boost credibility
										</li>
										<li>
											Integrated payment solutions to ensure a seamless checkout
											process for customers
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Implementation Strategy */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Implementation Strategy
						</h2>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800 mb-6">
							<h3 className="text-xl font-bold text-white mb-2">
								Performance Monitoring
							</h3>
							<p className="text-gray-300">
								Regular audits to identify technical issues and resolve them
								quickly
							</p>
						</div>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800 mb-6">
							<h3 className="text-xl font-bold text-white mb-2">
								SEO & Engagement Tracking
							</h3>
							<p className="text-gray-300">
								Measured keyword rankings and engagement rates to refine content
								and social media strategy
							</p>
						</div>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">
								Optimization Focus
							</h3>
							<p className="text-gray-300">
								Focused on high-engagement content types and optimized the most
								profitable traffic sources
							</p>
						</div>
					</div>

					{/* Results Showcase */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">Results</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gradient-to-br from-green-900/40 to-green-700/20 p-6 rounded-xl border border-green-800">
								<div className="text-5xl font-bold text-green-400 mb-2">↑</div>
								<p className="text-white">Enhanced Website Experience</p>
								<p className="text-gray-300 text-sm">
									Faster load times and better navigation led to increased user
									retention
								</p>
							</div>
							<div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-xl border border-blue-800">
								<div className="text-5xl font-bold text-blue-400 mb-2">↑</div>
								<p className="text-white">Stronger Social Media Presence</p>
								<p className="text-gray-300 text-sm">
									Instagram and Twitter engagement rates improved significantly
								</p>
							</div>
							<div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-6 rounded-xl border border-purple-800">
								<div className="text-5xl font-bold text-purple-400 mb-2">↑</div>
								<p className="text-white">Improved Local Search Visibility</p>
								<p className="text-gray-300 text-sm">
									Google My Business and other listings boosted local search
									rankings and customer inquiries
								</p>
							</div>
							<div className="bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-xl border border-yellow-800">
								<div className="text-5xl font-bold text-yellow-400 mb-2">↑</div>
								<p className="text-white">
									Increased Credibility & Conversions
								</p>
								<p className="text-gray-300 text-sm">
									Verified merchant accounts and structured listings resulted in
									higher trust and customer conversions
								</p>
							</div>
						</div>
					</div>

					{/* Future Growth */}
					<div>
						<h2 className="text-2xl font-bold text-white mb-6">
							Future Growth Strategies
						</h2>
						<div className="space-y-6 text-gray-300">
							<p>To continue Breezy LA&apos;s growth, we will focus on:</p>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Expand Social Media Strategy
								</h3>
								<p>
									Introduce user-generated content to increase engagement and
									authentic connections
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Enhance Content Marketing
								</h3>
								<p>
									Develop educational blogs and localized SEO content to improve
									authority and reach
								</p>
							</div>
							<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
								<h3 className="text-xl font-bold text-white mb-2">
									Implement Targeted Campaigns
								</h3>
								<p>
									Re-engage website visitors, social media followers, and
									potential customers with targeted ads
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* ROI Analysis */}
				<div className="mb-12 p-8">
					<h2 className="text-2xl font-bold text-white mb-6">
						Growth Analysis
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">
								Investment Areas
							</h3>
							<ul className="text-gray-300 list-disc pl-6">
								<li>Website redesign and technical optimization</li>
								<li>Social media strategy development</li>
								<li>Local SEO and business listings setup</li>
								<li>Merchant account verification</li>
							</ul>
						</div>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">
								Key Outcomes
							</h3>
							<ul className="text-gray-300 list-disc pl-6">
								<li>Higher website conversion rate from improved UX</li>
								<li>Increased local visibility and store foot traffic</li>
								<li>Growing social media following and engagement</li>
								<li>Enhanced business reputation and customer trust</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Testimonial */}
				<div className="mb-12 p-8">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
							<Image
								src="/case-studies/breezyla-logo.webp"
								alt="Breezy LA founder"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<p className="text-gray-300 italic text-lg mb-4">
								&quot;Through a strategic digital revamp, we significantly
								improved our online presence and customer engagement. The
								comprehensive approach ensured better website performance,
								stronger social media connections, and improved local search
								visibility, setting us up for sustainable business growth.&quot;
							</p>
							<p className="text-white font-bold">Founder, Breezy LA</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
