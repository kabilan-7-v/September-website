import { Primary } from '@/constant/color';
import videoimg from '@/assets/video.png';
import Image from 'next/image';
// --- SVG Icon Components ---

const PlayIcon = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
    <svg 
      className="w-6 h-6 text-black" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  </div>
);

const QuoteIcon = () => (
  <svg 
    className="w-10 h-10 text-gray-800" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 18 14"
  >
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
);


// --- Main Component ---

const VideoFeature = () => {
  return (
    <section className=" font-sans py-20 sm:py-24"
    style={
      {
        backgroundColor:Primary
      }
    }
    >
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">

          {/* Left Column: Video Thumbnail */}
          <div className="group relative cursor-pointer md:col-span-3">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={videoimg} // IMPORTANT: Replace with your image path
                alt="A group of researchers discussing AI"
                width={1280}
                height={720}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-black/10"></div>
            {/* <div className="absolute inset-0 flex flex-col justify-start p-8">
              <h2 className="max-w-md text-4xl font-bold leading-tight text-white sm:text-5xl">
                Reading the mind of an AI
              </h2>
            </div> */}
            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <PlayIcon />
            </div> */}
          </div>

          {/* Right Column: Quote */}
          <div className="md:col-span-2">
            <QuoteIcon />
            <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-gray-900 sm:text-3xl">
              When you’re talking to a large language model, what exactly is it that you’re talking to?
            </blockquote>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="mt-20 border-b border-gray-400/80"></div>
      </div>
    </section>
  );
};

export default VideoFeature;