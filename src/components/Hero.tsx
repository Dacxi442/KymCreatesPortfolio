import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, Sliders, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, ANTHONY_BIO } from '../data/portfolioData';
import { ThreeAperture } from './ThreeAperture';

interface HeroProps {
  theme: 'dark' | 'light';
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onExploreWork,
  onOpenContact,
}) => {
  // Toggle between Image 1 style (Editorial Spotlight) and Image 2 style (Bold Graphic Profile)
  const [heroLayout, setHeroLayout] = useState<'spotlight' | 'graphic'>('spotlight');
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 }); // Start off-screen

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Automatic Layout Cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroLayout(prev => prev === 'spotlight' ? 'graphic' : 'spotlight');
    }, 6000); // Change layout every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-[#D0C7BF]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-white/70' : 'text-black/70';
  const textFaint = isDark ? 'text-white/50' : 'text-black/50';
  const bgCard = isDark ? 'bg-black/60' : 'bg-white/60';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Fluid 3D Wireframe Aperture following the mouse */}
      <motion.div
        className="fixed z-0 opacity-40 pointer-events-none w-44 h-44"
        animate={{ x: mousePos.x - 88, y: mousePos.y - 88 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.5 }}
      >
        <ThreeAperture theme={theme} />
      </motion.div>

      {/* Background ambient lighting - Deep black with warm ember/orange aura */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {heroLayout === 'spotlight' ? (
          <>
            {/* Center-left amber/orange spotlight aura matching Image 1 */}
            <div
              className={`absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full blur-[130px] transition-all duration-700 ${isDark ? 'bg-[#FF5500]/22 opacity-90' : 'bg-[#FF6B00]/15 opacity-60'
                }`}
            />
            <div
              className={`absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[90px] transition-all duration-700 ${isDark ? 'bg-[#E04800]/20' : 'bg-[#FF8800]/12'
                }`}
            />
            {/* Subtle blue depth accent */}
            <div className={`absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-[#1E3A8A]/12' : 'bg-[#1E3A8A]/8'}`} />
          </>
        ) : (
          <>
            {/* High-intensity split orange flare matching Image 2 */}
            <div
              className={`absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[110px] transition-all duration-700 ${isDark ? 'bg-[#FF5500]/28' : 'bg-[#FF5500]/18'
                }`}
            />
            <div className={`absolute top-10 left-10 w-[280px] h-[280px] rounded-full blur-[90px] ${isDark ? 'bg-[#FACC15]/15' : 'bg-[#FACC15]/10'}`} />
          </>
        )}
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>


      {/* Main Hero Visual Area */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {heroLayout === 'spotlight' ? (
            /* ===============================================================
               LAYOUT 01: SPOTLIGHT EDITORIAL (Directly Inspired by Image 1)
               Deep dark ember glow, seated portrait in armchair, refined serif
               typography, available badge, glowing buttons, email anchor
               =============================================================== */
            <motion.div
              key="layout-spotlight"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >


              {/* Right Column: High-End Editorial Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                {/* Available status pill */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none border border-[#FF5500]/40 bg-[#FF5500]/10 w-max mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-wider text-[#FF5500] uppercase">
                    AVAILABLE FOR PROJECTS & COMMISSIONS
                  </span>
                </div>

                {/* Main Headline (Inspired by "Hi, I'm Hawra" from image 1) */}
                <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-editorial tracking-tight leading-[1.08] mb-3 ${textPrimary}`}>
                  Hi, I'm <span className="font-editorial italic font-normal text-[#FF5500]">Anthony.</span>
                </h1>

                {/* Subtitle */}
                <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#FF5500] mb-5 font-semibold">
                  FREELANCE CREATIVE PROBLEM SOLVER & VISUAL DIRECTOR
                </p>

                {/* Core Value Statement */}
                <p
                  className={`text-base sm:text-lg lg:text-xl font-body font-light leading-relaxed max-w-2xl mb-8 ${textSecondary}`}
                >
                  I turn ideas, challenges, and complex needs into tangible visual and digital realities —{' '}
                  <span className={`font-medium underline decoration-[#FF5500] underline-offset-4 ${textPrimary}`}>
                    clean, considered, and unforgettable.
                  </span>
                </p>

                {/* Action Buttons (Glowing Orange + Dark Outlined) */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <button
                    onClick={onExploreWork}
                    className="group px-7 py-3.5 bg-[#FF5500] text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center space-x-2 hover:bg-[#E04800] transition-all shadow-[0_0_30px_rgba(255,85,0,0.4)]"
                  >
                    <span>View Portfolio</span>
                    <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className={`group px-7 py-3.5 border font-mono text-xs uppercase tracking-widest font-bold flex items-center space-x-2 transition-all ${isDark
                      ? 'border-white/20 bg-white/5 hover:border-[#FF5500] text-white'
                      : 'border-black/20 bg-black/5 hover:border-[#FF5500] text-black'
                      }`}
                  >
                    <Mail className="w-4 h-4 text-[#FF5500]" />
                    <span>What can I do for you?</span>
                  </button>
                </div>

                {/* Direct Contact Email and Trust Indicator */}
                <div className={`pt-6 border-t ${borderSubtle} flex flex-wrap items-center justify-between gap-4 text-xs font-mono`}>
                  <a
                    href={`mailto:${ANTHONY_BIO.email}`}
                    className="text-[#FF5500] hover:underline flex items-center space-x-1.5"
                  >
                    <span>{ANTHONY_BIO.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <div className={`flex items-center space-x-3 ${textFaint} text-[11px]`}>
                    <span>✦ PHOTOGRAPHY</span>
                    <span>✦ VIDEO</span>
                    <span>✦ BRANDING</span>
                    <span>✦ CODE</span>
                  </div>
                </div>
              </div>

              {/* Left Column: Editorial Portrait in Armchair inside Spotlight */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
                <div className="relative group w-full max-w-[420px] sm:max-w-[460px]">
                  {/* Outer subtle framing bracket lines */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF5500]" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#FF5500]" />


                  {/* Main Portrait Frame */}
                  <div className={`relative z-10 overflow-hidden border border-[#FF5500]/30 shadow-[0_20px_60px_-15px_rgba(255,85,0,0.35)] aspect-[3/4] ${isDark ? 'bg-black/60' : 'bg-white/60'}`}>
                    <img
                      src={ASSETS.creativeKym}
                      alt="Anthony - Creative Director & Photographer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay for text contrast and atmosphere */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#090807]' : 'from-[#EBE5DF]'} via-transparent to-transparent opacity-60`} />

                    {/* Camera Technical Overlay in Corner */}
                    <div className={`absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono backdrop-blur-md px-3 py-1.5 border ${isDark ? 'text-white/80 bg-black/65 border-white/10' : 'text-black/80 bg-white/65 border-black/10'}`}>
                      <span>KYM CREATES // ANTHONY</span>
                    </div>
                  </div>

                  {/* Subtle decorative geometric bar in Orange, Yellow, Blue (from prompt) */}
                  <div className="absolute -bottom-2 left-6 right-6 h-1 flex">
                    <div className="w-1/2 bg-[#FF5500]" />
                    <div className="w-1/4 bg-[#FACC15]" />
                    <div className="w-1/4 bg-[#2563EB]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ===============================================================
               LAYOUT 02: BOLD GRAPHIC PROFILE (Directly Inspired by Image 2)
               Massive condensed "CREATE" typography, warm sunset profile in
               sunglasses, asymmetric modern white/orange split, testimonial badge
               =============================================================== */
            <motion.div
              key="layout-graphic"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Bold Typography & Visual Layering */}
              <div className="lg:col-span-7 relative z-10">
                <div className="relative">
                  {/* Huge Bold Condensed "CREATE" Title Overlapping */}
                  <div className={`font-sans font-black text-4xl sm:text-5xl lg:text-[90px] tracking-tighter leading-none uppercase select-none ${textPrimary}`}>
                    KYM <span className="text-[#FF5500]">CREATES</span>
                  </div>

                  <p className={`font-body text-lg sm:text-xl font-light mt-2 mb-6 ${textSecondary}`}>
                    Designs that inspire. Ideas that connect. Solutions that endure.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <button
                      onClick={onExploreWork}
                      className={`px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center space-x-2 shadow-lg border ${isDark ? 'bg-white text-black hover:bg-[#FF5500] hover:text-white border-transparent' : 'bg-black text-white hover:bg-[#FF5500] hover:text-white border-transparent'}`}
                    >
                      <span>VIEW WORK</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onOpenContact}
                      className="px-6 py-3 bg-[#FF5500] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#E04800] transition-all flex items-center space-x-2 shadow-[0_0_25px_rgba(255,85,0,0.4)]"
                    >
                      <span>WHAT CAN I DO FOR YOU?</span>
                    </button>
                  </div>

                  {/* Trusted by forward-thinking brands widget */}
                  <div className={`inline-flex items-center space-x-4 p-3 backdrop-blur-md border ${bgCard} ${borderSubtle}`}>
                    <div className="flex -space-x-2 overflow-hidden">
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FF5500] bg-neutral-800 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                        L
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FACC15] bg-neutral-700 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                        S
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#2563EB] bg-neutral-600 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                        F
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white/20 bg-[#FF5500] flex items-center justify-center text-[9px] font-mono font-bold text-white">
                        +28
                      </div>
                    </div>
                    <div className="text-left">
                      <div className={`text-[11px] font-mono font-bold ${textPrimary}`}>Trusted by Ambitious Brands</div>
                      <div className={`text-[9px] font-mono ${textFaint}`}>Paris • London • New York • Global</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Contrast Profile Photograph + Floating Testimonial */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px]">
                  {/* Geometric color backdrop */}
                  <div className="absolute inset-0 bg-[#FF5500] translate-x-3 translate-y-3 -z-10" />

                  <div className={`relative overflow-hidden aspect-[3/4] border-2 ${isDark ? 'border-white/20 bg-black' : 'border-black/20 bg-white'}`}>
                    <img
                      src={ASSETS.creativephoto}
                      alt="Anthony - Side profile with amber sunglasses"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-110"
                    />

                    <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-[#FF5500] border border-[#FF5500]/40">
                      PROFILE // KYM-02
                    </div>
                  </div>

                  {/* Floating Client Quote Card (matching Image 2) */}
                  <div className={`absolute -bottom-6 -left-6 max-w-[280px] backdrop-blur-md p-4 border shadow-2xl text-left ${isDark ? 'bg-[#141210]/95 border-white/20' : 'bg-white/95 border-black/20'}`}>
                    <div className="text-[#FF5500] text-sm font-serif mb-1">“</div>
                    <p className={`text-[11px] font-body leading-tight mb-2 ${textPrimary}`}>
                      Anthony delivered outstanding work that exceeded our creative expectations.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-[#FF5500] flex items-center justify-center text-[8px] font-bold text-white">
                        EV
                      </div>
                      <div>
                        <div className={`text-[10px] font-mono font-bold ${textPrimary}`}>ELENA VANCE</div>
                        <div className={`text-[8px] font-mono ${textFaint}`}>CREATIVE DIRECTOR, PARIS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="flex justify-center items-center space-x-3 mb-6">
        <button
          onClick={() => setHeroLayout('spotlight')}
          className={`h-2 rounded-full transition-all duration-300 ${heroLayout === 'spotlight' ? 'bg-[#FF5500] w-6' : isDark ? 'bg-white/30 hover:bg-white/50 w-2' : 'bg-black/30 hover:bg-black/50 w-2'}`}
          aria-label="View Spotlight Layout"
        />
        <button
          onClick={() => setHeroLayout('graphic')}
          className={`h-2 rounded-full transition-all duration-300 ${heroLayout === 'graphic' ? 'bg-[#FF5500] w-6' : isDark ? 'bg-white/30 hover:bg-white/50 w-2' : 'bg-black/30 hover:bg-black/50 w-2'}`}
          aria-label="View Graphic Layout"
        />
      </div>

      {/* Bottom Editorial Scroll Cue and Recurring Signature Brand Motif */}
      <div className={`max-w-7xl mx-auto w-full pt-4 border-t ${borderSubtle} flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono`}>
        <div className="flex items-center space-x-2 text-[#FF5500]">
          <span className="font-bold tracking-widest">KYM CREATES</span>
          <span className={textFaint}>//</span>
          <span className={`${textMuted} italic tracking-wider`}>
            “Different disciplines. One creative mind.”
          </span>
        </div>

        <button
          onClick={onExploreWork}
          className={`group flex items-center space-x-2 font-mono text-[11px] ${textMuted} hover:text-[#FF5500] transition-colors`}
        >
          <span>EXPLORE ARCHIVE</span>
          <span className="text-[#FF5500] group-hover:translate-y-1 transition-transform inline-block">↓</span>
        </button>
      </div>
    </section>
  );
};
