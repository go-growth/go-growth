// AtomikGrowthSection.tsx
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
		<div className="flex items-center justify-center w-full mb-16">
			<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
				<div className="relative w-28 h-28 flex-shrink-0">
					<Image
						src={logoSrc}
						alt={`${title} logo`}
						fill
						className="object-cover rounded-full"
					/>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<span className="text-white text-lg">How</span>
							<span className="text-white text-lg font-bold">Atomik</span>
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

const AtomikGrowthSection: React.FC = () => {
	const caseStudies = [
		{
			logoSrc: "/images/acquired-logo.png",
			title: "Acquired",
			description: (
				<div className="flex items-center gap-1">
					<span>leveraged</span>
					<span className="text-green-400 font-bold">
						Acquired&apos;s podcast
					</span>
					<span>content to create</span>
				</div>
			),
			results: "52M",
			duration: "15 Months",
			explorerLink: "/case-studies/acquired",
		},
		{
			logoSrc: "/images/darknet-diaries-logo.png",
			title: "Darknet Diaries",
			description: (
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-1">
						<span>leveraged</span>
						<span className="text-red-500 font-bold">Darknet Diaries</span>
					</div>
					<span>Historic content to create animations</span>
				</div>
			),
			results: "5.2M",
			duration: "4 Months",
			explorerLink: "/case-studies/darknet-diaries",
		},
		{
			logoSrc: "/images/seth-rosenberg.png",
			title: "Seth Rosenberg",
			description: (
				<div className="flex items-center gap-1">
					<span>Helped</span>
					<span className="font-bold">Seth Rosenberg</span>
				</div>
			),
			results: (
				<div className="flex items-center gap-1">
					<span>Overcome the</span>
					<span className="text-blue-300 italic">cold start</span>
					<span>for</span>
					<span className="underline font-bold">Product-Led AI</span>
				</div>
			),
			duration: "",
			explorerLink: "/case-studies/seth-rosenberg",
		},
	];

	return (
		<div className="w-full min-h-screen bg-black text-white relative overflow-hidden px-4 py-12">
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

			<div className="max-w-4xl mx-auto">
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
		</div>
	);
};

export default AtomikGrowthSection;
