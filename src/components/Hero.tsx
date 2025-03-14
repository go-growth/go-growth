import React from "react";

const Hero: React.FC = () => {
	return (
		<div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-32 right-10 text-white opacity-40">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
					<circle cx="10" cy="10" r="8" />
				</svg>
			</div>
			<div className="absolute bottom-16 left-16 text-white opacity-40">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
					<circle cx="10" cy="10" r="8" />
				</svg>
			</div>
			<div className="absolute left-40 top-40 text-white opacity-20">
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					stroke="currentColor"
				>
					<polygon points="30,5 55,45 5,45" strokeWidth="2" />
				</svg>
			</div>
			<div className="absolute right-40 bottom-40 text-white opacity-20">
				<svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					fill="none"
					stroke="currentColor"
				>
					<polygon points="30,5 55,45 5,45" strokeWidth="2" />
				</svg>
			</div>
			<div className="absolute right-10 top-1/2 text-white opacity-20">
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					stroke="currentColor"
				>
					<path d="M10,20 L30,20 M20,10 L20,30" strokeWidth="4" />
				</svg>
			</div>

			{/* Content */}
			<div className="container mx-auto max-w-6xl z-10">
				<div className="flex flex-col items-center text-center lg:items-center lg:text-left">
					{/* Tags */}
					<div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
						<span className="bg-yellow-200 text-black text-sm px-4 py-1 rounded-full">
							Content Creators
						</span>
						<span className="bg-pink-200 text-black text-sm px-4 py-1 rounded-full">
							Podcast Hosts
						</span>
					</div>

					{/* Main heading */}
					<h1 className="flex flex-col text-5xl md:text-7xl font-light mb-4 space-y-8">
						<span
							className="py-3"
							style={{
								backgroundImage:
									"linear-gradient(90deg, #8f98ff 1%, rgba(105, 114, 222, 0.4) 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)",
							}}
						>
							Podcasting For VCs
						</span>
						<span
							className="py-3"
							style={{
								backgroundImage:
									"linear-gradient(90deg, #f0927e 1%, rgba(240, 146, 126, 0.4) 1% 2%, rgba(240, 146, 126, 0) 92.71%)",
							}}
						>
							& Tech Companies
						</span>
					</h1>

					{/* Description */}
					<p className="text-gray-300 text-lg max-w-2xl mb-10 mt-6">
						We help venture capital funds and tech companies scale content
						strategies to attract quality deal flow and deepen relationships,
						either by starting a new podcast or optimizing an existing one.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
