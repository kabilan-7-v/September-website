// components/NewsroomSection.tsx
import React from 'react';

// --- SVG Icon Components ---
const ClaudeIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white">
    <path d="M45.5 35L38 49.5L45.5 64H60.5L68 49.5L60.5 35H45.5Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="53" cy="42" r="2.5" fill="currentColor"/>
    <circle cx="60.5" cy="49.5" r="2.5" fill="currentColor"/>
    <circle cx="53" cy="57" r="2.5" fill="currentColor"/>
    <circle cx="45.5" cy="49.5" r="2.5" fill="currentColor"/>
    <circle cx="45.5" cy="64" r="2.5" fill="currentColor"/>
    <path d="M78 55C82 52 88 56 86 62C80 78 60 70 60 64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M58 88C60 90 64 92 68 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M54 86C56 88 60 90 64 88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 84C52 86 56 88 60 86" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IndexIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-800">
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

// --- Data for Cards ---
const newsItems = [
    { category: 'Announcements', title: 'Introducing Claude Sonnet 4.5', date: 'Sep 29, 2025', Icon: ClaudeIcon, bgColor: 'bg-[#d98c72]', textColor: 'text-white', gridSpan: 'md:col-span-2' },
    { category: 'Policy', title: "Thoughts on America's AI Action Plan", date: 'Jul 23, 2025', bgColor: 'bg-white', textColor: 'text-gray-800' },
    { category: 'Announcements', title: 'Anthropic raises $13B Series F at $183B post-money valuation', date: 'Sep 02, 2025', bgColor: 'bg-white', textColor: 'text-gray-800' },
    { category: 'Economic Research', title: 'Anthropic Economic Index report: Uneven geographic and enterprise AI adoption', date: 'Sep 16, 2025', Icon: IndexIcon, bgColor: 'bg-[#dde5e4]', textColor: 'text-gray-800', gridSpan: 'md:col-span-2' },
];

// --- Main Component ---
const NewsroomSection = () => {
    return (
        <section className="bg-[#fdfdfc] py-16 px-4 sm:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-4xl font-semibold text-gray-800">Newsroom</h2>

                {/* News Grid */}
                <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {newsItems.map((item, index) => (
                        <div key={index} className={`${item.bgColor} ${item.textColor} ${item.gridSpan || ''} flex flex-col justify-between rounded-xl p-8`}>
                            <div className={`flex items-start ${item.Icon ? 'justify-between' : ''}`}>
                                <div>
                                    <p className="text-sm font-medium opacity-80">{item.category}</p>
                                    <h3 className={`mt-2 text-2xl font-semibold leading-tight ${item.title.length > 50 ? 'md:text-3xl' : 'md:text-4xl'}`}>{item.title}</h3>
                                </div>
                                {item.Icon && <div className="hidden flex-shrink-0 sm:block"><item.Icon /></div>}
                            </div>
                            <p className="mt-12 text-sm opacity-80">{item.date}</p>
                        </div>
                    ))}
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8 text-sm md:grid-cols-4">
                    <div>
                        <h4 className="font-medium text-gray-500">Follow Anthropic</h4>
                        <a href="#" className="mt-1 block text-gray-800 hover:underline">Anthropic on X</a>
                        <a href="#" className="mt-1 block text-gray-800 hover:underline">LinkedIn</a>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-500">Press inquiries</h4>
                        <a href="mailto:press@anthropic.com" className="mt-1 block text-gray-800 hover:underline">press@anthropic.com</a>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-500">Non-media inquiries</h4>
                        <a href="mailto:support@anthropic.com" className="mt-1 block text-gray-800 hover:underline">support@anthropic.com</a>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-500">Media assets</h4>
                        <a href="#" className="mt-1 block text-gray-800 hover:underline">Download press kit</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsroomSection;