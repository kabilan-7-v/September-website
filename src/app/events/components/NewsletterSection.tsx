'use client';

import { Primary } from '@/constant/color';
import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: Primary }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 text-center">
          Get the developer newsletter
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">
            Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
          </p>
        </form>

        <div className="text-center pt-8 border-t border-gray-300">
          <p className="text-xl font-semibold mb-4 text-gray-900">
            Want to help us build the future of safe AI?
          </p>
          <Link 
            href="/careers"
            className="inline-block px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            See open roles
          </Link>
        </div>
      </div>
    </section>
  );
}
