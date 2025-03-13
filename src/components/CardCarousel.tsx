"use client";
import React, { useState } from 'react';

export default function CardCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Card data based on the image
  const cards = [
    {
      logo: "text-teal-400",
      title: "Acquired",
      subtitle: "Top 5 Tech Podcast"
    },
    {
      logo: "bg-blue-400",
      title: "Reid Hoffman",
      subtitle: "Founder LinkedIn"
    },
    {
      logo: "bg-white",
      title: "Grit by Kleiner Perkins",
      subtitle: "Top Venture Capital"
    },
    {
      logo: "bg-white",
      title: "Primary",
      subtitle: "Top Venture Capital"
    }
  ];
  
  // Create duplicated array for infinite scroll effect
  const displayCards = [...cards, ...cards, ...cards];

  return (
    <div className="flex items-center justify-center w-full p-8">
      <div className="w-full overflow-hidden relative">
        <div 
          className={`flex gap-8 ${isPaused ? "" : "animate-marquee"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {displayCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0 w-32">
              <div className={`w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700 mb-4 flex items-center justify-center ${card.logo}`}>
                {card.title === "Acquired" && (
                  <div className="text-center font-bold text-2xl">ACQUIRED</div>
                )}
                {card.title === "Reid Hoffman" && (
                  <div className="w-32 h-32">
                    <img src="/api/placeholder/160/160" alt="Reid Hoffman" className="w-full h-full object-cover" />
                  </div>
                )}
                {card.title === "Grit by Kleiner Perkins" && (
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M2 2h20v20H2V2zm4 4v12h12V6H6z" fill="black" />
                      <path d="M10 10h4v4h-4v-4z" fill="black" />
                    </svg>
                  </div>
                )}
                {card.title === "Primary" && (
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M5 5h14v14H5V5zm2 2v10h10V7H7z" fill="black" />
                      <path d="M12 7v10" stroke="black" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-white font-bold text-center">{card.title}</h3>
              <p className="text-gray-400 text-sm text-center">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add the required CSS for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-160px * ${cards.length})); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}