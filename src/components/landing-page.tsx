

export default function HomeHero() {
  return (
    <section id="home" className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Callout */}
        <div className="space-y-6">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm bg-emerald-500/10 px-3 py-1.5 rounded-full">
            Admissions Open 2026 - 2027
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Nurturing Minds, <br />
            <span className="text-emerald-400">Shaping Tomorrows</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            At Elite Academy Academy, we offer a world-class holistic curriculum that pairs academic excellence with comprehensive athletic, artistic, and social development.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#about" className="bg-emerald-500 text-slate-900 px-6 py-3 rounded-md font-bold hover:bg-emerald-400 transition-all shadow-md">
              Explore Curriculum
            </a>
            <a href="#contact" className="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-md font-bold transition-all">
              Schedule Tour
            </a>
          </div>
        </div>

        {/* Right Asset Frame */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-slate-800 border border-slate-700 p-3 rounded-2xl shadow-2xl">
            <img 
              src="https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-50b38d4/s39613.pcdn.co/wp-content/uploads/2025/04/iStock-925033026-2048x1352.jpg" 
              alt="Students in a collaborative classroom environment" 
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}