import React from 'react';
import { Quote, Award, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import {  ANTHONY_BIO } from '../data/portfolioData';

interface ClientsTrustProps {
  theme: 'dark' | 'light';
}

export const ClientsTrust: React.FC<ClientsTrustProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgDeep = isDark ? 'bg-black/40' : 'bg-white/70';

  return (
    <section id="clients" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b ${borderSubtle}`}>
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#FF5500] mb-2">
              <span>[ SECTION 06 // CREDIBILITY & PROOF ]</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase ${textPrimary}`}>
              SELECTED COLLABORATIONS
            </h2>
          </div>
          <div className={`mt-4 md:mt-0 font-mono text-xs ${textMuted}`}>
            PROVEN TRACK RECORD ACROSS DISCIPLINES
          </div>
        </div>

        {/* High-level Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className={`p-6 border ${borderSubtle} ${bgCard}`}>
            <div className="font-sans font-black text-4xl sm:text-5xl text-[#FF5500]">
              {ANTHONY_BIO.experienceYears}
            </div>
            <div className={`font-mono text-xs uppercase tracking-wider ${textPrimary} mt-1`}>
              Years Active Practice
            </div>
            <div className={`font-mono text-[10px] ${textFaint} mt-0.5`}>
              Continuous multidisciplinary growth
            </div>
          </div>

          <div className={`p-6 border ${borderSubtle} ${bgCard}`}>
            <div className={`font-sans font-black text-xl sm:text-5xl ${textPrimary}`}>
              {ANTHONY_BIO.projectsCompleted}
            </div>
            <div className={`font-mono text-xs uppercase tracking-wider ${textPrimary} mt-1`}>
              Delivered Commissions
            </div>
            <div className={`font-mono text-[10px] ${textFaint} mt-0.5`}>
              From campaigns to bespoke platforms
            </div>
          </div>

          <div className={`p-6 border ${borderSubtle} ${bgCard}`}>
            <div className="font-sans font-black text-xl sm:text-5xl text-[#FACC15]">
              {ANTHONY_BIO.clientsSatisfied}
            </div>
            <div className={`font-mono text-xs uppercase tracking-wider ${textPrimary} mt-1`}>
              International Clients
            </div>
            <div className={`font-mono text-[10px] ${textFaint} mt-0.5`}>
              Paris, London, New York
            </div>
          </div>

          <div className={`p-6 border ${borderSubtle} ${bgCard}`}>
            <div className="font-sans font-black text-4xl sm:text-5xl text-[#2563EB]">
              100%
            </div>
            <div className={`font-mono text-xs uppercase tracking-wider ${textPrimary} mt-1`}>
              On-Time Handover
            </div>
            <div className={`font-mono text-[10px] ${textFaint} mt-0.5`}>
              Precision delivery & direct accountability
            </div>
          </div>
        </div>
      </div>


        </section>
  );
};
