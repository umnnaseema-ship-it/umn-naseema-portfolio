import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle, 
  BookmarkCheck, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Achievements() {
  const { achievements, certifications } = resumeData;

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            Honors & Hackathon Record
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Demonstrated stamina, competitive problem-solving, and continuous industry upskilling.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Hackathon Wins & Participations */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#1E2124] flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#D4A359]" />
              Hackathon Records & Competitions
            </h3>
            <span className="text-xs font-bold text-[#B8324F] bg-[#FDE8ED] px-3 py-1 rounded-full border border-[#F7D0DA]">
              8 Verified Participations & Wins
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 border text-left flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                  item.highlight
                    ? 'bg-gradient-to-br from-white via-[#FFF5F7] to-white border-[#F7D0DA] shadow-xs ring-1 ring-[#D94668]/20'
                    : 'bg-white border-[#F0E6E1] hover:border-[#F7D0DA]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#B8324F] to-[#E85070] text-white shadow-2xs' 
                        : 'bg-[#FAF8F6] text-[#6B7280] border border-[#F0E6E1]'
                    }`}>
                      {item.type}
                    </span>
                    {item.highlight && (
                      <span className="text-[#D4A359] text-sm font-bold">★ Winner</span>
                    )}
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#1E2124] leading-snug mb-1.5">
                    {item.title}
                  </h4>

                  <p className="text-xs font-bold text-[#D94668] mb-2 flex items-center gap-1">
                    <Building className="w-3 h-3 text-[#D4A359]" />
                    {item.organization}
                  </p>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F5EBE6] flex items-center gap-1 text-[11px] text-[#6B7280] font-medium">
                  <CheckCircle className="w-3 h-3 text-[#D94668]" />
                  <span>Verified Accomplishment</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Simulations Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#1E2124] flex items-center gap-2">
              <BookmarkCheck className="w-6 h-6 text-[#D94668]" />
              Industry Certifications & Professional Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#F0E6E1] shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-[11px] font-bold text-[#B8324F] uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#FDE8ED] inline-block mb-2 border border-[#F7D0DA]">
                        {cert.badge}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#1E2124]">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-bold text-[#B8324F] mt-1">
                        {cert.issuer} • <span className="text-[#6B7280] font-normal">{cert.date}</span>
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#FDE8ED] text-[#D94668] border border-[#F7D0DA]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3B3F45] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EBE6]">
                  <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                    Verified Competencies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF8F6] text-[#2D3136] text-xs font-medium border border-[#F0E6E1]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
