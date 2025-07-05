import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Go Growth | Digital Marketing & Growth Solutions",
	description:
		"Go Growth helps businesses achieve sustainable growth through expert digital marketing strategies, content creation, and performance optimization.",
	metadataBase: new URL("https://gogrowth.in"),
	openGraph: {
		title: "Go Growth | Digital Marketing & Growth Solutions",
		description:
			"Expert digital marketing strategies for sustainable business growth",
		url: "https://gogrowth.in/",
		siteName: "Go Growth",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "Go Growth - Digital Marketing Solutions",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Go Growth | Digital Marketing & Growth Solutions",
		description:
			"Expert digital marketing strategies for sustainable business growth",
		images: ["/logo.png"],
		creator: "@GurmeetOberoi0", // If applicable
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://gogrowth.in",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={`${roboto.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
				<JsonLd />
			</body>
		</html>
	);
}
