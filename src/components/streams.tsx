import { useState } from 'react';

// TypeScript interfaces for robust structure mapping
interface SubjectDetail {
  name: string;
  code: string;
  description: string;
}

interface StreamData {
  id: 'science' | 'arts';
  title: string;
  tagline: string;
  accentClass: string;
  badgeBg: string;
  subjects: SubjectDetail[];
  careers: string[];
}

export default function AcademicStreams() {
  // Set default active view state to 'science'
  const [activeStream, setActiveStream] = useState<'science' | 'arts'>('science');

  const streams: StreamData[] = [
    {
      id: 'science',
      title: "Science Stream",
      tagline: "Cultivating analytical rigor, technological innovation, and scientific discovery.",
      accentClass: "border-cyan-500/30 shadow-cyan-500/5 text-cyan-400 bg-cyan-500/10",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      subjects: [
        { name: "Physics", code: "PHY-101", description: "Mechanics, thermodynamics, wave optics, and modern quantum frameworks." },
        { name: "Chemistry", code: "CHE-102", description: "Organic synthesis mechanisms, inorganic matrices, and physical atomic configurations." },
        { name: "Mathematics", code: "MAT-103", description: "Advanced calculus, linear algebra vectors, and probability statistics frameworks." },
        { name: "Biology / Computer Science", code: "BIO-CS", description: "Molecular genetics & anatomy or standard object-oriented programming metrics." }
      ],
      careers: ["Medicine & Surgery", "Aerospace Engineering", "Data Science & AI", "Biotechnology"]
    },
    {
      id: 'arts',
      title: "Arts & Humanities Stream",
      tagline: "Fostering critical discourse, cultural literacy, and philosophical analysis.",
      accentClass: "border-purple-500/30 shadow-purple-500/5 text-purple-400 bg-purple-500/10",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      subjects: [
        { name: "History", code: "HIS-201", description: "Global civilization paradigms, industrial transformations, and modern geopolitical history." },
        { name: "Political Science", code: "POL-202", description: "Constitutional law frameworks, public policy tracking, and international relation metrics." },
        { name: "English Literature", code: "LIT-203", description: "Critical analysis of classical text materials, poetry prose, and linguistic history." },
        { name: "Psychology / Economics", code: "PSY-ECO", description: "Human behavioral analytics or global macro-micro resource distribution theories." }
      ],
      careers: ["Law & Judiciary", "Civil Services / Diplomacy", "Media & Journalism", "Psychology & Research"]
    }
  ];

  // Extract the currently selected stream item object configuration
  const currentStreamData = streams.find(s => s.id === activeStream)!;

  return (
    <section id="curriculum" className="py-20 md:py-24 px-4 md:px-6 bg-slate-950 text-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Academic Choices
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">
            Academic Streams
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            We provide comprehensive curriculum pipelines mapped carefully to global institutional benchmarks. Select a tab below to explore.
          </p>
        </div>

        {/* Tab Selection Row (Engineered to be comfortable on mobile touches) */}
        <div className="flex justify-center">
          <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-xl flex gap-2 w-full max-w-md shadow-inner">
            <button
              onClick={() => setActiveStream('science')}
              className={`flex-1 py-3 text-center text-sm font-bold rounded-lg transition-all ${
                activeStream === 'science'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Science Faculty
            </button>
            <button
              onClick={() => setActiveStream('arts')}
              className={`flex-1 py-3 text-center text-sm font-bold rounded-lg transition-all ${
                activeStream === 'arts'
                  ? 'bg-purple-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Arts & Humanities
            </button>
          </div>
        </div>

        {/* Core Display Grid Window Area */}
        <div className="grid md:grid-cols-12 gap-8 items-start animate-fadeIn pt-4">
          
          {/* Left Block: Description & Career Paths (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-slate-100">
                {currentStreamData.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {currentStreamData.tagline}
              </p>
            </div>

            {/* Career Mappings Panel Box */}
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                Prospective Careers
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                {currentStreamData.careers.map((career, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Block: Interactive Subject Grid (Spans 8 columns) */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {currentStreamData.subjects.map((sub, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif font-bold text-base text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {sub.name}
                    </h4>
                    
                    {/* Unique Identifier Subject Code Badge */}
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border tracking-wider ${currentStreamData.badgeBg}`}>
                      {sub.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                {/* Micro Syllabus visual element */}
                <div className="pt-4 mt-4 border-t border-slate-800/40 text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                  Standard Curriculum Core
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}