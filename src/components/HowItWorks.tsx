import React from "react";

export default function HowItWorks() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center w-full py-16">
			<h1 className="text-5xl font-bold mb-16">How We Grow Your Business</h1>

			<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl px-4">
				{/* Card 1 - Yellow */}
				<div className="w-full md:w-1/3 bg-yellow-300 text-black p-8 rounded-3xl transform rotate-3 h-80">
					<div className="text-3xl font-bold mb-16">Step One</div>
					<div className="text-xl font-medium">
						<div>We analyze your</div>
						<div>business & market</div>
						<div>to create a strategy</div>
					</div>
				</div>

				{/* Card 2 - Blue */}
				<div className="w-full md:w-1/3 bg-blue-400 text-black p-8 rounded-3xl h-80 flex flex-col justify-center">
					<div className="text-3xl font-bold mb-6">Step Two</div>
					<div className="text-xl">
						<div>We optimize your</div>
						<div>website & content</div>
						<div className="font-bold">for SEO & conversions</div>
					</div>
				</div>

				{/* Card 3 - Red/Pink */}
				<div className="w-full md:w-1/3 bg-red-400 text-black p-8 rounded-3xl transform -rotate-3 h-80">
					<div className="text-3xl font-bold mb-6">Step Three</div>
					<div className="text-xl">
						<div>We implement:</div>
						<div className="font-bold">Paid ad campaigns</div>
						<div className="font-bold mt-2">Local SEO strategies</div>
						<div>Performance tracking</div>
						<div className="mt-2">
							and <span className="font-bold">continuous optimization</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
