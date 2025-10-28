'use client';

import React, { useState, useEffect } from 'react';
import LeftNavigation from '../component/LeftNavigation';
import { navSections } from '../component/navConfig';
import { lightbase } from '@/constant/color';
import HeroSection from '../component/herosection';

export default function VoluntaryCommitmentsPage() {
  const [activeSection, setActiveSection] = useState('executive-summary');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'executive-summary',
        'risk-assessment',
        'cybersecurity-privacy',
        'public-awareness',
        'societal-impact',
        'system-safeguard',
        'image-based-abuse',
        'election-integrity',
        'terrorist-content',
        'list-commitments'
      ];
      
      // Find the current section based on scroll position
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionIds[i]);
            break;
          }
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
      <div className="max-w-[1440px]  mx-auto flex flex-col lg:flex-row">
        {/* Left Navigation Sidebar */}
        <LeftNavigation
          sections={navSections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 pt-8 w-full">
        {/* Executive Summary Section */}
        <section id="executive-summary" className="mb-20 scroll-mt-24">
          <div className="mb-4 text-sm text-gray-500">
            Last updated August 28, 2025
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif">Executive Summary</h1>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            Below is information about how we are meeting and working towards our <a href="#" className="underline">voluntary commitments</a>. Our experience with multiple voluntary frameworks has revealed consistent themes, as well as considerable overlap in their core requirements around safety, security, and responsible development. We are providing an overview organized by key areas of focus. We welcome feedback from the AI community and policymakers to inform our future work.
          </p>
        </section>

        {/* Risk Assessment Section */}
        <section id="risk-assessment" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Risk Assessment and Mitigation</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Responsible Scaling Policy</h3>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
              In September 2023, we published the first version of our <a href="#" className="underline">Responsible Scaling Policy</a> (RSP), our framework for managing potential catastrophic risks from models.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mt-4">
              The policy is centered around implementing safeguards which are proportionate to the identified risk. At each risk level, models are permitted if safety case meets certain requirements.
            </p>
          </div>
        </section>

        {/* Cybersecurity & Privacy Section */}
        <section id="cybersecurity-privacy" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Cybersecurity & Privacy</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We implement robust cybersecurity measures to protect our AI systems, training infrastructure, and user data. Our security practices include regular audits, penetration testing, and collaboration with security researchers. We are committed to protecting user privacy and ensuring that personal data is handled responsibly.
          </p>
        </section>

        {/* Public Awareness Section */}
        <section id="public-awareness" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Public Awareness</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We believe in transparent communication about AI capabilities and limitations. We work to educate the public about how AI systems work, their potential benefits and risks, and how to use them responsibly. This includes publishing research, engaging with media, and supporting educational initiatives.
          </p>
        </section>

        {/* Societal Impact Section */}
        <section id="societal-impact" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Societal Impact</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We actively assess and work to mitigate potential negative societal impacts of our AI systems. This includes studying effects on employment, education, inequality, and social dynamics. We engage with diverse stakeholders to understand different perspectives and incorporate them into our development process.
          </p>
        </section>

        {/* System Safeguard Commitments Section */}
        <section id="system-safeguard" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">System Safeguard Commitments</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            Our safeguard commitments include implementing content filtering, monitoring for misuse, and maintaining the ability to shut down or modify systems if necessary. We continuously improve these safeguards based on observed usage patterns and emerging risks.
          </p>
        </section>

        {/* Image-Based Sexual Abuse Section */}
        <section id="image-based-abuse" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Image-Based Sexual Abuse</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We have zero tolerance for image-based sexual abuse content. Our systems include robust filters and classifiers to detect and prevent the generation or manipulation of such content. We work with relevant authorities and organizations to combat this harmful use of AI technology.
          </p>
        </section>

        {/* Election Integrity Section */}
        <section id="election-integrity" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Election Integrity</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We are committed to protecting election integrity and preventing our AI systems from being used to spread misinformation or interfere with democratic processes. This includes implementing safeguards against deepfakes, coordinated campaigns, and other threats to electoral systems.
          </p>
        </section>

        {/* Terrorist and Violent Extremist Content Section */}
        <section id="terrorist-content" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">Terrorist and Violent Extremist Content</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
            We actively work to prevent our systems from being used to create or spread terrorist or violent extremist content. Our content policies explicitly prohibit such use, and we employ technical measures to detect and prevent it. We cooperate with law enforcement and relevant organizations to address these threats.
          </p>
        </section>

        {/* List of Voluntary Commitments Section */}
        <section id="list-commitments" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">List of Voluntary Commitments</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mb-6">
            Anthropic has made voluntary commitments through various frameworks and initiatives:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-3 max-w-3xl ml-4">
            <li>White House Voluntary Commitments on AI Safety and Security</li>
            <li>Partnership on AI Responsible Practices for Synthetic Media</li>
            <li>AI Safety Summit Commitments</li>
            <li>EU AI Act Voluntary Code of Conduct</li>
            <li>G7 Hiroshima AI Process</li>
          </ul>
        </section>
      </main>
      </div>
    </div>
    </div>
  );
}
