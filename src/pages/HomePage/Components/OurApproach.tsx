// --- SVG Illustrations (as components) ---
const SafetyIcon = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 80 C 10 70, 15 50, 30 55" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M95 80 C 110 70, 105 50, 90 55" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 20 C 50 10, 70 10, 65 20 S 50 30, 60 30 S 70 30, 65 20 Z" stroke="black" strokeWidth="2" fill="#F8F7F3"/>
    <path d="M45 45 C 35 40, 75 40, 65 45 S 40 55, 60 55 S 80 55, 65 45 Z" stroke="black" strokeWidth="2" fill="#F8F7F3"/>
    <path d="M30 85 C 10 80, 80 80, 60 85 S 20 95, 55 95 S 90 95, 70 85 Z" stroke="black" strokeWidth="2" fill="#F8F7F3"/>
  </svg>
);

const ScalingIcon = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 60 C 20 50, 25 30, 40 35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M90 60 C 100 50, 95 30, 80 35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="40" y="20" width="40" height="15" fill="white" stroke="black" strokeWidth="2"/>
    <rect x="40" y="45" width="40" height="15" fill="white" stroke="black" strokeWidth="2"/>
    <rect x="40" y="70" width="40" height="15" fill="white" stroke="black" strokeWidth="2"/>
  </svg>
);

const AcademyIcon = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M30 85 H 90 V 70 H 75 V 55 H 45 V 70 H 30 V 85 Z" stroke="black" strokeWidth="2" fill="white"/>
     <path d="M40 55 H 80 V 40 H 65 V 25 H 55 V 40 H 40 V 55 Z" stroke="black" strokeWidth="2" fill="none"/>
  </svg>
);


// --- Data for the feature cards ---
const featureCards = [
  {
    title: 'Core Views on AI Safety',
    bgColor: 'bg-[#EAE1D9]',
    illustration: <SafetyIcon />,
  },
  {
    title: "Anthropic's Responsible Scaling Policy",
    bgColor: 'bg-[#D9E8E6]',
    illustration: <ScalingIcon />,
  },
  {
    title: 'Anthropic Academy: Learn to build with Claude',
    bgColor: 'bg-[#DBD9E8]',
    illustration: <AcademyIcon />,
  },
];


// --- Main Component ---
const OurApproach = () => {
  return (
    <section className="bg-[#F8F7F3] font-sans py-20 sm:py-24">
      <div className="container mx-auto max-w-8xl px-6">
        
        {/* Top text section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="pr-4">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              At Anthropic, we build AI to serve humanity's long-term well-being.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              While no one can foresee every outcome AI will have on society, we do know that designing
              powerful technologies requires both bold steps forward and intentional pauses to consider
              the effects.
            </p>
            <p>
              That’s why we focus on building tools with human benefit at their foundation, like Claude.
              Through our daily research, policy work, and product design, we aim to show what
              responsible AI development looks like in practice.
            </p>
          </div>
        </div>

        {/* Feature cards section */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className={`${card.bgColor} flex h-80 flex-col items-center justify-end rounded-2xl p-8 text-center transition-transform hover:-translate-y-2`}
            >
              <div className="flex-grow flex items-center justify-center">
                {card.illustration}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;