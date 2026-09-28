import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, ArrowLeft, CornerDownRight, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessProps {
  theme: 'dark' | 'light';
  onOpenContact: () => void;
}

export const Process: React.FC<ProcessProps> = ({
  theme,
  onOpenContact,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveStep(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    <section id="process" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} overflow-hidden`}>
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-[#FF5500]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b ${borderSubtle}`}>
          <div>
            <h2 className={`text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase ${textPrimary}`}>
              HOW ANTHONY THINKS
            </h2>
          </div>
          <p className={`mt-4 md:mt-0 font-mono text-xs max-w-xs ${textMuted}`}>
            A disciplined 5-stage transformation from ambiguous problem to tangible reality.
          </p>
        </div>

        {/* Root Philosophy Banner */}
        <div className={`mb-12 p-6 border-l-2 border-[#FF5500] ${bgCard}`}>
          <span className="font-mono text-xs text-[#FF5500] uppercase tracking-wider block mb-1">
            THE ROOT PHILOSOPHY
          </span>
          <p className={`font-editorial text-xl sm:text-2xl ${textPrimary} italic`}>
            "The craft means nothing if we solve the wrong question. Everything starts by asking:
            What can I do for you?"
          </p>
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group cursor-pointer p-6 sm:p-8 border ${borderSubtle} ${bgCard} ${bgCardHov} hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5500]/0 to-[#FF5500]/0 group-hover:from-[#FF5500]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span className={`font-mono text-sm px-2 py-1 ${isDark ? 'bg-white/10 text-white/60' : 'bg-black/8 text-black/50'} group-hover:bg-[#FF5500] group-hover:text-white transition-colors`}>
                    {step.number}
                  </span>
                  <ArrowRight className={`w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF5500]`} />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className={`font-sans font-bold text-xl sm:text-2xl ${textPrimary} mb-2 group-hover:text-[#FF5500] transition-colors`}>{step.title}</h3>
                  <p className="text-xs font-mono text-[#FACC15]">{step.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeStep !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStep(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/60"
            >
              <motion.div
                key={PROCESS_STEPS[activeStep].number}
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
                      STAGE {PROCESS_STEPS[activeStep].number}
                    </span>
                    <span className={`${textMuted} hidden sm:inline uppercase`}>Methodology Phase</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveStep((activeStep - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)}
                      title="Previous Step"
                      className={`p-1.5 border ${controlBtn} transition-colors`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveStep((activeStep + 1) % PROCESS_STEPS.length)}
                      title="Next Step"
                      className={`p-1.5 border ${controlBtn} transition-colors`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveStep(null)}
                      title="Close"
                      className={`p-1.5 border ${closeBtnBase} transition-all ml-2`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Navigation Ribbon */}
                <div className={`overflow-x-auto border-b ${modalBorder} no-scrollbar bg-black/5`}>
                  <div className="flex px-4 py-2 min-w-max space-x-1">
                    {PROCESS_STEPS.map((step, idx) => (
                      <button
                        key={step.number}
                        onClick={() => setActiveStep(idx)}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${activeStep === idx
                            ? 'bg-[#FF5500]/10 text-[#FF5500] font-bold border border-[#FF5500]/30'
                            : `${textMuted} hover:${textPrimary} border border-transparent`
                          }`}
                      >
                        {step.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modal Content Body */}
                <div className="p-6 sm:p-10 overflow-y-auto">
                  <h3 className={`font-sans font-black text-3xl sm:text-4xl lg:text-5xl ${textPrimary} mb-4`}>
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <div className="font-editorial italic text-lg sm:text-xl text-[#FACC15] mb-8 border-l-2 border-[#FACC15] pl-4">
                    "{PROCESS_STEPS[activeStep].tagline}"
                  </div>

                  <p className={`font-body text-base sm:text-lg ${textSecondary} leading-relaxed mb-10`}>
                    {PROCESS_STEPS[activeStep].summary}
                  </p>

                  {/* Tangible Deliverable Box */}
                  <div className={`p-5 sm:p-6 border ${borderMid} ${bgCard}`}>
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#FF5500] mb-4 uppercase font-bold">
                      <CornerDownRight className="w-4 h-4" />
                      <span>KEY TANGIBLE DELIVERABLE</span>
                    </div>
                    <div className={`p-4 border ${borderMid} ${isDark ? 'bg-black/40' : 'bg-white/60'} font-mono text-sm sm:text-base ${textPrimary} flex items-center justify-between`}>
                      <span>{PROCESS_STEPS[activeStep].deliverable}</span>
                      <Check className="w-5 h-5 text-[#FF5500] shrink-0 ml-4" />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className={`text-xs font-mono ${textMuted}`}>
                        Next step in sequence: Stage 0{((activeStep + 1) % 5) + 1} ({PROCESS_STEPS[(activeStep + 1) % 5].title})
                      </span>
                      <button
                        onClick={() => {
                          setActiveStep(null);
                          onOpenContact();
                        }}
                        className="text-xs font-mono px-4 py-2 bg-[#FF5500] text-white hover:bg-[#E04800] uppercase font-bold tracking-wider transition-colors inline-flex items-center space-x-2 w-fit"
                      >
                        <span>Initiate Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
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

