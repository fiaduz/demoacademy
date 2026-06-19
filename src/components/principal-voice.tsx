export default function PrincipalsVoice() {
  const queryParams = new URLSearchParams(window.location.search);
  const academyName = queryParams.get('name') || "Test Academy";
  return (
    <section className="py-24 px-6 bg-white text-gray-900 relative overflow-hidden">
      {/* Decorative background elements - subtle blue/emerald tints */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl shadow-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                alt="Dr. Elena Rostova, School Principal" 
                className="rounded-xl w-full h-[450px] object-cover object-top"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-100 p-4 rounded-xl shadow-sm">
                <h3 className="font-serif font-bold text-lg text-gray-900">Dr. Elena Rostova</h3>
                <p className="text-xs text-blue-600 uppercase tracking-widest mt-0.5 font-semibold">Principal & Academic Chair</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Message */}
          <div className="md:col-span-7 space-y-6 md:pl-6">
            <div className="space-y-2">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">
                Principal's Voice
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Welcome to {academyName}
              </h2>
            </div>

            {/* Stylized Giant Quote Mark */}
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-8xl font-serif text-blue-100 select-none">“</span>
              <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed relative z-10">
                Education is not the filling of a pail, but the lighting of a fire. Our mission is to ignite that curiosity in every student.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                As we navigate an era of unprecedented transformation, our approach remains anchored in foundational values: intellectual rigor, moral clarity, and resilience.
              </p>
              <p>
                At {academyName}, we view parents as partners. Together, we create an environment where students feel safe to innovate and lead with empathy. I invite you to discover the community your child will thrive in.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-600"></div>
              <p className="font-serif italic text-blue-700 tracking-wide font-medium">Dr. Elena Rostova, Ph.D.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}