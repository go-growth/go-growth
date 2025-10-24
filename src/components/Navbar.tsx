"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const hideCaseStudy = pathname === "/webinar";

	return (
		<div className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg max-w-full flex flex-col md:flex-row items-center justify-between px-5 py-4 md:py-6 h-auto md:h-20">
			<div className="flex w-full md:w-auto justify-between items-center">
				<Link href="/">
					<div className="text-3xl md:text-4xl font-semibold text-[#F5E5D0]">
						GoGrowth
					</div>
				</Link>

				{/* Mobile Case Studies Button */}
				{!hideCaseStudy && (
					<Link
						href="/case-studies"
						className="md:hidden text-white font-medium border rounded-full border-white/20 px-4 py-2 bg-white/10 hover:bg-white/20 transition"
					>
						Case Studies
					</Link>
				)}
			</div>

			{/* Desktop Case Studies Button */}
			{!hideCaseStudy && (
				<div className="hidden md:flex flex-row items-center space-x-6 py-0">
					<Link
						href="/case-studies"
						className="border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 text-lg uppercase font-semibold text-white transition-all duration-300 hover:shadow-lg"
					>
						Case Studies
					</Link>
				</div>
			)}
		</div>
	);
}
