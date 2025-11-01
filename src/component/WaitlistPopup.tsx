"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    howDidYouHear: "",
    otherSource: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(onClose, 3000); // auto-close after confirmation
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[100] animate-fadeIn p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="rounded-2xl w-[100%] max-w-6xl flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Section with SVG Pattern */}
        <div
          className="bg-[#663300] flex items-center justify-center p-8 lg:w-2/5 min-h-[200px] lg:min-h-full relative"
        >
          <svg width="350" height="350" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="300" height="300" fill="#663300"/>
            <ellipse cx="37.5" cy="37.5" rx="15" ry="30" fill="#90B090"/>
            <ellipse cx="37.5" cy="97.5" rx="15" ry="30" fill="#CC7733"/>
            <ellipse cx="37.5" cy="157.5" rx="15" ry="30" fill="#90B090"/>
            <ellipse cx="37.5" cy="217.5" rx="15" ry="30" fill="#CC7733"/>
            <ellipse cx="37.5" cy="277.5" rx="15" ry="30" fill="#DDAA88"/>

            <ellipse cx="107.5" cy="37.5" rx="20" ry="30" fill="#669966"/>
            <ellipse cx="107.5" cy="97.5" rx="20" ry="30" fill="#F0C8A8"/>
            <ellipse cx="107.5" cy="157.5" rx="20" ry="30" fill="#DDAA88"/>
            <ellipse cx="107.5" cy="217.5" rx="20" ry="30" fill="#E8D8B8"/>
            <ellipse cx="107.5" cy="277.5" rx="20" ry="30" fill="#DDAA88"/>

            <circle cx="180" cy="45" r="30" fill="#669966"/>
            <circle cx="180" cy="105" r="30" fill="#B0C8A0"/>
            <circle cx="180" cy="165" r="30" fill="#F0C8A8"/>
            <circle cx="180" cy="225" r="30" fill="#B0C8A0"/>
            <circle cx="180" cy="285" r="30" fill="#66B0C8"/>

            <circle cx="255" cy="45" r="30" fill="#448866"/>
            <circle cx="255" cy="105" r="30" fill="#77BBAA"/>
            <circle cx="255" cy="165" r="30" fill="#C8D8B8"/>
            <circle cx="255" cy="225" r="30" fill="#CC7733"/>
            <circle cx="255" cy="285" r="30" fill="#CC7733"/>
          </svg>
        </div>

        {/* Middle Section - Ticket Header */}
        <div
          className="bg-white flex items-center justify-center p-8 lg:w-1/4 relative border-black border-dotted lg:border-r-2 text-left"
          style={{
            WebkitMask: `
              radial-gradient(circle 20px at top right, transparent 99%, black 100%),
              radial-gradient(circle 20px at bottom right, transparent 99%, black 100%)
            `,
            WebkitMaskComposite: "destination-in",
            maskComposite: "include",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              YOUR <br /> TICKET <br /> TO <br /> ARTCODE.
            </h1>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          className="bg-white p-8 lg:p-12 lg:w-2/5 relative"
          style={{
            WebkitMask: `
              radial-gradient(circle 20px at top left, transparent 99%, black 100%),
              radial-gradient(circle 20px at bottom left, transparent 99%, black 100%)
            `,
            WebkitMaskComposite: "destination-in",
            maskComposite: "include",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            aria-label="Close popup"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
           Get early access
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Be the first to know when we launch.
          </p>

          <div className="border-t border-dashed my-4"></div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent transition-colors"
                />
              </div>

              {/* Interest Dropdown */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent cursor-pointer transition-colors"
                >
                  <option value="">Select your interest</option>
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              {/* How did you hear about us */}
              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? *
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  required
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent cursor-pointer transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="facebook">Social Media - Facebook</option>
                  <option value="twitter">Social Media - X (Twitter)</option>
                  <option value="instagram">Social Media - Instagram</option>
                  <option value="linkedin">Social Media - LinkedIn</option>
                  <option value="google">Online Search - Google</option>
                  <option value="bing">Online Search - Bing</option>
                  <option value="referral">Referral from a Friend or Colleague</option>
                  <option value="blog">Tech Blog or News Article</option>
                  <option value="google_ad">Online Ads - Google Ad</option>
                  <option value="facebook_ad">Online Ads - Facebook Ad</option>
                  <option value="other_ad">Online Ads - Others</option>
                  <option value="reddit">Community or Forum - Reddit</option>
                  <option value="discord">Community or Forum - Discord</option>
                  <option value="others">Others (please specify)</option>
                </select>
              </div>

              {/* Other Source Text Field - Only shows when "others" is selected */}
              {formData.howDidYouHear === "others" && (
                <div>
                  <label htmlFor="otherSource" className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify *
                  </label>
                  <input
                    type="text"
                    id="otherSource"
                    name="otherSource"
                    required={formData.howDidYouHear === "others"}
                    value={formData.otherSource}
                    onChange={handleInputChange}
                    placeholder="Tell us more..."
                    className="w-full border-b border-gray-400 focus:border-black outline-none py-2 bg-transparent transition-colors"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 px-6 hover:bg-gray-800 transition-colors mt-6 font-medium"
              >
                Join Waitlist →
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4">
                <span className="text-5xl">🎟️</span>
              </div>
              <p className="text-green-600 font-semibold text-lg mb-2">You're on the list!</p>
              <p className="text-sm text-gray-600">
                Thank you for your interest, {formData.name}! <br />
                We'll notify you at {formData.email} as soon as we launch.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}