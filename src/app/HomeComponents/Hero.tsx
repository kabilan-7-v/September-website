import Image from 'next/image';
import heroimage from '../../assets/image.png'


const Hero = () => {
  return (
    <section className="bg-[#efeee600] text-black font-sans">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between px-6 py-24 md:flex-row">
        
        {/* Left Side: Text Content */}
        <div className="mb-12 max-w-8xl mt-18 text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI <span className="underline decoration-2 underline-offset-4">research and</span>{' '}
            <span className="underline decoration-2 underline-offset-4">products that</span> put{' '}
            <span className="underline decoration-2 underline-offset-4">safety</span> at the frontier
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            AI will have a vast impact on the world. Anthropic is a public benefit corporation
            dedicated to securing its benefits and mitigating its risks.
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex justify-center md:w-1/2">
          {/* Make sure to place your illustration in the /public folder */}
          <Image
            src={heroimage} // IMPORTANT: Replace with your image path
            alt="Abstract illustration of a hand holding a plant-like structure"
            width={450}
            height={250}
            priority
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;