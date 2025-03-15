"use client";
import React, { useState } from "react";

export default function CardCarousel() {
	const [isPaused, setIsPaused] = useState(false);

	// Updated card data for digital marketing
	const cards = [
		{
			logo: "text-teal-400",
			title: "E-commerce",
			subtitle: "Online Retailers",
		},
		{
			logo: "bg-blue-400",
			title: "Service Providers",
			subtitle: "Local Businesses",
		},
		{
			logo: "bg-white",
			title: "B2B Companies",
			subtitle: "Lead Generation",
		},
		{
			logo: "bg-white",
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
							<div
								className={`w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700 mb-4 flex items-center justify-center ${card.logo}`}
							>
								{card.title === "E-commerce" && (
									<div className="text-center font-bold text-2xl">SHOP</div>
								)}
								{card.title === "Service Providers" && (
									<div className="w-32 h-32">
										<svg viewBox="0 0 24 24" className="w-16 h-16 m-8">
											<path
												d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M3.3 7l8.7 5 8.7-5"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M12 22V12"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
								)}
								{card.title === "B2B Companies" && (
									<div className="w-16 h-16">
										<svg viewBox="0 0 24 24" className="w-full h-full">
											<path
												d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm10 16H4V9h16v11z"
												fill="currentColor"
											/>
											<path d="M9 12h6v2H9z" fill="currentColor" />
										</svg>
									</div>
								)}
								{card.title === "Startups" && (
									<div className="w-16 h-16">
										<svg viewBox="0 0 24 24" className="w-full h-full">
											<path
												d="M12 2L2 12h3v8h14v-8h3L12 2zm2 18h-4v-6h4v6z"
												fill="currentColor"
											/>
										</svg>
									</div>
								)}
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
