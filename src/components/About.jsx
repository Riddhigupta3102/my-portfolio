import React from 'react';
import { 
  Briefcase, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Rocket, 
  Cpu,
  GraduationCap 
} from 'lucide-react';
import { aboutData, personalInfo } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Web Products With Focus & Reliability
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Bridging structured computer science fundamentals with practical full-stack deployment.
          </p>
        </div>

        {/* 3 Stat Cards (Prominent for Recruiters) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aboutData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 hover:shadow-glow-indigo"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Key Credentials */}
          <div className="lg:col-span-7 glass-card p-7 sm:p-9 rounded-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
              <span>Full Stack Developer & Founder</span>
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 dark:text-white">BCA graduate (IGNOU, Delhi, 2025)</strong> and a passionate <strong className="text-indigo-600 dark:text-indigo-400">MERN Stack developer</strong> with hands-on experience building responsive full-stack web applications and REST APIs.
              </p>
              <p>
                To reinforce my software engineering foundations, I completed a rigorous <strong className="text-slate-900 dark:text-white">Java Full Stack certification at DUCAT (Pitampura)</strong>. I also completed an industry <strong className="text-slate-900 dark:text-white">Web Builder internship at Adaan Digital Solutions</strong>, where I was trusted with client requirement analysis, cross-browser compatibility, testing, and responsive styling.
              </p>
              <p>
                Beyond coursework, I am the founder of <strong className="text-indigo-600 dark:text-indigo-400">GanExa Digital Solution</strong>, delivering modern, conversion-engineered websites for real commercial clients. I take pride in clean code, robust client-server architectures, and leveraging modern AI-assisted development tools (Cursor, Copilot, Claude) to accelerate delivery.
              </p>
            </div>

            {/* Quick Badges Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>RESTful APIs & CRUD Systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>MongoDB & SQL Database Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Cross-Browser & Mobile-First UIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Git/GitHub & Vercel Deployments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            {aboutData.highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                    {idx === 0 && <Layers size={20} />}
                    {idx === 1 && <Rocket size={20} />}
                    {idx === 2 && <Cpu size={20} />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
