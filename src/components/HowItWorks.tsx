import React from 'react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full py-16">
      <h1 className="text-5xl font-bold mb-16">How it works</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl px-4">
        {/* Card 1 - Yellow */}
        <div className="w-full md:w-1/3 bg-yellow-300 text-black p-8 rounded-3xl transform rotate-3 h-80">
          <div className="text-3xl font-bold mb-16">1</div>
          <div className="text-xl font-medium">
            <div>1 hour of recording</div>
            <div>a week</div>
            <div>turns into...</div>
          </div>
        </div>
        
        {/* Card 2 - Blue */}
        <div className="w-full md:w-1/3 bg-blue-400 text-black p-8 rounded-3xl h-80 flex flex-col justify-center">
          <div className="text-3xl font-bold mb-6">2</div>
          <div className="text-xl">
            <div>A podcast</div>
            <div>featured on</div>
            <div className="font-bold">top streaming platforms.</div>
          </div>
        </div>
        
        {/* Card 3 - Red/Pink */}
        <div className="w-full md:w-1/3 bg-red-400 text-black p-8 rounded-3xl transform -rotate-3 h-80">
          <div className="text-3xl font-bold mb-6">3</div>
          <div className="text-xl">
            <div>Repurposed into:</div>
            <div className="font-bold">4 YouTube videos,</div>
            <div className="font-bold mt-2">18 shorts</div>
            <div>for LinkedIn & Instagram</div>
            <div className="mt-2">plus <span className="font-bold">2 SEO-enhanced articles.</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}