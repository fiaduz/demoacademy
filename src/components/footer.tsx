


export default function Footer() {
  const queryParams = new URLSearchParams(window.location.search);
  const academyName = queryParams.get('name') || "Test Academy";
  return (
    <footer className="bg-white text-gray-600 py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        
        {/* Main Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white">EA</div>
            <span className="font-serif font-bold text-lg text-gray-900 tracking-wide">{academyName}</span>
          </div>
          <p className="leading-relaxed text-gray-500 max-w-xs">
            Dedicated to cultivating moral integrity and profound scholarly discovery since 1994.
          </p>
        </div>

        {/* Directory Navigation */}
        <div className="space-y-3">
          <h4 className="text-gray-900 font-semibold uppercase text-xs tracking-widest">Quick Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Top of Page</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">Our History & Values</a></li>
            <li><a href="#staff" className="hover:text-blue-600 transition-colors">Faculty Directory</a></li>
            <li><a href="#gallery" className="hover:text-blue-600 transition-colors">Facilities Gallery</a></li>
          </ul>
        </div>

        {/* Campus Location */}
        <div className="space-y-3">
          <h4 className="text-gray-900 font-semibold uppercase text-xs tracking-widest">Campus Location</h4>
          <address className="not-italic space-y-1.5 leading-relaxed text-gray-500">
            <p>{academyName} Main Campus</p>
            <p>Hatsingimari, Near DC Office</p>
            <p>Assam, 783135</p>
          </address>
        </div>
      </div>

      {/* Developer Credit & Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {academyName}. All rights reserved.</p>
        
        <div className="flex items-center gap-2">
          <span>Developed by Fiaduz Zaman</span>
          <a 
  href="https://www.linkedin.com/in/fiaduz-zaman-17a43024a" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-700 transition-colors"
>
  <svg 
    className="w-5 h-5" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
</a>
        </div>
      </div>
    </footer>
  );
}