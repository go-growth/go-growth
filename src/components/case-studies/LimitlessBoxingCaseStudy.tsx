import React from "react";
import Image from "next/image";
import Link from "next/link";

// Create a dedicated page for the LimitLess Boxing case study
export default function LimitLessBoxingCaseStudy() {
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
							src="/case-studies/limitless-boxing.jpg"
							alt="LimitLess Boxing logo"
							fill
							className="object-contain rounded-full"
						/>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
							LimitLess Boxing Case Study
						</h1>
						<p className="text-gray-300 text-lg md:text-xl">
							How we created an effective registration funnel for a new boxing
							gym in Chennai
						</p>
					</div>
				</div>

				{/* Hero Image Section */}
				{/* <div className="mb-12 relative w-full h-64 md:h-96 overflow-hidden rounded-2xl">
					<Image
						src="/case-studies/limitless/limitless-hero.png"
						alt="LimitLess Boxing gym"
						fill
						className="object-contain"
					/>
				</div> */}

				{/* Case Study Content */}
				<div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 mb-16">
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Primary Objectives
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							For LimitLess Boxing, our primary goal was to create a functional
							and effective funnel to drive registrations for their new gym in
							Chennai.
						</p>
						<p className="text-gray-300 text-lg mb-4">
							The focus was to use innovative marketing tactics to ensure a high
							conversion rate leveraging their Instagram followers (121,000
							followers) while staying within a limited advertising budget.
						</p>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Campaign Implementation and Approach
						</h2>
						<div className="space-y-8">
							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									1
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Lead Magnet Strategy
									</h3>
									<p className="text-gray-300">
										We designed and executed a unique &quot;Free 21-Day Gym
										Challenge.&quot; Participants were required to attend the
										gym three times a week for 21 days without missing a
										session. Failing to do so meant forfeiting their $12
										registration fee. This approach created a sense of
										commitment while also generating revenue.
									</p>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									2
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Targeted Advertising
									</h3>
									<p className="text-gray-300">
										To promote the challenge, we utilized Meta Ads with highly
										targeted campaigns. Although the budget allocated was $180,
										we strategically managed to achieve the desired results with
										only $108 in ad spend.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Performance Metrics and Results
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-xl border border-blue-800">
								<div className="text-5xl font-bold text-blue-400 mb-2">60</div>
								<p className="text-white">Participants</p>
								<p className="text-gray-300 text-sm">
									Registered for the challenge
								</p>
							</div>
							<div className="bg-gradient-to-br from-red-900/40 to-red-700/20 p-6 rounded-xl border border-red-800">
								<div className="text-5xl font-bold text-red-400 mb-2">30</div>
								<p className="text-white">Incomplete Challenges</p>
								<p className="text-gray-300 text-sm">
									Failed to complete, generating $360 in revenue from forfeited
									fees
								</p>
							</div>
							<div className="bg-gradient-to-br from-green-900/40 to-green-700/20 p-6 rounded-xl border border-green-800">
								<div className="text-5xl font-bold text-green-400 mb-2">15</div>
								<p className="text-white">Long-term Members</p>
								<p className="text-gray-300 text-sm">
									Transitioned into long-term gym memberships
								</p>
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-white mb-6">
							Key Achievements
						</h2>
						<ul className="space-y-4 text-gray-300 list-disc pl-6">
							<li>
								Designed an innovative and engaging challenge to attract new
								customers
							</li>
							<li>
								Delivered a cost-effective campaign that achieved
								self-sustaining revenue generation
							</li>
							<li>
								Secured 15 new monthly-paying gym members, establishing
								long-term business growth
							</li>
						</ul>
					</div>

					<div className="mt-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Proposed Growth Strategies
						</h2>
						<p className="text-gray-300 mb-4">
							To further build on this success, we recommend:
						</p>
						<ol className="space-y-4 text-gray-300 list-decimal pl-6">
							<li>
								Scaling the current campaign with an increased budget to reach
								more potential customers
							</li>
							<li>
								Introducing targeted follow-up campaigns to convert more
								participants into monthly members
							</li>
							<li>
								Enhancing engagement through promotional offers and value-added
								services
							</li>
						</ol>
					</div>
				</div>

				{/* ROI Analysis */}
				<div className="mb-12 bg-gray-900 bg-opacity-40 rounded-3xl p-8">
					<h2 className="text-2xl font-bold text-white mb-6">ROI Analysis</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">Investment</h3>
							<p className="text-gray-300">Total ad spend: $108</p>
						</div>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">Return</h3>
							<ul className="text-gray-300 list-disc pl-6">
								<li>Registration fees: $720 (60 participants × $12)</li>
								<li>Forfeited fees revenue: $360 (30 participants)</li>
								<li>
									New member monthly revenue (estimated): $750+ per month (15
									members)
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
								src="/case-studies/limitless-boxing.jpg"
								alt="LimitLess Boxing founder"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<p className="text-gray-300 italic text-lg mb-4">
								&quot;The 21-Day Challenge concept was brilliant - it not only
								brought us new customers but also helped identify individuals
								who were serious about fitness. The campaign paid for itself and
								gave us long-term members who are now part of our boxing
								community.&quot;
							</p>
							<p className="text-white font-bold">Founder, LimitLess Boxing</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
