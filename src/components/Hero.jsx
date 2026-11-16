import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowRight, 
  Send, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data';

export default function Hero() {
  const handleDownloadResume = () => {
    // Fire celebratory confetti for recruiters
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981']
      });
    } catch (e) {
      // Fallback silently if canvas-confetti is not loaded
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Open to Work Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">{personalInfo.status} — Software Developer & Full Stack Roles</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Hi, I'm{' '}
          <span className="text-gradient inline-block hover:scale-[1.02] transition-transform duration-300">
            {personalInfo.name}
          </span>
        </h1>

        {/* Professional Title */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6 max-w-3xl mx-auto">
          {personalInfo.headline}
        </p>

        {/* One-line Pitch */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {personalInfo.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {/* View Projects */}
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </button>

          {/* Download Resume */}
          <a
            href={personalInfo.resumePath}
            download="Riddhi_Gupta_Resume_2026.pdf"
            onClick={handleDownloadResume}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800/90 shadow-sm transition-all duration-200 flex items-center gap-2 active:scale-95 group"
          >
            <Download size={18} className="text-indigo-600 dark:text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-slate-300 dark:hover:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Send size={16} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Social Icons & Quick Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Connect:
            </span>
            
            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-700 transition-all duration-200 shadow-sm hover:scale-105"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-700 transition-all duration-200 shadow-sm hover:scale-105"
            >
              <Linkedin size={18} />
            </a>

            {/* Email */}
            <a
              href={personalInfo.socials.email}
              aria-label="Send Email"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-700 transition-all duration-200 shadow-sm hover:scale-105"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Quick Core Tech Chips */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-semibold text-indigo-600 dark:text-indigo-400">
              MongoDB
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-semibold text-slate-700 dark:text-slate-300">
              Express
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-semibold text-cyan-600 dark:text-cyan-400">
              React
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 font-semibold text-emerald-600 dark:text-emerald-400">
              Node
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
