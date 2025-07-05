import TenKDesignersCaseStudy from "@/components/case-studies/TenKDesignersCaseStudy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "10K Designers Case Study | Go Growth",
	description:
		"Learn how Go Growth helped 10K Designers increase their conversion rates and digital presence through effective marketing strategies.",
	openGraph: {
		title: "10K Designers Case Study | Go Growth",
		description:
			"Learn how Go Growth helped 10K Designers increase their conversion rates.",
		url: "https://gogrowth.in/case-studies/10k-designers",
		images: ["/case-studies/10k-designers.png"],
	},
	alternates: {
		canonical: "https://gogrowth.in/case-studies/10k-designers",
	},
};

export default function TenKDesignersPage() {
	return (
		<div>
			<TenKDesignersCaseStudy />
		</div>
	);
}
