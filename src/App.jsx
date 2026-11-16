import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark mode for sleek developer aesthetic, or user saved preference
    const saved = localStorage.getItem('rg_theme');
    if (saved) return saved === 'dark';
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('rg_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('rg_theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience & Education */}
        <Experience />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
