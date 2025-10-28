'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Event {
  title: string;
  date: string;
  description: string;
  featured?: boolean;
  link: string;
}

const events: Event[] = [
  {
    title: 'Claude for Financial Services',
    date: 'Jul 15, 2025',
    description: 'Experience Claude for Financial Services from anywhere.',
    featured: true,
    link: '/events/claude-for-financial-services'
  },
  {
    title: 'AWS re:Invent 2025',
    date: 'Dec 2-6, 2024',
    description: 'Join us at the annual AWS conference in Las Vegas.',
    link: '/events/aws-re-invent-2025'
  },
  {
    title: 'Tokyo Builder Summit',
    date: 'Nov 20, 2024',
    description: 'Meet the Anthropic team in Tokyo.',
    link: '/events/tokyo-builder-summit'
  }
];

export default function EventsGrid() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [sortBy, setSortBy] = useState('Date (Recent)');

  return (
    <section className="flex-1">
      {/* Header with View and Sort controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">
          Events
        </h2>
        
        <div className="flex items-center gap-3 sm:gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">View</span>
            <select 
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as 'list' | 'grid')}
              className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white cursor-pointer"
            >
              <option value="list">List</option>
              <option value="grid">Grid</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Sort</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white cursor-pointer"
            >
              <option>Date (Recent)</option>
              <option>Date (Oldest)</option>
              <option>Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {events.map((event, index) => (
          <Link 
            key={index}
            href={event.link}
            className="block group"
          >
            {event.featured ? (
              /* Featured Event Card */
              <div className="bg-gradient-to-br from-[#B8D4D4] to-[#A8C8C8] rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow duration-200 relative overflow-hidden min-h-[280px] flex items-center">
                <div className="relative z-10 max-w-lg">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    {event.date}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-800 mb-6">
                    {event.description}
                  </p>
                  <button className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                    Watch now
                  </button>
                </div>
                
                {/* Graph Illustration */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-48 opacity-60">
                  <svg viewBox="0 0 200 150" className="w-full h-full">
                    {/* Bar chart illustration */}
                    <rect x="20" y="90" width="30" height="50" fill="white" rx="2" />
                    <rect x="60" y="70" width="30" height="70" fill="white" rx="2" />
                    <rect x="100" y="50" width="30" height="90" fill="white" rx="2" />
                    <rect x="140" y="40" width="30" height="100" fill="white" rx="2" />
                    
                    {/* Growth arrow */}
                    <path d="M 10 130 Q 80 100, 180 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M 180 30 L 170 35 M 180 30 L 175 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ) : (
              /* Regular Event Card */
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                  {event.title}
                </h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
          Show more
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
}
