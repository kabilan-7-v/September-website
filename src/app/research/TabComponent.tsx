// /app/components/TabComponent.tsx

'use client';

import React, { useState } from 'react';
import ResearchPapersList from './Component/ResearchPapersList';
import ResearchSection from './Component/ResearchSection';
import ResearchTeamsSection from './Component/ResearchTeamsSection';
import { lightbase } from '@/constant/color';

// Define the type for our tab names for better type safety
type TabName = 'Overview' | 'Interpretability' | 'Alignment' | 'Societal Impacts';

const TabComponent = () => {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState<TabName>('Overview');

  const tabs: TabName[] = ['Overview', 'Interpretability', 'Alignment', 'Societal Impacts'];

  // Dummy content for each tab
  const contentMap: Record<TabName, React.ReactNode> = {
    Overview: (
      <div className=''>

        <ResearchSection />
        <ResearchTeamsSection />
        <ResearchPapersList />

      </div>
    ),
    Interpretability: (
      <div>
        <ResearchPapersList />

       </div>
    ),
    Alignment: (
      <div>
        <h2 className="text-2xl font-bold mb-3">Alignment</h2>
        <p className="mb-4 leading-relaxed">AI alignment is the process of ensuring that AI systems pursue goals that are aligned with human values and intentions. Here, we discuss the challenges and our approach to building safe and beneficial AI.</p>
        <p className="mb-4 leading-relaxed">Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.</p>
      </div>
    ),
    'Societal Impacts': (
      <div>
        <h2 className="text-2xl font-bold mb-3">Societal Impacts</h2>
        <p className="mb-4 leading-relaxed">This section examines the broader effects of this technology on society, including ethical considerations, potential biases, and economic implications. We aim for a responsible deployment that maximizes positive outcomes and mitigates risks.</p>
        <p className="mb-4 leading-relaxed">Vestibulum ac diam sit amet quam vehicula elementum. Sed sit amet dui. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.</p>
      </div>
    ),
  };


  return (
    <div className="w-full mt-28   font-sans bg-stone-50 p-4 sm:p-6"
      style={{
        backgroundColor: lightbase
      }}
    >
      {/* Tab Buttons */}
      <nav className="flex   w-screen border-b border-gray-300 pb-3 fixed md:top-20 top-15 left-0 bg-stone-50 z-10 p-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200
              ${activeTab === tab
                ? 'bg-black text-white border border-black'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content with Fixed Scroll */}
      <main className="  ">
        {contentMap[activeTab]}
      </main>

    </div>
  );
};

export default TabComponent;