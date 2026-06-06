import{ useState } from 'react';

export default function Staff() {
  // Department-wise organized data
  const facultyData = [
    {
      department: "Administration",
      educators: [
        { name: "Dr. Elena Rostova", role: "Principal / Academic Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { name: "Sarah Jenkins", role: "Vice Principal", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      department: "Science & Mathematics",
      educators: [
        { name: "Marcus Vance", role: "Head of Physics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
        { name: "Dr. Alan Turing", role: "Advanced Mathematics", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      department: "Arts & Humanities",
      educators: [
        { name: "Clara Montgomery", role: "English Literature", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
        { name: "Albert Flores", role: "History & Civics", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      department: "Athletics",
      educators: [
        { name: "Coach David Thorne", role: "Athletic Coordinator", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" }
      ]
    }
  ];

  // Track which departments are open. By default, the first one (index 0) is open.
  const [openSections, setOpenSections] = useState({ 0: true });

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="staff" className="py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-600">World Class Educators</h2>
          <p className="text-3xl font-serif font-bold mt-1">Our Faculty & Departments</p>
          <p className="text-sm text-slate-500 mt-2">Click on a department header to expand or collapse the staff registry.</p>
        </div>

        {/* Accordion / Collapsible Container */}
        <div className="space-y-4">
          {facultyData.map((sect, sectIdx) => {
            const isOpen = !!openSections[sectIdx];
            
            return (
              <div key={sectIdx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                
                {/* Trigger Button */}
                <button 
                  onClick={() => toggleSection(sectIdx)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {sect.educators.length} {sect.educators.length === 1 ? 'Staff' : 'Staff Members'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">{sect.department}</h3>
                  </div>
                  
                  {/* Rotating Arrow Icon */}
                  <svg 
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${isOpen ? 'rotate-185' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Collapsible Content */}
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] border-t border-slate-100 p-6' : 'max-h-0 overflow-hidden'}`}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sect.educators.map((staff, staffIdx) => (
                      <div key={staffIdx} className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 group hover:shadow-sm transition-all">
                        <img 
                          src={staff.img} 
                          alt={staff.name} 
                          className="w-full h-48 object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-base text-slate-900 leading-tight">{staff.name}</h4>
                          <p className="text-xs text-emerald-600 mt-1 font-medium">{staff.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}