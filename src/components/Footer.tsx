import React, { useState, useEffect } from 'react';
import { ArrowUp, Compass, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { ANTHONY_BIO } from '../data/portfolioData';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';
  const bgFooter = isDark ? 'bg-[#070605]' : 'bg-[#F0EDE8]';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const iconBase = isDark
    ? 'border-white/10 bg-white/5 text-white/60 hover:text-white'
    : 'border-black/10 bg-black/5 text-black/50 hover:text-black';

  return (
    <footer className={`border-t ${borderSubtle} ${bgFooter} ${textPrimary} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b ${borderSubtle}`}>
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-[#FF5500] rotate-45" />
              <span className={`font-display font-black text-xl tracking-wider uppercase ${textPrimary}`}>
                KYM CREATES
              </span>
            </div>
            <p className={`font-editorial italic text-base ${isDark ? 'text-[#EDE8E3]/70' : 'text-[#3E3832]'} max-w-sm`}>
              "Different disciplines. One creative mind."
            </p>
            <p className={`font-mono text-xs ${textMuted} max-w-sm`}>
              Anthony is an independent creative director, photographer, filmmaker, and digital
              builder solving problems through craft.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[#FF5500] uppercase font-bold tracking-widest text-xs font-mono mb-2">
              CONNECT
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className={`p-2 border ${iconBase} hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all rounded-sm shadow-sm`} aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className={`p-2 border ${iconBase} hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all rounded-sm shadow-sm`} aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className={`p-2 border ${iconBase} hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all rounded-sm shadow-sm`} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className={`p-2 border ${iconBase} hover:border-[#FF5500] hover:bg-[#FF5500]/10 transition-all rounded-sm shadow-sm`} aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className={`group px-4 py-2 border ${isDark ? 'border-white/20 hover:border-[#FF5500] text-[#EDE8E3]/80 hover:text-[#EDE8E3]' : 'border-black/15 hover:border-[#FF5500] text-[#3E3832] hover:text-[#1E1C1A]'} text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-[#FF5500]" />
            </button>
          </div>
        </div>

        {/* Bottom Ribbon & Copyright */}
        <div className={`pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 text-[11px] font-mono ${textFaint} text-center md:text-left`}>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <span>© {new Date().getFullYear()} KYM CREATES</span>
            <span className="hidden md:inline mx-2">•</span>
            <span>ALL RIGHTS RESERVED</span>
            <span className="hidden md:inline mx-2">•</span>
            <span>Built by <a className='text-[#FF5500] cursor-pointer hover:text-[#FF5500]/80 transition-colors' href="https://dacxitechnologies.com" target="_blank" rel="noopener noreferrer">Dacxi Technologies</a>.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
