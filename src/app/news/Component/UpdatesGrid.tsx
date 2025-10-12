// components/UpdatesGrid.tsx
import React from 'react';

// --- SVG Icon Components ---
// I've recreated the icons from your image and added a few new ones for variety.

const CodeIcon = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 80H70C72.7614 80 75 77.7614 75 75V35L60 20H30C27.2386 20 25 22.2386 25 25V80Z" fill="white" stroke="#374151" strokeWidth="2"/>
    <path d="M60 20V35H75" stroke="#374151" strokeWidth="2"/>
    <path d="M45 50L40 55L45 60" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 50L60 55L55 60" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M51 47L49 63" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="#374151" strokeWidth="2"/>
    <path d="M25 50H75" stroke="#374151" strokeWidth="2"/>
    <path d="M50 25C40 35 40 65 50 75" stroke="#374151" strokeWidth="2"/>
    <path d="M50 25C60 35 60 65 50 75" stroke="#374151" strokeWidth="2"/>
    <circle cx="50" cy="25" r="3" fill="#374151"/>
    <circle cx="50" cy="75" r="3" fill="#374151"/>
    <circle cx="25" cy="50" r="3" fill="#374151"/>
    <circle cx="75" cy="50" r="3" fill="#374151"/>
  </svg>
);

const HandsIcon = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const BalanceIcon = ({ className = 'w-24 h-24' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70H80" stroke="#374151" strokeWidth="2"/>
        <path d="M50 70L40 85H60L50 70Z" fill="white" stroke="#374151" strokeWidth="2"/>
        <path d="M50 70V30" stroke="#374151" strokeWidth="2"/>
        <path d="M25 30H75" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="45" r="8" stroke="#374151" strokeWidth="2"/>
        <circle cx="35" cy="45" r="4" stroke="#374151" strokeWidth="2"/>
        <circle cx="70" cy="50" r="10" stroke="#374151" strokeWidth="2"/>
    </svg>
);


// --- Data for the Grid ---
const cardData = [
  // Cards from the image
  { type: 'icon', category: 'Product', title: 'Customize Claude Code with plugins', date: 'Oct 09, 2025', Icon: CodeIcon, bgColor: 'bg-[#d98c72]' },
  { type: 'icon', category: 'Announcements', title: 'Expanding our global operations to India with our second Asia Pacific office', date: 'Oct 08, 2025', Icon: GlobeIcon, bgColor: 'bg-[#e0d8d1]' },
  { type: 'textOnly', category: 'Announcements', title: 'Rahul Patil joins Anthropic as Chief Technology Officer', date: 'Oct 8, 2025', bgColor: 'bg-[#f0ece9]' },
  { type: 'icon', category: 'Announcements', title: 'Deloitte will make Claude available to 470,000 people across its global network', date: 'Oct 06, 2025', Icon: HandsIcon, bgColor: 'bg-[#6da5cd]' },
  { type: 'icon', category: 'Research', title: 'New safety standards for frontier AI models', date: 'Oct 04, 2025', Icon: BalanceIcon, bgColor: 'bg-[#c7708b]' },
  // More cards added for repetition
  { type: 'textOnly', category: 'Policy', title: 'Our commitment to responsible scaling', date: 'Oct 02, 2025', bgColor: 'bg-[#f0ece9]' },
  { type: 'icon', category: 'Product', title: 'Introducing the Claude 3.5 family', date: 'Sep 30, 2025', Icon: CodeIcon, bgColor: 'bg-[#d98c72]' },
  { type: 'icon', category: 'Announcements', title: 'Welcoming new leadership in our European offices', date: 'Sep 28, 2025', Icon: GlobeIcon, bgColor: 'bg-[#e0d8d1]' },
  { type: 'icon', category: 'Partnerships', title: 'How we collaborate with industry leaders on AI safety', date: 'Sep 25, 2025', Icon: HandsIcon, bgColor: 'bg-[#d98c72]' },
];


// --- Main Component ---
const UpdatesGrid = () => {
  return (
    <section className="bg-[#fdfdfc] py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Optional: Add a title for the section */}
        {/* <h2 className="text-4xl font-semibold text-gray-800 mb-8">Latest Updates</h2> */}
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => {
            // Text-only card variant
            if (card.type === 'textOnly') {
              return (
                <div key={index} className={`${card.bgColor} flex flex-col justify-between rounded-xl p-6 text-gray-800`}>
                  <div>
                    <p className="text-sm font-medium opacity-80">{card.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight">{card.title}</h3>
                  </div>
                  <p className="mt-8 text-sm opacity-80">{card.date}</p>
                </div>
              );
            }

            // Icon card variant
            return (
              <div key={index} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                <div className={`flex h-48 items-center justify-center p-8 ${card.bgColor}`}>
                  {card.Icon && <card.Icon />}
                </div>
                <div className="flex flex-grow flex-col justify-between p-6 text-gray-800">
                  <div>
                    <p className="text-sm font-medium opacity-80">{card.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight">{card.title}</h3>
                  </div>
                  <p className="mt-8 text-sm opacity-80">{card.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesGrid;