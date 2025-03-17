import Link from "next/link";

export default function MenuItems() {
	// Services data array
	const services = [
		{
			id: 1,
			title: "SEO Specialist",
			description: "For businesses looking to dominate search results",
			features: [
				"Keyword Research & Optimization",
				"Technical & On-Page SEO Fixes",
				"Local SEO for U.S. Businesses",
				"Content Optimization & Blogging",
				"SEO Reports & Performance Tracking",
				"One-Time SEO Setup Available",
				"24x7 Support",
			],
		},
		{
			id: 2,
			title: "Web Development",
			description: "High-performance websites built to convert visitors",
			features: [
				"Custom Website Design",
				"E-Commerce & Business Websites",
				"Fast, Responsive & Mobile-Friendly",
				"SEO & Speed Optimization",
				"Schema Markup & Structured Data",
				"One-Time Website Setup",
				"24x7 Support",
			],
		},
		{
			id: 3,
			title: "Paid Advertising",
			description: "More clicks, more conversions, higher ROI",
			features: [
				"Google Ads & Search Campaigns",
				"Facebook, Instagram & LinkedIn Ads",
				"Retargeting & Conversion Optimization",
				"Landing Pages & Ad Copywriting",
				"Ad Budget Optimization",
				"Performance Tracking & Analytics",
				"24x7 Support",
			],
		},
	];

	// Reusable check icon component
	const CheckIcon = () => (
		<div className="text-[#4d61f5] mr-3 mt-0.5">
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13.3334 4L6.00008 11.3333L2.66675 8"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);

	return (
		<div
			className="min-h-screen flex items-center justify-center w-full"
			id="services"
		>
			<div className="flex flex-col items-center max-w-6xl w-full px-4">
				<div className="bg-[#2d2a47] text-white text-xs font-medium px-6 py-2 rounded-full mb-12">
					OUR SERVICES
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
					{services.map((service) => (
						<div
							key={service.id}
							className="w-full border border-zinc-800 rounded-3xl p-6"
						>
							<div className="flex flex-col items-center">
								<h1 className="text-3xl font-medium text-white mb-3">
									{service.title}
								</h1>
								<p className="text-zinc-500 text-center mb-10 text-xs">
									{service.description}
								</p>

								<div className="w-full space-y-4 mb-10">
									{service.features.map((feature, index) => (
										<div key={index} className="flex items-start">
											<CheckIcon />
											<span className="text-zinc-400">{feature}</span>
										</div>
									))}
								</div>
								<Link
									href="/contact"
									className="w-full border border-zinc-800 text-white uppercase text-sm font-medium py-4 rounded-full hover:bg-zinc-900 transition-colors text-center"
								>
									Get a Quote
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
