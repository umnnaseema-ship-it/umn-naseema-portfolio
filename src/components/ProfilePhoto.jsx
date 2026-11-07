import React from 'react';

export default function ProfilePhoto({ className = "w-full max-w-[420px]" }) {
  return (
    <div className={`relative ${className} select-none`}>
      {/* Dynamic ambient backdrop that radiates coral-rose and gold lights */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#D94668]/30 via-[#F4728C]/25 to-[#D4A359]/20 rounded-[2.5rem] blur-xl -z-10 transform -rotate-1" />
      <div className="absolute -inset-1 border border-[#F5D5DE] rounded-[2.2rem] -z-10 transform rotate-1 bg-gradient-to-br from-white to-[#FFF5F7]" />

      {/* Main card container */}
      <div className="relative rounded-[2rem] overflow-hidden bg-white border border-[#F0D5DD] shadow-2xl p-3 sm:p-4">
        
        {/* Floating tech badges matching the bright coral badge aesthetic */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F2D7DF] shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wide text-[#B8324F]">Open to Roles 2026/27</span>
        </div>

        <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F2D7DF] shadow-md flex items-center gap-1.5">
          <span className="text-[#D4A359] text-xs">★</span>
          <span className="text-xs font-semibold text-[#1E2124]">SIH Winner '26</span>
        </div>

        {/* Real photo display */}
        <div className="relative w-full aspect-[3.75/5] rounded-[1.6rem] overflow-hidden bg-[#FFF5F7] border border-[#F2D5DE] shadow-inner group">
          <img
            src="/profile.jpg"
            alt="Umn Naseema M - Final-Year B.Sc. Data Science Student & AI/ML Enthusiast"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />

          {/* Bottom badge harmonized with coral blazer accent */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1E2124]/90 via-[#1E2124]/40 to-transparent p-5 pt-14 text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#D94668] text-white text-[10px] font-bold uppercase tracking-wider mb-1">
              Data Science • AI / ML
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              Umn Naseema M
            </h3>
            <p className="text-xs text-[#FAF8F6]/90 mt-0.5">
              Vivekanandha College of Arts & Sciences for Women (Autonomous)
            </p>
          </div>
        </div>

        {/* Bottom micro-info bar */}
        <div className="mt-3.5 px-2 py-1 flex items-center justify-between text-xs text-[#6B7280]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D94668]" />
            Dharapuram, Tamil Nadu
          </span>
          <span className="font-semibold text-[#D94668]">Class of 2027</span>
        </div>
      </div>
    </div>
  );
}
