import React from "react";

export default function HowItWorks() {
	return (
		<div className="flex flex-col items-center justify-center w-full lg:py-20 py-10">
			<h1 className="text-5xl font-bold mb-16">How We Grow Your Business</h1>

			<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl px-4">
				{/* Card 1 - Yellow */}
				<div className="w-full md:w-1/3 bg-yellow-300 text-black p-8 rounded-3xl transform rotate-3 h-80">
					<div className="text-2xl font-semibold mb-6">Step One</div>
					<div className="text-3xl font-bold mb-6">Discovery Call</div>
					<div className="font-medium">
						<div>
							We analyze your business & market to create a strategy while also
							suggesting SEO and Growth related strategies to help your business
							grow and explain how we will do it together.
						</div>
					</div>
				</div>

				{/* Card 2 - Blue */}
				<div className="w-full md:w-1/3 bg-blue-400 text-black p-8 rounded-3xl h-80 flex flex-col justify-center">
					<div className="text-2xl font-semibold mb-6">Step Two</div>
					<div className="text-3xl font-bold mb-6">Onboarding</div>
					<div className="">
						We have a clear and simple onboarding process which is then followed
						by setting up the basic foundations of optimizing the website &
						content for SEO & conversions
					</div>
				</div>

				{/* Card 3 - Red/Pink */}
				<div className="w-full md:w-1/3 bg-red-400 text-black p-8 rounded-3xl transform -rotate-3 h-80">
					<div className="text-2xl font-semibold mb-6">Step Three</div>
					<div className="text-3xl font-bold mb-6">Convergence</div>
					<div className="">
						We launch paid ad campaigns, optimize local and online SEO
						strategies while also focusing heavily on Conversion Rate
						Optimization.
					</div>
				</div>
			</div>
		</div>
	);
}
