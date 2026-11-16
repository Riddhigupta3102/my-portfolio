import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose, images, currentIndex, onIndexChange, projectTitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images, onClose, onIndexChange]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {projectTitle}
            </h4>
            <p className="text-xs text-slate-400">
              {currentImage.caption || `Screenshot ${currentIndex + 1} of ${images.length}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Image Viewport */}
        <div className="relative flex-1 flex items-center justify-center bg-black/60 p-2 sm:p-4 min-h-[300px] overflow-hidden">
          <img
            src={currentImage.url}
            alt={currentImage.caption || projectTitle}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-lg transition-all duration-300"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-indigo-600 text-white border border-white/10 shadow-lg transition-colors cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex + 1) % images.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-indigo-600 text-white border border-white/10 shadow-lg transition-colors cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector Strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/90 border-t border-slate-800 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                className={`shrink-0 w-16 h-11 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'border-indigo-500 scale-105 ring-2 ring-indigo-500/30'
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption || `Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
