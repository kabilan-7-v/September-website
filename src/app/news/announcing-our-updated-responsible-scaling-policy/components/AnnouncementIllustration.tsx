export default function AnnouncementIllustration() {
  return (
    <div className="w-full bg-[#E8DCC8] rounded-2xl p-12 md:p-16 lg:p-20 flex items-center justify-center min-h-[400px]">
      {/* Illustration Container */}
      <div className="relative w-full max-w-md">
        {/* SVG Illustration - Hand writing on document */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paper/Document */}
          <rect
            x="80"
            y="80"
            width="180"
            height="200"
            rx="4"
            fill="white"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          
          {/* Text lines on document */}
          <line x1="100" y1="100" x2="150" y2="100" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="120" x2="180" y2="120" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="140" x2="160" y2="140" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="160" x2="190" y2="160" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="180" x2="170" y2="180" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
          
          {/* Hand holding feather/quill */}
          {/* Hand/Arm */}
          <path
            d="M 220 200 Q 240 180 260 170 Q 270 165 280 165"
            stroke="#1a1a1a"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Fingers */}
          <ellipse cx="245" cy="185" rx="8" ry="12" fill="#1a1a1a" transform="rotate(-20 245 185)" />
          <ellipse cx="255" cy="175" rx="8" ry="12" fill="#1a1a1a" transform="rotate(-15 255 175)" />
          
          {/* Feather/Quill */}
          <path
            d="M 280 165 Q 300 145 310 120 Q 315 100 318 80"
            stroke="#1a1a1a"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Feather details */}
          <path d="M 285 155 L 295 145" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M 290 145 L 300 135" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M 295 135 L 305 120" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M 300 125 L 310 110" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M 305 115 L 313 100" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M 308 105 L 315 90" stroke="#1a1a1a" strokeWidth="1.5" />
          
          {/* Feather tip */}
          <ellipse cx="318" cy="75" rx="5" ry="8" fill="#1a1a1a" transform="rotate(15 318 75)" />
        </svg>
      </div>
    </div>
  );
}
