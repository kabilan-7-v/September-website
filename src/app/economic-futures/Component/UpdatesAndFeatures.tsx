// components/UpdatesAndFeatures.tsx
import React from 'react';
const GraphIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 48L27.5556 34.6667L39.1111 40.4444L52 22" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="48" r="3" fill="#374151"/>
    <circle cx="27.5" cy="34.5" r="3" fill="#374151"/>
    <circle cx="39" cy="40" r="3" fill="#374151"/>
    <circle cx="52" cy="22" r="3" fill="#374151"/>
  </svg>
);

const GridIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="21" y="21" width="22" height="22" rx="2" stroke="#374151" strokeWidth="2"/>
    <rect x="25" y="25" width="6" height="6" fill="#374151"/>
    <rect x="33" y="25" width="6" height="6" fill="#374151"/>
    <rect x="25" y="33" width="6" height="6" fill="#374151"/>
    <rect x="33" y="33" width="6" height="6" fill="#374151"/>
    <path d="M43 21V17H47" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="47" y="17" width="4" height="4" fill="#374151"/>
  </svg>
);

const LockIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="30" width="28" height="20" rx="4" stroke="#374151" strokeWidth="2"/>
    <path d="M24 30V22C24 17.5817 27.5817 14 32 14C36.4183 14 40 17.5817 40 22V30" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="40" r="2" stroke="#374151" strokeWidth="2"/>
    <path d="M32 42V44" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// --- Data for the component ---
const latestUpdates = [
  { title: 'Uneven geographic and enterprise AI adoption', type: 'Research', date: 'Sep 15, 2025' },
  { title: "AI's impact on software development", type: 'Research', date: 'Apr 28, 2025' },
  { title: 'Insights from Claude Sonnet 3.7', type: 'Research', date: 'Mar 27, 2025' },
  { title: 'Data release 2 (Hugging Face)', type: 'Dataset', date: 'Mar 27, 2025' },
  { title: 'Introducing the Anthropic Economic Index', type: 'Research', date: 'Feb 10, 2025' },
  { title: 'Data release 1 (Hugging Face)', type: 'Dataset', date: 'Feb 10, 2025' },
];

const features = [
  {
    Icon: GraphIcon,
    title: 'Measuring trends over time',
    description: 'We will publish regular updates and reports that track AI usage trends, refining our approach based on feedback from the research and policy communities.',
    buttonText: 'Explore the data',
  },
  {
    Icon: GridIcon,
    title: 'Collaborating with outside experts',
    description: 'We aim to collaborate with a wide range of experts, including economists and policy professionals, on this initiative.',
    buttonText: 'Share feedback',
  },
  {
    Icon: LockIcon,
    title: 'Preserving privacy',
    description: 'The Anthropic Economic Index is made possible by Clio, a system that allows us to analyze conversations with Claude while preserving user privacy.',
    buttonText: 'Read about Clio',
  },
];

// --- SVG Icon Components (included in the same file for simplicity) ---


// --- Main Component ---
const UpdatesAndFeatures = () => {
  return (
    <section className="bg-[#fdfdfc] py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Latest Updates Section */}
        <div className="mb-24">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Latest Updates</h2>
          <ul className="border-t border-gray-200">
            {latestUpdates.map((update, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 py-4"
              >
                <span className="text-base text-gray-800 font-medium">{update.title}</span>
                <div className="flex items-center gap-x-8 text-sm text-gray-500 w-full sm:w-auto">
                  <span className="flex-1 sm:flex-none">{update.type}</span>
                  <span className="text-right sm:text-left">{update.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <div className="mb-4 h-16 w-16">
                <feature.Icon />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              <button className="mt-auto rounded-lg border border-gray-400 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpdatesAndFeatures;