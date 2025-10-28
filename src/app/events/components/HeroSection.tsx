import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="mb-16">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif text-gray-900">
        Anthropic Events
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
        Discover Anthropic's upcoming events, watch livestreams, and access recordings from past conferences and webinars.
      </p>
      <Link 
        href="#events"
        className="inline-block px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
      >
        Browse all events
      </Link>
    </section>
  );
}
