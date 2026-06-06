import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

        {/* School Logo & Title */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <div className="bg-emerald-500 w-9 h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-base md:text-xl text-slate-900 shadow">
            EA
          </div>
          <div>
            <h1 className="font-serif font-bold text-sm md:text-lg leading-tight tracking-wide">Elite</h1>
            <p className="text-[10px] text-emerald-400 tracking-widest uppercase">Academy</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#staff" className="hover:text-emerald-400 transition-colors">Staff</a>
          <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
          <a href="#contact" className="bg-emerald-500 text-slate-900 px-5 py-2.5 rounded-md font-semibold hover:bg-emerald-400 transition-colors shadow-sm">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        // FIXED: was 'bg-slate-850' which is not a real Tailwind class — nav had no bg, links were invisible
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3 shadow-inner">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1">About</a>
          <a href="#staff" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1">Staff</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1">Gallery</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center text-sm font-bold bg-emerald-500 text-slate-900 py-2.5 rounded-md shadow">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}