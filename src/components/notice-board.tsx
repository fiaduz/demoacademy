import React, { useState, useEffect, useRef } from 'react';

interface NoticeItem {
  id: number;
  type: 'Urgent' | 'Admission' | 'Event' | 'Holiday';
  bgClass: string;
  icon: React.ReactNode;
  text: string;
  details: string;
  date: string;
}

export default function NoticeBoard() {
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isHoveredRef = useRef(false);
  const isTouchedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notices: NoticeItem[] = [
    {
      id: 1,
      type: 'Urgent',
      bgClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      icon: (
        <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: 'Mid-Term Examination schedules for Grades 6-12 have been updated. Check the student portal.',
      details:
        'The modified mid-term scheduling parameters have been formally updated inside the student portal workspace. All exams originally planned for the morning block have been shifted by 30 minutes to accommodate regional transit adjustments.',
      date: 'June 05',
    },
    {
      id: 2,
      type: 'Admission',
      bgClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      text: 'Final round of registrations for the 2026-2027 Academic Batch closes next Friday.',
      details:
        'Prospective application frameworks must be wholly processed before the close of business next Friday. Documents missing verification parameters will drop from processing arrays automatically.',
      date: 'June 03',
    },
    {
      id: 3,
      type: 'Event',
      bgClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      icon: (
        <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 3V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: 'Annual Science & Tech Exhibition mapping is scheduled for Saturday in the main auditorium.',
      details:
        'Project presentations must be fully mounted in the central auditorium matrix by 8:00 AM on Saturday. External evaluators will begin review cycles promptly at 9:30 AM.',
      date: 'May 28',
    },
    {
      id: 4,
      type: 'Holiday',
      bgClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      icon: (
        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: 'The campus will remain closed on Monday on account of Summer Solstice observations.',
      details:
        'In observance of the global Summer Solstice, all educational labs, libraries, and administrative back-offices will maintain zero runtime operations on Monday.',
      date: 'May 25',
    },
  ];

  const displayNotices = [...notices, ...notices];

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Use setInterval instead of requestAnimationFrame.
    // rAF is throttled aggressively by iOS/Android in low-power mode and background tabs,
    // which silently kills the scroll loop. setInterval at 16ms is far more resilient.
    const id = setInterval(() => {
      if (isHoveredRef.current || isTouchedRef.current) return;

      el.scrollTop += 0.6;

      // Seamless loop: when we've scrolled past the first half (the duplicate),
      // jump back to the top silently.
      if (el.scrollTop >= el.scrollHeight / 2) {
        el.scrollTop = 0;
      }
    }, 16);

    // Reset any stuck hover/touch state when the user returns to the tab
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        isHoveredRef.current = false;
        isTouchedRef.current = false;
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isTouchedRef.current = false;
    }, 1200);
  };

  return (
    <section className="bg-white border-y border-gray-200 py-4 md:py-6 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-4 md:gap-6">

        {/* Board Header */}
        <div className="bg-white border border-gray-200 text-white p-4 md:p-5 rounded-xl shadow-sm md:w-64 shrink-0 flex flex-row md:flex-col justify-between items-center md:items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] md:text-xs font-bold text-emerald-400 tracking-widest uppercase font-sans">
                Live System
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900">Notice Board</h3>
            <p className="text-xs text-gray-500 mt-0.5 hidden md:block leading-relaxed">
              Important updates, event deadlines, and operational listings.
            </p>
          </div>

          <div className="text-[10px] md:text-xs text-gray-600 md:pt-4 font-medium flex items-center gap-1 md:border-t md:border-gray-200/60 mt-0 md:mt-4 w-auto md:w-full shrink-0">
            <span>Swipe or drag to explore</span>
          </div>
        </div>

        {/*
          KEY FIX: Removed `WebkitOverflowScrolling: 'touch'` from the style prop.
          That CSS property hands scroll control to the iOS GPU compositor layer, which
          blocks programmatic scrollTop writes — causing auto-scroll to silently fail on iPhone/iPad.
          Native momentum scrolling still works fine without it on modern iOS (13+).
        */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onTouchStart={() => { isTouchedRef.current = true; }}
          onTouchMove={() => { isTouchedRef.current = true; }}
          onTouchEnd={handleTouchEnd}
          className="flex-1 h-60 md:h-56 overflow-y-auto mask-gradient space-y-3 pr-1 scrollbar-none"
        >
          {displayNotices.map((notice, idx) => (
            <div
              key={idx}
              onClick={() => setActiveNotice(notice)}
              className="h-14 flex items-center bg-white/40 border border-gray-200/60 rounded-xl pl-4 pr-20 md:pr-24 py-3 hover:border-emerald-500/40 hover:bg-white/90 transition-all group shrink-0 cursor-pointer relative"
            >
              <div className="flex items-center gap-2 md:gap-4 min-w-0 w-full">
                <span
                  className={`flex items-center gap-1.5 px-2 md:px-2.5 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md border shrink-0 ${notice.bgClass}`}
                >
                  {notice.icon}
                  {notice.type}
                </span>

                <p className="text-xs md:text-sm text-red-500 font-medium truncate group-hover:text-emerald-400 transition-colors">
                  {notice.text}
                </p>
              </div>

              <div 
              className="absolute right-4 top-1/2 -translate-y-1/2
              text-[10px] md:text-xs
              text-white
              font-semibold
              flex items-center gap-2
              bg-slate-950/90
              px-3 py-1.5
              rounded-full
              border border-slate-700
              shadow-md"
              >
                <span>{notice.date}</span>
                <svg
                  className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/85 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setActiveNotice(null)} />

          <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-8 overflow-hidden z-10 text-left flex flex-col max-h-[80vh] md:max-h-[85vh]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4 shrink-0">
              <div className="space-y-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md border ${activeNotice.bgClass}`}
                >
                  {activeNotice.icon}
                  {activeNotice.type}
                </span>
                <p className="text-[11px] text-gray-500 font-mono">Posted: {activeNotice.date}, 2026</p>
              </div>

              <button
                onClick={() => setActiveNotice(null)}
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-slate-700 text-gray-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto my-4 md:my-5 pr-1 space-y-3 md:space-y-4 flex-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              <h4 className="text-base md:text-xl font-serif font-bold text-gray-900 leading-snug">
                {activeNotice.text}
              </h4>
              <div className="text-xs md:text-sm text-gray-600 leading-relaxed bg-white/40 p-4 border border-gray-200/40 rounded-xl whitespace-pre-line">
                {activeNotice.details}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-end shrink-0">
              <button
                onClick={() => setActiveNotice(null)}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-md"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}