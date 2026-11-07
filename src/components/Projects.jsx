import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Check, 
  Award
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAF2F5]/50 border-y border-[#F0E6E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            Featured Engineering Work
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            AI & Analytics Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            From offline edge multilingual speech AI to high-precision fraud detection models and behavioral churn prediction.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const isPalash = proj.id === 'palash';
            return (
              <div
                key={proj.id}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between text-left group ${
                  isPalash
                    ? 'border-[#D94668]/40 shadow-lg ring-1 ring-[#D94668]/30 lg:-translate-y-2'
                    : 'border-[#F0E6E1] shadow-xs hover:shadow-md hover:border-[#F7D0DA]'
                }`}
              >
                {/* Top Highlight Banner */}
                <div className={`p-6 sm:p-7 ${
                  isPalash 
                    ? 'bg-gradient-to-br from-[#FFF5F7] via-[#FFF9FA] to-[#FDF6EA] border-b border-[#F7D0DA]' 
                    : 'bg-[#FAF8F6] border-b border-[#F0E6E1]'
                }`}>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white text-[#B8324F] border border-[#F7D0DA] shadow-2xs">
                      {proj.category}
                    </span>
                    {isPalash && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#B8324F] to-[#E85070] px-3 py-0.5 rounded-full shadow-xs">
                        <Award className="w-3 h-3 text-[#D4A359]" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1E2124] group-hover:text-[#D94668] transition-colors leading-tight">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs font-bold text-[#D94668] mt-1.5 flex items-center gap-1">
                    {proj.badge}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Summary */}
                  <div>
                    <p className="text-sm text-[#3B3F45] leading-relaxed mb-4">
                      {proj.summary}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-bold text-[#B8324F] uppercase tracking-wider">
                        Core Architecture & Highlights:
                      </p>
                      {proj.features.slice(0, 4).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#3B3F45]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D94668] shrink-0 mt-1.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                      {proj.features.length > 4 && (
                        <p className="text-[11px] text-[#D94668] font-bold italic pl-3.5">
                          + {proj.features.length - 4} more specialized capabilities
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tech stack and Action button */}
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-[#F5EBE6]">
                      {proj.technologies.slice(0, 5).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F6] text-[#2D3136] text-[11px] font-medium border border-[#F0E6E1]"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-[#FDE8ED] text-[#B8324F] text-[11px] font-bold">
                          +{proj.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Learn More / Modal Trigger Button */}
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className={`w-full py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                        isPalash
                          ? 'bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] text-white hover:from-[#A02842] hover:to-[#D94668] shadow-md hover:shadow-lg'
                          : 'bg-[#FAF8F6] text-[#B8324F] hover:bg-[#FFF2F5] border border-[#F0E0E5]'
                      }`}
                    >
                      <span>Explore Technical Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for Technical Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#F0D5DD] shadow-2xl relative text-left p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F6] text-[#6B7280] hover:text-[#D94668] hover:bg-[#FFF2F5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-5">
              <span className="text-xs font-bold text-[#B8324F] uppercase tracking-wider px-3 py-1 rounded-full bg-[#FDE8ED] inline-block mb-2">
                {selectedProject.badge}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1E2124]">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-semibold text-[#D94668] mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-[#F0E6E1]">
                <h4 className="font-serif font-bold text-sm text-[#B8324F] mb-1">
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-[#3B3F45] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F7D0DA]">
                <h4 className="font-serif font-bold text-sm text-[#D94668] mb-1">
                  The Engineered Solution
                </h4>
                <p className="text-xs sm:text-sm text-[#3B3F45] leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <h4 className="font-serif font-bold text-base text-[#1E2124]">
                Key Capabilities & Features
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B3F45]">
                    <Check className="w-4 h-4 text-[#D94668] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Technologies */}
            <div className="space-y-3 mb-6">
              <h4 className="font-serif font-bold text-base text-[#1E2124]">
                Technologies & Architectures Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF8F6] text-[#2D3136] text-xs font-semibold border border-[#F0E6E1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="pt-4 border-t border-[#F0E6E1] flex items-center justify-between">
              <span className="text-xs text-[#6B7280]">
                Accurate documentation based on verified project records.
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#B8324F] hover:bg-[#D94668] transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
