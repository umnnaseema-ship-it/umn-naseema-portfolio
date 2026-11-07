import React from 'react';
import { GraduationCap, BookOpen, Building, CheckCircle2, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF2F5]/50 border-t border-[#F0E6E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <BookOpen className="w-3.5 h-3.5 text-[#D4A359]" />
            Academic Foundation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#F0E6E1] shadow-xs text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#FDE8ED] to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FDE8ED] text-[#D94668] flex items-center justify-center border border-[#F7D0DA] shadow-xs">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider block">
                  Undergraduate Degree
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2124]">
                  {education.degree}
                </h3>
              </div>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold border border-[#F7D0DA] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
              Expected Graduation: {education.expectedGraduation}
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <h4 className="text-lg font-bold text-[#B8324F]">
              {education.institution}
            </h4>
            <p className="text-sm text-[#6B7280] flex items-center gap-2">
              <Building className="w-4 h-4 text-[#D4A359]" />
              {education.affiliation}
            </p>
          </div>

          <div className="pt-6 border-t border-[#F5EBE6] space-y-3">
            <p className="text-xs font-bold text-[#B8324F] uppercase tracking-wider">
              Academic Highlights & Rigor:
            </p>
            {education.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#3B3F45]">
                <CheckCircle2 className="w-4 h-4 text-[#D94668] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
