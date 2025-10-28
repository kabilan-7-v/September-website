import { Primary } from '@/constant/color';
import Link from 'next/link';
import { Play } from 'lucide-react';

interface Webinar {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const webinars: Webinar[] = [
  {
    title: 'Scaling AI agent development at Netflix',
    description: 'Learn how Netflix uses Claude to build and scale AI agents.',
    thumbnail: '/webinars/netflix.jpg',
    link: '/webinars/scaling-ai-agent-development-at-netflix'
  },
  {
    title: 'Deloitte code modernization',
    description: 'Discover how Deloitte modernizes code with Claude.',
    thumbnail: '/webinars/deloitte.jpg',
    link: '/webinars/Deloitte-code-modernization'
  },
  {
    title: 'Claude for Financial Services',
    description: 'Explore Claude solutions for the financial industry.',
    thumbnail: '/webinars/financial.jpg',
    link: '/webinars/claude-for-financial-services'
  },
  {
    title: 'Claude for Life Sciences',
    description: 'See how Claude accelerates life sciences research.',
    thumbnail: '/webinars/life-sciences.jpg',
    link: '/webinars/claude-for-life-sciences'
  }
];

export default function WebinarsSection() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: Primary }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif text-gray-900">
          Webinars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {webinars.map((webinar, index) => (
            <Link 
              key={index}
              href={webinar.link}
              className="group block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <Play className="relative z-10 text-white" size={48} />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {webinar.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {webinar.description}
                </p>
                <span className="text-sm font-medium text-gray-900 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors bg-white">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
