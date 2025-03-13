"use client";
import React, { useState, useRef } from "react";

export default function PromotionCards() {
	// Card data with title, image, and video link
	const cards = [
		{
			id: 1,
			title: "Reid Hoffman",
			image: "/path/to/reid-image.jpg",
			video: "https://example.com/reid-video.mp4",
			color: "bg-red-200",
		},
		{
			id: 2,
			title: "POSSIBLE",
			image: "/path/to/possible-image.jpg",
			video: "https://example.com/possible-video.mp4",
			color: "bg-yellow-200",
			subtitle: "With Reid Hoffman & Arin Finger",
		},
		{
			id: 3,
			title: "Arin Finger",
			image: "/path/to/arin-image.jpg",
			video: "https://example.com/arin-video.mp4",
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
				{card.id === 2 && (
					<div className="w-full">
						<h2 className="text-4xl font-bold text-yellow-400">{card.title}</h2>
						{card.subtitle && (
							<p className="text-sm text-yellow-400 mt-1">{card.subtitle}</p>
						)}
					</div>
				)}
			</div>

			{/* Image shown when not hovering */}
			{!isHovering && (
				<img
					src={card.image}
					alt={card.title}
					className="w-full h-full object-cover"
				/>
			)}

			{/* Video shown when hovering */}
			<video
				ref={videoRef}
				src={card.video}
				className={`w-full h-full object-cover ${
					isHovering ? "block" : "hidden"
				}`}
				muted
				playsInline
			/>
		</div>
	);
}
