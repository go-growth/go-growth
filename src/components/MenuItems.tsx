"use client";
import { useEffect, useRef, useState } from "react";
import ContactPage from "./ContactForm";

// Service type
interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  buttonLink?: string;
}

// Default services
export const defaultServices: Service[] = [
  {
    id: 1,
    title: "SEO Specialist",
    description: "For businesses looking to dominate search results",
    features: [
      "Keyword Research & Optimization",
      "Technical & On-Page SEO Fixes",
      "Local SEO for U.S. Businesses",
      "Content Optimization & Blogging",
      "SEO Reports & Performance Tracking",
      "One-Time SEO Setup Available",
      "24x7 Support",
    ],
    buttonText: "Get a Quote",
  },
  {
    id: 2,
    title: "Web Development",
    description: "High-performance websites built to convert visitors",
    features: [
      "Custom Website Design",
      "E-Commerce & Business Websites",
      "Fast, Responsive & Mobile-Friendly",
      "SEO & Speed Optimization",
      "Schema Markup & Structured Data",
      "One-Time Website Setup",
      "24x7 Support",
    ],
    buttonText: "Get a Quote",
  },
  {
    id: 3,
    title: "Paid Advertising",
    description: "More clicks, more conversions, higher ROI",
    features: [
      "Google Ads & Search Campaigns",
      "Facebook, Instagram & LinkedIn Ads",
      "Retargeting & Conversion Optimization",
      "Landing Pages & Ad Copywriting",
      "Ad Budget Optimization",
      "Performance Tracking & Analytics",
      "24x7 Support",
    ],
    buttonText: "Get a Quote",
  },
];

// Function
export default function MenuItems({
  services = defaultServices,
}: {
  services?: Service[];
}) {
  // Reusable check icon
  const CheckIcon = () => (
    <div className="text-[#4d61f5] mr-3 mt-0.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3334 4L6.00008 11.3333L2.66675 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
    <div
      className="flex items-center justify-center w-full lg:py-20 py-10"
      id="services"
    >
      <div className="flex flex-col items-center max-w-6xl w-full px-4">
        <div className="bg-[#2d2a47] text-white text-xs font-medium px-6 py-2 rounded-full mb-12">
          OUR SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full border border-zinc-800 rounded-3xl p-6"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-medium text-white mb-3">
                  {service.title}
                </h1>
                <p className="text-zinc-500 text-center mb-10 text-xs">
                  {service.description}
                </p>

                <div className="w-full space-y-4 mb-10">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon />
                      <span className="text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.buttonLink ? (
                  <a
                    href={service.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-zinc-800 text-white uppercase text-sm font-medium py-4 rounded-full hover:bg-zinc-900 transition-colors text-center"
                  >
                    {service.buttonText || "Learn More"}
                  </a>
                ) : (
                  <button
                    onClick={openModal}
                    className="w-full border border-zinc-800 text-white uppercase text-sm font-medium py-4 rounded-full hover:bg-zinc-900 transition-colors text-center"
                  >
                    {service.buttonText || "Get a Quote"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

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
            <ContactPage />
          </div>
        </div>
      )}
    </div>
  );
}