import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 font-serif text-gray-900">
          Join the team<br />making AI safe
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
          We're a public benefit corporation headquartered in San Francisco. Our team's experience spans a variety of backgrounds and disciplines, from physics and machine learning to public policy and business. We work as a cohesive team that collectively forecasts the impact and tractability of research ideas in advancing our mission.
        </p>

        <Link 
          href="/jobs"
          className="inline-block px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg"
        >
          See open roles
        </Link>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-lg text-gray-600 italic">
            Our co-founders discuss the origins of Anthropic, the "race to the top" in AI development, and where AI technology will go from here.
          </p>
        </div>
      </div>
    </section>
  );
}
