// components/EconomicIndexSection.tsx
import React from 'react';

// A simple component to render the custom SVG icon
const IndexIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-gray-800 md:h-24 md:w-24"
    aria-hidden="true" // Decorative icon
  >
    <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M50 50L65 35" stroke="currentColor" strokeWidth="1.5" />
    <path d="M50 50L65 65" stroke="currentColor" strokeWidth="1.5" />
    <path d="M50 50L35 35" stroke="currentColor" strokeWidth="1.5" />
    <path d="M50 50L35 65" stroke="currentColor" strokeWidth="1.5" />
    <path d="M68 32 C 70 30, 72 30, 74 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M68 28 C 70 26, 72 26, 74 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M68 68 C 70 70, 72 70, 74 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M68 72 C 70 74, 72 74, 74 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 32 C 30 30, 28 30, 26 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 28 C 30 26, 28 26, 26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 68 C 30 70, 28 70, 26 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 72 C 30 74, 28 74, 26 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const EconomicIndexSection = () => {
  return (
    <section className="bg-[#fdfdfc] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Top Separator Line */}
        <div className="mb-12 border-t border-gray-300" />

        {/* Top Content Grid (Responsive) */}
        <div className="mb-16 grid grid-cols-1 items-start gap-x-12 gap-y-8 md:grid-cols-2">
          {/* Left Column: Heading */}
          <h2 className="font-serif text-4xl font-medium leading-tight text-gray-800 lg:text-5xl">
            Analyzing how Claude is used across the economy.
          </h2>
          
          {/* Right Column: Description */}
          <p className="pt-1 text-base leading-relaxed text-gray-600 md:text-lg">
            The Anthropic Economic Index aims to understand AI's effects on the labor market and broader economy over time. The Index provides the clearest picture yet of how AI is being incorporated into real-world tasks across the modern economy.
          </p>
        </div>

        {/* Bottom Call-to-Action Box */}
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#dde5e4] p-8 sm:flex-row sm:p-12">
          {/* Box Text Content */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-3xl font-medium text-gray-800 md:text-4xl">
              Anthropic Economic Index
            </h3>
            <p className="mt-2 text-xl text-gray-700 md:text-2xl">
              Explore and download the data
            </p>
          </div>
          
          {/* Box Icon */}
          <div className="flex-shrink-0">
            <IndexIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicIndexSection;