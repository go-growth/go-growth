"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CardCarousel() {
	const [isPaused, setIsPaused] = useState(false);

	// Updated card data for digital marketing with proper logo paths
	const cards = [
		{
			logo: "/case-studies/breezyla-logo.webp",
			title: "E-commerce",
			subtitle: "Online Retailers",
		},
		{
			logo: "/case-studies/10k-designers.png",
			title: "Service Providers",
			subtitle: "Local Businesses",
		},
		{
			logo: "/case-studies/aevy-tv.webp",
			title: "B2B Companies",
			subtitle: "Lead Generation",
		},
		{
			logo: "/case-studies/logo_sthalam.avif",
			title: "Startups",
			subtitle: "Growth Strategy",
		},
		{
			logo: "/case-studies/logo_astro.avif",
			title: "Startups",
			subtitle: "Growth Strategy",
		},
	];

	// Create duplicated array for infinite scroll effect
	const displayCards = [...cards, ...cards, ...cards];

	return (
		<div className="flex items-center justify-center w-full p-8">
			<div className="w-full overflow-hidden relative">
				<div
					className={`flex gap-8 ${isPaused ? "" : "animate-marquee"}`}
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{displayCards.map((card, index) => (
						<div
							key={index}
							className="flex flex-col items-center flex-shrink-0 w-32"
						>
							<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700 mb-4 flex items-center justify-center bg-center bg-cover">
								<Image
									src={card.logo}
									alt={`${card.title} logo`}
									width={128}
									height={128}
									className="object-cover"
								/>
							</div>
							<h3 className="text-white font-bold text-center">{card.title}</h3>
							<p className="text-gray-400 text-sm text-center">
								{card.subtitle}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Add the required CSS for the marquee animation */}
			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(calc(-160px * ${cards.length}));
					}
				}
				.animate-marquee {
					animation: marquee 30s linear infinite;
				}
			`}</style>
		</div>
	);
}
