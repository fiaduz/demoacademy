import { useEffect, useState } from "react";

interface Educator {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  img: string;
}

interface Department {
  department: string;
  educators: Educator[];
}

export default function Staff() {
  const facultyData: Department[] = [
    {
      department: "Administration",
      educators: [
        {
          name: "Dr. Elena Rostova",
          role: "Principal",
          qualification: "Ph.D. Education",
          experience: "20 Years",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Sarah Jenkins",
          role: "Vice Principal",
          qualification: "M.Ed. Leadership",
          experience: "15 Years",
          img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      department: "Science & Mathematics",
      educators: [
        {
          name: "Marcus Vance",
          role: "Head of Physics",
          qualification: "M.Sc. Physics",
          experience: "12 Years",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Dr. Alan Turing",
          role: "Advanced Mathematics",
          qualification: "Ph.D. Mathematics",
          experience: "18 Years",
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      department: "Arts & Humanities",
      educators: [
        {
          name: "Clara Montgomery",
          role: "English Literature",
          qualification: "M.A. English",
          experience: "10 Years",
          img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Albert Flores",
          role: "History & Civics",
          qualification: "M.A. History",
          experience: "9 Years",
          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
  ];

  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index: number) => {
    setOpenSection((prev) => (prev === index ? -1 : index));
  };

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      const departmentIndex = facultyData.findIndex(
        (dept) => dept.department === customEvent.detail
      );

      if (departmentIndex !== -1) {
        setOpenSection(departmentIndex);
      }
    };

    window.addEventListener("openDepartment", handler);

    return () => {
      window.removeEventListener("openDepartment", handler);
    };
  }, []);

  return (
    <section
      id="staff"
      className="py-24 px-6 bg-[var(--bgStaff)] text-gray-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Faculty Directory
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">
            Our Academic Leadership
          </h2>

          <p className="text-gray-500 mt-2">
            Meet the experts shaping the next generation.
          </p>
        </div>

        {/* Departments */}
        <div className="space-y-6">
          {facultyData.map((section, sectionIndex) => {
            const isOpen = openSection === sectionIndex;

            return (
              <div
                key={section.department}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-md uppercase tracking-wider">
                      {section.educators.length} Members
                    </span>

                    <h3 className="text-xl font-bold">
                      {section.department}
                    </h3>
                  </div>

                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[2000px] border-t border-gray-100"
                      : "max-h-0"
                  }`}
                >
                  <div className="p-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.educators.map((staff, index) => (
                        <div
                          key={index}
                          className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative h-40 sm:h-52 overflow-hidden">
                            <img
                              src={staff.img}
                              alt={staff.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                              <h4 className="font-bold text-white text-lg">
                                {staff.name}
                              </h4>
                            </div>
                          </div>

                          <div className="p-5">
                            <div className="mb-4">
                              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">
                                Designation
                              </p>

                              <p className="text-sm font-semibold mt-1">
                                {staff.role}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                  Qualification
                                </p>

                                <p className="text-xs text-gray-700 mt-1">
                                  {staff.qualification}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                  Experience
                                </p>

                                <p className="text-xs text-gray-700 mt-1">
                                  {staff.experience}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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