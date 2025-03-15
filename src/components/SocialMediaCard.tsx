"use client";

import React from "react";
import Image from "next/image";

interface SocialCardProps {
	imageUrl: string;
	caption: string;
	profilePic: string;
	username: string;
	subtitle?: string;
	viewCount: string;
	darkMode?: boolean;
	isVideo?: boolean;
	accentColor?: string | null;
}

const SocialCard = ({
	imageUrl,
	caption,
	profilePic,
	username,
	subtitle,
	viewCount,
	darkMode = true,
	isVideo = false,
	accentColor = null,
}: SocialCardProps): React.JSX.Element => {
	return (
		<div
			className={`relative rounded-xl overflow-hidden ${
				darkMode ? "bg-black" : "bg-white"
			} w-72 h-[500px] shadow-lg`}
		>
			<div className="h-full flex flex-col">
				{/* Main content */}
				<div className="flex-grow relative">
					<div className="absolute inset-0">
						<Image src={imageUrl} alt={caption} fill className="object-cover" />
					</div>

					{/* Caption overlay */}
					{caption && (
						<div className="absolute bottom-0 left-0 right-0 p-2">
							<p
								className={`text-sm ${
									darkMode ? "text-white" : "text-black"
								} font-medium`}
							>
								{caption}
							</p>
						</div>
					)}

					{/* Video indicator */}
					{isVideo && (
						<div className="absolute top-2 right-2">
							<svg
								className="w-4 h-4 text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm3.5 10.5l-5 3a.5.5 0 0 1-.75-.43v-6a.5.5 0 0 1 .75-.43l5 3a.5.5 0 0 1 0 .86z" />
							</svg>
						</div>
					)}

					{/* Accent color banner */}
					{accentColor && (
						<div className="absolute top-0 left-0 right-0">
							<div
								className={`bg-${accentColor}-400 px-2 py-1 text-xs font-medium text-white`}
							>
								ACQUIRED
							</div>
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="px-3 py-2 flex items-center">
					{/* Profile photo */}
					<div className="h-8 w-8 rounded-full overflow-hidden relative">
						<Image
							src={profilePic}
							alt={username}
							fill
							className="object-cover"
						/>
					</div>

					{/* Username and subtitle */}
					<div className="ml-2 flex-grow">
						<p
							className={`text-sm font-medium ${
								darkMode ? "text-white" : "text-gray-800"
							}`}
						>
							{username}
						</p>
						{subtitle && (
							<p
								className={`text-xs ${
									darkMode ? "text-gray-400" : "text-gray-600"
								}`}
							>
								{subtitle}
							</p>
						)}
					</div>

					{/* Extra info */}
					<div className="flex items-center">
						<p
							className={`text-xs ${
								darkMode ? "text-gray-400" : "text-gray-600"
							}`}
						>
							{viewCount}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const SocialMediaCards = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="flex flex-wrap gap-4 justify-center">
				{/* Card 1 – SEO Services */}
				<SocialCard
					imageUrl="/case-studies/logo_sthalam.avif"
					caption="Rank Higher, Get More Traffic"
					profilePic="/avatars/gogrowth-logo.png"
					username="SEO SERVICES"
					subtitle="Keyword Research, On-Page & Local SEO"
					viewCount="Organic Growth"
					darkMode={true}
				/>

				{/* Card 2 – Website Design */}
				<SocialCard
					imageUrl="/case-studies/breezyla-logo.webp"
					caption="Built to Convert"
					profilePic="/avatars/gogrowth-logo.png"
					username="WEB DESIGN"
					subtitle="Responsive, Custom & SEO-Friendly"
					viewCount="Conversion-Focused"
					darkMode={true}
				/>

				{/* Card 3 – Paid Advertising */}
				<SocialCard
					imageUrl="/case-studies/aevy-tv.webp"
					caption="More Clicks, More Conversions"
					profilePic="/avatars/gogrowth-logo.png"
					username="PAID ADS"
					subtitle="Google, Social & Retargeting"
					viewCount="ROI-Driven"
					darkMode={true}
					accentColor="green"
					isVideo={false}
				/>
			</div>
		</div>
	);
};

export default SocialMediaCards;
