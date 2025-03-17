import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full">
			{/* Marquee Text Banner */}
			<div className="bg-[#141414] rounded-tl-3xl">
				<div className="overflow-hidden py-24">
					<div className="relative flex whitespace-nowrap py-3">
						<div className="animate-marquee flex items-center">
							<span className="mx-4 text-5xl">
								become the go-to person in your industry |
							</span>
							<span className="mx-4 text-5xl">
								become the go-to person in your industry |
							</span>
							<span className="mx-4 text-5xl">
								become the go-to person in your industry |
							</span>
							<span className="mx-4 text-5xl">
								become the go-to person in your industry |
							</span>
							<span className="mx-4 text-5xl">
								become the go-to person in your industry |
							</span>
						</div>
					</div>
				</div>

				{/* Main Footer Content */}
				<div className="max-w-full mt-10 pb-20 mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 py-6">
						{/* Logo Section */}
						<div className="flex items-center">
							<Link href="/" className="flex items-center">
								<div className="text-2xl font-semibold text-[#F5E5D0]">
									Go Growth
								</div>
							</Link>
						</div>

						{/* Social Media */}
						<div className="flex items-center gap-2">
							<span className="text-gray-300">Follow us on</span>
							<Link
								href="https://www.instagram.com/gurmeet__oberoi/"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition duration-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="bg-[#1e1e1e]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<p className="text-center text-gray-400 text-sm">
						All rights reserved by Go Growth
					</p>
				</div>
			</div>
		</footer>
	);
}
