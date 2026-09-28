import React, { useEffect, useState } from 'react';
import { X, ArrowRight, ArrowLeft, ExternalLink, CheckCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenContact,
  theme = 'dark',
}) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedGalleryImage) {
          setSelectedGalleryImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedGalleryImage]);

  if (!project) return null;

  // Find next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

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
  const controlBtn = isDark
    ? 'border-white/20 hover:border-[#FF5500] text-white/70 hover:text-white'
    : 'border-black/15 hover:border-[#FF5500] text-black/60 hover:text-black';
  const closeBtn = isDark
    ? 'border-white/20 bg-white/5 hover:border-[#FF5500] hover:bg-[#FF5500] text-white'
    : 'border-black/15 bg-black/5 hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white text-black/80';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto no-scrollbar">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Case Study Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.35 }}
        className={`relative z-10 w-full max-w-5xl ${bgPanel} ${textPrimary} border ${borderMid} shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col`}
      >
        {/* Top Control Bar */}
        <div className={`sticky top-0 z-30 flex items-center justify-between px-6 py-4 ${bgPanelHeader} backdrop-blur-md border-b ${borderSubtle}`}>
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="px-2 py-0.5 bg-[#FF5500] text-white font-bold">
              CASE STUDY // {project.number}
            </span>
            <span className={`${textMuted} hidden sm:inline`}>{project.client}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              title="Previous Project"
              className={`p-1.5 border ${controlBtn} transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              title="Next Project"
              className={`p-1.5 border ${controlBtn} transition-colors`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Close Case Study"
              className={`p-1.5 border ${closeBtn} transition-all ml-2`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          {/* Hero Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs text-[#FF5500] uppercase font-bold tracking-widest">
                [ {project.categoryLabel} ]
              </span>
              <span className={textFaint}>•</span>
              <span className={`font-mono text-xs ${textMuted}`}>YEAR {project.year}</span>
              <span className={textFaint}>•</span>
              <span className="font-mono text-xs text-[#FACC15]">ROLE: {project.role}</span>
            </div>

            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight ${textPrimary} mb-3`}>
              {project.title}
            </h1>
            <p className={`text-lg sm:text-xl font-editorial italic ${textSecondary}`}>
              {project.subtitle}
            </p>
          </div>

          {/* Large Hero Visual */}
          <div className={`relative overflow-hidden border ${borderMid} aspect-[16/9] bg-black group`}>
            <img
              src={project.heroImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-[10px] font-mono text-white/80 border border-white/10">
              COMMISSIONED WORK // {project.client}
            </div>
          </div>

          {/* Quick Metrics (if any) */}
          {project.stats && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 border-y ${borderSubtle} py-6`}>
              {project.stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#FF5500] pl-4">
                  <div className={`font-sans font-black text-2xl sm:text-3xl ${textPrimary}`}>
                    {s.value}
                  </div>
                  <div className={`font-mono text-xs ${textMuted} uppercase mt-0.5`}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Story Breakdown: The Challenge → The Approach → What Anthony Created */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-6">
              <div className={`p-4 border ${borderSubtle} ${bgCard}`}>
                <div className="text-[11px] font-mono text-[#FF5500] uppercase mb-1 font-bold">
                  CLIENT / COMMISSION
                </div>
                <div className={`text-sm font-body ${textPrimary} font-medium`}>{project.client}</div>
              </div>

              <div className={`p-4 border ${borderSubtle} ${bgCard}`}>
                <div className="text-[11px] font-mono text-[#FF5500] uppercase mb-1 font-bold">
                  ANTHONY'S SCOPE
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.disciplines.map((d, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 text-[10px] font-mono ${isDark ? 'bg-white/10 text-white/90' : 'bg-black/10 text-black/90'}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-4 border ${isDark ? 'border-[#FF5500]/40 bg-[#FF5500]/10' : 'border-[#FF5500]/20 bg-[#FF5500]/5'}`}>
                <div className="text-[11px] font-mono text-[#FF5500] uppercase mb-1 font-bold">
                  WHAT CAN I DO FOR YOU?
                </div>
                <p className={`text-xs ${textSecondary} mb-3`}>
                  Have a similar challenge in photography, branding, or web?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-2 bg-[#FF5500] hover:bg-[#E04800] text-white text-xs font-mono uppercase font-bold tracking-wider"
                >
                  Start Collaboration
                </button>
              </div>
            </div>

            <div className={`md:col-span-8 space-y-6 text-sm sm:text-base font-body ${textSecondary} leading-relaxed`}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF5500] mb-2 font-bold flex items-center space-x-2">
                  <span>01 // THE CHALLENGE</span>
                </h3>
                <p>{project.challenge}</p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#FACC15] mb-2 font-bold flex items-center space-x-2">
                  <span>02 // THE APPROACH & DIRECTION</span>
                </h3>
                <p>{project.approach}</p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#2563EB] mb-2 font-bold flex items-center space-x-2">
                  <span>03 // WHAT ANTHONY CREATED</span>
                </h3>
                <p>{project.whatCreated}</p>
              </div>

              <div className={`p-4 border-l-2 ${isDark ? 'border-white bg-white/[0.03]' : 'border-black bg-black/[0.03]'}`}>
                <h3 className={`font-mono text-xs uppercase tracking-widest ${textMuted} mb-1 font-bold`}>
                  OUTCOME & IMPACT
                </h3>
                <p className={`italic ${textPrimary}`}>{project.outcome}</p>
              </div>
            </div>
          </div>

          {/* Visual Gallery Evidence */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className={`space-y-4 pt-6 border-t ${borderSubtle}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF5500] font-bold">
                  [ VISUAL EVIDENCE & PLATES // {project.galleryImages.length} PLATES ]
                </h3>
                <span className={`text-[10px] font-mono ${textFaint}`}>
                  CLICK TO INSPECT FULL-RES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedGalleryImage(imgUrl)}
                    className="group relative cursor-pointer overflow-hidden border border-black/15 aspect-[4/3] bg-black"
                  >
                    <img
                      src={imgUrl}
                      alt={`Visual Plate ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 bg-black/80 font-mono text-xs text-white border border-white/20">
                        EXPAND PLATE 0{i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next / Previous Project Footer Bar */}
          <div className={`pt-8 border-t ${borderSubtle} flex flex-wrap items-center justify-between gap-4`}>
            <button
              onClick={() => onSelectProject(prevProject)}
              className={`flex items-center space-x-2 text-xs font-mono ${textMuted} hover:text-[#FF5500] transition-colors`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center space-x-2 text-xs font-mono text-[#FF5500] hover:underline transition-all"
            >
              <span>NEXT CASE STUDY: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Overlay for Gallery Zoom */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={selectedGalleryImage}
                alt="Enlarged plate"
                referrerPolicy="no-referrer"
                className="max-h-[85vh] w-auto object-contain border border-white/20 shadow-2xl"
              />
              <div className="text-center font-mono text-xs text-white/60 mt-3">
                CLICK ANYWHERE OR PRESS ESC TO RETURN
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
