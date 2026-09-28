import React, { useState, useEffect } from 'react';
import { Camera, Film, Layers, Code2, Sparkles, Check, ArrowRight, CornerDownRight, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAPABILITIES } from '../data/portfolioData';

interface CapabilitiesProps {
  theme: 'dark' | 'light';
  onFilterWork: (category: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({
  theme,
  onFilterWork,
}) => {
  const [activeCapability, setActiveCapability] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCapability(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const iconMap: Record<string, any> = {
    Camera,
    Film,
    Layers,
    Code2,
    Sparkles,
  };

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const borderMid = isDark ? 'border-white/15' : 'border-black/12';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgCardHov = isDark ? 'hover:bg-white/[0.05]' : 'hover:bg-black/[0.05]';
  const bgModal = isDark ? 'bg-[#090807]/95' : 'bg-[#FAF8F5]/98';
  const modalBorder = isDark ? 'border-white/10' : 'border-black/12';

  const closeBtnBase = isDark
    ? 'border-white/10 text-white/50 hover:text-white hover:bg-white/10'
    : 'border-black/10 text-black/40 hover:text-black hover:bg-black/10';

  const controlBtn = isDark
    ? 'border-white/20 hover:border-[#FF5500] text-white/70 hover:text-white'
    : 'border-black/15 hover:border-[#FF5500] text-black/60 hover:text-black';

  return (
    <section id="capabilities" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} overflow-hidden`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#FF5500]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b ${borderSubtle}`}>
          <div>
            <h2 className={`text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase ${textPrimary}`}>
              CREATIVE CAPABILITIES
            </h2>
          </div>
          <div className={`mt-4 md:mt-0 font-mono text-xs ${textMuted}`}>
            DISCIPLINES AS CONNECTED EXPRESSIONS
          </div>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = iconMap[cap.iconName] || Sparkles;
            return (
              <div
                key={cap.id}
                onClick={() => setActiveCapability(idx)}
                className={`group cursor-pointer p-6 sm:p-8 border ${borderSubtle} ${bgCard} ${bgCardHov} hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/0 to-[#FF5500]/0 group-hover:from-[#FF5500]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'} group-hover:bg-[#FF5500] group-hover:text-white transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono ${textMuted} transition-colors group-hover:text-[#FF5500]`}>
                    // 0{idx + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className={`font-sans font-bold text-xl sm:text-2xl ${textPrimary} mb-2 group-hover:text-[#FF5500] transition-colors`}>
                    {cap.name}
                  </h3>
                  <p className="text-xs font-mono text-[#FACC15]">{cap.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeCapability !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCapability(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/60"
            >
              <motion.div
                key={CAPABILITIES[activeCapability].id}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-4xl ${bgModal} border ${modalBorder} shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]`}
              >
                {/* Top Control Bar inside Modal */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${modalBorder} bg-black/5`}>
                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <span className="px-2 py-0.5 bg-[#FF5500] text-white font-bold">
                      DISCIPLINE // 0{activeCapability + 1}
                    </span>
                    <span className={`${textMuted} hidden sm:inline uppercase`}>{CAPABILITIES[activeCapability].name}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveCapability((activeCapability - 1 + CAPABILITIES.length) % CAPABILITIES.length)}
                      title="Previous"
                      className={`p-1.5 border ${controlBtn} transition-colors`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveCapability((activeCapability + 1) % CAPABILITIES.length)}
                      title="Next"
                      className={`p-1.5 border ${controlBtn} transition-colors`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveCapability(null)}
                      title="Close"
                      className={`p-1.5 border ${closeBtnBase} transition-all ml-2`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Navigation Ribbon */}
                {/* <div className={`overflow-x-auto border-b ${modalBorder} no-scrollbar bg-black/5`}>
                  <div className="flex px-4 py-2 min-w-max space-x-1">
                    {CAPABILITIES.map((cap, idx) => {
                      const Icon = iconMap[cap.iconName] || Sparkles;
                      return (
                        <button
                          key={cap.id}
                          onClick={() => setActiveCapability(idx)}
                          className={`px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${activeCapability === idx
                            ? 'bg-[#FF5500]/10 text-[#FF5500] font-bold border border-[#FF5500]/30'
                            : `${textMuted} hover:${textPrimary} border border-transparent`
                            }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{cap.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div> */}

                {/* Modal Content Body */}
                <div className="p-6 sm:p-10 overflow-y-auto">
                  <h3 className={`font-sans font-black text-3xl sm:text-4xl lg:text-5xl ${textPrimary} mb-4`}>
                    {CAPABILITIES[activeCapability].name}
                  </h3>
                  <div className="font-editorial italic text-lg sm:text-xl text-[#FACC15] mb-8 border-l-2 border-[#FACC15] pl-4">
                    "{CAPABILITIES[activeCapability].tagline}"
                  </div>

                  <p className={`font-body text-base sm:text-lg ${textSecondary} leading-relaxed mb-10`}>
                    {CAPABILITIES[activeCapability].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Deliverables */}
                    <div>
                      <div className="text-xs font-mono text-[#FF5500] uppercase tracking-wider mb-4 flex items-center space-x-2">
                        <CornerDownRight className="w-4 h-4" />
                        <span>KEY DELIVERABLES & OUTCOMES</span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {CAPABILITIES[activeCapability].deliverables.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center space-x-3 p-3 border ${borderMid} ${bgCard}`}
                          >
                            <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                            <span className={`font-mono text-xs sm:text-sm ${textPrimary}`}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Equip */}
                    <div>
                      <div className={`text-xs font-mono ${textMuted} uppercase tracking-wider mb-4 flex items-center space-x-2`}>
                        <CornerDownRight className="w-4 h-4" />
                        <span>SPECIALIZED RIG & SOFTWARE</span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {CAPABILITIES[activeCapability].tools.map((tool, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 text-xs font-mono border ${borderMid} ${isDark ? 'bg-white/5 text-white/80' : 'bg-black/5 text-black/70'}`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className={`mt-10 pt-6 border-t ${borderMid} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                    <span className={`text-xs sm:text-sm font-mono ${textSecondary}`}>
                      Ready to see proof of {CAPABILITIES[activeCapability].name}?
                    </span>
                    <button
                      onClick={() => {
                        onFilterWork(CAPABILITIES[activeCapability].id);
                        setActiveCapability(null);
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 bg-[#FF5500] hover:bg-[#E04800] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 w-fit"
                    >
                      <span>Filter Archive by {CAPABILITIES[activeCapability].name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
