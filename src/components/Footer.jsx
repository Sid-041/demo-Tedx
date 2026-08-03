import React from 'react';

export function Footer({ setCurrentPage }) {
  const scrollToPage = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-[#22222D] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Disclaimer */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-black tracking-tighter text-white font-sans">TED</span>
              <span className="text-3xl font-black text-[#E62B1E]">x</span>
              <span className="text-2xl font-bold text-white ml-1">Tapmi</span>
            </div>
            <p className="text-xs text-gray-400 max-w-md leading-relaxed">
              TEDxTapmi is an independently organized TED event operated under official license from TED. Hosted at T. A. Pai Management Institute (TAPMI), Manipal, bringing together thought leaders, visionaries, and delegates.
            </p>
            <div className="text-[11px] font-bold text-[#E62B1E] uppercase tracking-widest pt-2 font-mono">
              Ideas Worth Spreading @ TAPMI Manipal
            </div>
          </div>

          {/* Col 2: Site Pages Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 font-heading">Explore Pages</h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li><button onClick={() => scrollToPage('home')} className="hover:text-[#E62B1E] cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToPage('speakers')} className="hover:text-[#E62B1E] cursor-pointer">Past Speakers</button></li>
              <li><button onClick={() => scrollToPage('quiz')} className="hover:text-[#E62B1E] cursor-pointer">Speaker Quiz</button></li>
              <li><button onClick={() => scrollToPage('timeline')} className="hover:text-[#E62B1E] cursor-pointer">Past Event Timeline</button></li>
              <li><button onClick={() => scrollToPage('gallery')} className="hover:text-[#E62B1E] cursor-pointer">Photo Gallery</button></li>
              <li><button onClick={() => scrollToPage('register')} className="hover:text-[#E62B1E] cursor-pointer">Register Pass</button></li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 font-heading">Connect With Us</h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E62B1E]">📷 Instagram @tedxtapmi</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#E62B1E]">💼 LinkedIn /tedxtapmi</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#E62B1E]">▶️ YouTube Talks</a></li>
              <li><span className="text-gray-400">✉️ tedx@tapmi.edu.in</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1C24] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} TEDxTapmi. All rights reserved. This independent TEDx event is operated under license from TED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">TED Guidelines</a>
            <a href="#" className="hover:text-white">TAPMI Manipal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
