"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CardCarousel() {
	const [isPaused, setIsPaused] = useState(false);

	// Updated card data for digital marketing with proper logo paths
	const cards = [
		{
			logo: "/case-studies/breezyla-logo.webp",
			title: "Breezy LA",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/10k-designers.png",
			title: "10K Designers",
			subtitle: "Ed-Tech",
		},
		{
			logo: "/case-studies/limitless-boxing.jpg",
			title: "Limitless Boxing",
			subtitle: "Local Gym",
		},
		{
			logo: "/case-studies/aevy-tv.webp",
			title: "Aevy TV",
			subtitle: "Ed-Tech",
		},
		{
			logo: "/case-studies/logo_sthalam.avif",
			title: "Sthalam",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/logo_astro.avif",
			title: "AstroVetro",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/craft.png",
			title: "Craft Deligths",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/blckline.png",
			title: "Blckline Automotive",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/unaavu.png",
			title: "Unaavu",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/maese.png",
			title: "Maese",
			subtitle: "E-commerce",
		},
		{
			logo: "/case-studies/olio.png",
			title: "Oliostories",
			subtitle: "E-commerce",
		},
	];

	// Create duplicated array for infinite scroll effect
	const displayCards = [...cards, ...cards, ...cards];

	return (
		<section className="lg:py-20 py-10">
			<h1 className="max-w-7xl mx-auto text-center text-4xl font-semibold">
				Our Clients
			</h1>
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
								<h3 className="text-white font-bold text-center">
									{card.title}
								</h3>
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
						animation: marquee 15s linear infinite;
					}
				`}</style>
			</div>
		</section>
	);
}
