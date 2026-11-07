import React from 'react';

export default function HijabiPortrait({ className = "w-full max-w-[420px]" }) {
  return (
    <div className={`relative ${className} select-none`}>
      {/* Subtle organic decorative background rings */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#73224B]/20 via-[#E8B4C4]/25 to-[#CBA266]/20 rounded-[2.5rem] blur-xl -z-10 transform -rotate-2" />
      <div className="absolute -inset-1 border border-[#E8D4C8] rounded-[2.2rem] -z-10 transform rotate-1 bg-gradient-to-br from-[#FFFDF9] to-[#F7EFE8]" />

      {/* Main card container */}
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FAF5F0] to-[#F4E9E2] border border-[#E8D9CD] shadow-2xl p-3 sm:p-4">
        {/* Floating tech badges */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8D9CD] shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-[#5A193B]">Open to Roles 2026/27</span>
        </div>

        <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8D9CD] shadow-md flex items-center gap-1.5">
          <span className="text-[#CBA266] text-xs">★</span>
          <span className="text-xs font-medium text-[#2D3136]">SIH Winner '26</span>
        </div>

        {/* SVG Illustration of an elegant young hijabi professional woman */}
        <div className="relative w-full aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-gradient-to-b from-[#F2E8DF] via-[#E8D9CC] to-[#DFCBBF] flex items-center justify-center">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-full object-cover"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Background gradient */}
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9F4EE" />
                <stop offset="50%" stopColor="#EDE1D4" />
                <stop offset="100%" stopColor="#DDCABA" />
              </linearGradient>

              {/* Hijab Plum Gradient */}
              <linearGradient id="hijabPlum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B224E" />
                <stop offset="45%" stopColor="#5E163B" />
                <stop offset="100%" stopColor="#430C28" />
              </linearGradient>

              {/* Hijab Highlight */}
              <linearGradient id="hijabHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9B3A68" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5E163B" stopOpacity="0.1" />
              </linearGradient>

              {/* Blazer Deep Charcoal */}
              <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E3138" />
                <stop offset="60%" stopColor="#202227" />
                <stop offset="100%" stopColor="#16181B" />
              </linearGradient>

              {/* Blouse Cream / Gold */}
              <linearGradient id="blouseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF8" />
                <stop offset="100%" stopColor="#F4E8D3" />
              </linearGradient>

              {/* Skin Tone - Warm South Asian / Indian Natural Medium */}
              <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E5B293" />
                <stop offset="100%" stopColor="#D79E7D" />
              </linearGradient>

              {/* Gold Accent */}
              <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5C178" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B38927" />
              </linearGradient>

              {/* Soft Shadow */}
              <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3F1227" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Background Arch & Elements */}
            <rect width="400" height="500" fill="url(#bgGrad)" />
            
            {/* Subtle decorative geometric tech nodes */}
            <circle cx="60" cy="80" r="3" fill="#CBA266" opacity="0.6" />
            <circle cx="100" cy="60" r="2" fill="#73224B" opacity="0.4" />
            <line x1="60" y1="80" x2="100" y2="60" stroke="#CBA266" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
            
            <circle cx="340" cy="110" r="3" fill="#73224B" opacity="0.5" />
            <circle cx="310" cy="140" r="2" fill="#CBA266" opacity="0.5" />
            <line x1="340" y1="110" x2="310" y2="140" stroke="#73224B" strokeWidth="0.8" opacity="0.3" />

            {/* Large architectural halo arch */}
            <path
              d="M 70 500 L 70 200 Q 70 80 200 80 Q 330 80 330 200 L 330 500 Z"
              fill="#F4ECE2"
              opacity="0.8"
            />
            <path
              d="M 85 500 L 85 205 Q 85 95 200 95 Q 315 95 315 205 L 315 500 Z"
              fill="none"
              stroke="#E2D4C3"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Person Silhouette & Portrait */}
            <g id="professional-hijabi-portrait" filter="url(#softShadow)">
              {/* Shoulders / Formal Suit Jacket (Navy/Dark Charcoal) */}
              <path
                d="M 60 500 L 80 400 Q 110 350 150 335 L 200 365 L 250 335 Q 290 350 320 400 L 340 500 Z"
                fill="url(#blazerGrad)"
              />

              {/* Blazer Lapels */}
              <path
                d="M 140 340 L 175 425 L 200 425 L 180 365 Z"
                fill="#25272D"
              />
              <path
                d="M 260 340 L 225 425 L 200 425 L 220 365 Z"
                fill="#25272D"
              />

              {/* Formal Inner Silk Blouse (Warm Cream / Champagne) */}
              <polygon
                points="175,425 200,365 225,425 210,480 190,480"
                fill="url(#blouseGrad)"
              />

              {/* Small Minimalist Gold Lapel Pin / Data Node */}
              <circle cx="152" cy="385" r="4.5" fill="url(#goldAcc)" />
              <circle cx="152" cy="385" r="2" fill="#5A193B" />

              {/* Hijab - Under-layer/Drape over Chest */}
              <path
                d="M 135 270 Q 200 340 265 270 Q 245 350 200 370 Q 155 350 135 270 Z"
                fill="url(#hijabPlum)"
                opacity="0.95"
              />

              {/* Neck Shadow under chin */}
              <ellipse cx="200" cy="245" rx="35" ry="25" fill="#C58D6D" opacity="0.4" />

              {/* Face Shape */}
              <path
                d="M 152 185 Q 152 265 200 270 Q 248 265 248 185 Q 248 140 200 140 Q 152 140 152 185 Z"
                fill="url(#skinTone)"
              />

              {/* Hijab Cap (Inner underscarf) - subtle champagne/plum border */}
              <path
                d="M 155 160 Q 200 145 245 160 Q 240 150 200 144 Q 160 150 155 160 Z"
                fill="#A64B74"
              />

              {/* Main Modest Hijab Wrap (Crown, Sides, and Drapes) */}
              <path
                d="M 130 180 
                   Q 125 110 200 100 
                   Q 275 110 270 180 
                   Q 270 240 252 280 
                   Q 235 320 200 330 
                   Q 165 320 148 280 
                   Q 130 240 130 180 Z"
                fill="url(#hijabPlum)"
              />

              {/* Hijab Inner Frame revealing face elegantly */}
              <path
                d="M 152 165 
                   Q 200 150 248 165 
                   Q 252 210 238 245 
                   Q 200 278 162 245 
                   Q 148 210 152 165 Z"
                fill="url(#skinTone)"
              />

              {/* Hijab Fold Highlights & Creases */}
              <path
                d="M 130 170 Q 155 130 200 125 Q 245 130 270 170"
                fill="none"
                stroke="url(#hijabHighlight)"
                strokeWidth="5"
                opacity="0.6"
              />
              <path
                d="M 136 210 Q 148 250 170 295"
                fill="none"
                stroke="#430C28"
                strokeWidth="2.5"
                opacity="0.7"
              />
              <path
                d="M 264 210 Q 252 250 230 295"
                fill="none"
                stroke="#430C28"
                strokeWidth="2.5"
                opacity="0.7"
              />
              <path
                d="M 148 280 Q 200 320 252 280"
                fill="none"
                stroke="#9B386A"
                strokeWidth="1.5"
                opacity="0.5"
              />

              {/* Cheeks / Warm Blush */}
              <ellipse cx="172" cy="214" rx="10" ry="6" fill="#D8787E" opacity="0.32" />
              <ellipse cx="228" cy="214" rx="10" ry="6" fill="#D8787E" opacity="0.32" />

              {/* Refined Eyebrows - Natural, Neat, Confident */}
              <path
                d="M 167 182 Q 180 177 189 181"
                fill="none"
                stroke="#3E201B"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M 233 182 Q 220 177 211 181"
                fill="none"
                stroke="#3E201B"
                strokeWidth="2.4"
                strokeLinecap="round"
              />

              {/* Eyes - Expressive, Smart, Warm */}
              {/* Left Eye */}
              <path
                d="M 168 194 Q 179 187 189 194"
                fill="none"
                stroke="#291410"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse cx="178" cy="194" rx="4.5" ry="4.5" fill="#321A16" />
              <circle cx="179.5" cy="192.5" r="1.4" fill="#FFFFFF" />
              <path
                d="M 170 197 Q 179 200 187 197"
                fill="none"
                stroke="#B88065"
                strokeWidth="1.2"
              />

              {/* Right Eye */}
              <path
                d="M 211 194 Q 221 187 232 194"
                fill="none"
                stroke="#291410"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse cx="222" cy="194" rx="4.5" ry="4.5" fill="#321A16" />
              <circle cx="223.5" cy="192.5" r="1.4" fill="#FFFFFF" />
              <path
                d="M 213 197 Q 221 200 230 197"
                fill="none"
                stroke="#B88065"
                strokeWidth="1.2"
              />

              {/* Nose */}
              <path
                d="M 199 194 L 197 215 Q 197 220 202 220 Q 206 220 205 215"
                fill="none"
                stroke="#C68A6B"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              {/* Smile / Lips - Natural Warm Plum/Rose */}
              <path
                d="M 186 238 Q 200 248 214 238"
                fill="none"
                stroke="#963C4D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 188 238 Q 200 234 212 238 Q 200 246 188 238 Z"
                fill="#B35265"
                opacity="0.85"
              />

              {/* Delicate Hijab Brooch / Pin at the side */}
              <circle cx="152" cy="242" r="3.5" fill="url(#goldAcc)" />
              <circle cx="152" cy="242" r="1.5" fill="#FFFFFF" />
            </g>

            {/* Subtle Overlay Badge at the bottom of the portrait */}
            <g transform="translate(45, 430)">
              <rect
                width="310"
                height="54"
                rx="14"
                fill="#FFFFFF"
                fillOpacity="0.94"
                stroke="#EAE0D5"
                strokeWidth="1"
              />
              <text x="20" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="700" fill="#5A193B">
                UMN NASEEMA M
              </text>
              <text x="20" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10.5" fontWeight="500" fill="#6C727A">
                Final-Year B.Sc. Data Science | AI & Analytics
              </text>
              {/* Mini Sparkle */}
              <circle cx="288" cy="27" r="11" fill="#FAF1F4" />
              <text x="288" y="31" textAnchor="middle" fontSize="12" fill="#73224B">✦</text>
            </g>
          </svg>
        </div>

        {/* Bottom micro-info bar */}
        <div className="mt-3.5 px-2 py-1 flex items-center justify-between text-xs text-[#6C727A]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#73224B]" />
            Dharapuram, Tamil Nadu
          </span>
          <span className="font-medium text-[#73224B]">Periyar University '27</span>
        </div>
      </div>
    </div>
  );
}
