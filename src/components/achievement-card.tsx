import  { useRef, useEffect } from 'react';

interface AchievementCard {
  id: number;
  name: string;
  metricLabel: string;
  metricValue: string;
  stream: 'Science' | 'Commerce' | 'Humanities';
  batch: string;
  img: string;
  destination: string;
}

export default function StudentAchievements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Use separate tracking flags for mouse and mobile touches
  const isHoveredRef = useRef(false);
  const isTouchedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  const achievements: AchievementCard[] = [
    {
      id: 1,
      name: "Aarav Sharma",
      metricLabel: "CBSE Board",
      metricValue: "99.2%",
      stream: "Science",
      batch: "Batch 2025",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
      destination: "AIIMS Medical College"
    },
    {
      id: 2,
      name: "Meera Patel",
      metricLabel: "Commerce Aggregate",
      metricValue: "98.6%",
      stream: "Commerce",
      batch: "Batch 2025",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      destination: "SRCC, Delhi University"
    },
    {
      id: 3,
      name: "Rohan Das",
      metricLabel: "IIT-JEE Advanced",
      metricValue: "AIR 84",
      stream: "Science",
      batch: "Batch 2025",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      destination: "IIT Bombay (Computer Science)"
    },
    {
      id: 4,
      name: "Ananya Iyer",
      metricLabel: "ISC Board",
      metricValue: "98.4%",
      stream: "Humanities",
      batch: "Batch 2025",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      destination: "St. Stephen's College"
    },
    {
      id: 5,
      name: "Kabir Mehta",
      metricLabel: "CA Foundation",
      metricValue: "Score 340/400",
      stream: "Commerce",
      batch: "Batch 2026",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      destination: "Articleship at Big 4"
    }
  ];

  const displayAchievements = [...achievements, ...achievements];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScrollStep = () => {
      // CRITICAL MOBILE FIX: Only modify scrollLeft if the user is completely hands-off
      if (!isHoveredRef.current && !isTouchedRef.current) {
        scrollContainer.scrollLeft += 0.6; // Silky smooth slow crawl velocity

        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScrollStep);
    };

    animationFrameId = requestAnimationFrame(autoScrollStep);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Handlers for Phone Touch Interruption
  const handleTouchStart = () => {
    isTouchedRef.current = true; // Instantly hard-pauses the autoScroll loop
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    
    // Gives the user 1.5 seconds to finish their manual momentum swipe before auto-scroll returns
    resumeTimeoutRef.current = window.setTimeout(() => {
      isTouchedRef.current = false;
    }, 1500);
  };

  const streamColors = {
    Science: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Commerce: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Humanities: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-6">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Wall of Fame
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-100 mt-2">
            Academic Legends
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Swipe to explore manually. Hold card on screen to pause animation.
          </p>
        </div>

        {/* 
          SCROLL CONTAINER VIEWPORT:
          Added 'overflow-x-auto' along with touch handlers. 
          The auto-scroll completely yields to your finger movements now.
        */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none"
          style={{ 
            WebkitOverflowScrolling: 'touch', // Native iOS inertial swipe physics
            touchAction: 'pan-x' // Informs the browser to let horizontal finger drags through cleanly
          }}
        >
          {displayAchievements.map((student, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[310px] bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl shrink-0 group hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Frame */}
              <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                
                <span className="absolute top-4 right-4 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-md">
                  {student.batch}
                </span>

                <div className="absolute bottom-4 left-4 space-y-0.5">
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{student.metricLabel}</p>
                  <p className="text-2xl md:text-3xl font-serif font-black tracking-tight text-white">{student.metricValue}</p>
                </div>
              </div>

              {/* Card Bottom Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-950">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif font-bold text-base md:text-lg text-slate-100 group-hover:text-emerald-400 transition-colors truncate">
                      {student.name}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${streamColors[student.stream]}`}>
                      {student.stream}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-snug">
                    {student.destination}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                  <span>Elite Academy Alumnus</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}