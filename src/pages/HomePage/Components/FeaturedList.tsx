import Link from 'next/link';

// --- Data for the list ---
const featuredItems = [
  {
    title: 'Anthropic Economic Index',
    category: 'Societal impacts',
    date: 'Sep 15, 2025',
    href: '#',
  },
  {
    title: 'Claude Sonnet 4 with 1M context',
    category: 'Product',
    date: 'Aug 12, 2025',
    href: '#',
  },
  {
    title: 'Claude Opus 4.1',
    category: 'Announcements',
    date: 'Aug 05, 2025',
    href: '#',
  },
  {
    title: 'Project Vend',
    category: 'Policy',
    date: 'Jun 26, 2025',
    href: '#',
  },
  {
    title: 'Agentic Misalignment',
    category: 'Alignment',
    date: 'Jun 20, 2025',
    href: '#',
  },
  {
    title: 'Introducing Claude 4',
    category: 'Announcements',
    date: 'May 22, 2025',
    href: '#',
  },
  {
    title: 'Tracing the thoughts of a large language model',
    category: 'Interpretability',
    date: 'Mar 27, 2025',
    href: '#',
  },
];

// --- Main Component ---
const FeaturedList = () => {
  return (
    <section className="bg-[#F8F7F3] font-sans py-16 sm:py-20">
      <div className="container mx-auto  px-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured</h2>
        <div className="mt-8 border-t border-gray-300">
          {featuredItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block border-b border-gray-300 transition-colors hover:bg-gray-200/50"
            >
              <div className="grid grid-cols-2 items-center gap-4 px-2 py-5 sm:grid-cols-3">
                <p className="col-span-2 font-semibold text-gray-800 group-hover:text-black sm:col-span-1">
                  {item.title}
                </p>
                <p className="hidden text-gray-600 sm:block">{item.category}</p>
                <p className="text-right text-gray-600">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;