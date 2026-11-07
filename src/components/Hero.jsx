import React from 'react';
import { ArrowDown, Download, Mail, Database, Brain, Award } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const { personal } = resumeData;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient background glows attuned to coral-rose & warm gold */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#FDE8ED]/70 via-[#FFF2F5]/80 to-[#FDF6EA]/60 blur-3xl -z-10 rounded-full" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-[#F4728C]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-60 -right-20 w-80 h-80 bg-[#D4A359]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#F5D5DE] shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D94668] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D94668]" />
              </span>
              <span className="text-xs font-bold tracking-wider text-[#B8324F] uppercase">
                Data Science Student • Aspiring Data Analyst & AI/ML
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E2124] leading-[1.12]">
                Turning Data Into Insights.{' '}
                <span className="italic font-normal bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] bg-clip-text text-transparent">
                  Building Technology For Impact.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-[#D94668]">
                {personal.subtitle || personal.title}
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-base sm:text-lg text-[#3B3F45] leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* Quick Micro Credentials Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-2xl bg-white border border-[#F2D7DF] shadow-xs hover:border-[#D94668]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-[#D94668] mb-1">
                  <Database className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Analytics</span>
                </div>
                <p className="text-xs text-[#1E2124] font-bold">2 Internships</p>
                <p className="text-[11px] text-[#6B7280]">Cybernaut & Codec</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#F2D7DF] shadow-xs hover:border-[#D94668]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-[#D94668] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Hackathons</span>
                </div>
                <p className="text-xs text-[#1E2124] font-bold">SIH '26 Winner</p>
                <p className="text-[11px] text-[#6B7280]">Internal & Agenticathon</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#F2D7DF] shadow-xs hover:border-[#D94668]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-[#D94668] mb-1">
                  <Brain className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Education</span>
                </div>
                <p className="text-xs text-[#1E2124] font-bold">B.Sc. Data Science</p>
                <p className="text-[11px] text-[#6B7280]">Class of 2027</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] hover:from-[#A02842] hover:to-[#D94668] shadow-md hover:shadow-lg transition-all duration-200"
              >
                View My Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePdf}
                download="Umn_Naseema_M_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#B8324F] bg-white border border-[#F0D5DD] hover:bg-[#FFF5F7] hover:border-[#D94668] transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-[#D94668]" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm text-[#3B3F45] hover:text-[#B8324F] hover:bg-white/70 transition-all"
              >
                <Mail className="w-4 h-4 text-[#D94668]" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold tracking-wider text-[#6B7280] uppercase">
                Connect Directly:
              </span>
              
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#0077B5] hover:border-[#0077B5] hover:scale-105 transition-all shadow-xs"
                title="LinkedIn Profile: Umn Naseema M"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#181717] hover:border-[#181717] hover:scale-105 transition-all shadow-xs"
                title="GitHub Profile: umnnaseema-ship-it"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#D94668] hover:border-[#D94668] hover:scale-105 transition-all shadow-xs"
                title={`Email: ${personal.email}`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Harmonized Photo Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>

        </div>
      </div>
    </section>
  );
}
