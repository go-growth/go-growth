import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyProps {
	logoSrc: string;
	title: string;
	description: React.ReactNode;
	results: React.ReactNode;
	duration: string;
	explorerLink: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
	logoSrc,
	title,
	description,
	results,
	duration,
	explorerLink,
}) => {
	return (
		<div className="flex items-center justify-between w-full mb-16">
			<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
				<div className="relative w-40 h-40 flex-shrink-0">
					<Image
						src={logoSrc}
						alt={`${title} logo`}
						fill
						className="object-contain rounded-full"
					/>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<span className="text-white text-lg">How</span>
							<span className="text-white text-lg font-bold">Go</span>
							<span className="text-indigo-400 text-lg font-bold">Growth</span>
						</div>

						<div className="text-white text-lg mb-1">{description}</div>

						<div className="text-white text-lg mb-1">
							{typeof results === "string" ? (
								<>
									<span className="font-normal">
										{results?.startsWith("That gained")
											? "That gained"
											: "shorts that gained"}
									</span>
									<span className="font-bold ml-1">
										{results.includes("M")
											? results.split("M")[0] + "M"
											: results}
									</span>
									<span className="font-bold">Views in {duration}</span>
									<span className="font-normal ml-1">organically</span>
								</>
							) : (
								results
							)}
						</div>
					</div>

					<Link
						href={explorerLink}
						className="mt-4 bg-gray-200 bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-md w-max text-sm font-medium transition-all duration-200"
					>
						Explore
					</Link>
				</div>
			</div>
		</div>
	);
};

const GoGrowthSection: React.FC = () => {
	const caseStudies = [
		{
			logoSrc: "/case-studies/logo_sthalam.avif",
			title: "Sthalam",
			description: (
				<div className="flex items-center gap-1">
					<span>Scaled a home décor brand from</span>
					<span className="text-green-400 font-bold">zero to daily orders</span>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>Achieved</span>
					<span className="font-bold text-green-400">5.3+ ROAS</span>
					<span>on paid ad campaigns</span>
				</div>
			),
			duration: "3 Months",
			explorerLink: "/case-studies/sthalam",
		},
		{
			logoSrc: "/case-studies/limitless-boxing.jpg",
			title: "Limitless Boxing",
			description: (
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-1">
						<span>Generated</span>
						<span className="text-red-500 font-bold">60 registrations</span>
						<span>for an offline challenge</span>
					</div>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>With only</span>
					<span className="font-bold text-yellow-400">₹8,000</span>
					<span>ad spend</span>
				</div>
			),
			duration: "1 Month",
			explorerLink: "/case-studies/limitless-boxing",
		},
		{
			logoSrc: "/case-studies/10k-designers.png",
			title: "10k Designers",
			description: (
				<div className="flex items-center gap-1">
					<span>Generated</span>
					<span className="font-bold text-blue-400">
						150 high-value conversions
					</span>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>At</span>
					<span className="text-blue-300 font-bold">₹1.12L</span>
					<span>per customer</span>
				</div>
			),
			duration: "6 Months",
			explorerLink: "/case-studies/10k-designers",
		},
		{
			logoSrc: "/case-studies/aevy-tv.webp",
			title: "Aevy TV",
			description: (
				<div className="flex items-center gap-1">
					<span>Designed a high-converting</span>
					<span className="text-purple-400 font-bold">webinar funnel</span>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>Generated</span>
					<span className="underline font-bold">high-quality leads</span>
					<span>with increased engagement</span>
				</div>
			),
			duration: "3 Months",
			explorerLink: "/case-studies/aevy-tv",
		},
		{
			logoSrc: "/case-studies/breezyla-logo.webp",
			title: "Breezy LA",
			description: (
				<div className="flex items-center gap-1">
					<span>Complete digital revamp for a</span>
					<span className="text-green-300 font-bold">
						premium cannabis delivery service
					</span>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>Boosted</span>
					<span className="text-green-400 italic font-bold">
						engagement & visibility
					</span>
					<span>across all platforms</span>
				</div>
			),
			duration: "4 Months",
			explorerLink: "/case-studies/breezy-la",
		},
	];

	return (
		<div className="w-full min-h-screen relative overflow-hidden px-4 py-12">
			{/* Decorative elements */}
			<div className="absolute top-5 left-10 text-white text-2xl">*</div>
			<div className="absolute top-5 right-10 text-white text-2xl">*</div>
			<div className="absolute bottom-20 left-60 text-white text-2xl">*</div>
			<div className="absolute top-1/2 right-32 text-white text-2xl">*</div>
			<div className="absolute top-1/4 left-1/4 text-gray-700 transform rotate-45">
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

			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
						Proven Growth, Real Results
					</h2>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						At GoGrowth, we don&apos;t just talk about results—we deliver them.
						Here&apos;s how we&apos;ve helped businesses scale with data-driven
						strategies.
					</p>
				</div>

				{caseStudies.map((study, index) => (
					<CaseStudy
						key={index}
						logoSrc={study.logoSrc}
						title={study.title}
						description={study.description}
						results={study.results}
						duration={study.duration}
						explorerLink={study.explorerLink}
					/>
				))}

				<div className="text-center mt-12 pt-6 border-t border-gray-700">
					<h3 className="text-2xl font-bold text-white mb-4">
						Want to Achieve Similar Growth?
					</h3>
					<p className="text-gray-300 mb-6">
						Whether you need more leads, higher sales, or brand growth, we know
						what works.
					</p>
					<Link
						href="/contact"
						className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200"
					>
						Book a Free Consultation
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GoGrowthSection;
