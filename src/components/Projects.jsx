import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Maximize2,
  ChevronRight,
  Flame,
  Globe
} from 'lucide-react';
import { projectsData } from '../data';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    projectTitle: '',
    images: [],
    currentIndex: 0,
  });

  // Track active thumbnail for each project card
  const [activeThumbnails, setActiveThumbnails] = useState({
    'shopx-mern': 0,
    'ganexa-digital': 0,
    'portfolio-foundations': 0,
  });

  const handleThumbnailClick = (projectId, index) => {
    setActiveThumbnails((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const openModal = (project, index = 0) => {
    setModalState({
      isOpen: true,
      projectTitle: project.title,
      images: project.gallery || [{ url: project.primaryImage, caption: project.title }],
      currentIndex: index,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleModalIndexChange = (newIndex) => {
    setModalState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Sparkles size={14} />
            <span>Featured Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Real Implementations
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world full stack web applications built with modern architectures, live databases, and production deployments.
          </p>
        </div>

        {/* Featured Projects: Large Rich Cards */}
        <div className="space-y-16">
          {featuredProjects.map((project, idx) => {
            const currentThumbIndex = activeThumbnails[project.id] || 0;
            const currentImage = project.gallery?.[currentThumbIndex]?.url || project.primaryImage;
            const currentCaption = project.gallery?.[currentThumbIndex]?.caption || project.title;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                {/* Subtle Card Background Accent Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Showcase (Screenshots + Interactive Previewer) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 dark:border-slate-700/80 bg-slate-950 shadow-2xl group/img">
                      
                      {/* Browser Window Mockup Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                          {project.liveUrl.replace('https://', '')}
                        </div>
                        <button
                          onClick={() => openModal(project, currentThumbIndex)}
                          className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
                          title="Zoom Screenshot"
                        >
                          <Maximize2 size={13} />
                          <span className="hidden sm:inline">Zoom</span>
                        </button>
                      </div>

                      {/* Main Screenshot Display */}
                      <div 
                        className="relative h-64 sm:h-80 w-full overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
                        onClick={() => openModal(project, currentThumbIndex)}
                      >
                        <img
                          src={currentImage}
                          alt={currentCaption}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                          <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                            <Maximize2 size={13} />
                            <span>Click to expand full resolution</span>
                          </div>
                        </div>

                        {/* Caption Tag */}
                        <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-slate-200 text-xs font-medium border border-white/10 flex items-center justify-between">
                          <span className="truncate">{currentCaption}</span>
                          <span className="text-[10px] text-indigo-400 font-mono shrink-0 ml-2">
                            {currentThumbIndex + 1} / {project.gallery?.length || 1}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Screenshot Thumbnails Switcher */}
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
                          {project.gallery.map((thumb, tIdx) => (
                            <button
                              key={tIdx}
                              onClick={() => handleThumbnailClick(project.id, tIdx)}
                              className={`shrink-0 w-14 sm:w-16 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                                currentThumbIndex === tIdx
                                  ? 'border-indigo-500 scale-105 ring-1 ring-indigo-500'
                                  : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                              title={thumb.caption}
                            >
                              <img
                                src={thumb.url}
                                alt={thumb.caption}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
                      <Flame size={13} />
                      <span>{project.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Architecture Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                        Key Architectural Features:
                      </div>
                      {project.features?.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Live Demo + GitHub */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Live Demo */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all duration-200 flex items-center gap-2 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={15} />
                      </a>

                      {/* GitHub Repo */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm"
                      >
                        <Github size={16} />
                        <span>GitHub Repo</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Small Bonus Card: Web Foundations & GitHub Repos */}
        {otherProjects.length > 0 && (
          <div className="mt-12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 text-center">
              Additional Foundations & Work
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {project.badge}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-indigo-500 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {project.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <span>Explore Repository</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Screenshot Modal */}
      <ProjectModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        projectTitle={modalState.projectTitle}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onIndexChange={handleModalIndexChange}
      />
    </section>
  );
}
