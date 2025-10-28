'use client';

import React, { useState, useEffect } from 'react';
import LeftNavigation from '../component/LeftNavigation';
import { navSections } from '../component/navConfig';
import { lightbase } from '@/constant/color';
import HeroSection from '../component/herosection';

export default function SystemTrustPage() {
  const [activeSection, setActiveSection] = useState('system-trust');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('system-trust');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection('system-trust');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
    style={{
        backgroundColor: lightbase
      }}
    >
    <div className="flex flex-col justify-center items-center "
      style={{
        backgroundColor: lightbase
      }}
    >
      <HeroSection />
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        {/* Left Navigation Sidebar */}
        <LeftNavigation
          sections={navSections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 pt-8 w-full">
        {/* System Trust Section */}
        <section id="system-trust" className="mb-20 scroll-mt-24">
          <div className="mb-4 text-sm text-gray-500">
            Last updated October 22, 2025
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif">System Trust and Reporting</h1>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mb-8">
            We maintain robust systems for trust and safety reporting, including mechanisms for users to report concerning outputs and transparent processes for addressing safety incidents. Our commitment to accountability drives continuous improvement in our safety practices.
          </p>

          {/* Content sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-serif">Trust & Safety Infrastructure</h2>
              <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
                Our trust and safety infrastructure is designed to detect, prevent, and respond to potential misuse of our AI systems. We employ a multi-layered approach that combines automated monitoring, human review, and community reporting mechanisms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-serif">Reporting Mechanisms</h2>
              <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
                Users can report concerning outputs or behaviors through multiple channels. Each report is reviewed by our trust and safety team, and we take appropriate action based on our policies and guidelines. We maintain transparency about our decision-making processes while protecting user privacy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-serif">Incident Response</h2>
              <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
                When safety incidents occur, we have established protocols for rapid response, investigation, and remediation. We document lessons learned and use them to improve our systems and processes. Our incident response framework is regularly tested and updated.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-serif">Transparency Reports</h2>
              <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
                We publish regular transparency reports detailing our trust and safety activities, including the volume and types of reports received, actions taken, and improvements made to our systems. These reports help stakeholders understand our approach and hold us accountable.
              </p>
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>
    </div>
  );
}
