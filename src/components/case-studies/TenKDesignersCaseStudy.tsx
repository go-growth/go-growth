import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TenKDesignersCaseStudy() {
	return (
		<div className="w-full min-h-screen relative overflow-hidden px-4 py-12 flex flex-col items-center justify-center bg-black">
			{/* Decorative elements */}
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
							src="/case-studies/10k-designers.png"
							alt="10k Designers logo"
							fill
							className="object-contain rounded-full"
						/>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
							10k Designers Case Study
						</h1>
						<p className="text-gray-300 text-lg md:text-xl">
							How we implemented a personalized sales approach to convert leads
							into paying customers for a design education platform
						</p>
					</div>
				</div>

				{/* Case Study Content */}
				<div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 mb-16">
					{/* Primary Objectives */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Primary Objectives
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							For 10k Designers, the focus was clear: Converting leads into
							paying customers. Being an established name in the field of design
							education, the brand already had a strong reputation. Our
							challenge was to build on this foundation and deliver measurable
							results that would boost their close rate and set up a sales
							process in place.
						</p>
					</div>

					{/* Sales Solutions */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Tailored Sales Solutions
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							We devised a conversion-focused strategy that relied entirely on
							personalized communication. Our approach involved:
						</p>

						<div className="space-y-8">
							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-2xl">
									1
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										Voice Call Campaigns
									</h3>
									<ul className="space-y-2 text-gray-300 list-disc pl-6">
										<li>
											Direct communication with leads to understand their needs
											and address queries effectively
										</li>
										<li>Building trust and rapport to encourage enrollment</li>
										<li>
											Converting complex payment methods into easy actionable
											items
										</li>
										<li>Increasing sales efficiency</li>
										<li>Setting up of sales process</li>
									</ul>
									<p className="text-gray-300 mt-4">
										This human-centric approach ensured that each lead received
										personalized attention, significantly increasing the
										likelihood of conversion.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Impact & Results */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							Impact & Results
						</h2>
						<p className="text-gray-300 text-lg mb-4">
							Our strategy delivered outstanding outcomes:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-xl border border-blue-800">
								<div className="text-5xl font-bold text-blue-400 mb-2">150</div>
								<p className="text-white">Leads converted into customers</p>
								<p className="text-gray-300 text-sm">
									(1.12 lakhs per customer), marking a substantial boost in
									enrollment
								</p>
							</div>
							<div className="bg-gradient-to-br from-green-900/40 to-green-700/20 p-6 rounded-xl border border-green-800">
								<div className="text-xl font-bold text-green-400 mb-2">
									Enhanced Retention
								</div>
								<p className="text-white">Premium positioning strengthened</p>
								<p className="text-gray-300 text-sm">
									The personalized approach reinforced 10k Designers premium
									positioning, enhancing customer satisfaction and retention
								</p>
							</div>
						</div>

						<h3 className="text-xl font-bold text-white mb-4">
							Key Achievements
						</h3>
						<ul className="space-y-3 text-gray-300 list-disc pl-6">
							<li>
								Achieved 150 high-value conversions through a cost-effective and
								resource-efficient strategy
							</li>
							<li>
								Strengthened customer relationships by prioritizing human
								interaction over automated processes
							</li>
							<li>
								Demonstrated the scalability of personalized sales efforts, even
								for established players
							</li>
						</ul>
					</div>

					{/* Future Growth Plans */}
					<div>
						<h2 className="text-2xl font-bold text-white mb-6">
							What&apos;s Next
						</h2>
						<p className="text-gray-300 mb-4">
							To maintain and build on this success, we recommend:
						</p>
						<ol className="space-y-4 text-gray-300 list-decimal pl-6">
							<li>
								Scaling the voice call approach by training additional sales
								representatives
							</li>
							<li>
								Starting an email nurturing process with advanced segmentation
								and analytics
							</li>
							<li>
								Introducing value-added content, such as success stories and
								testimonials, to further enhance engagement
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
							<p className="text-gray-300">Sales team resources and training</p>
							<p className="text-gray-300">Call infrastructure setup</p>
						</div>
						<div className="bg-black bg-opacity-40 p-6 rounded-xl border border-gray-800">
							<h3 className="text-xl font-bold text-white mb-2">Return</h3>
							<ul className="text-gray-300 list-disc pl-6">
								<li>150 high-value conversions (₹1.12 lakhs per customer)</li>
								<li>Total estimated revenue: ₹1.68 crore</li>
								<li>
									Enhanced brand positioning as a premium design education
									provider
								</li>
								<li>Improved customer retention rates</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Testimonial */}
				<div className="mb-12 bg-gray-900 bg-opacity-40 rounded-3xl p-8">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
							<Image
								src="/case-studies/10k-designers.png"
								alt="10k Designers founder"
								fill
								className="object-contain"
							/>
						</div>
						<div>
							<p className="text-gray-300 italic text-lg mb-4">
								&quot;The personalized approach to sales completely transformed
								our conversion rates. By focusing on human connection rather
								than automated processes, we were able to better understand our
								customers&apos; needs and address their concerns effectively.
								This strategy has not only increased our enrollment numbers but
								has also strengthened our brand reputation.&quot;
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
