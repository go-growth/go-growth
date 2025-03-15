'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    question: 'Who is this for?',
    answer: 'Our offers are tailored for podcast hosts, tech companies, and venture capital firms looking to establish themselves as thought leaders in the industry.'
  },
  {
    id: 2,
    question: 'Why podcasts?',
    answer: 'Podcasts offer an intimate medium to connect directly with your target audience, establish credibility through thoughtful conversations, and build a loyal community around your brand or expertise.'
  },
  {
    id: 3,
    question: 'Who will be the host of the podcast? (for the launchpad offer)',
    answer: 'We provide experienced hosts who are knowledgeable in your industry. Alternatively, we can train someone from your team to become an effective podcast host representing your brand.'
  },
  {
    id: 4,
    question: 'How will the podcast be promoted?',
    answer: 'We implement a comprehensive promotion strategy including social media campaigns, newsletter features, cross-promotion with complementary podcasts, and targeted advertising to reach your ideal audience.'
  }
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
          Your questions, <span style={{ backgroundImage: 'linear-gradient(90deg, #a0ecb1 1%, rgba(160, 236, 177, 0.3) 1% 2%, rgba(160, 236, 177, 0) 92.71%)' }}>answered</span>
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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