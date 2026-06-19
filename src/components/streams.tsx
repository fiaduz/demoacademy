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
  const [activeStream, setActiveStream] = useState<'science' | 'arts'>('science');

  const streams: StreamData[] = [
    {
      id: 'science',
      title: "Science Stream",
      tagline: "Cultivating analytical rigor, technological innovation, and scientific discovery.",
      accentClass: "border-blue-500/20 shadow-blue-500/5 text-blue-600 bg-blue-50",
      badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
      subjects: [
        { name: "Physics", code: "PHY-101", description: "Mechanics, thermodynamics, wave optics, and modern quantum frameworks." },
        { name: "Chemistry", code: "CHE-102", description: "Organic synthesis mechanisms, inorganic matrices, and physical atomic configurations." },
        { name: "Mathematics", code: "MAT-103", description: "Advanced calculus, linear algebra vectors, and probability statistics frameworks." },
        { name: "Biology / CS", code: "BIO-CS", description: "Molecular genetics & anatomy or standard object-oriented programming metrics." }
      ],
      careers: ["Medicine & Surgery", "Aerospace Engineering", "Data Science & AI", "Biotechnology"]
    },
    {
      id: 'arts',
      title: "Arts & Humanities Stream",
      tagline: "Fostering critical discourse, cultural literacy, and philosophical analysis.",
      accentClass: "border-indigo-500/20 shadow-indigo-500/5 text-indigo-600 bg-indigo-50",
      badgeBg: "bg-indigo-100 text-indigo-700 border-indigo-200",
      subjects: [
        { name: "History", code: "HIS-201", description: "Global civilization paradigms, industrial transformations, and modern geopolitical history." },
        { name: "Political Science", code: "POL-202", description: "Constitutional law frameworks, public policy tracking, and international relation metrics." },
        { name: "English Literature", code: "LIT-203", description: "Critical analysis of classical text materials, poetry prose, and linguistic history." },
        { name: "Psychology / Eco", code: "PSY-ECO", description: "Human behavioral analytics or global macro-micro resource distribution theories." }
      ],
      careers: ["Law & Judiciary", "Civil Services / Diplomacy", "Media & Journalism", "Psychology & Research"]
    }
  ];

  const currentStreamData = streams.find(s => s.id === activeStream)!;

  return (
    <section id="curriculum" className="py-20 md:py-24 px-4 md:px-6 bg-white text-gray-900 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Academic Choices
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Academic Streams
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center">
          <div className="bg-gray-100 p-1 rounded-xl flex gap-1 w-full max-w-md">
            <button
              onClick={() => setActiveStream('science')}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                activeStream === 'science'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Science Faculty
            </button>
            <button
              onClick={() => setActiveStream('arts')}
              className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                activeStream === 'arts'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Arts & Humanities
            </button>
          </div>
        </div>

        {/* Display Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">{currentStreamData.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{currentStreamData.tagline}</p>
            
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Prospective Careers</h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                {currentStreamData.careers.map((career, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {currentStreamData.subjects.map((sub, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-all shadow-sm group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{sub.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${currentStreamData.badgeBg}`}>
                    {sub.code}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}