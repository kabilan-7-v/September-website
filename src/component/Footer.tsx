import Link from 'next/link';

// --- DATA CONFIGURATION ---
const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'Claude', href: '#' }, { name: 'Claude Code', href: '#' },
      { name: 'Max plan', href: '#' }, { name: 'Team plan', href: '#' },
      { name: 'Enterprise plan', href: '#' }, { name: 'Download apps', href: '#' },
      { name: 'Pricing', href: '#' }, { name: 'Log in to Claude', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AI agents', href: '#' }, { name: 'Code modernization', href: '#' },
      { name: 'Coding', href: '#' }, { name: 'Customer support', href: '#' },
      { name: 'Education', href: '#' }, { name: 'Financial services', href: '#' },
      { name: 'Government', href: '#' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'Courses', href: '#' }, { name: 'Connectors', href: '#' },
      { name: 'Customer stories', href: '#' }, { name: 'Engineering at Anthropic', href: '#' },
      { name: 'Events', href: '#' }, { name: 'Powered by Claude', href: '#' },
      { name: 'Service partners', href: '#' }, { name: 'Startups program', href: '#' },
    ],
  },
  {
    title: 'Help and security',
    links: [
      { name: 'Availability', href: '#' }, { name: 'Status', href: '#' },
      { name: 'Support center', href: '#' },
    ],
  },
  {
    title: 'Models',
    links: [{ name: 'Opus', href: '#' }, { name: 'Sonnet', href: '#' }, { name: 'Haiku', href: '#' }],
  },
  {
    title: 'Claude Developer Platform',
    links: [
      { name: 'Overview', href: '#' }, { name: 'Developer docs', href: '#' },
      { name: 'Pricing', href: '#' }, { name: 'Amazon Bedrock', href: '#' },
      { name: 'Google Cloud\'s Vertex AI', href: '#' }, { name: 'Console login', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Anthropic', href: '#' }, { name: 'Careers', href: '#' },
      { name: 'Economic Futures', href: '#' }, { name: 'Research', href: '#' },
      { name: 'News', href: '#' }, { name: 'Responsible Scaling Policy', href: '#' },
      { name: 'Security and compliance', href: '#' }, { name: 'Transparency', href: '#' },
    ],
  },
  {
    title: 'Terms and policies',
    links: [
      { name: 'Privacy choices', href: '#' }, { name: 'Privacy policy', href: '#' },
      { name: 'Responsible disclosure policy', href: '#' }, { name: 'Terms of service: Commercial', href: '#' },
      { name: 'Terms of service: Consumer', href: '#' }, { name: 'Usage policy', href: '#' },
    ],
  },
];

// --- ICON COMPONENTS ---
const Logo = () => (
  <svg height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7826 18.3478H17.2174L23.4435 7.02609L20.2348 1.87826H7.13043L3.92174 7.02609H9.98261L7.13043 12.1739H12.7826L9.98261 18.3478H3.92174L0.713043 23.5H20.2348L23.4435 18.3478H12.7826Z" />
  </svg>
);
const LinkedInIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> );
const XIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.212 3.763 4.649-.69.188-1.432.233-2.194.084.616 1.92 2.388 3.322 4.492 3.36-1.716 1.34-3.873 2.122-6.22 2.122-.414 0-.82-.024-1.22-.074 2.119 1.369 4.649 2.162 7.34 2.162 8.807 0 13.625-7.296 13.625-13.625 0-.207-.005-.414-.015-.62a9.695 9.695 0 0 0 2.36-2.45z"/></svg> );
const YouTubeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> );


// --- MAIN FOOTER COMPONENT ---
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="container mx-auto px-6 py-16 max-w-8xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {/* Logo */}
          <div className="col-span-full mb-4 lg:col-span-1">
            <Link href="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Spacer divs to align the columns correctly. Adjust as needed. */}
          <div className="hidden xl:block"></div>

          {/* Link Sections */}
          {footerSections.slice(0, 2).map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {footerSections.slice(2, 4).map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
           <div className="col-span-full mt-4 grid grid-cols-2 gap-x-8 gap-y-12 sm:col-span-4 sm:grid-cols-4 lg:col-span-5 lg:col-start-2 xl:col-span-6 xl:col-start-2">
            {footerSections.slice(4).map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white">{section.title}</h4>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center border-t border-gray-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm">&copy; 2025 Anthropic PBC</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors"><LinkedInIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><XIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><YouTubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;