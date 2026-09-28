import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles, Layers, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { DisciplineCategory, Project } from '../types/portfolio';

interface WorkArchiveProps {
  theme: 'dark' | 'light';
  selectedCategory: DisciplineCategory;
  onCategoryChange: (cat: DisciplineCategory) => void;
  onOpenProject: (project: Project) => void;
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({
  theme,
  selectedCategory,
  onCategoryChange,
  onOpenProject,
}) => {
  const categories: { id: DisciplineCategory; label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'photography', label: 'Photography' },
    { id: 'video', label: 'Videography' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'web', label: 'Digital & Web' },
    { id: 'creative', label: 'Creative Direction' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';

  return (
    <section id="work" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b ${borderSubtle}`}>
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#FF5500] mb-2">
              <span>[ SECTION 04 // SELECTED ARCHIVE ]</span>
            </div>
            <h2 className={`text-4xl sm:text-6xl font-sans font-black tracking-tight ${textPrimary} uppercase`}>
              SELECTED WORKS
            </h2>
          </div>
          <div className={`mt-4 md:mt-0 font-mono text-xs ${textMuted}`}>
            MINI CASE STUDIES // EDITORIAL ARCHIVE
          </div>
        </div>

        {/* Discipline Filter Tabs */}
        <div className={`flex flex-wrap items-center gap-2 mb-16 pb-4 border-b ${borderSubtle}`}>
          <span className={`font-mono text-xs ${textFaint} mr-2 flex items-center space-x-1`}>
            <Filter className="w-3 h-3 text-[#FF5500]" />
            <span>FILTER:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${selectedCategory === cat.id
                  ? 'bg-[#FF5500] text-white font-bold shadow-[0_0_15px_rgba(255,85,0,0.3)]'
                  : `border ${borderSubtle} ${isDark ? 'bg-white/[0.02] text-[#C5BDB5] hover:border-white/30 hover:text-white' : 'bg-black/[0.03] text-[#4A453F] hover:border-black/25 hover:text-black'}`
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery descriptor */}
        <div className="mb-8">
          <p className={`font-mono text-xs ${textMuted} uppercase tracking-widest border-l-2 border-[#FF5500] pl-3 py-1 bg-gradient-to-r from-[#FF5500]/5 to-transparent`}>
            EXPLORE A SELECTION OF ALREADY DONE PROJECTS AND COMMISSIONED WORKS.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                className={`group cursor-pointer relative overflow-hidden border ${borderSubtle} ${isDark ? 'bg-black/60' : 'bg-black/5'} hover:border-[#FF5500]/50 transition-all duration-300 ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
              >
                <div className={`relative w-full ${isFeatured ? 'aspect-[16/9] lg:h-full' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Tags */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="px-2 py-1 bg-black/80 font-mono text-[10px] text-white border border-white/10 uppercase tracking-wider backdrop-blur-sm">
                      {project.client}
                    </span>
                    <span className="px-2 py-1 bg-[#FF5500]/90 font-mono text-[10px] text-white font-bold tracking-wider shadow-lg">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-mono text-[10px] text-[#FF5500] tracking-widest font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      PROJECT // {project.number}
                    </div>

                    <h3 className={`font-sans font-black text-white tracking-tight leading-none mb-2 ${isFeatured ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                      {project.title}
                    </h3>

                    <p className={`font-editorial italic text-white/80 line-clamp-1 mb-3 ${isFeatured ? 'text-lg' : 'text-sm'}`}>
                      {project.subtitle}
                    </p>

                    <div className="flex items-center space-x-2 font-mono text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <span className="text-[#FACC15] uppercase">Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
