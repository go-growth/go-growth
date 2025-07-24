"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg max-w-full flex flex-col md:flex-row items-center justify-between px-5 py-4 md:py-6 h-auto md:h-20">
			<div className="flex w-full md:w-auto justify-between items-center">
				<Link href="/">
					<div className="text-3xl md:text-4xl font-semibold text-[#F5E5D0]">
						Go Growth
					</div>
				</Link>
				<Link
	href="/case-studies"
	className="md:hidden text-white font-medium border border-white/20 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
>
	Case Studies
</Link>

			</div>
			<div
				className={`${
					isMenuOpen ? "flex" : "hidden"
				} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0`}
			>
				<Link
					href="/case-studies"
					className="border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 text-lg uppercase font-semibold flex items-center justify-center text-center transition-all duration-300 hover:shadow-lg w-full md:w-auto text-white"
				>
					Case Studies
				</Link>
			</div>
		</div>
	);
}
