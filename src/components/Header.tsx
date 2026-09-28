import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ANTHONY_BIO } from '../data/portfolioData';
import kymLogo from '../assets/images/kym-logo.jpeg';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenCV,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? theme === 'dark'
            ? 'bg-[#090807]/85 backdrop-blur-md border-b border-[#24201D] py-3.5'
            : 'bg-[#F7F5F2]/85 backdrop-blur-md border-b border-[#E3DED8] py-3.5'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand identifier */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-1 focus:ring-[#FF5500]"
          >
            <div className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border-1 border-[#FF5500]/60 shadow-[0_0_10px_rgba(255,85,0,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.4)]">
              <img
                src={kymLogo}
                alt="Kym Creates Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-sans font-extrabold text-sm tracking-wider uppercase">
                  KYM CREATES
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-none bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 hidden sm:inline-block">
                  ANTHONY
                </span>
              </div>
              <span className={`block text-[10px] font-mono tracking-tight ${theme === 'dark' ? 'text-[#8E867F]' : 'text-[#7A736B]'}`}>
                VISUAL DIRECTION & SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 hover:text-[#FF5500] ${theme === 'dark' ? 'text-[#C5BDB5]' : 'text-[#4A453F]'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* CV Download / View Button */}
            <button
              onClick={onOpenCV}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono tracking-wider border transition-all ${theme === 'dark'
                ? 'border-[#2D2824] bg-[#141210] hover:border-[#FF5500]/70 text-[#D8D0C7]'
                : 'border-[#DDD7D0] bg-[#FFFFFF] hover:border-[#FF5500]/70 text-[#2B2724]'
                }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>CV / RESUME</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 border transition-all ${theme === 'dark'
                ? 'border-[#2D2824] bg-[#141210] hover:border-[#FF5500] text-[#EDE8E3]'
                : 'border-[#DDD7D0] bg-[#FFFFFF] hover:border-[#FF5500] text-[#1E1C1A]'
                }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-[#FACC15]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-[#2563EB]" />
              )}
            </button>

            {/* Signature Question CTA */}
            <button
              onClick={onOpenContact}
              className="group relative overflow-hidden px-4 py-2 text-xs font-mono tracking-wider uppercase bg-[#FF5500] text-white hover:bg-[#E04800] transition-all flex items-center space-x-1.5 shadow-[0_0_20px_rgba(255,85,0,0.35)]"
            >
              <span>What can I do for you?</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Switcher Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 border ${theme === 'dark'
                ? 'border-[#2D2824] bg-[#141210] text-[#EDE8E3]'
                : 'border-[#DDD7D0] bg-[#FFFFFF] text-[#1E1C1A]'
                }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FACC15]" />
              ) : (
                <Moon className="w-4 h-4 text-[#2563EB]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className={`p-2 border ${theme === 'dark'
                ? 'border-[#2D2824] bg-[#141210] text-[#EDE8E3]'
                : 'border-[#DDD7D0] bg-[#FFFFFF] text-[#1E1C1A]'
                }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5500]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 ${theme === 'dark' ? 'bg-[#090807] text-[#EDE8E3]' : 'bg-[#F7F5F2] text-[#1E1C1A]'
              }`}
          >


            {/* Menu Links */}
            <nav className="flex flex-col space-y-5 my-auto">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between border-b border-white/5 pb-3"
                >
                  <span className="font-sans font-bold text-2xl tracking-tight group-hover:text-[#FF5500] transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#FF5500] opacity-80">
                    0{idx + 1} //
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className={`w-full py-3 px-4 border text-center font-mono text-xs tracking-wider uppercase flex items-center justify-center space-x-2 ${theme === 'dark' ? 'border-[#332D28] bg-[#141210]' : 'border-[#DDD7D0] bg-white'
                    }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Download CV</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 bg-[#FF5500] text-white text-center font-mono text-xs tracking-wider uppercase flex items-center justify-center space-x-1"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono opacity-60">
                <span>{ANTHONY_BIO.email}</span>
                <span className="text-[#FF5500]">● {ANTHONY_BIO.availability}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
