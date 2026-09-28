import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { CV_DATA, ANTHONY_BIO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'dark' | 'light';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme = 'dark' }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kimani_Anthony_CV.pdf';
    link.setAttribute('download', 'Kimani_Anthony_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const borderMid = isDark ? 'border-white/20' : 'border-black/15';
  const bgPanel = isDark ? 'bg-[#0E0D0B]' : 'bg-[#F9F7F4]';
  const bgPanelHeader = isDark ? 'bg-[#0E0D0B]/95' : 'bg-[#F9F7F4]/95';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const tagBg = isDark ? 'bg-white/5 border-white/15' : 'bg-black/5 border-black/10';

  const iconBase = isDark
    ? 'border-white/20 hover:border-white text-[#EDE8E3]'
    : 'border-black/20 hover:border-black text-[#1E1C1A]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto no-scrollbar">
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className={`relative z-10 w-full max-w-4xl ${bgPanel} ${textPrimary} border ${borderMid} shadow-2xl my-auto max-h-[90vh] flex flex-col`}
      >
        {/* Top Control Bar */}
        <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 ${bgPanelHeader} backdrop-blur-md border-b ${borderSubtle}`}>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            <span className="font-bold tracking-widest text-[#FF5500]">
              CURRICULUM VITAE // ANTHONY
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              title="Print CV"
              className={`px-3 py-1.5 border ${iconBase} text-xs font-mono flex items-center space-x-1.5 transition-colors hidden sm:flex`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-4 py-1.5 bg-[#FF5500] hover:bg-[#E04800] text-white text-xs font-mono uppercase tracking-wider font-bold flex items-center space-x-1.5 transition-colors shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 border ${iconBase} ml-2 transition-colors`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Header Identity Block */}
          <div className={`border-b ${borderSubtle} pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4`}>
            <div>
              <h1 className={`text-3xl sm:text-4xl font-sans font-black ${textPrimary}`}>
                {CV_DATA.name}
              </h1>
              <p className="text-sm font-mono text-[#FF5500] mt-1">{CV_DATA.title}</p>
              <p className={`text-xs font-mono ${textMuted} mt-0.5`}>{CV_DATA.location}</p>
            </div>
            <div className={`text-left sm:text-right font-mono text-xs ${textSecondary}`}>
              <div>{ANTHONY_BIO.email}</div>
              <div className="text-[#FF5500]">● {ANTHONY_BIO.availability}</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#FF5500] mb-2 font-bold">
              // EXECUTIVE SUMMARY
            </h2>
            <p className={`font-body text-sm sm:text-base ${textSecondary} leading-relaxed`}>
              {CV_DATA.summary}
            </p>
          </div>

          {/* Disciplines & Core Competencies */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#FACC15] mb-3 font-bold">
              // CORE DISCIPLINES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {CV_DATA.disciplines.map((d, i) => (
                <div
                  key={i}
                  className={`p-2.5 border ${borderSubtle} ${bgCard} text-xs font-mono ${textSecondary}`}
                >
                  ✦ {d}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#FF5500] mb-6 font-bold flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-[#FF5500]" />
              <span>// RELEVANT EXPERIENCE</span>
            </h2>

            <div className="space-y-8">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className={`border-l-2 ${borderMid} pl-4 space-y-2`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className={`font-sans font-bold text-lg ${textPrimary}`}>{exp.role}</h3>
                    <span className="font-mono text-xs text-[#FF5500]">{exp.period}</span>
                  </div>
                  <div className="font-mono text-xs text-[#FACC15]">{exp.company}</div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className={`text-xs sm:text-sm font-body ${textSecondary} leading-relaxed`}>
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#2563EB] mb-4 font-bold flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#2563EB]" />
              <span>// EDUCATION & CREDENTIALS</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className={`p-4 border ${borderSubtle} ${bgCard}`}>
                  <div className={`font-sans font-bold text-sm ${textPrimary}`}>{edu.degree}</div>
                  <div className={`font-mono text-xs ${textMuted} mt-1`}>{edu.institution}</div>
                  <div className="font-mono text-[10px] text-[#FF5500] mt-1">Class of {edu.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h2 className={`font-mono text-xs uppercase tracking-widest ${textMuted} mb-3 font-bold`}>
              // PRODUCTION HARDWARE & SOFTWARE
            </h2>
            <div className="flex flex-wrap gap-2">
              {CV_DATA.technicalToolkit.map((t, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 text-xs font-mono border ${tagBg} ${textSecondary}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
