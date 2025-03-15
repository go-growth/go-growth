import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Go Growth",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
