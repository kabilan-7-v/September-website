import React from "react";

export type TestProps = {
  className?: string;
};

const Test: React.FC<TestProps> = ({ className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Hero */}
        <div className="pt-20 md:pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#141413]">Anthropic Events</h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover Anthropic's upcoming events, watch livestreams, and access
            recordings from past conferences and webinars.
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center rounded-full bg-black px-5 py-2 text-white text-sm font-medium hover:opacity-90 transition">
              Browse all events
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar Filters */}
          <aside className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">Filter</h3>
            <div className="mt-4 space-y-6">
              <div>
                <label className="text-sm text-gray-600">Search</label>
                <input
                  type="text"
                  placeholder="Event name, date, location, etc."
                  className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <button className="w-full flex items-center justify-between border-t pt-4 text-left text-sm">
                <span>Format</span>
                <span className="text-xl">+</span>
              </button>
              <button className="w-full flex items-center justify-between border-t pt-4 text-left text-sm">
                <span>Status</span>
                <span className="text-xl">+</span>
              </button>
              <button className="w-full flex items-center justify-between border-t pt-4 text-left text-sm">
                <span>Event type</span>
                <span className="text-xl">+</span>
              </button>
            </div>
          </aside>

          {/* Main Column */}
          <div>
            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">Events</h2>
              <div className="flex items-center gap-3 self-start md:self-auto">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">View</span>
                  <button className="rounded-lg border border-gray-200 px-3 py-1">List</button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Sort</span>
                  <button className="rounded-lg border border-gray-200 px-3 py-1 flex items-center gap-2">
                    <span>Date (Recent)</span>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Event Card */}
            <div className="mt-8 rounded-2xl bg-[#C7DAD3] text-[#141413] p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-700">Jul 15, 2025</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-snug">Claude for Financial Services</h3>
                  <p className="mt-2 text-gray-700 max-w-xl">Experience Claude for Financial Services from anywhere.</p>
                  <button className="mt-4 inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">Watch now</button>
                </div>
                <div className="md:w-64 lg:w-72 h-32 md:h-40 rounded-xl bg-[#AFC6BE] flex items-center justify-center">
                  <svg viewBox="0 0 120 80" className="w-24 h-16 text-[#141413]" fill="none" stroke="currentColor" strokeWidth="6">
                    <path d="M8 72c12-30 24-30 36 0 12-30 24-30 36 0 12-30 24-30 36 0" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
