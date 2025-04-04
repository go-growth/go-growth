// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="mb-8">
				The page you are looking for doesn&apos;t exist or has been moved.
			</p>
			<Link
				href="/"
				className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
			>
				Return Home
			</Link>
		</div>
	);
}
