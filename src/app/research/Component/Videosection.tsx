import Image from 'next/image';
import React from 'react';
import img from "../../../assets/video.png"
const Videosection: React.FC = () => {
 
    return (
        <section className="bg-[#fcfbf9] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Quote */}
            <div className="pr-0 md:pr-8">
              <span className="text-7xl md:text-8xl font-bold text-gray-800 leading-none">
                “
              </span>
              <blockquote className="mt-2">
                <p className="text-base md:text-xl font-medium text-gray-900">
                  You want people to be completely aware of exactly what they're interacting with, and to kind of be under no illusions. I feel that's really important.
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-bold text-gray-900">Amanda Askell</div>
                <div className="text-gray-600">Researcher, Alignment</div>
              </figcaption>
            </div>
    
            {/* Right Column: Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              {/* Replace this with a Next.js <Image> component for optimization.
                The src should be the path to your image in the `public` folder
                or an imported static image.
              */}
              <Image
                // src={amandaAskellImage} // If imported
                src={img} // Example path from /public
                alt="Amanda Askell, Researcher, Alignment"
                layout="fill"
                objectFit="cover"
                className="bg-gray-200" // Background color while loading
              />
              {/* Fallback <img> tag if you're not using Next.js <Image>
                <img 
                  src="image_d1cc5b.jpg" // This path is a placeholder
                  alt="Amanda Askell, Researcher, Alignment"
                  className="w-full h-full object-cover"
                />
              */}
            </div>
            
          </div>
        </section>
      );
    };

export default Videosection