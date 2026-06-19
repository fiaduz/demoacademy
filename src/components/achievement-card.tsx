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
  const queryParams = new URLSearchParams(window.location.search);
  const academyName = queryParams.get('name') || "Test Academy";
  
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
    Science: "bg-blue-50 text-blue-700 border-blue-200",
    Commerce: "bg-amber-50 text-amber-700 border-amber-200",
    Humanities: "bg-purple-50 text-purple-700 border-purple-200"
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-[var(--bgGlobal)] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-gray-100 pb-6">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Wall of Fame
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 mt-2">
            Academic Legends
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Swipe to explore manually. Hold card on screen to pause animation.
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none"
          style={{ touchAction: 'pan-x' }}
        >
          {displayAchievements.map((student, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[310px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm shadow-gray-200 shrink-0 group hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Frame */}
              <div className="relative h-60 w-full bg-gray-100 overflow-hidden">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                <span className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase text-gray-900 bg-white/90 border border-gray-100 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {student.batch}
                </span>

                <div className="absolute bottom-4 left-4 space-y-0.5">
                  <p className="text-[10px] text-white font-bold uppercase tracking-widest drop-shadow-md">{student.metricLabel}</p>
                  <p className="text-3xl font-black tracking-tight text-white drop-shadow-md">{student.metricValue}</p>
                </div>
              </div>

              {/* Card Bottom Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base text-gray-900 truncate">
                      {student.name}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${streamColors[student.stream]}`}>
                      {student.stream}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    {student.destination}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                  {academyName} Alumnus
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}