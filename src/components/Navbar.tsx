import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className="sticky top-0 bg-black/50 max-w-full flex items-center justify-between px-5 py-8 h-24">
			<Link href="/">
				<div className="text-4xl font-semibold">
					Atomik{" "}
					<span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
						Growth
					</span>
				</div>
			</Link>
			<div>
				<Link
					href="/case-studies"
					className="border-2 border-white/50 rounded-full px-10 p-4 text-lg uppercase font-semibold flex items-center justify-center text-center hover:bg-white/10 transition-colors"
				>
					Case Studies
				</Link>
			</div>
		</div>
	);
}
