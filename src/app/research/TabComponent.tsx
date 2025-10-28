// /app/components/TabComponent.tsx

'use client';

import React, { useState } from 'react';
import ResearchPapersList from './Component/ResearchPapersList';
import ResearchSection from './Component/overview/ResearchSection';
import ResearchTeamsSection from './Component/overview/ResearchTeamsSection';
import { lightbase } from '@/constant/color';
import Videosection from './Component/Videosection';
import Headingsection from './Component/Headingsection';

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
<Headingsection
        heading="Interpretability"
        note="A surprising fact about modern large language models is that nobody really knows how they work internally. The Interpretability team strives to change that — to understand these models to better plan for a future of safe AI.."
        subheading1={<>Safety through <br /> understanding</>}
        para1="It's very challenging to reason about the safety of neural networks without understanding them. The Interpretability team’s goal is to be able to explain large language models’ behaviors in detail, and then use that to solve a variety of problems ranging from bias to misuse to autonomous harmful behavior."
        subheading2={<>Multidisciplinary <br /> approach</>}
        para2="Some Interpretability researchers have deep backgrounds in machine learning – one member of the team is often described as having started mechanistic interpretability, while another was on the famous scaling laws paper. Other members joined after careers in astronomy, physics, mathematics, biology, data visualization, and more.."
      />
        <ResearchTeamsSection />
        

        <ResearchPapersList />

       </div>
    ),
    Alignment: (
      <div>
        <Headingsection
        heading="Alignment"
        note="Future AI systems will be even more powerful than today’s, likely in ways that break key assumptions behind current safety techniques — that’s why it’s important to have the right safeguards in place to keep models helpful, honest, and harmless. The Alignment Science team works to understand the challenges ahead and create protocols to train, evaluate, and monitor highly-capable models safely."
        subheading1={<>Evaluation and <br /> oversight</>}
        para1="Alignment researchers validate that models are harmless and honest even under very different circumstances than those under which they were trained. They also develop methods to allow humans to collaborate with language models to verify claims that humans might not be able to on their own."
        subheading2={<>Stress-testing <br /> safeguards</>}
        para2="Alignment researchers also systematically look for situations in which models might behave badly, and check whether our existing safeguards are sufficient to deal with risks that human-level capabilities may bring."
      />
        <ResearchPapersList />

      </div>
    ),
    'Societal Impacts': (
      <div>
         <Headingsection
        heading="Societal Impacts"
        note="From examining election integrity risks to studying how AI systems might augment (rather than replace) humans, the Societal Impacts team uses tools from a variety of fields to enable positive relationships between AI and people."
        subheading1={<>Sociotechnical   <br /> alignment</>}
        para1="Alignment researchers validate that models are harmless and honest even under very different circumstances than those under which they were trained. They also develop methods to allow humans to collaborate with language models to verify claims that humans might not be able to on their own."
        subheading2={<>Policy relevance
 </>}
        para2="Alignment researchers also systematically look for situations in which models might behave badly, and check whether our existing safeguards are sufficient to deal with risks that human-level capabilities may bring."
      />
        <Videosection/>
        <ResearchPapersList />

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
      <nav className="flex   w-screen border-b border-gray-300 pb-3 fixed md:top-15 top-15 left-0 bg-stone-50 z-10 p-8">
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