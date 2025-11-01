"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[100] animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="rounded-2xl w-[100%] max-w-4xl flex flex-col sm:flex-row overflow-hidden relative">
        <div
          className="bg-[#663300] flex items-start justify-center  sm:w-1/2 relative"
          
        >
         <svg width="250" height="280" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="300" height="300" fill="#663300"/> <ellipse cx="37.5" cy="37.5" rx="15" ry="30" fill="#90B090"/>
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

        {/* Left Section (Ticket Colors) */}
        <div
          className="bg-white flex items-start justify-center p-8 sm:w-1/2 relative  border-black border-dotted border-r-2 text-left"
          style={{
            WebkitMask: `
              radial-gradient(circle 20px at top right  , transparent 99%, black 100%),
              radial-gradient(circle 20px at bottom right, transparent 99%, black 100%)
            `,
            WebkitMaskComposite: "destination-in",
            maskComposite: "include",
          }}
        >
<div className="flex flex-col items-center justify-center w-full">

          <h1
          className="md:text-4xl text-2xl font-bold text-gray-900 leading-tight mb-2 mt-8"
          >
            YOUR <br></br> TICKET <br></br> TO  
            <br></br>ARTCODE.
          </h1>
          </div>
         
        </div>

        {/* Dotted Divider */}

        {/* Right Section (Form) */}
        <div
          className="bg-white p-12 sm:w-1/2 relative"
          style={{
            WebkitMask: `
              radial-gradient(circle 20px at top left  , transparent 99%, black 100%),
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

          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
            Your Ticket<br />To ArtCode.
          </h2>

          <div className="border-t border-dashed my-4"></div>

          {!submitted ? (
            <>
              <h3 className="text-lg font-semibold text-gray-900">
                Join the waitlist.
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Be the first to know the moment we launch.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(`Email submitted: ${email}`);
                  setSubmitted(true);
                  setEmail("");
                  setTimeout(onClose, 2000); // auto-close after confirmation
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-400 focus:border-black outline-none py-1 bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition"
                >
                  ➜
                </button>
              </form>
            </>
          ) : (
            <div className="text-center mt-8">
              <p className="text-green-600 font-medium">You're on the list! 🎟️</p>
              <p className="text-sm text-gray-500 mt-1">We'll notify you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
