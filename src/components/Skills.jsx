import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Globe, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Map string icon names to Lucide icon components
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Code2: Code2,
    Globe: Globe,
    Wrench: Wrench,
    ShieldCheck: ShieldCheck,
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Sparkles size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical, industry-ready toolsets applied across production full-stack engineering.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div
                key={group.category}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-glow-indigo group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Badges (No progress bars, clean chips) */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-150"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                  <span>{group.skills.length} competencies</span>
                  <span className="text-indigo-500/70 group-hover:text-indigo-400 font-medium transition-colors">
                    Production Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
