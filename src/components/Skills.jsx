import React, { useState } from 'react';
import { 
  LineChart, 
  BarChart3, 
  Cpu, 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  Layers
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ICON_MAP = {
  LineChart: LineChart,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Code2: Code2,
  Database: Database,
  Wrench: Wrench
};

export default function Skills() {
  const { skillCategories } = resumeData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF2F5]/50 border-y border-[#F0E6E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            Technical Toolkit
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Skills Categorized For Impact
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Practical competence across modern data pipelines, business intelligence dashboards, and intelligent ML architectures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#B8324F] to-[#E85070] text-white shadow-md'
                : 'bg-white text-[#6B7280] hover:text-[#D94668] border border-[#F0E6E1]'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-[#B8324F] to-[#E85070] text-white shadow-md'
                : 'bg-white text-[#6B7280] hover:text-[#D94668] border border-[#F0E6E1]'
            }`}
          >
            Analytics & BI
          </button>
          <button
            onClick={() => setActiveTab('ai/ml')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ai/ml'
                ? 'bg-gradient-to-r from-[#B8324F] to-[#E85070] text-white shadow-md'
                : 'bg-white text-[#6B7280] hover:text-[#D94668] border border-[#F0E6E1]'
            }`}
          >
            AI / ML & NLP
          </button>
          <button
            onClick={() => setActiveTab('programming')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'programming'
                ? 'bg-gradient-to-r from-[#B8324F] to-[#E85070] text-white shadow-md'
                : 'bg-white text-[#6B7280] hover:text-[#D94668] border border-[#F0E6E1]'
            }`}
          >
            Code & DB
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Layers;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F0E6E1] shadow-xs hover:shadow-md hover:border-[#F7D0DA] transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FDE8ED] text-[#D94668] flex items-center justify-center border border-[#F7D0DA] group-hover:scale-110 group-hover:bg-[#D94668] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1E2124] group-hover:text-[#D94668] transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#6B7280]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF8F6] text-[#2D3136] border border-[#F0E6E1] group-hover:border-[#F7D0DA] transition-colors"
                      >
                        <Check className="w-3 h-3 text-[#D94668]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Count */}
                <div className="pt-5 mt-5 border-t border-[#F5EBE6] flex items-center justify-between text-[11px] text-[#6B7280] font-medium">
                  <span>Verified Competency</span>
                  <span className="font-bold text-[#D94668]">{cat.skills.length} Technical Skills</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills callout */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-[#F0E6E1] max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs font-bold text-[#B8324F] uppercase tracking-wider">
              Core Professional Competencies:
            </p>
            <p className="text-xs text-[#3B3F45] mt-0.5">
              Data Interpretation • Problem Solving • Team Leadership • Hackathon Sprint Execution • Time Management • Adaptability
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDE8ED] text-[#D94668] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D94668]" />
            Non-percentage Authentic Matrix
          </div>
        </div>

      </div>
    </section>
  );
}
