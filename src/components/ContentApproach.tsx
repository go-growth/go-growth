import React from 'react';

export default function ContentApproach() {
  return (
    <div className="min-h-screen flex items-center justify-center w-fulL relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-8 right-8 text-white text-4xl">*</div>
      <div className="absolute bottom-32 left-8 text-white text-4xl">*</div>
      
      <div className="absolute top-1/4 left-[15%]">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10L10 70H70L40 10Z" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="absolute right-[15%] top-1/3">
        <div className="bg-yellow-400 rounded-full px-4 py-1 text-black text-sm">
          Tech companies
        </div>
        <div className="text-yellow-400 text-xl ml-2">→</div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          A Holistic Content Approach
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-3xl mx-auto">
          Elevate thought leadership by turning 4 conversations a month into 
          30+ pieces of content posted across all social channels with minimal 
          time investment.
        </p>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Videos stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400">9200+</h2>
            <p className="text-xl mt-2">Videos Created</p>
          </div>
          
          {/* Views stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400">1.1B+</h2>
            <p className="text-xl mt-2">Views</p>
          </div>
          
          {/* Relationships stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400">240+</h2>
            <p className="text-xl mt-2">Relationships Built</p>
          </div>
        </div>
        
        {/* Videos button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-transparent border border-yellow-400 text-yellow-400 rounded-full text-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors">
            VIDEOS
          </button>
        </div>
      </div>
    </div>
  );
}