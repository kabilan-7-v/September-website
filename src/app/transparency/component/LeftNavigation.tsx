'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavSubsection {
  id: string;
  title: string;
  isRoute?: boolean;
  route?: string;
}

export interface NavSection {
  id: string;
  title: string;
  isRoute?: boolean;
  route?: string;
  subsections: NavSubsection[];
}

interface LeftNavigationProps {
  sections: NavSection[];
  activeSection: string;
  onNavigate: (sectionId: string, isRoute?: boolean, route?: string) => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  sections,
  activeSection,
  onNavigate,
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getSectionRoute = (sectionId: string) => {
    if (sectionId === '01') return '/transparency';
    if (sectionId === '02') return '/transparency/system-trust';
    if (sectionId === '03') return '/transparency/voluntary-commitments';
    return '/transparency';
  };

  // Determine which section's subsections to show based on current route
  const shouldShowSubsections = (sectionId: string) => {
    if (sectionId === '01' && pathname === '/transparency') return true;
    if (sectionId === '02' && pathname === '/transparency/system-trust') return true;
    if (sectionId === '03' && pathname === '/transparency/voluntary-commitments') return true;
    return false;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-300 rounded-md shadow-md"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <aside className={`
        fixed lg:sticky left-0 top-20 h-screen w-64 bg-[#FBF9F6] border-r border-gray-200 
        overflow-y-auto p-8 pt-8 flex-shrink-0 z-40 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      <nav className='flex flex-col items-start justify-start'>
        {sections.map((section) => (
          <div key={section.id} className="mb-8 ">
            {/* Section Number and Title - Clickable */}
            <Link 
              href={getSectionRoute(section.id)}
              className="flex items-start mb-4 cursor-pointer group"
            >
              <span className="font-mono text-sm text-gray-500 mr-3 mt-1 group-hover:text-gray-700">
                {section.id}
              </span>
              <h3 className="text-base font-semibold text-gray-900 group-hover:font-bold transition-all">
                {section.title}
              </h3>
            </Link>
            
            {/* Subsections - Only show for current page */}
            {shouldShowSubsections(section.id) && (
            <ul className="space-y-2 ml-0">
              {section.subsections.map((subsection) => {
                const isActive = subsection.isRoute 
                  ? pathname === subsection.route 
                  : activeSection === subsection.id;

                if (subsection.isRoute && subsection.route) {
                  return (
                    <li key={subsection.id}>
                      <Link
                        href={subsection.route}
                        className={`text-left text-sm transition-all block ${
                          isActive
                            ? 'font-bold text-black'
                            : 'font-normal text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {subsection.title}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={subsection.id}>
                    <button
                      onClick={() => onNavigate(subsection.id, subsection.isRoute, subsection.route)}
                      className={`text-left text-sm transition-all ${
                        isActive
                          ? 'font-bold text-black'
                          : 'font-normal text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {subsection.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
    </>
  );
};

export default LeftNavigation;
