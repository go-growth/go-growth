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
	// duration,
	explorerLink,
}) => {
	return (
		<div className="flex items-center justify-center w-full mb-16">
			<div className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 border border-white/50 p-6 rounded-3xl">
				<div className="relative w-40 h-40 flex-shrink-0">
					<Image
						src={logoSrc}
						alt={`${title} logo`}
						fill
						className="object-contain rounded-full"
					/>
				</div>

				<div className="flex flex-col w-full">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<span className="text-white text-lg">How</span>
							<span className="text-[#F5E5D0] text-lg font-bold">
								Go Growth
							</span>
						</div>

						{/* Modified description section to prevent text breaking */}
						<div className="text-white text-lg mb-1">
							{description}
						</div>

						{/* Modified results section to prevent text breaking */}
						<div className="text-white text-lg mb-1">
							{results}
						</div>
					</div>

					<div className="w-full flex items-center justify-center lg:justify-start">
						<Link
							href={explorerLink}
							target="_blank"
							className="mt-6 bg-gray-200 bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-2 rounded-md w-max text-sm font-medium transition-all duration-200"
						>
							Explore
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

// Update the description and results components
const GoGrowthSection: React.FC = () => {
	const caseStudies = [
		{
			logoSrc: "/case-studies/blckline.png",
			title: "Blackline Automotive",
			description: (
				<div className="flex flex-wrap items-baseline gap-1">
					{/* <span>Scaled a home décor brand</span> */}
					<span className="text-green-400 font-bold">Blackline Automotive</span>
					<span>from</span>
					<span className="text-green-400 font-bold">zero to daily orders</span>
				</div>
			),
			results: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Achieved</span>
					<span className="font-bold text-green-400">8x ROAS</span>
					<span>in just 45 days</span>
				</div>
			),
			duration: "3 Months",
			explorerLink: "/case-studies/Blackline-Automotive",
		},
		{
			logoSrc: "/case-studies/craft.png",
			title: "CraftsDlight",
			description: (
				<div className="flex flex-wrap items-baseline gap-1">
					{/* <span>Scaled a home décor brand</span> */}
					<span className="text-green-400 font-bold">CraftsDlight</span>
					<span>from</span>
					<span className="text-green-400 font-bold">Consistent 4–5X ROAS on Meta over the last 2 months</span>
				</div>
			),
			results: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Achieved</span>
					<span className="font-bold text-green-400">550 Purchases</span>
					<span>in  2 Months</span>
				</div>
			),
			duration: "3 Months",
			explorerLink: "/case-studies/CraftsDelight",
		},
		{
			logoSrc: "/case-studies/logo_sthalam.avif",
			title: "Sthalam",
			description: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Scaled a home décor brand</span>
					<span className="text-green-400 font-bold">Sthalam</span>
					<span>from</span>
					<span className="text-green-400 font-bold">zero to daily orders</span>
				</div>
			),
			results: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Achieved</span>
					<span className="font-bold text-green-400">8x ROAS</span>
					<span>on paid ad campaigns</span>
				</div>
			),
			duration: "3 Months",
			explorerLink: "/case-studies/sthalam",
		},
		{
			logoSrc: "/case-studies/10k-designers.png",
			title: "10k Designers",
			description: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Generated</span>
					<span className="font-bold text-blue-400">
						150 high-value conversions
					</span>
					<span>for</span>
					<span className="font-bold text-blue-400">10k Designers</span>
				</div>
			),
			results: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>At</span>
					<span className="text-blue-300 font-bold">$1300</span>
					<span>per customer</span>
				</div>
			),
			duration: "6 Months",
			explorerLink: "/case-studies/10k-designers",
		},
		{
			logoSrc: "/case-studies/breezyla-logo.webp",
			title: "Breezy LA",
			description: (
				<div className="flex flex-wrap items-baseline gap-1">
					<span>Complete digital revamp for</span>
					<span className="text-green-300 font-bold">Breezy LA</span>
					<span>a</span>
					<span className="text-green-300 font-bold">
						premium cannabis delivery service
					</span>
				</div>
			),
			results: (
				<div className="flex flex-wrap items-baseline gap-1">
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
		<div className="w-full min-h-screen relative overflow-hidden px-4 py-12 flex flex-col items-center justify-center bg-black">
			{/* Decorative elements */}
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

			<div className="max-w-5xl mx-auto w-full">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
						Proven Growth, Real Results
					</h2>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						At GoGrowth, we don&apos;t just talk about results—we deliver them.
						Here&apos;s how we&apos;ve helped businesses scale with data-driven
						strategies.
					</p>
				</div>

				<div className="flex flex-col items-center w-full">
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
				</div>

				<div className="text-center mt-16 pt-6 border-t border-gray-700">
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

