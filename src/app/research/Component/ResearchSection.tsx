// /app/components/ResearchSection.tsx

import React from 'react';

// A simple placeholder for the card illustrations.
// In a real app, you would replace this with an <Image /> component or an SVG.
const CardIllustration = ({ variant }: { variant: 'network' | 'handshake' }) => {
  if (variant === 'network') {
    // Simplified representation of the network illustration
    return (
      <div className="w-48 h-48 relative flex items-center justify-center">
        <div className="absolute w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute w-28 h-28 bg-black shadow-lg">
           {/* You can add SVG paths here for the actual network lines */}
        </div>
      </div>
    );
  }
  // Simplified representation of the handshake illustration
  return (
    <div className="w-40 h-40 flex items-center justify-center">
        {/* Replace with your SVG or Image component */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-black/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.846 9.468-4.685A5.975 5.975 0 0121 9h-4.832A2.18 2.18 0 0114 11.183v2.654A6.972 6.972 0 016.559 21.25l-2.435-6.956a4.004 4.004 0 011.312-4.61z" />
        </svg>
    </div>
  );
};

const ResearchSection = () => {
  return (
    <section className="font-sans bg-[#FBFBFB] py-12 px-6 sm:py-16 sm:px-10 lg:px-20">
      <div className=" mx-auto">
        {/* Header Section */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800">
              Research at Anthropic
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our research teams investigate the safety, inner workings, and societal impact of AI models — so that artificial intelligence has a positive impact on society as it becomes increasingly advanced and capable.
            </p>
          </div>
        </header>

        {/* Featured Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Tracing Thoughts */}
          <a href="#" className="group lg:col-span-2 bg-[#C77865] rounded-3xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="flex-grow flex items-center justify-center min-h-[200px] mb-8">
              <CardIllustration variant="network" />
            </div>
            <div>
              <p className="text-sm text-white/90">Featured paper</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                Tracing the thoughts of a large language model
              </h3>
            </div>
          </a>

          {/* Card 2: Alignment Faking */}
          <a href="#" className="group lg:col-span-1 bg-[#D2D1CB] rounded-3xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="flex-grow flex items-center justify-center min-h-[200px] mb-8">
              <CardIllustration variant="handshake" />
            </div>
            <div>
              <p className="text-sm text-black/70">Featured paper</p>
              <h3 className="text-2xl font-bold text-black mt-1">
                Alignment faking in large language models
              </h3>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;