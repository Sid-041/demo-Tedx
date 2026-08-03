import React, { useState } from 'react';

export function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'speakers', label: 'Past Speakers' },
    { id: 'quiz', label: 'Speaker Quiz' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'register', label: 'Register' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 tedx-glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Red X Accent */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#E62B1E] rounded-br-2xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-[#E62B1E]/40 group-hover:scale-105 transition-transform">
            X
          </div>
          <div className="leading-none">
            <div className="text-2xl font-black tracking-tighter text-white font-sans">
              TED<span className="text-[#E62B1E] font-extrabold">x</span>
              <span className="text-white font-bold ml-1">Tapmi</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#E62B1E] block">
              Independently Organized
            </span>
          </div>
        </button>

        {/* Multi-Page Desktop Router Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#0F0F14] border border-[#22222F] p-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E62B1E] text-white shadow-md shadow-[#E62B1E]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary Action CTA: Register Pass Button */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('register')}
            className="px-5 py-2.5 bg-[#E62B1E] hover:bg-[#C42115] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E62B1E]/40 transition-all hover:scale-105 cursor-pointer"
          >
            🎟️ Register Pass
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
        >
          <span className="text-2xl font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0E] border-b border-[#E62B1E]/40 px-6 py-6 space-y-3 animate-page-enter">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left font-bold py-2.5 px-3 rounded-lg text-sm transition-colors cursor-pointer ${
                currentPage === link.id ? 'bg-[#E62B1E] text-white' : 'text-gray-300 hover:bg-[#151520]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <hr className="border-[#222230]" />
          <button
            onClick={() => handleNavClick('register')}
            className="w-full py-3 bg-[#E62B1E] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
          >
            🎟️ Register Delegate Pass
          </button>
        </div>
      )}
    </header>
  );
}
