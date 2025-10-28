import Link from 'next/link';

interface NewsItem {
  category: string;
  title: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    category: 'Product',
    title: 'Claude Opus 4.1',
    link: '/news/claude-opus-4-1'
  },
  {
    category: 'Product',
    title: 'Claude for Financial Services',
    link: '/news/claude-for-financial-services'
  },
  {
    category: 'Product',
    title: 'Introducing the Max plan',
    link: '/news/max-plan'
  }
];

export default function WhatsNewSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
          What's new
        </h2>
        <Link 
          href="/news"
          className="text-lg font-medium text-gray-900 hover:underline"
        >
          View more news →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <Link 
            key={index}
            href={item.link}
            className="group block"
          >
            <div className="bg-gray-100 rounded-xl p-8 hover:bg-gray-200 transition-colors duration-200">
              <span className="text-sm text-gray-600 mb-3 block">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                {item.title}
              </h3>
              <div className="mt-6">
                <span className="text-sm font-medium text-gray-900 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
