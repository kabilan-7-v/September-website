export default function AnnouncementHero() {
  return (
    <div className="text-center mb-12">
      {/* Announcements Tag */}
      <div className="inline-flex items-center justify-center mb-8">
        <span className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
          Announcements
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-gray-900 max-w-4xl mx-auto">
        Announcing our updated Responsible Scaling Policy
      </h1>

      {/* Meta Information */}
      <div className="flex items-center justify-center gap-3 text-gray-600 mb-8">
        <span>Oct 15, 2024</span>
        <span>•</span>
        <span>7 min read</span>
      </div>

      {/* CTA Button */}
      <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
        Read the Responsible Scaling Policy
      </button>
    </div>
  );
}
