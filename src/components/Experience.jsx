import React from 'react';
import { Calendar, CheckCircle2, Sparkles, Building2, TrendingUp, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            Practical Industry Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Data Analytics Internships
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Real-world dataset cleaning, interactive KPI dashboard engineering, and business intelligence reporting.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Subtle Vertical Timeline Spine (Desktop) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#B8324F] via-[#D94668] to-[#D4A359]" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative md:pl-20 group"
            >
              {/* Timeline Marker Dot */}
              <div className="hidden md:flex absolute left-5 top-7 w-6.5 h-6.5 -translate-x-1/2 rounded-full bg-white border-4 border-[#D94668] items-center justify-center shadow-md group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359]" />
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#F0E6E1] shadow-xs hover:shadow-lg hover:border-[#F7D0DA] transition-all duration-300 text-left">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="px-3 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold uppercase tracking-wider border border-[#F7D0DA]">
                        {exp.badge}
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                        {exp.period} • {exp.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1E2124]">
                      {exp.role}
                    </h3>
                    
                    <p className="text-base font-bold text-[#B8324F] flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#D4A359]" />
                      {exp.company}
                    </p>
                  </div>

                  {/* Impact Quick Pill */}
                  <div className="bg-[#FAF8F6] border border-[#F0E6E1] px-4 py-2 rounded-2xl flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#D94668]" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-[#6B7280]">Internship Output</p>
                      <p className="text-xs font-bold text-[#1E2124]">
                        {exp.company === 'Cybernaut' ? '2 Live Dashboards Delivered' : '2 Complete Analytics Projects'}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#3B3F45] mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold text-[#B8324F] uppercase tracking-wider">
                    Key Responsibilities & Deliverables:
                  </p>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B3F45]">
                      <CheckCircle2 className="w-4 h-4 text-[#D94668] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables & Stack Bar */}
                <div className="pt-5 border-t border-[#F5EBE6] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-[#B8324F] mr-1">Tools:</span>
                    {exp.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF8F6] text-[#2D3136] text-xs font-medium border border-[#F0E6E1]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#D94668]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Completed & Verified</span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
