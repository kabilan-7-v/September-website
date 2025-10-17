import Image from 'next/image';
import heroimage from '../../assets/image.png'; // This is fine, or move to /public

const Hero = () => {
  return (
    // REMOVED: max-h-[467px] to let content define height.
    // FIXED: Background color was transparent.
    <section className="bg-[#efeee6] text-black font-sans w-full">
      <div className="container mx-auto flex flex-col items-center justify-between  py-12 md:flex-row md:py-8">

        {/* Left Side: Text Content */}
        {/* IMPROVED: Simplified container structure and used max-w for responsiveness. */}
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-5xl font-bold md:text-[68px]">
            AI <span className="underline">research</span> <span>and</span>
            <br />
            <span className="underline">products</span> that put <br />
            <span>safety</span> at the frontier
          </h1>

          {/* ✨ CHANGE IS HERE: Removed max-w-lg */}
          <p className="mt-6 text-xl md:font-[24px] max-w-[548px]">
            AI will have a vast impact on the world. Anthropic is a public benefit corporation
            dedicated to securing its benefits and mitigating its risks.
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="mt-10 md:mt-0">
          {/* BEST PRACTICE: Added width and height props for performance and to prevent layout shift. */}
          {/* This also removes the need for Tailwind's w- and h- classes here. */}
          <Image
            src={heroimage}
            alt="Abstract illustration of a hand holding a plant-like structure"
            width={458}
            height={458}
            priority // Keep this, it's great for LCP!
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;