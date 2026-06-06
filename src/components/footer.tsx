
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        {/* Main Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-emerald-500 w-8 h-8 rounded flex items-center justify-center font-bold text-slate-900">EA</div>
            <span className="font-serif font-bold text-md tracking-wider">Elite Academy</span>
          </div>
          <p className="leading-relaxed text-slate-500">
            Dedicated to cultivating moral integrity and profound scholarly discovery since 1994.
          </p>
        </div>

        {/* Directory Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold uppercase text-xs tracking-widest text-slate-200">Quick Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-emerald-400 transition-colors">Top of Page</a></li>
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">Our History & Values</a></li>
            <li><a href="#staff" className="hover:text-emerald-400 transition-colors">Faculty Directory</a></li>
            <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Facilities Gallery</a></li>
          </ul>
        </div>

        {/* School Physical Address Details */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold uppercase text-xs tracking-widest text-slate-200">Campus Location</h4>
          <address className="not-italic space-y-1.5 leading-relaxed text-slate-400">
            <p>Elite Academy Main Campus</p>
            <p>Hatsingimari, Near DC Office</p>
            <p>Assam, SSM - 783135</p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Elite Academy Academy. All rights reserved.
      </div>
    </footer>
  );
}