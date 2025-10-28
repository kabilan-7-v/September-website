// /app/components/ResearchTeamsSection.tsx

import React from 'react';

// Data for the research teams. This could be fetched from a CMS.
const teams = [
  {
    title: 'Interpretability',
    description: 'The mission of the Interpretability team is to discover and understand how large language models work internally — the foundation of ensuring safety and positive outcomes.',
  },
  {
    title: 'Alignment',
    description: 'The Alignment teams works to understand and develop ways to keep future advancements in AI helpful, honest, and harmless.',
  },
  {
    title: 'Societal Impacts',
    description: 'Working closely with the Anthropic Policy and Trust & Safety teams, the Societal Impacts team is a technical research team that looks to ensure AI interacts positively with people.',
  },
];

const ResearchTeamsSection = () => {
  return (
    <section className="font-sans  bg-[#FBFBFB] py-16 sm:py-24 px-6 sm:px-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-16">
          
          {/* Left Column: Main Title */}
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900">
              Research teams
            </h2>
          </div>

          {/* Right Column: Team Details */}
          <div className="lg:col-span-3 space-y-12">
            {teams.map((team) => (
              <div key={team.title}>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {team.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {team.description}
                </p>
                <a 
                  href="#" 
                  className="inline-block px-6 py-2 border border-gray-400 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-b border-gray-300 mt-16 sm:mt-24"></div>
      </div>
    </section>
  );
};

export default ResearchTeamsSection;