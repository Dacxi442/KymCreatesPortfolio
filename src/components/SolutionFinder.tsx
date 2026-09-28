import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Compass } from 'lucide-react';

interface SolutionFinderProps {
  theme: 'dark' | 'light';
  onPrefillContact: (scenario: string) => void;
}

export const SolutionFinder: React.FC<SolutionFinderProps> = ({
  theme,
  onPrefillContact,
}) => {
  const scenarios = [
    {
      id: 'brand-launch',
      label: 'Brand Launch & Identity',
      question: '"We are launching a new luxury or cultural brand and need a world-class visual identity, launch imagery, and website."',
      disciplines: ['Graphic Design', 'Photography', 'Web Development'],
      anthonyApproach: 'Anthony orchestrates the entire brand ecosystem: designing the typographic mark, art-directing the founding photo campaign, and coding a lightning-fast digital home.',
      deliverables: ['Custom Brand Identity System', 'Launch Photo Series (30+ Plates)', 'Interactive Custom Web Platform'],
      timeline: '4 — 8 Weeks',
    },
    {
      id: 'editorial-photo',
      label: 'Editorial & Campaign Shoot',
      question: '"We have a collection, album, or campaign that requires provocative, high-fashion imagery and color grading."',
      disciplines: ['Editorial Photography', 'Art Direction', 'Color Mastering'],
      anthonyApproach: 'Crafting a bespoke lighting setup tailored to your garments or personas, directing the set with composure, and delivering museum-grade retouching.',
      deliverables: ['Full Studio/Location Shoot', 'High-Res Master Lookbook Plates', 'Social Motion Cutdowns'],
      timeline: '1 — 3 Weeks',
    },
    {
      id: 'bespoke-web',
      label: 'Bespoke Web Exhibition',
      question: '"Our current website looks like a cookie-cutter template. We need an unforgettable digital exhibition that reflects our prestige."',
      disciplines: ['UI/UX Architecture', 'React / TypeScript', 'Motion Design'],
      anthonyApproach: 'Rejecting sterile templates. Engineering custom motion choreography, mathematical typography grids, and sub-second asset streaming.',
      deliverables: ['Custom Interactive Web Platform', 'Sub-second Performance Score', 'CMS & Maintenance Handover'],
      timeline: '3 — 6 Weeks',
    },
    {
      id: 'hybrid-solution',
      label: 'Complex Creative Challenge',
      question: '"We have an ambitious challenge that does not fit neatly into one bucket. We need one creative mind to solve it end-to-end."',
      disciplines: ['Creative Direction', 'Cross-Disciplinary Hybrid'],
      anthonyApproach: 'Anthony sits down with your leadership, extracts the underlying problem, and acts as the singular creative director bridging concept, visuals, and execution.',
      deliverables: ['Strategic Creative Blueprint', 'Multidisciplinary Production', 'Direct Founder Collaboration'],
      timeline: 'Flexible Commission',
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('brand-launch');
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgDeepPanel = isDark ? 'bg-[#0C0B0A]' : 'bg-[#FFFFFF]';
  const sectionBg = isDark
    ? 'bg-gradient-to-b from-black/40 via-[#FF5500]/5 to-black/40'
    : 'bg-gradient-to-b from-white/40 via-[#FF5500]/5 to-white/40';

  return (
    <section className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">

        {/* Intro heading — appears ABOVE the grid, so moved here for clarity */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#FF5500] mb-2">
            <span>[ SCENARIO ARCHITECT // INTERACTIVE ]</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-editorial font-bold tracking-tight ${textPrimary} mb-4`}>
            "What can I do for you?"
          </h2>
          <p className={`font-body text-base ${textSecondary}`}>
            Select what you are facing right now to see how Anthony connects disciplines into an
            immediate solution.
          </p>
        </div>

        {/* Scenario Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {scenarios.map((sc) => {
            const isSelected = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`p-4 border text-left transition-all ${isSelected
                  ? 'border-[#FF5500] bg-[#FF5500]/15 text-white shadow-[0_0_20px_rgba(255,85,0,0.25)]'
                  : `${borderSubtle} ${bgCard} ${isDark ? 'text-[#C5BDB5] hover:border-white/30 hover:text-white' : 'text-[#3E3832] hover:border-black/25 hover:text-[#1E1C1A]'}`
                  }`}
              >
                <div className="font-mono text-[10px] text-[#FF5500] uppercase mb-1 font-bold">
                  SCENARIO
                </div>
                <div className={`font-sans font-bold text-sm ${isSelected ? 'text-white' : textPrimary}`}>{sc.label}</div>
              </button>
            );
          })}
        </div>

        {/* Scenario Solution Output Card */}
        <div className={`p-8 sm:p-12 border border-[#FF5500]/40 ${bgDeepPanel} relative shadow-2xl`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF5500] uppercase tracking-wider font-bold">
                  YOUR CHALLENGE:
                </span>
                <p className={`font-editorial text-xl sm:text-2xl ${textPrimary} italic mt-1 leading-snug`}>
                  {activeScenario.question}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#FACC15] uppercase tracking-wider font-bold">
                  ANTHONY'S INTEGRATED SOLUTION:
                </span>
                <p className={`font-body text-base ${textSecondary} leading-relaxed mt-1`}>
                  {activeScenario.anthonyApproach}
                </p>
              </div>

              <div>
                <span className={`font-mono text-xs ${textMuted} uppercase tracking-wider block mb-2`}>
                  DISCIPLINES COMBINED FOR THIS OUTCOME:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeScenario.disciplines.map((d, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 font-mono text-xs border border-[#FF5500]/40 bg-[#FF5500]/10 ${textPrimary}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className={`lg:col-span-4 p-6 border ${borderSubtle} ${bgCard} space-y-4`}>
              <div className="font-mono text-xs text-[#FF5500] uppercase font-bold">
                EXPECTED DELIVERABLES
              </div>
              <div className="space-y-2">
                {activeScenario.deliverables.map((item, idx) => (
                  <div key={idx} className={`flex items-start space-x-2 text-xs font-mono ${textSecondary}`}>
                    <Check className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={`pt-4 border-t ${borderSubtle} flex items-center justify-between text-xs font-mono ${textMuted}`}>
                <span>EST. TIMELINE:</span>
                <span className={`${textPrimary} font-bold`}>{activeScenario.timeline}</span>
              </div>

              <button
                onClick={() => onPrefillContact(activeScenario.label)}
                className="w-full py-3 bg-[#FF5500] hover:bg-[#E04800] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <span>Request This Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
