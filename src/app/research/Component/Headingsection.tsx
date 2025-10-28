import React from 'react';
interface HeadingSectionProps {
  heading: string;
  subheading1: React.ReactNode;
 subheading2: React.ReactNode;
  para1: string;
  para2: string;
  note?: string; // Made 'note' optional as it might not always be provided
}
const Headingsection: React.FC<HeadingSectionProps> = ({heading,
  subheading1,
  subheading2,
  para1,
  para2,
  note
}) => {
  return (
    <section className="bg-[#fcfbf9] text-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section: Main Heading and Intro */}
        <div className="md:flex  gap-8 md:gap-16 items-start mb-16 md:mb-24">
          <h1 className="text-4xl md:text-[36px] md:mr-[5%] font-bold whitespace-nowrap">
            {heading}
          </h1>
        <div className="flex flex-col ">

          <p className="text-lg md:text-[24px] font-bold text-gray-700 mt-2 md:mt-0 ">
            {note}
          </p>
          <div className='flex mt-[52px] justify-evenly'> 
          <div>
            <h2 className="text-3xl md:text-[36px] font-bold mb-4">
              {subheading1}
            </h2>
            <p className="text-base md:text-[16px] text-gray-700 leading-relaxed">
             {para1}
            </p>
          </div>
          
          {/* Column 2: Multidisciplinary approach */}
          <div>
            <h2 className="md:text-[36px] font-bold mb-4">
             {subheading2}
            </h2>
            <p className="text-base md:text-[16px] text-gray-700 leading-relaxed">
              {para2}
            </p>
          </div></div>

        </div>

        {/* Bottom Section: Two Columns */}
          
          {/* Column 1: Safety through understanding */}
          

        </div>
      </div>
    </section>
  );
};

export default Headingsection;