import React, { useState } from 'react';
import { Camera, Film, Layers, Code2, Sparkles, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ANTHONY_BIO } from '../data/portfolioData';

interface PositioningProps {
  theme: 'dark' | 'light';
  onSelectDiscipline: (disciplineId: string) => void;
}

export const Positioning: React.FC<PositioningProps> = ({
  theme,
  onSelectDiscipline,
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const pillars = [
    {
      id: 'photography',
      title: 'Photography',
      icon: Camera,
      phrase: 'Professional Visual Content',
      desc: 'Professional photography for brands, products, events, people, and spaces. I create images that help you present your work, tell your story, and make a strong visual impression.',
      color: '#FF5500',
    },
    {
      id: 'videography',
      title: 'Videography',
      icon: Film,
      phrase: 'Video & Visual Storytelling',
      desc: 'From events and brand content to social media videos, I create engaging visual stories that communicate your message clearly and keep your audience interested.',
      color: '#FACC15',
    },
    {
      id: 'design',
      title: 'Visual Design',
      icon: Layers,
      phrase: 'Branding & Graphic Design',
      desc: 'I create logos, marketing materials, social media graphics, and visual identities that give your brand a clear, professional, and consistent presence.',
      color: '#FF6B00',
    },
    {
      id: 'web',
      title: 'Digital & Web',
      icon: Code2,
      phrase: 'Websites & Digital Experiences',
      desc: 'I design and build modern, responsive websites and digital experiences that are tailored to your goals, your audience, and the needs of your business.',
      color: '#2563EB',
    },
    {
      id: 'creative',
      title: 'Creative Solutions',
      icon: Sparkles,
      phrase: 'Ideas Into Practical Solutions',
      desc: 'Have an idea but not sure how to bring it to life? I help you understand the challenge, develop the right approach, and turn your idea into a practical solution.',
      color: '#FF5500',
    },
  ];

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgCardHov = isDark ? 'hover:bg-white/[0.05]' : 'hover:bg-black/[0.05]';
  const bgModal = isDark ? 'bg-[#090807]/90' : 'bg-[#FAF8F5]/95';
  const modalBorder = isDark ? 'border-white/10' : 'border-black/12';
  const iconIdle = isDark
    ? 'bg-black/50 text-white group-hover:text-[#FF5500] border-white/10 group-hover:border-[#FF5500]/50'
    : 'bg-white/70 text-[#1E1C1A] group-hover:text-[#FF5500] border-black/10 group-hover:border-[#FF5500]/50';
  const numIdle = isDark ? 'text-white/30 group-hover:text-[#FF5500]/60' : 'text-black/25 group-hover:text-[#FF5500]/60';
  const closeBtnBase = isDark
    ? 'border-white/10 text-white/50 hover:text-white hover:bg-white/10'
    : 'border-black/10 text-black/40 hover:text-black hover:bg-black/10';

  return (
    <section className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} overflow-hidden`}>
      {/* Background technical grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b ${borderSubtle}`}>
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#FF5500] mb-2">
              <span>[SERVICES ]</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase ${textPrimary}`}>
              SERVICES BUILT {' '}
              <br />
              <span className="text-[#FF5500] block sm:inline">around your needs.</span>
            </h2>
          </div>
          <p className={`mt-4 md:mt-0 font-mono text-xs max-w-xs ${textMuted}`}>
            I combine creative and technical skills to help you turn ideas, challenges, and
            business needs into practical solutions.
          </p>
        </div>

        {/* The Signature Question Callout Banner */}
        <div className="relative mb-4 p-4 sm:p-8 border border-[#FF5500]/30 bg-gradient-to-r from-[#FF5500]/10 via-transparent to-[#2563EB]/10 overflow-hidden">
          <div className="max-w-5xl">
            <blockquote className={`font-editorial align-center text-2xl sm:text-5xl lg:text-5xl italic ${textPrimary} leading-tight mb-6`}>
              "What do you need?...  I have a solution."
            </blockquote>
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveModal(pillar.id)}
                className={`group cursor-pointer p-6 sm:p-8 border ${borderSubtle} ${bgCard} ${bgCardHov} hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/0 to-[#FF5500]/0 group-hover:from-[#FF5500]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center border ${iconIdle} transition-colors`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono ${numIdle} transition-colors`}>
                      // 0{idx + 1}
                    </span>
                  </div>

                  <h4 className={`font-sans font-bold text-xl sm:text-2xl ${textPrimary} mb-2 group-hover:text-[#FF5500] transition-colors`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-sm font-mono ${textMuted} mb-4 line-clamp-2`}>
                    {pillar.phrase}
                  </p>
                </div>

                <div className="relative z-10 flex items-center space-x-2 text-[#FF5500] font-mono text-xs font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/60"
            >
              {pillars
                .filter((p) => p.id === activeModal)
                .map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.id}
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.95, opacity: 0, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className={`relative w-full max-w-2xl ${bgModal} border ${modalBorder} shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden`}
                    >
                      {/* Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: pillar.color }} />

                      <div className="p-6 sm:p-10">
                        {/* Header */}
                        <div className={`flex justify-between items-start mb-8 border-b ${modalBorder} pb-6`}>
                          <div className="flex items-center space-x-4">
                            <div className={`w-14 h-14 flex items-center justify-center border ${modalBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'} shrink-0`}>
                              <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                            </div>
                            <div>
                              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-1" style={{ color: pillar.color }}>
                                {pillar.phrase}
                              </div>
                              <h3 className={`font-sans font-black text-2xl sm:text-4xl ${textPrimary}`}>
                                {pillar.title}
                              </h3>
                            </div>
                          </div>

                          <button
                            onClick={() => setActiveModal(null)}
                            className={`p-2 border ${closeBtnBase} transition-colors shrink-0`}
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                          <p className={`font-body text-base sm:text-lg ${textSecondary} leading-relaxed`}>
                            {pillar.desc}
                          </p>

                          <div className={`pt-6 mt-6 border-t ${modalBorder}`}>
                            <div className={`font-mono text-[10px] ${textFaint} uppercase tracking-widest mb-3`}>
                              SERVICE DELIVERY FLOW
                            </div>
                            <div className={`flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono ${textSecondary}`}>
                              <span className={`px-2 sm:px-3 py-1.5 border ${modalBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>UNDERSTAND</span>
                              <span className="text-[#FF5500]">→</span>
                              <span className={`px-2 sm:px-3 py-1.5 border ${modalBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>CREATE</span>
                              <span className="text-[#FF5500]">→</span>
                              <span className={`px-2 sm:px-3 py-1.5 border ${modalBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>BUILD</span>
                              <span className="text-[#FF5500]">→</span>
                              <span className={`px-2 sm:px-3 py-1.5 border ${modalBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>DELIVER</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
