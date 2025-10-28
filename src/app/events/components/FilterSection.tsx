'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

export default function FilterSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [format, setFormat] = useState('All');
  const [status, setStatus] = useState('All');
  const [eventType, setEventType] = useState('All');
  const [hasFilters, setHasFilters] = useState(false);

  const clearFilters = () => {
    setSearchQuery('');
    setFormat('All');
    setStatus('All');
    setEventType('All');
    setHasFilters(false);
  };

  return (
    <section id="events" className="mb-12 pb-8 border-b border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Filter</h3>
        {hasFilters && (
          <button 
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <X size={16} />
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setHasFilters(true);
            }}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Format */}
        <div>
          <select
            value={format}
            onChange={(e) => {
              setFormat(e.target.value);
              setHasFilters(e.target.value !== 'All');
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="All">Format: All</option>
            <option value="In-person">In-person</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setHasFilters(e.target.value !== 'All');
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="All">Status: All</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </div>

        {/* Event Type */}
        <div>
          <select
            value={eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              setHasFilters(e.target.value !== 'All');
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
          >
            <option value="All">Event type: All</option>
            <option value="Partner">Partner</option>
            <option value="Startup">Startup</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Anthropic">Anthropic</option>
          </select>
        </div>
      </div>
    </section>
  );
}
