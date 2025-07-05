"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TestimonialProps {
	name: string;
	role: string;
	quote: string;
	stats: string;
	videoUrl: string;
}

const testimonials: TestimonialProps[] = [
	{
		name: "Sthalam",
		role: "Home Décor Brand",
		quote: "Scaled from $0 to $5000 per month with highest ROAS of 8x.",
		stats: "8+ ROAS – Daily Orders Achieved",
		videoUrl: "/video/sthalam.mp4",
	},
	{
		name: "Limitless Boxing",
		role: "Fitness Coaching",
		quote:
			"Achieved 60 registrations with just $90 ad spend which resulted in recurring $500 a month revenue.",
		stats: "60 Registrations – Cost-Effective Campaign",
		videoUrl: "/video/limitless_boxing.mp4",
	},
	{
		name: "10k Designers",
		role: "Design Education Platform",
		quote:
			"Delivered 180 high-value conversions at $1300 per customer which resulted in $200,000+ revenue.",
		stats: "180 Conversions – Premium Course Enrollments",
		videoUrl: "/video/10kdes.mp4",
	},
	{
		name: "Aevy TV",
		role: "Webinar Series",
		quote:
			"Boosted webinar registrations and audience engagement and helped close over 1000+ sales which resulted in $170,000+ revenue in sales.",
		stats: "High Registration & Attendance Rates",
		videoUrl: "/video/aevytv.mp4",
	},
	{
		name: "Breezy LA",
		role: "Cannabis Delivery Service",
		quote: "Complete digital revamp driving higher engagement and conversions.",
		stats: "Improved UX & Local Visibility",
		videoUrl: "/video/breezyla.mp4",
	},
	{
		name: "AstroVetro",
		role: "Gemstones, Tarot Cards & Astrology Reading",
		quote: "Optimized websites, ads, and social media for better conversions.",
		stats: "Improved UX & Local Visibility, Ran Paid Ads",
		videoUrl: "/video/astrovetro.mp4",
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1,
		);
	};

	const currentTestimonial = testimonials[currentIndex];

	return (
		<div className="min-h-screen flex items-center justify-center w-full p-4 lg:py-20 py-10">
			<div className="max-w-6xl w-full">
				<div className="flex justify-between items-center mb-12">
					<div className="inline-flex items-center justify-center p-2 md:p-4 min-h-10 bg-[#1a3a25] rounded-full w-full md:w-auto">
  <span className="text-sm md:text-base uppercase tracking-wide font-semibold px-1 text-center">
    {currentTestimonial.name} - {currentTestimonial.role}
  </span>
</div>
					<div className="flex space-x-2">
						<button
							onClick={handlePrev}
							className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={handleNext}
							className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
							aria-label="Next testimonial"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>

				<div className="mb-12">
					<h2 className="text-xl md:text-4xl font-bold leading-tight">
						{currentTestimonial.quote}
					</h2>
				</div>

				<div className="flex justify-center mb-16">
					<Link href="/case-studies">
						<button className="rounded-full border border-gray-600 px-8 py-3 text-xs font-medium tracking-widest uppercase hover:border-gray-400 transition-colors">
							{currentTestimonial.stats}
						</button>
					</Link>
				</div>

				<div className="flex justify-center mb-16">
					<div className="relative w-full max-w-7xl aspect-video border border-zinc-500 rounded-lg">
						<div className="w-full h-full rounded-lg overflow-hidden">
							<video
								src={currentTestimonial.videoUrl}
								title={`${currentTestimonial.name} video`}
								className="w-full h-full"
								controls
								muted
								playsInline
								autoPlay
								loop
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
