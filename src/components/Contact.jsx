import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone,
  MessageSquare,
  ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, contactInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // If user provided a Formspree endpoint in data.js
    if (personalInfo.formspreeEndpoint && personalInfo.formspreeEndpoint.trim() !== '') {
      try {
        const endpoint = `https://formspree.io/f/${personalInfo.formspreeEndpoint.trim()}`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (err) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Formspree not configured yet: simulate submission + prepare mailto fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });

        // Trigger native email client with pre-filled details
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || `Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Riddhi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Sparkles size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Open to Software Developer / Full Stack roles. Let's talk.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Whether you have an SDE opening at your company, an MNC fresher opening, or want to discuss a full-stack project, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Direct Email
              </span>
              <div className="mt-2 flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate font-semibold">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-500 font-medium mt-2 flex items-center gap-1">
                  <Check size={12} /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Quick Channels List */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Profiles & Location
              </h4>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block">GitHub</span>
                    <span className="text-xs text-slate-400 font-mono">@Riddhigupta3102</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block">LinkedIn</span>
                    <span className="text-xs text-slate-400">riddhi-gupta-540568330</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-semibold text-slate-800 dark:text-slate-200">Current Location</span>
                  <span className="text-slate-500 dark:text-slate-400">{personalInfo.location} (Open to Relocation)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card p-7 sm:p-9 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out the form below to initiate an inquiry or interview discussion.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins (Recruiter)"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Role Opportunity
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. SDE-1 / Software Developer Opening at Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Riddhi, we reviewed your e-commerce and full-stack projects and would like to schedule a technical round..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Submit Status Banner */}
              {submitStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <Check size={18} />
                  <span>Thank you! Your message has been sent. I will get back to you shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-medium">
                  Oops! Something went wrong. Please click the direct email button or mail directly to riddhigupta3102@gmail.com.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}?subject=Interview%20Inquiry%20for%20Riddhi%20Gupta`}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 underline underline-offset-4 transition-colors"
                >
                  Or click to compose directly in your email app →
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
