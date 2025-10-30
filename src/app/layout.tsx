import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CurrencyInit from "./currency-init"; // ✅ NEW IMPORT

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
    creator: "@GurmeetOberoi0",
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
        {/* ✅ Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1457869228627713');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1457869228627713&ev=PageView&noscript=1"
            alt="fb pixel"
          />
        </noscript>
      </head>

      <body className={`${roboto.variable} antialiased`}>
        {/* ✅ Currency detection (client-side, auto + override support) */}
        <CurrencyInit />

        <Navbar />
        {children}
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
