"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the FAQ item type
type FAQItem = {
	id: number;
	question: string;
	answer: string;
};

// Sample FAQ data
const faqData: FAQItem[] = [
	{
		id: 1,
		question: "What services do you offer?",
		answer:
			"We offer comprehensive digital marketing services including Search Engine Optimization (SEO), Website Design & Development, and Paid Advertising management. We also provide one-time SEO and website setup services for businesses looking for a quick start.",
	},
	{
		id: 2,
		question: "How long does it take to see results from SEO?",
		answer:
			"SEO is a long-term strategy that typically shows initial results within 3-6 months. However, significant improvement in rankings and traffic can take 6-12 months depending on your industry competition, website condition, and content quality.",
	},
	{
		id: 3,
		question: "Do you offer one-time services or only monthly packages?",
		answer:
			"We offer both options. Our one-time SEO setup and website development services are perfect for businesses that need a foundation without long-term commitments. We also provide ongoing monthly packages for businesses looking for continuous optimization and growth.",
	},
	{
		id: 4,
		question:
			"How do you measure the success of your digital marketing campaigns?",
		answer:
			"We track key performance indicators (KPIs) specific to your business goals, including organic traffic growth, keyword rankings, conversion rates, return on ad spend (ROAS), and overall revenue impact. We provide regular, transparent reporting so you can see exactly how our efforts are performing.",
	},
	{
		id: 5,
		question: "Do you specialize in any particular industries?",
		answer:
			"While we work with businesses across various sectors in the United States, we have particular expertise in e-commerce, local service businesses, B2B companies, and professional services. Our strategies are always customized to the specific needs and competitive landscape of your industry.",
	},
];

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-4">
			{/* Header with gradient text */}
			<div className="text-center mb-12 max-w-3xl w-full">
				<h2 className="text-5xl font-bold mb-8">
					Your questions,{" "}
					<span
						style={{
							backgroundImage:
								"linear-gradient(90deg, #a0ecb1 1%, rgba(160, 236, 177, 0.3) 1% 2%, rgba(160, 236, 177, 0) 92.71%)",
						}}
					>
						answered
					</span>
				</h2>
			</div>

			{/* FAQ Button tag */}
			<div className="mb-8">
				<span className="bg-[#3d2c2a] text-[#e0a695] px-4 py-2 rounded-full text-sm uppercase font-medium">
					Frequently Asked
				</span>
			</div>

			{/* FAQ Items Container */}
			<div className="max-w-3xl w-full">
				{faqData.map((faq, index) => (
					<div key={faq.id} className="mb-4">
						<button
							onClick={() => toggleFAQ(index)}
							className="w-full bg-[#111111] hover:bg-[#191919] transition-colors duration-300 rounded-full p-4 flex items-center justify-between text-left"
						>
							<div className="flex items-center">
								<div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center mr-4">
									<motion.div
										animate={{ rotate: activeIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										{activeIndex === index ? (
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5 12H19"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										) : (
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 5V19M5 12H19"
													stroke="white"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
										)}
									</motion.div>
								</div>
								<h3 className="font-medium text-lg">{faq.question}</h3>
							</div>
						</button>

						<AnimatePresence>
							{activeIndex === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="overflow-hidden"
								>
									<div className="pl-14 pr-4 py-6 text-gray-400">
										{faq.answer}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</div>
	);
}
