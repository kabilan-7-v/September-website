// /app/components/ResearchPapersList.tsx
"use client";

// 1. Import 'useRef' instead of useState/useEffect
import React, { useRef } from 'react';

// Define the shape of our data for type safety
interface Paper {
  title: string;
  category: string;
  date: string;
}

// Sample data - in a real application, you would fetch this from a CMS or API
const paperData: Paper[] = [
  {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },  {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },  {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  }, {
    title: 'A small number of samples can poison LLMs of any size',
    category: 'Alignment',
    date: 'Oct 9, 2025',
  },
  {
    title: 'Petri: An open-source auditing tool to accelerate AI safety research',
    category: 'Alignment',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Claude Opus 4 and 4.1 can now end a rare subset of conversations',
    category: 'Alignment',
    date: 'Aug 15, 2025',
  },
  {
    title: 'Agentic Misalignment: How LLMs could be insider threats',
    category: 'Alignment',
    date: 'Jun 21, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
  {
    title: 'Exploring model welfare',
    category: 'Alignment',
    date: 'Apr 24, 2025',
  },
  {
    title: 'SHADE-Arena: Evaluating sabotage and monitoring in LLM agents',
    category: 'Alignment',
    date: 'Jun 17, 2025',
  },
];


const ResearchPapersList = () => {
  // 2. Create a ref to attach to the top of the section
  const sectionRef = useRef<HTMLElement>(null);

  // 3. Update the scroll function to scroll the ref into view
  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // We no longer need useState or useEffect since the button isn't fixed

  return (
    // 4. Attach the ref to the <section> element
    <section 
    ref={sectionRef} 
    className="w-full mx-auto sm:p-8 bg-[#FBFBFB] font-sans scroll-mt-40"
  >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Research Papers
      </h2>
      
      <div className="border-t border-gray-300">
        {paperData.map((paper, index) => (
          <article 
            key={index} 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-gray-300"
          >
            <h3 className="flex-1 text-lg text-gray-900 font-medium mb-2 sm:mb-0 sm:pr-8">
              {paper.title}
            </h3>
            
            <div className="flex items-center w-full sm:w-auto text-sm sm:text-base">
              <span className="text-gray-600 w-32 sm:w-48">{paper.category}</span>
              <span className="text-gray-500 text-right flex-1 sm:flex-none sm:w-32">{paper.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* This layout is exactly as you wrote it */}
      <div className='flex justify-end mt-8'>
      <button
        onClick={scrollToTop}
        className=" 
          bg-black text-white 
          w-12 h-12 rounded-lg 
          flex items-center justify-center 
          shadow-lg 
          hover:bg-gray-800 
          focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
          transition-opacity duration-300"
        
        // Updated label for better accessibility
        aria-label="Scroll to top of research" 
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 19.5V4.5M12 4.5L6.75 9.75M12 4.5L17.25 9.75" 
          />
        </svg>
      </button></div>
      
    </section>
  );
};

export default ResearchPapersList;