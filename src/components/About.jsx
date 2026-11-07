import React from 'react';
import { GraduationCap, Sparkles, CheckCircle2, Building, HeartHandshake } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  const { education, about } = resumeData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            About Me
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Data, Machine Learning & Purposeful Innovation
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Key Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-8 border border-[#F0E6E1] shadow-xs space-y-5">
              <h3 className="font-serif text-2xl font-bold text-[#1E2124] flex items-center gap-2.5">
                <span className="w-2 h-6 rounded-full bg-[#D94668]" />
                Academic Roots & Analytical Curiosity
              </h3>
              
              {about.story.map((paragraph, index) => (
                <p key={index} className="text-[#3B3F45] leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}

              {/* Focus Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#F5EBE6]">
                {about.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F6] border border-[#F0E6E1]">
                    <h4 className="font-serif font-bold text-sm text-[#B8324F] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats / Highlights callout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-[#F0E6E1] text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D94668]">2027</p>
                <p className="text-xs font-semibold text-[#6B7280] mt-0.5">B.Sc. Graduation</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#F0E6E1] text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D94668]">2</p>
                <p className="text-xs font-semibold text-[#6B7280] mt-0.5">Internships</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#F0E6E1] text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D94668]">8+</p>
                <p className="text-xs font-semibold text-[#6B7280] mt-0.5">Hackathons</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#F0E6E1] text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D94668]">0.97</p>
                <p className="text-xs font-semibold text-[#6B7280] mt-0.5">ML ROC-AUC</p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Identity & Leadership Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF5F7] rounded-3xl p-7 border border-[#F2D7DF] shadow-xs relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4728C]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#FDE8ED] text-[#D94668] border border-[#F7D0DA]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D4A359] uppercase tracking-wider block">
                    Undergraduate Study
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1E2124]">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm text-[#3B3F45]">
                <p className="font-bold text-[#B8324F]">
                  {education.institution}
                </p>
                <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#D4A359]" />
                  {education.affiliation}
                </p>
                <div className="inline-block mt-1 px-3 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold">
                  Expected Graduation: {education.expectedGraduation}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F5EBE6] space-y-2.5">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#3B3F45]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D94668] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Representation Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E6E1] shadow-xs text-left space-y-3">
              <div className="flex items-center gap-2.5 text-[#D94668]">
                <HeartHandshake className="w-5 h-5 text-[#D4A359]" />
                <h4 className="font-serif font-bold text-base text-[#1E2124]">
                  Leadership & Mission
                </h4>
              </div>
              <p className="text-xs text-[#3B3F45] leading-relaxed">
                As a young hijabi woman pursuing data science, I am committed to technical rigor, collaborative innovation, and demonstrating the transformative impact of diverse voices in AI and data systems.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF2F5] text-[#D94668] font-bold border border-[#F7D0DA]">Hackathon Team Leader</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF2F5] text-[#D94668] font-bold border border-[#F7D0DA]">Offline AI for Tribal Ed</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF2F5] text-[#D94668] font-bold border border-[#F7D0DA]">Business BI Solutions</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
