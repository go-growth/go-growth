"use client";
import React, { useState, useRef } from "react";

export default function PromotionCards() {
	// Updated card data for services
	const cards = [
		{
			id: 1,
			title: "SEO",
			image: "https://placehold.co/240x320",
			video: "https://example.com/seo-video.mp4",
			color: "bg-red-200",
		},
		{
			id: 2,
			title: "WEBSITES",
			image: "https://placehold.co/240x320",
			video: "https://example.com/website-video.mp4",
			color: "bg-yellow-200",
			subtitle: "Design & Development",
		},
		{
			id: 3,
			title: "PPC",
			image: "https://placehold.co/240x320",
			video: "https://example.com/ppc-video.mp4",
			color: "bg-blue-200",
		},
	];

	return (
		<div className="min-h-screen flex items-center justify-center w-full p-6">
			<div className="flex flex-wrap justify-center gap-6">
				{cards.map((card) => (
					<VideoCard key={card.id} card={card} />
				))}
			</div>
		</div>
	);
}

interface CardProps {
	id: number;
	title: string;
	image: string;
	video: string;
	color: string;
	subtitle?: string;
}

function VideoCard({ card }: { card: CardProps }) {
	const [isHovering, setIsHovering] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleMouseEnter = () => {
		setIsHovering(true);
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.error("Error playing video:", error);
			});
		}
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	};

	return (
		<div
			className={`relative w-64 h-80 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 ${card.color}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="absolute inset-0 flex flex-col justify-between p-4">
				{/* Content overlay that shows always */}
				<div className="w-full">
					<h2 className="text-4xl font-bold text-black">{card.title}</h2>
					{card.subtitle && (
						<p className="text-sm text-black mt-1">{card.subtitle}</p>
					)}
				</div>
			</div>

			{/* Placeholder image shown when not hovering */}
			{!isHovering && (
				<img
					src={card.image}
					alt={card.title}
					className="w-full h-full object-cover opacity-30"
				/>
			)}

			{/* Video shown when hovering */}
			<video
				ref={videoRef}
				src={card.video}
				className={`w-full h-full object-cover opacity-30 ${
					isHovering ? "block" : "hidden"
				}`}
				muted
				playsInline
			/>
		</div>
	);
}
