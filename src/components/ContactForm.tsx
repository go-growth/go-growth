"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
	const form = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		contactNumber: "",
		companyName: "",
		companySize: "",
		companyType: "",
		country: "",
		domain: "",
		instagram: "", // Added Instagram field
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		// Map the EmailJS field names back to our state property names
		const stateField =
			name === "from_name"
				? "fullName"
				: name === "reply_to"
				? "email"
				: name === "contact_number"
				? "contactNumber"
				: name === "company_name"
				? "companyName"
				: name === "company_size"
				? "companySize"
				: name === "company_type"
				? "companyType"
				: name === "domain"
				? "domain"
				: name === "instagram" // Add mapping for Instagram
				? "instagram"
				: name;

		setFormData((prev) => ({
			...prev,
			[stateField]: value,
		}));
	};

	interface FormData {
		fullName: string;
		email: string;
		contactNumber: string;
		companyName: string;
		companySize: string;
		companyType: string;
		country: string;
		domain: string;
		instagram: string; // Added Instagram to the interface
		message: string;
	}

	const saveToGoogleSheets = async (formData: FormData) => {
		try {
			// Replace with your actual Web App URL from Google Apps Script deployment
			const appsScriptWebAppUrl =
				process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL!;

			await fetch(appsScriptWebAppUrl, {
				method: "POST",
				mode: "no-cors", // Important for Apps Script web apps
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			// Note: With no-cors, you won't get a response body
			console.log("Submitted to Google Sheets");
		} catch (error) {
			console.error("Google Sheets save error:", error);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitError("");

		try {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

			if (!form.current) {
				throw new Error("Form not available");
			}

			const result = await emailjs.sendForm(
				serviceId,
				templateId,
				form.current,
				publicKey,
			);

			await saveToGoogleSheets(formData);

			if (result.text === "OK") {
				setSubmitSuccess(true);
				setFormData({
					fullName: "",
					email: "",
					contactNumber: "",
					companyName: "",
					companySize: "",
					companyType: "",
					country: "",
					domain: "",
					instagram: "", // Reset Instagram field
					message: "",
				});
			} else {
				throw new Error("Failed to send email");
			}
		} catch (error) {
			setSubmitError("Failed to submit the form. Please try again later.");
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const companySizeOptions = [
		"1-10 employees",
		"11-50 employees",
		"51-200 employees",
		"201-500 employees",
		"501-1000 employees",
		"1001+ employees",
	];

	const companyTypeOptions = [
		"B2C (Business to Consumer)",
		"D2C (Direct to Consumer)",
		"Other",
	];

	const countryOptions = [
		"United States",
		"United Kingdom",
		"Canada",
		"Australia",
		"Germany",
		"France",
		"Japan",
		"India",
		"China",
		"Brazil",
		"Other",
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<div className="mb-10 text-center">
				<h1 className="text-3xl font-bold mb-2 text-white">Contact Us</h1>
				<p className="text-gray-300">
					We&apos;d love to hear from you. Fill out the form below and
					we&apos;ll get back to you as soon as possible.
				</p>
			</div>

			{submitSuccess ? (
				<div
					className="bg-green-900 border border-green-600 text-green-100 px-6 py-4 rounded-lg shadow-md mb-6"
					role="alert"
				>
					<strong className="font-bold text-lg">Thank you!</strong>
					<span className="block mt-1">
						Your message has been sent successfully. We&apos;ll be in touch
						soon.
					</span>
					<button
						className="mt-4 bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-200"
						onClick={() => setSubmitSuccess(false)}
					>
						Send another message
					</button>
				</div>
			) : (
				<form
					ref={form}
					onSubmit={handleSubmit}
					className="rounded-lg p-8 bg-[#121212] border border-zinc-800 shadow-xl"
				>
					{submitError && (
						<div
							className="bg-red-900 border border-red-600 text-red-100 px-6 py-4 rounded-lg shadow-md mb-6"
							role="alert"
						>
							<span className="block">{submitError}</span>
						</div>
					)}

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Full Name - Required */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="fullName"
							>
								Full Name <span className="text-red-400">*</span>
							</label>
							<input
								id="fullName"
								name="from_name"
								type="text"
								required
								value={formData.fullName}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="John Doe"
							/>
						</div>

						{/* Email - Required */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="email"
							>
								Email Address <span className="text-red-400">*</span>
							</label>
							<input
								id="email"
								name="reply_to"
								type="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="john.doe@example.com"
							/>
						</div>

						{/* Contact Number - Required */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="contactNumber"
							>
								Contact Number <span className="text-red-400">*</span>
							</label>
							<input
								id="contactNumber"
								name="contact_number"
								type="tel"
								required
								value={formData.contactNumber}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="+1 (123) 456-7890"
							/>
						</div>

						{/* Company Name - Optional */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="companyName"
							>
								Company Name
							</label>
							<input
								id="companyName"
								name="company_name"
								type="text"
								value={formData.companyName}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="Acme Corporation"
							/>
						</div>

						{/* Company Size - Optional */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="companySize"
							>
								Company Size
							</label>
							<div className="relative">
								<select
									id="companySize"
									name="company_size"
									value={formData.companySize}
									onChange={handleChange}
									className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								>
									<option value="" className="bg-[#1a1a1a]">
										Select company size
									</option>
									{companySizeOptions.map((option) => (
										<option
											key={option}
											value={option}
											className="bg-[#1a1a1a]"
										>
											{option}
										</option>
									))}
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
									<svg
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 20 20"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Company Type - Optional */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="companyType"
							>
								Company Type
							</label>
							<div className="relative">
								<select
									id="companyType"
									name="company_type"
									value={formData.companyType}
									onChange={handleChange}
									className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								>
									<option value="" className="bg-[#1a1a1a]">
										Select company type
									</option>
									{companyTypeOptions.map((option) => (
										<option
											key={option}
											value={option}
											className="bg-[#1a1a1a]"
										>
											{option}
										</option>
									))}
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
									<svg
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 20 20"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Country - Required */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="country"
							>
								Country <span className="text-red-400">*</span>
							</label>
							<div className="relative">
								<select
									id="country"
									name="country"
									required
									value={formData.country}
									onChange={handleChange}
									className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								>
									<option value="" className="bg-[#1a1a1a]">
										Select your country
									</option>
									{countryOptions.map((option) => (
										<option
											key={option}
											value={option}
											className="bg-[#1a1a1a]"
										>
											{option}
										</option>
									))}
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
									<svg
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 20 20"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Domain - Optional */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="domain"
							>
								Domain
							</label>
							<input
								id="domain"
								name="domain"
								type="text"
								value={formData.domain}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="www.yourcompany.com"
							/>
						</div>

						{/* Instagram - Optional */}
						<div className="mb-4">
							<label
								className="block text-gray-200 text-sm font-medium mb-2"
								htmlFor="instagram"
							>
								Instagram
							</label>
							<input
								id="instagram"
								name="instagram"
								type="text"
								value={formData.instagram}
								onChange={handleChange}
								className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
								placeholder="@yourusername"
							/>
						</div>
					</div>

					{/* Message Field - Full Width */}
					<div className="mb-6 mt-2">
						<label
							className="block text-gray-200 text-sm font-medium mb-2"
							htmlFor="message"
						>
							Message <span className="text-red-400">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							required
							value={formData.message}
							onChange={handleChange}
							className="shadow-sm appearance-none border border-white/50 rounded-md w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent bg-[#1a1a1a] transition duration-200 placeholder:text-white/50"
							placeholder="Please describe how we can help you..."
							rows={5}
						></textarea>
					</div>

					<div className="flex items-center justify-center mt-6">
						<button
							type="submit"
							disabled={isSubmitting}
							className={`border-2 border-white/50 rounded-full px-10 p-4 text-lg uppercase font-semibold flex items-center justify-center text-center hover:bg-white/10 transition-colors ${
								isSubmitting ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>
				</form>
			)}
		</div>
	);
}
