import React from 'react';

/**
 * Icon component to replicate the hand-drawn paper doodle.
 */
const DoodleIcon = () => (
  <div className="mb-8">
    <div className="relative w-28 h-28">
      {/* Background tan circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F3EADF] rounded-full"></div>
      
      {/* Paper with border and scribble lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[92px] bg-white border-[2.5px] border-black rounded-sm flex flex-col items-center justify-start pt-5 px-3 space-y-2 overflow-hidden">
        {/* Scribble lines using SVG paths for a wavy, hand-drawn feel */}
        <svg width="48" height="6" viewBox="0 0 48 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3C1 3 10.2857 5 24 3C37.7143 1 47 3 47 3" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <svg width="48" height="6" viewBox="0 0 48 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3C1 3 10.2857 1 24 3C37.7143 5 47 3 47 3" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <svg width="48" height="6" viewBox="0 0 48 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3C1 3 10.2857 5 24 3C37.7143 1 47 3 47 3" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  </div>
);

// Data for the navigation links
const navLinks = [
  { id: '01', title: 'Model Report' },
  { id: '02', title: 'System Trust and Reporting' },
  { id: '03', title: 'Voluntary Commitments' },
];

/**
 * The main component for the "Transparency Hub" page.
 */
const HeroSection = () => {
  return (
    // Main container: sets background color, centers content, and fills the screen
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBF9F6] p-8 text-black font-sans">
      
      {/* Main content area, centered */}
      <main className="flex flex-col items-center text-center">
        {/* Icon */}
        <DoodleIcon />

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
          Anthropic's Transparency Hub
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-20">
          A look at Anthropic's key processes, programs, and practices for responsible AI development.
        </p>
      </main>

      {/* Bottom Navigation */}
      <nav>
        {/* List of links: stacks vertically on mobile, row on desktop */}
        <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className="flex items-center"
            >
              {/* Vertical divider, hidden on mobile and before the first item */}
              {index > 0 && (
                <span className="hidden md:inline-block border-l border-gray-400 h-4 mx-6" aria-hidden="true"></span>
              )}
              
              <a href="#" className="flex items-baseline text-gray-900 hover:text-black hover:underline">
                {/* Numbered prefix (monospace font) */}
                <span className="font-mono text-xs mr-2">{link.id}</span>
                {/* Link text (semibold sans-serif) */}
                <span className="font-semibold text-sm tracking-wide">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeroSection;