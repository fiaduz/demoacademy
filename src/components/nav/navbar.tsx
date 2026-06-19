
import { useEffect, useState } from "react";
import prospectusPdf from "../../assets/prospectus.pdf";
import { Mail, GraduationCap, Phone } from "lucide-react";
const departments = [
  "Administration",
  "Science & Mathematics",
  "Arts & Humanities",
];

export default function Navbar() {
  const [showProspectus, setShowProspectus] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const academyName = queryParams.get("name") || "Test Academy";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDepartmentClick = (department: string) => {
    window.dispatchEvent(
      new CustomEvent("openDepartment", {
        detail: department,
      })
    );

    document.getElementById("staff")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      

{/* Top Announcement Bar */}
<div className="hidden md:block bg-slate-900 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-sm">

    {/* Left */}
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-blue-600/15 text-blue-300 px-3 py-1 rounded-full">
        <GraduationCap size={14} />
        <span className="font-medium">
          Admissions Open • Session 2026–27
        </span>
      </div>
    </div>

    {/* Right */}
    <div className="flex items-center gap-6">
      <a
        href="tel:+919876543210"
        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
      >
        <Phone size={14} />
        <span>+91 98765 43210</span>
      </a>

      <div className="h-4 w-px bg-slate-700" />

      <a
        href="mailto:info@academy.edu"
        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
      >
        <Mail size={14} />
        <span>info@academy.edu</span>
      </a>
    </div>

  </div>
</div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-4 group flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 group-hover:scale-105">
              EA
            </div>

            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-gray-900">
                {academyName}
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-semibold">
                Excellence Since 1994
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <a
              href="#home"
              className="relative text-gray-600 font-medium group"
            >
              Home
              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#about"
              className="relative text-gray-600 font-medium group"
            >
              About
              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Faculties Dropdown */}
            <div className="relative group">
              <button className="relative flex items-center gap-2 text-gray-600 font-medium">
                Faculties

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>

              <div className="absolute left-0 top-full mt-4 w-72 rounded-2xl bg-white border border-gray-100 shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => handleDepartmentClick(dept)}
                    className="w-full px-5 py-4 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-semibold">{dept}</div>

                    <div className="text-xs text-gray-400 mt-1">
                      View department faculty
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowProspectus(true)}
              className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Prospectus
            </button>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <a href="#home" className="block">
              Home
            </a>

            <a href="#about" className="block">
              About
            </a>

            <div>
              <p className="font-semibold mb-2">Faculties</p>

              <div className="pl-4 space-y-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      handleDepartmentClick(dept);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-sm text-gray-600"
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowProspectus(true)}
              className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg"
            >
              Prospectus
            </button>

            <a
              href="#contact"
              className="block text-center bg-blue-600 text-white py-3 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Prospectus Modal */}
      {showProspectus && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">
                Prospectus 2026-2027
              </h3>

              <div className="flex gap-2">
                <a
                  href={prospectusPdf}
                  download
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Download
                </a>

                <button
                  onClick={() => setShowProspectus(false)}
                  className="bg-gray-100 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>

            <iframe
              src={prospectusPdf}
              className="flex-1 w-full"
              title="Prospectus"
            />
          </div>
        </div>
      )}
    </>
  );
}
