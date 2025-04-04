// src/components/JsonLd.tsx
import Script from "next/script";

export default function JsonLd() {
	return (
		<Script
			id="json-ld"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "Go Growth",
					url: "https://gogrowth.in",
					logo: "https://gogrowth.in/logo.png",
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+91-99520-34731",
						contactType: "customer service",
					},
					sameAs: [
						"https://www.instagram.com/gurmeet__oberoi",
						"https://in.linkedin.com/in/gurmeet-singh925",
					],
				}),
			}}
		/>
	);
}
