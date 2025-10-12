// components/AnthropicHeader.tsx
import Image from 'next/image';
import EconomicIndexSection from './EconomicIndexSection';

const AnthropicHeader = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfdfc]">
      {/* Main Centered Content */}
      <main className="flex flex-grow flex-col items-center justify-center gap-y-6 p-8 text-center">
        {/* Icon */}
        <div className="mb-2">
          {/* Replace with your actual logo/icon path */}
          <Image
            src="/anthropic-icon.svg" // Make sure this path is correct in your `public` folder
            alt="Anthropic Economic Futures Icon"
            width={80}
            height={80}
            priority // Helps load the image faster as it's above the fold
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-semibold text-gray-800 md:text-5xl">
          Anthropic Economic Futures
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 md:text-xl">
          Understanding AI's effects on the economy over time
        </p>

        {/* Last Updated Timestamp */}
        <p className="mt-8 text-sm text-gray-400">
          Last updated Jun 27, 2025
        </p>
        <EconomicIndexSection/>
      </main>

      
    </div>
  );
};

export default AnthropicHeader;