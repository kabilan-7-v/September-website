'use client';

import { Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FilterSidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [formatExpanded, setFormatExpanded] = useState(false);
  const [statusExpanded, setStatusExpanded] = useState(false);
  const [eventTypeExpanded, setEventTypeExpanded] = useState(false);

  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<string[]>([]);

  const formatOptions = ['In-person', 'Virtual'];
  const statusOptions = ['Upcoming', 'Past'];
  const eventTypeOptions = ['Partner', 'Startup', 'Enterprise', 'Anthropic'];

  const toggleFilter = (value: string, selected: string[], setSelected: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Filter</h2>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Event name, date, location, etc."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Format */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <button
          onClick={() => setFormatExpanded(!formatExpanded)}
          className="w-full flex items-center justify-between text-left font-medium text-gray-900 py-2"
        >
          <span>Format</span>
          {formatExpanded ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        {formatExpanded && (
          <div className="mt-3 space-y-2">
            {formatOptions.map(option => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFormat.includes(option)}
                  onChange={() => toggleFilter(option, selectedFormat, setSelectedFormat)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Status */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <button
          onClick={() => setStatusExpanded(!statusExpanded)}
          className="w-full flex items-center justify-between text-left font-medium text-gray-900 py-2"
        >
          <span>Status</span>
          {statusExpanded ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        {statusExpanded && (
          <div className="mt-3 space-y-2">
            {statusOptions.map(option => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedStatus.includes(option)}
                  onChange={() => toggleFilter(option, selectedStatus, setSelectedStatus)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Event Type */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <button
          onClick={() => setEventTypeExpanded(!eventTypeExpanded)}
          className="w-full flex items-center justify-between text-left font-medium text-gray-900 py-2"
        >
          <span>Event type</span>
          {eventTypeExpanded ? <Minus size={18} /> : <Plus size={18} />}
        </button>
        {eventTypeExpanded && (
          <div className="mt-3 space-y-2">
            {eventTypeOptions.map(option => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedEventType.includes(option)}
                  onChange={() => toggleFilter(option, selectedEventType, setSelectedEventType)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
