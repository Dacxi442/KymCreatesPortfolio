import React, { useState } from 'react';
import { Eye, Award, Compass, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { ASSETS, ANTHONY_BIO } from '../data/portfolioData';

interface AboutProps {
  theme: 'dark' | 'light';
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({
  theme,
  onOpenCV,
  onOpenContact,
}) => {
  const [activeStoryTab, setActiveStoryTab] = useState<'origin' | 'philosophy' | 'toolkit'>('origin');

  const isDark = theme === 'dark';

  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const borderMid = isDark ? 'border-white/15' : 'border-black/12';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgDeep = isDark ? 'bg-black/40' : 'bg-white/70';

  return (
    <section id="about" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b ${borderSubtle}`}>
          <div>
            <h2 className={`text-4xl sm:text-6xl font-editorial font-bold tracking-tight ${textPrimary}`}>
              Who is <span className="italic font-normal text-[#FF5500]">Anthony?</span>
            </h2>
          </div>
          <div className={`mt-4 md:mt-0 font-mono text-xs ${textMuted}`}>
            KYM CREATES // INDEPENDENT CREATIVE PRACTICE
          </div>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Camera Framing Marks */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#FF5500]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#2563EB]" />

              {/* Artwork Frame */}
              <div className={`relative overflow-hidden aspect-square ${borderMid} border shadow-2xl ${isDark ? 'bg-black' : 'bg-white'}`}>
                <img
                  src={ASSETS.creativephoto}
                  alt="Contemporary Creative Collage Art - Kym Creates"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Technical Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between font-mono text-[10px] text-white/90">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                    <span>AFRO-SYNCRETIC COLLAGE</span>
                  </div>
                  <span className="text-[#FACC15]">ARCHIVE_NO. 2024</span>
                </div>
              </div>

              {/* Graphic Bar */}
              <div className={`mt-3 flex items-center justify-between text-[10px] font-mono ${textFaint}`}>
                <div className="flex space-x-1">
                  <span className="w-8 h-1 bg-[#FF5500]" />
                  <span className="w-4 h-1 bg-[#FACC15]" />
                  <span className="w-4 h-1 bg-[#2563EB]" />
                  <span className={`w-2 h-1 ${isDark ? 'bg-white' : 'bg-black'}`} />
                </div>
              </div>
            </div>

            {/* Quick Proof Metrics */}
            <div className={`mt-8 grid grid-cols-3 gap-3 border ${borderSubtle} p-4 ${bgCard}`}>
              <div>
                <div className="font-sans font-black text-2xl text-[#FF5500]">7+</div>
                <div className={`font-mono text-[10px] ${textFaint} uppercase`}>Years Practice</div>
              </div>
              <div>
                <div className={`font-sans font-black text-2xl ${textPrimary}`}>50+</div>
                <div className={`font-mono text-[10px] ${textFaint} uppercase`}>Projects Led</div>
              </div>
              <div>
                <div className="font-sans font-black text-2xl text-[#FACC15]">100%</div>
                <div className={`font-mono text-[10px] ${textFaint} uppercase`}>Independent</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Navigation Tabs */}
            <div className="relative flex flex-wrap gap-2 pb-4 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/20 to-[#2563EB]/20 blur-2xl rounded-full -z-10 pointer-events-none" />
              {[
                { id: 'origin', label: '01 // The Story' },
                { id: 'philosophy', label: '02 // The Philosophy' },
                { id: 'toolkit', label: '03 // Creative Toolkit' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStoryTab(tab.id as any)}
                  className={`glass-button px-4 py-2 font-mono text-xs uppercase tracking-wider ${activeStoryTab === tab.id ? 'active font-bold' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Narrative Tab Contents */}
            {activeStoryTab === 'origin' && (
              <div className={`space-y-5 text-base sm:text-lg font-body font-light ${textSecondary} leading-relaxed`}>
                <p className={`font-editorial text-2xl sm:text-3xl ${textPrimary} font-normal leading-snug`}>
                  Anthony is a creative. He does not see photography, film, design, and code as
                  isolated career tracks.
                </p>
                <p>
                  To him, they are simply different instruments of the same creative instinct: the
                  drive to understand a raw human need, clarify the confusion around it, and mold it
                  into something tangible, dignified, and unforgettable.
                </p>
                <p>
                  Growing up fascinated by how images evoke visceral memory and how digital interfaces
                  shape perception, Anthony spent years training in medium-format photography, cinema
                  lighting, typography systems, and modern web software architecture.
                </p>
                <p className={`border-l-2 border-[#FF5500] pl-4 italic ${isDark ? 'text-[#EDE8E3]/90' : 'text-[#2B2724]'}`}>
                  "I refuse the conventional agency bloat where 10 people dilute an original vision.
                  When you work with me, the person who grasps your objective is the one shaping the
                  light, framing the shot, designing the letterforms, and writing the code."
                </p>
              </div>
            )}

            {activeStoryTab === 'philosophy' && (
              <div className="space-y-6">
                <div className={`p-5 border border-[#FF5500]/30 bg-[#FF5500]/5`}>
                  <h4 className={`font-sans font-bold text-lg ${textPrimary} mb-2 flex items-center space-x-2`}>
                    <Sparkles className="w-4 h-4 text-[#FF5500]" />
                    <span> "What Can I Do For You?",</span>
                  </h4>
                  <p className={`text-sm font-body ${textSecondary} leading-relaxed`}>
                    Most portfolios list what the creator wants to show off. Kym Creates begins with
                    what you are fighting to accomplish. Whether launching an avant-garde fashion line,
                    immortalizing a cultural heritage archive, or engineering a high-speed interactive
                    digital platform.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 border ${borderSubtle} ${bgCard}`}>
                    <div className="font-mono text-xs text-[#FF5500] mb-1">01. TASTE OVER TREND</div>
                    <p className={`text-xs ${textSecondary}`}>
                      Avoiding fleeting social media fads in favor of timeless composition, deliberate
                      typography, and sensory gravity.
                    </p>
                  </div>
                  <div className={`p-4 border ${borderSubtle} ${bgCard}`}>
                    <div className="font-mono text-xs text-[#FACC15] mb-1">02. TECHNICAL RIGOR</div>
                    <p className={`text-xs ${textSecondary}`}>
                      Great art demands technical perfection: calibrated color spaces, 100/100 web
                      vitals, and flawless typographic kerning.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeStoryTab === 'toolkit' && (
              <div className="space-y-4">
                <p className={`text-xs font-mono ${textMuted} mb-2`}>
                  TOOLS ARE CHOSEN FOR PRECISION, SPEED, AND TACTILE FIDELITY:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { cat: 'Photography', val: ['Portrait', 'Fashion', 'Commercial'] },
                    { cat: 'Videography', val: ['Brand Narrative Films', 'Cinematic Commercials & Promos', 'Artist Documentaries & Music Visuals', 'Social-First Cinematic Reels'] },
                    { cat: 'Graphic Design', val: ['Davinci Resolve Studio', 'Photoshop', 'Illustrator'] },
                    { cat: 'Branding & Visual Identity', val: ['Adobe InDesign', 'Adobe Photoshop', 'Figma'] },
                    { cat: 'Web Development', val: ['React', 'TypeScript', 'Tailwind'] },
                  ].map((item) => (
                    <div key={item.cat} className={`p-5 border ${borderSubtle} ${bgDeep} flex flex-col min-h-[150px]`}>
                      <div className={`text-[11px] font-mono text-[#FF5500] uppercase font-bold mb-3 border-b ${borderSubtle} pb-2`}>
                        {item.cat}
                      </div>
                      <ul className="flex flex-col space-y-2 mt-1 list-none m-0 p-0">
                        {item.val.map((tool, index) => (
                          <li key={index} className={`text-xs font-mono ${textSecondary} flex items-center before:content-['•'] before:mr-2 ${textMuted}`}>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className={`pt-6 border-t ${borderSubtle} flex flex-wrap items-center gap-4`}>
              <button
                onClick={onOpenCV}
                className="px-6 py-3 border border-[#FF5500] bg-[#FF5500]/10 hover:bg-[#FF5500] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center space-x-2"
              >
                <span>Read Full Biography & CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className={`px-6 py-3 border ${isDark ? 'border-white/20 hover:border-white text-[#EDE8E3]' : 'border-black/20 hover:border-black text-[#1E1C1A]'} text-xs font-mono uppercase tracking-wider transition-all`}
              >
                Discuss a Collaboration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
