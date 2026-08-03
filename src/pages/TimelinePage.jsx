import React, { useContext } from 'react';
import { CMSContext } from '../context/CMSContext';

export function TimelinePage() {
  const { cmsData } = useContext(CMSContext);
  const timeline = cmsData.timeline || [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-page-enter">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="px-4 py-1.5 bg-[#E62B1E]/15 border border-[#E62B1E]/40 text-[#E62B1E] font-black text-xs uppercase tracking-widest rounded-full">
          Archive of Excellence
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading">Past Event Timeline</h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Tracing the evolution of TEDx at TAPMI Manipal across editions, groundbreaking themes, and growing global audience impact.
        </p>
      </div>

      <div className="relative border-l-2 border-[#E62B1E]/50 ml-4 sm:ml-32 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-12 group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#E62B1E] group-hover:bg-[#E62B1E] transition-colors shadow-lg shadow-[#E62B1E]/50" />

            <div className="hidden sm:block absolute -left-32 top-0 text-right w-24 text-3xl font-black text-[#E62B1E] font-heading tracking-tight">
              {item.year}
            </div>

            <div className="bg-[#0E0E14] border border-[#242434] p-6 sm:p-8 rounded-2xl space-y-4 hover:border-[#E62B1E] transition-all shadow-2xl group-hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="sm:hidden text-2xl font-black text-[#E62B1E] font-heading">{item.year}</span>
                <h3 className="text-2xl font-black text-white font-heading">{item.theme}</h3>
                <div className="flex space-x-2 text-xs font-bold">
                  <span className="px-3 py-1 bg-[#161622] border border-[#2A2A3E] text-gray-300 rounded-full">👥 {item.attendees}</span>
                  <span className="px-3 py-1 bg-[#E62B1E]/15 border border-[#E62B1E]/40 text-[#E62B1E] rounded-full">🎙️ {item.speakersCount}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
