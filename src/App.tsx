import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Positioning } from './components/Positioning';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { WorkArchive } from './components/WorkArchive';
import { ProjectModal } from './components/ProjectModal';
import { Process } from './components/Process';
import { ClientsTrust } from './components/ClientsTrust';
import { SolutionFinder } from './components/SolutionFinder';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { DisciplineCategory, Project } from './types/portfolio';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kym_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // Dark is default as requested for the cinematic editorial aesthetic
    }
    return 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<DisciplineCategory>('all');
  const [prefilledNeed, setPrefilledNeed] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('kym_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#090807';
      document.body.style.color = '#EDE8E3';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#F7F5F2';
      document.body.style.color = '#1E1C1A';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectDiscipline = (disciplineId: string) => {
    setSelectedCategory(disciplineId as DisciplineCategory);
    scrollToWork();
  };

  const handlePrefillContact = (need: string) => {
    setPrefilledNeed(need);
    scrollToContact();
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative ${theme === 'dark'
        ? 'bg-[#090807] text-[#EDE8E3]'
        : 'bg-[#F7F5F2] text-[#1E1C1A]'
        }`}
    >
      {/* Custom Desktop Contextual Cursor */}
      <CustomCursor />

      {/* Background Subtle Grain Texture */}
      <div className="fixed inset-0 pointer-events-none bg-grain opacity-80 z-30" />

      {/* Editorial Navigation Bar */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Experience Stream */}
      <main>
        {/* 1. Hero Landing Page (Featuring the requested images 1 & 2 styles) */}
        <Hero
          theme={theme}
          onExploreWork={scrollToWork}
          onOpenContact={scrollToContact}
        />

        {/* 2. About: Who is Anthony? */}
        <About
          theme={theme}
          onOpenCV={() => setIsCVOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 3. Creative Capabilities: The Connected Ecosystem */}
        <Capabilities
          theme={theme}
          onFilterWork={handleSelectDiscipline}
        />

        {/* 4. Selected Works: Editorial Case Studies Archive */}
        <WorkArchive
          theme={theme}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Brand Positioning: Different disciplines. One creative mind. */}
        <Positioning
          theme={theme}
          onSelectDiscipline={handleSelectDiscipline}
        />

        {/* 6. Process: How Anthony Thinks */}
        <Process
          theme={theme}
          onOpenContact={scrollToContact}
        />

        {/* 7. Clients, Proof & Testimonials */}
        <ClientsTrust theme={theme} />

        {/* 9. Contact / Initiation */}
        <Contact
          theme={theme}
          prefilledNeed={prefilledNeed}
        />
      </main>

      {/* Editorial Footer */}
      <Footer theme={theme} />

      {/* Full-screen Deep Case Study Modal */}
      <ProjectModal
        theme={theme}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenContact={() => {
          setSelectedProject(null);
          scrollToContact();
        }}
      />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal
        theme={theme}
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
}
