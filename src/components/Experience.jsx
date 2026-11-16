import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Award,
  ExternalLink 
} from 'lucide-react';
import { experienceData, educationData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Sparkles size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical client delivery, web engineering internship, and formal computer science education.
          </p>
        </div>

        {/* Part 1: Vertical Timeline for Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Industry & Leadership Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Hands-on commercial development, testing & agency leadership
              </p>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-12 ml-3 sm:ml-4">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-[#0b0f19] transition-all duration-200 group-hover:scale-125 ${
                  exp.isCurrent ? 'bg-indigo-600 ring-4 ring-indigo-500/20' : 'bg-slate-400 dark:bg-slate-600'
                }`} />

                {/* Content Box */}
                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-md">
                  
                  {/* Top Line: Role & Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Calendar size={13} className="text-indigo-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {exp.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5 mb-4">
                    <span>{exp.organization}</span>
                    <span>•</span>
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Education & Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/30">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Education & Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Formal Computer Science degree and full-stack software certifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 shadow-md group relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span className="text-slate-500 dark:text-slate-400">{edu.location}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
