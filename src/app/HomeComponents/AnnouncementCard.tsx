// A simple arrow icon component. You can place this in the same file or a separate one.
const ArrowIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);


const AnnouncementCard = () => {
  const links = [
    { text: 'Managing context on the Claude Developer Platform', href: '#' },
    { text: 'Enabling Claude Code to work more autonomously', href: '#' },
    { text: 'Model details', href: '#' },
  ];

  return (
    <div className="font-sans bg-[#E3DACC] p-8 sm:p-12 rounded-2xl m-8">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:gap-12">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between text-center md:w-2/5 md:text-left">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Claude Sonnet 4.5
            </h2>
            <p className="mt-4 text-lg text-gray-800">
              Introducing the best model in the world for agents, coding, and computer use.
            </p>
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#"
              className="w-fit transform rounded-full bg-black px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Read announcement
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-12 md:mt-0 md:w-3/5">
          <p className="text-sm font-medium text-gray-700">Learn more</p>
          <div className="mt-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center justify-between border-b border-gray-400 py-4 transition-colors hover:text-gray-600"
              >
                <span className="text-lg">{link.text}</span>
                <ArrowIcon className="h-5 w-5 text-gray-800 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AnnouncementCard;