import React from 'react';
import { Heart, ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF2F5]/60 border-t border-[#F0E6E1] pt-16 pb-12 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#F0E6E1] items-start">
          
          {/* Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B8324F] to-[#E85070] flex items-center justify-center text-white font-serif font-bold text-base shadow-xs">
                UN
              </div>
              <span className="font-serif font-bold text-xl text-[#1E2124]">
                Umn Naseema M
              </span>
            </div>
            <p className="text-sm text-[#6B7280] max-w-md">
              Final-year B.Sc. Data Science student at Vivekanandha College of Arts and Sciences for Women (Autonomous), Periyar University. Aspiring Data Analyst and AI/ML innovator.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B8324F]">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#6B7280]">
              <a href="#about" className="hover:text-[#D94668]">About</a>
              <a href="#skills" className="hover:text-[#D94668]">Skills</a>
              <a href="#experience" className="hover:text-[#D94668]">Experience</a>
              <a href="#projects" className="hover:text-[#D94668]">Projects</a>
              <a href="#achievements" className="hover:text-[#D94668]">Achievements</a>
              <a href="#contact" className="hover:text-[#D94668]">Contact</a>
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#0077B5] hover:scale-110 transition-all shadow-xs"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#181717] hover:scale-110 transition-all shadow-xs"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-white border border-[#F0D5DD] text-[#3B3F45] hover:text-[#D94668] hover:scale-110 transition-all shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#F0D5DD] text-xs font-bold text-[#B8324F] hover:bg-[#FFF2F5] transition-all shadow-xs cursor-pointer"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-3">
          <p>
            © {new Date().getFullYear()} Umn Naseema M. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#D94668] fill-[#D94668]" /> for modern feminine professional excellence.
          </p>
        </div>

      </div>
    </footer>
  );
}
