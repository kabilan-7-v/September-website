'use client';

import React, { useState, useEffect } from 'react';
import LeftNavigation from './LeftNavigation';
import { navSections } from './navConfig';

/**
 * The main component for the "Transparency Hub" page with left navigation.
 */
const TransparencyHub = () => {
  const [activeSection, setActiveSection] = useState('model-report');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.flatMap(section => section.subsections);
      
      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in view (with some offset from top)
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#FBF9F6]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        {/* Left Navigation Sidebar */}
        <LeftNavigation
          sections={navSections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 pt-8 w-full ">
        {/* Model Report Section */}
        <section id="model-report" className="mb-20 scroll-mt-24">
          <div className="mb-4 text-sm text-gray-500">
            Last updated October 22, 2025
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif">Model Report</h1>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-3xl">
            Select a model to see a summary that provides quick access to essential information about Claude models, condensing key details about the models' capabilities, safety evaluations, and deployment safeguards. We've distilled comprehensive technical assessments into accessible highlights to provide clear understanding of how the models function, what they can do, and how we're addressing potential risks.
          </p>
          
          {/* Example content card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Model report for Claude Haiku 4.5</h2>
            
            <div className="bg-white rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold mb-4">Claude Haiku 4.5 Summary Table</h3>
              
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-semibold">Model description</div>
                  <div className="col-span-2">Claude Haiku 4.5 is our new hybrid reasoning large language model in our small, fast model class.</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-semibold">Benchmarked Capabilities</div>
                  <div className="col-span-2">See our <a href="#" className="text-orange-600 hover:underline">Claude Haiku 4.5 announcement</a></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-semibold">Acceptable Uses</div>
                  <div className="col-span-2">See our <a href="#" className="text-orange-600 hover:underline">Usage Policy</a></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-semibold">Release date</div>
                  <div className="col-span-2">October 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agentic Safety Section */}
        <section id="agentic-safety" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Agentic Safety and Malicious Use</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We conduct comprehensive evaluations to assess potential risks related to agentic capabilities and malicious use scenarios. Our testing framework examines how models perform in autonomous agent contexts and their resistance to misuse attempts.
            We conduct comprehensive evaluations to assess potential risks related to agentic capabilities and malicious use scenarios. Our testing framework examines how models perform in autonomous agent contexts and their resistance to misuse attempts.
            We conduct comprehensive evaluations to assess potential risks related to agentic capabilities and malicious use scenarios. Our testing framework examines how models perform in autonomous agent contexts and their resistance to misuse attempts.
            We conduct comprehensive evaluations to assess potential risks related to agentic capabilities and malicious use scenarios. Our testing framework examines how models perform in autonomous agent contexts and their resistance to misuse attempts.
          </p>
        </section>

        {/* Automated Audits Section */}
        <section id="automated-audits" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Automated Behavioral Audits</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
            Our automated behavioral auditing system continuously monitors model outputs for unexpected behaviors, safety concerns, and alignment issues. This allows us to detect and address potential problems at scale.
          </p>
        </section>

        {/* RSP Evaluations Section */}
        <section id="rsp-evaluations" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">RSP Evaluations</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model.
            Our Responsible Scaling Policy (RSP) evaluations assess catastrophic risk capabilities across multiple threat categories. These evaluations help us determine appropriate safety measures and deployment decisions for each model
          </p>
        </section>
      </main>
      </div>
    </div>
  );
};

export default TransparencyHub;