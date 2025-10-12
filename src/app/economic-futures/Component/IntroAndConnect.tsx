// components/IntroAndConnect.tsx
import React from 'react';

const IntroAndConnect = () => {
  return (
    <>
      {/* Section 1: Introducing Anthropic Economic Futures */}
      <section className="bg-[#fdfdfc] py-20 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Top Separator Line */}
          <div className="mb-12 border-t border-gray-300" />
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
            {/* Left Column: Heading */}
            <div className="md:col-span-1">
              <h2 className="font-serif text-4xl font-medium leading-tight text-gray-800">
                Introducing Anthropic Economic Futures
              </h2>
            </div>
            
            {/* Right Column: Text and Button */}
            <div className="md:col-span-2">
              <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">
                At Anthropic, we recognize that AI systems are already changing our economy and our work. Measuring and responding to these changes presents challenging questions that no one entity—including AI labs—can answer. However, we believe that we can help generate the rigorous research and analysis society needs to understand the economic impacts of AI systems and to craft sound policy responses. That's why we're launching the Anthropic Economic Futures program, a multidisciplinary effort that builds upon our existing economic research efforts.
              </p>
              <button className="rounded-lg border border-gray-400 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Researchers: Connect with us */}
      <section className="bg-[#f8f8f7] py-24 text-center px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold text-gray-800 md:text-5xl">
            Researchers: Connect with us
          </h2>
          <button className="mt-8 rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900">
            Share feedback
          </button>
        </div>
      </section>
    </>
  );
};

export default IntroAndConnect;