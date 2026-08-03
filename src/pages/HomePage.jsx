import React, { useContext, useState, useEffect } from 'react';
import { CMSContext } from '../context/CMSContext';

export function HomePage({ setCurrentPage }) {
  const { cmsData } = useContext(CMSContext);
  const hero = cmsData.hero || {};
  const pastSpeakers = (cmsData.speakers || []).slice(0, 3);

  const [timeLeft, setTimeLeft] = useState({ days: 82, hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: (prev.minutes + 59) % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20 animate-page-enter bg-grid-pattern">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E62B1E]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E62B1E]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-3 bg-[#E62B1E]/15 border border-[#E62B1E]/60 px-4 py-2 rounded-lg slanted-badge">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-ping" />
              <span className="text-xs font-black tracking-widest text-[#E62B1E] uppercase font-mono">
                {hero.themeTagline || "Independently Organized TED Event"}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white uppercase font-heading">
                BREAK
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-[#E62B1E] tedx-text-glow font-heading">
                  THE
                </span>
                <span className="h-4 sm:h-8 flex-1 bg-[#E62B1E]/40 rounded" />
                <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-white font-heading">
                  MOLD
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-bold text-gray-300 tracking-wide max-w-2xl">
              {hero.subtitle || "Ideas Worth Spreading at TAPMI Manipal"}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage('register')}
                className="px-8 py-4 bg-[#E62B1E] hover:bg-[#C42115] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#E62B1E]/40 hover:scale-105 cursor-pointer"
              >
                🎟️ Register Delegate Pass →
              </button>
              <button
                onClick={() => setCurrentPage('speakers')}
                className="px-8 py-4 bg-[#0F0F16] border-2 border-white/20 hover:border-white text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all hover:bg-white/5 cursor-pointer"
              >
                🎙️ Explore Past Speakers
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-[#0D0D14] border border-[#E62B1E]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl tedx-neon-border">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <img
                  src="/assets/tedx_hero_stage_1785676470447.png"
                  alt="TEDx Stage"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs text-gray-300 font-bold space-y-1">
                    <p className="text-[#E62B1E] uppercase tracking-wider text-[10px]">📍 Event Venue</p>
                    <p className="text-white">{hero.location || "TAPMI Campus Auditorium, Manipal"}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-[#1E1E2A] pb-2">
                  <span className="font-bold uppercase text-[#E62B1E]">⏱️ Next Edition Countdown</span>
                  <span>{hero.date || "Oct 24, 2026"}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                  {[
                    { label: 'DAYS', val: timeLeft.days },
                    { label: 'HOURS', val: timeLeft.hours },
                    { label: 'MINS', val: timeLeft.minutes },
                    { label: 'SECS', val: timeLeft.seconds }
                  ].map((t, idx) => (
                    <div key={idx} className="bg-[#151520] border border-[#272738] p-2.5 rounded-xl">
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">{String(t.val).padStart(2, '0')}</div>
                      <div className="text-[9px] font-bold text-[#E62B1E] tracking-widest mt-0.5">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS TICKER */}
      <section className="border-y border-[#E62B1E]/30 bg-[#0A0A0E] py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: '6th', label: 'Edition @ TAPMI' },
            { metric: '25+', label: 'Distinguished Past Speakers' },
            { metric: '2,500+', label: 'Total Past Attendees' },
            { metric: '100%', label: 'Independent TED License' }
          ].map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#E62B1E] font-heading">{s.metric}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAST SPEAKERS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222230] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#E62B1E]">Past Speakers Spotlight</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">Esteemed Past Speakers</h2>
          </div>
          <button
            onClick={() => setCurrentPage('speakers')}
            className="px-6 py-3 bg-[#151520] hover:bg-[#20202E] border border-[#2B2B3E] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
          >
            View All Past Speakers →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastSpeakers.map((sp) => (
            <div
              key={sp.id}
              onClick={() => setCurrentPage('speakers')}
              className="bg-[#0E0E14] border border-[#242432] rounded-2xl overflow-hidden hover:border-[#E62B1E] transition-all cursor-pointer group hover:-translate-y-2 shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={sp.image}
                  alt={sp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 border border-[#E62B1E]/50 text-[#E62B1E] text-[10px] font-black uppercase tracking-wider rounded-full">
                  {sp.category}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#E62B1E] transition-colors">{sp.name}</h3>
                <p className="text-xs text-gray-400 font-semibold">{sp.role}</p>
                <p className="text-xs text-gray-300 italic pt-2 border-t border-[#1E1E2B]">"{sp.topic}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE QUIZ CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#140505] via-[#1F0707] to-[#0A0A0E] border border-[#E62B1E]/50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 tedx-neon-border">
          <div className="space-y-3 text-left max-w-2xl">
            <span className="px-3 py-1 bg-[#E62B1E]/20 text-[#E62B1E] font-black text-xs uppercase tracking-widest rounded-full">Interactive Experience</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Which Past Speaker Mindset Are You?</h2>
            <p className="text-xs sm:text-sm text-gray-300">Take our 4-question interactive evaluation to find your intellectual alter-ego from our distinguished past speaker alumni!</p>
          </div>
          <button
            onClick={() => setCurrentPage('quiz')}
            className="px-8 py-4 bg-[#E62B1E] hover:bg-[#C42115] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#E62B1E]/40 whitespace-nowrap cursor-pointer"
          >
            ⚡ Start Speaker Quiz
          </button>
        </div>
      </section>
    </div>
  );
}
