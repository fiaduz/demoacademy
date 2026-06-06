

export default function PrincipalsVoice() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background element for architectural style */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame (Spans 5 columns on large screens) */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800 border border-slate-700 p-3 rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                alt="Dr. Elena Rostova, School Principal" 
                className="rounded-xl w-full h-[450px] object-cover object-top"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-sm border border-slate-800 p-4 rounded-xl">
                <h3 className="font-serif font-bold text-lg text-white">Dr. Elena Rostova</h3>
                <p className="text-xs text-emerald-400 uppercase tracking-widest mt-0.5">Principal & Academic Chair</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Message (Spans 7 columns on large screens) */}
          <div className="md:col-span-7 space-y-6 md:pl-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-semibold uppercase tracking-wider text-xs bg-emerald-500/10 px-3 py-1 rounded-full">
                Leadership Message
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">
                Welcome to Elite Academy
              </h2>
            </div>

            {/* Stylized Giant Quote Mark */}
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-8xl font-serif text-emerald-500/10 select-none">“</span>
              <p className="text-xl md:text-2xl font-serif italic text-slate-200 leading-relaxed relative z-10">
                Education is not the filling of a pail, but the lighting of a fire. Our mission is to ignite that curiosity in every child, ensuring they don't just memorize the world, but seek to understand and improve it.
              </p>
            </div>

            <hr className="border-slate-800" />

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                As we navigate an era of unprecedented global and technological transformation, our approach to learning remains deeply anchored in foundational values: intellectual rigor, moral clarity, and emotional resilience. 
              </p>
              <p>
                At Elite Academy, we view parents as essential partners in this journey. Together, we create an environment where students feel safe to fail, bold enough to innovate, and motivated to lead with empathy. I invite you to explore our campus, meet our dedicated faculty, and discover the community your child will thrive in.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-emerald-500"></div>
              <p className="font-serif italic text-emerald-400 tracking-wide">Dr. Elena Rostova, Ph.D.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}