import { lightbase, Primary } from '@/constant/color';
import Link from 'next/link';

interface NewsCard {
  category: string;
  title: string;
  date: string;
  link: string;
}

const newsItems: NewsCard[] = [
  {
    category: 'News',
    title: 'Advancing Claude for Financial Services',
    date: 'Oct 28, 2025',
    link: '/news/advancing-claude-financial-services'
  },
  {
    category: 'News',
    title: 'Seoul becomes Anthropic\'s third office in Asia-Pacific as we continue our international growth',
    date: 'Oct 24, 2025',
    link: '/news/seoul-office-asia-pacific'
  },
  {
    category: 'News',
    title: 'Expanding our use of Google Cloud TPUs and Services',
    date: 'Oct 24, 2025',
    link: '/news/google-cloud-tpus'
  }
];

export default function RelatedNews() {
  return (
    <section className="w-full  py-16 px-6" 
    
    style={{
      backgroundColor:lightbase
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Grid of news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link 
              key={index}
              href={item.link}
              className="group block"
            >
              <article className="bg-gray-50 rounded-lg p-8 h-full flex flex-col hover:bg-gray-100 transition-colors duration-200">
                {/* Category */}
                <span className="text-sm text-gray-600 mb-4 block">
                  {item.category}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex-grow group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                
                {/* Date */}
                <time className="text-sm text-gray-500 mt-auto">
                  {item.date}
                </time>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
