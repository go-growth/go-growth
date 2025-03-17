"use client";
import React, { useState, useRef, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

const Hero: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Close modal when clicking outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				closeModal();
			}
		};

		if (isModalOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isModalOpen]);

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
						<span className="bg-[#3d2c2a] text-[#e0a695] px-4 py-2 rounded-full text-sm uppercase font-medium">
							Full Stack Marketing
						</span>
					</div>

					{/* Main heading */}
					<h1 className="flex flex-col font-light mb-4 space-y-8 text-center">
						<span className="py-3 text-5xl font-semibold md:text-7xl">
							Welcome to GoGrowth
						</span>
						<span className="py-3 text-3xl md:text-4xl">
							Your Trusted Marketing Agency in the{" "}
							<span className="text-[#e0a695] font-bold">US</span>
						</span>
					</h1>

					{/* Description */}
					<p className="text-gray-300 text-lg mb-10 mt-6 text-center">
						We specialize in SEO, website development, and paid advertising to
						help businesses to maximize their online presence and generate more
						revenue. Whether you need a one-time SEO setup, a website built from
						scratch, or ongoing digital marketing solutions, we provide
						result-driven strategies tailored to your needs.
					</p>

					<button
						onClick={openModal}
						className="border-2 border-white/50 rounded-full px-10 p-4 text-lg uppercase font-semibold flex items-center justify-center text-center hover:bg-white/10 transition-colors"
					>
						Contact Us
					</button>
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div
						ref={modalRef}
						className="bg-[#1f1a19] p-4 rounded-lg max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
					>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white hover:text-gray-300"
							aria-label="Close modal"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>
						<ContactForm />
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
