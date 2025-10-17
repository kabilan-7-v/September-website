import React from 'react';

/**
 * A responsive hero section component for a landing page.
 * It features a main heading, a descriptive paragraph, and a call-to-action button,
 * followed by a horizontal separator line.
 */
const HeroSection = () => {
  return (
    <div className="font-sans">
      <section className=" w-full flex items-center justify-center py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 text-center">
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-5 leading-tight">
            Making AI systems <br /> you can rely on
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-md md:text-lg text-zinc-700 mb-8">
            Anthropic is an AI safety and research company. We build reliable,
            interpretable, and steerable AI systems.
          </p>

          {/* Call-to-Action Button */}
          <button
            className="bg-black text-white font-medium py-2.5 px-6 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Join us
          </button>

        </div>
      </section>

      {/* Separator Line */}
      <div className=" w-full pb-10">
         <div className="container mx-auto px-6">
            <div className="w-full border-t border-zinc-300"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;