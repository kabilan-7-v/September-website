import { lightbase, Primary } from '@/constant/color';
import { Linkedin } from 'lucide-react';

export default function FootnotesSection() {
  return (
    <section className="max-w-8xl mx-auto py-12 space-y-8 p-8" 
    style={{
        backgroundColor:Primary
    }}
    >
      {/* Footnotes Heading */}
      <h3 className="text-2xl font-bold text-gray-900">Footnotes</h3>
      
      {/* Footnote Content */}
      <div className="space-y-4">
        <p className="text-sm text-gray-700 italic leading-relaxed">
          <sup>1</sup> We have also shared our assessment methodology with both AI Safety Institutes, as well as a selection of independent experts and organizations, for feedback. This does not represent an endorsement from either AI Safety Institute or the independent experts and organizations.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Social Media Icons */}
      <div className="flex gap-4">
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Share on X (Twitter)"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
}
