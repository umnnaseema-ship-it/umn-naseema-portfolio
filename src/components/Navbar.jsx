import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F6]/92 backdrop-blur-md shadow-xs py-3.5 border-b border-[#F0E6E1]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
            aria-label="Umn Naseema Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8324F] to-[#E85070] flex items-center justify-center text-white font-serif font-bold text-lg shadow-md group-hover:shadow-lg transition-all border border-white/40">
              UN
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-lg tracking-tight text-[#1E2124] group-hover:text-[#D94668] transition-colors leading-none">
                Umn Naseema M
              </span>
              <span className="text-[11px] font-semibold text-[#D94668] tracking-wider uppercase mt-1 flex items-center gap-1">
                Data Science & AI <Sparkles className="w-2.5 h-2.5 text-[#D4A359]" />
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F0E6E1] shadow-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3B3F45] hover:text-[#D94668] rounded-full hover:bg-[#FFF2F5] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={resumeData.personal.resumePdf}
              download="Umn_Naseema_M_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#B8324F] bg-white border border-[#F0E0E5] rounded-full hover:bg-[#FFF5F7] hover:border-[#D94668]/40 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#D94668]" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] rounded-full hover:from-[#A02842] hover:to-[#D94668] transition-all shadow-md hover:shadow-lg"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={resumeData.personal.resumePdf}
              download="Umn_Naseema_M_Resume.pdf"
              className="p-2 text-[#B8324F] bg-white border border-[#F0E0E5] rounded-full"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D3136] hover:text-[#D94668] focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F6]/98 backdrop-blur-xl border-b border-[#F0E6E1] px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-[#2D3136] hover:text-[#D94668] hover:bg-[#FFF2F5] rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#F0E6E1] flex flex-col gap-2.5">
              <a
                href={resumeData.personal.resumePdf}
                download="Umn_Naseema_M_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#B8324F] bg-white border border-[#F0E0E5] rounded-xl"
              >
                <Download className="w-4 h-4" /> Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#B8324F] to-[#E85070] rounded-xl shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
