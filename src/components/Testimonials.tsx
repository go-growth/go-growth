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
	videoThumbnail: string;
}

const testimonials: TestimonialProps[] = [
	{
		name: "Sthalam",
		role: "Home Décor Brand",
		quote: "Scaled from zero to daily orders with highest ROAS of 8+.",
		stats: "8+ ROAS – Daily Orders Achieved",
		videoUrl: "https://www.youtube.com/embed/VpUh2-s0Ths?si=rur3EqbwPAhI_9nd",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
	},
	{
		name: "Limitless Boxing",
		role: "Fitness Coaching",
		quote: "Achieved 60 registrations with just ₹8,000 ad spend.",
		stats: "60 Registrations – Cost-Effective Campaign",
		videoUrl:
			"https://www.instagram.com/reel/DGK69gtvgh3/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
	},
	{
		name: "10k Designers",
		role: "Design Education Platform",
		quote: "Delivered 150 high-value conversions at ₹1.12L per customer.",
		stats: "150 Conversions – Premium Course Enrollments",
		videoUrl: "https://www.youtube.com/embed/VpUh2-s0Ths?si=rur3EqbwPAhI_9nd",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
	},
	{
		name: "Aevy TV",
		role: "Webinar Series",
		quote: "Boosted webinar registrations and audience engagement.",
		stats: "High Registration & Attendance Rates",
		videoUrl: "https://www.youtube.com/embed/VpUh2-s0Ths?si=rur3EqbwPAhI_9nd",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
	},
	{
		name: "Breezy LA",
		role: "Cannabis Delivery Service",
		quote: "Complete digital revamp driving higher engagement and conversions.",
		stats: "Improved UX & Local Visibility",
		videoUrl: "https://www.youtube.com/embed/VpUh2-s0Ths?si=rur3EqbwPAhI_9nd",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
	},
	{
		name: "AstroVetro",
		role: "Gemstones, Tarot Cards & Astrology Reading",
		quote: "Optimized websites, ads, and social media for better conversions.",
		stats: "Improved UX & Local Visibility, Ran Paid Ads",
		videoUrl: "https://www.youtube.com/embed/VpUh2-s0Ths?si=rur3EqbwPAhI_9nd",
		videoThumbnail: "/placeholder.svg?height=400&width=600",
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
		<div className="min-h-screen flex items-center justify-center w-full p-4">
			<div className="max-w-6xl w-full">
				<div className="flex justify-between items-center mb-12">
					<div className="inline-flex items-center justify-center p-4 h-10 bg-[#1a3a25] rounded-full">
						<span className="text-base uppercase tracking-wide font-semibold">
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
					<h2 className="text-4xl md:text-5xl font-bold leading-tight">
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
							<iframe
								src={currentTestimonial.videoUrl}
								title={`${currentTestimonial.name} video`}
								className="w-full h-full"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
