export default function About() {
  const pillars = [
    { title: "Academic Mastery", desc: "Rigorous global instruction frameworks built for critical analytical skills." },
    { title: "Creative Arts", desc: "Award-winning music, theatre, and visual arts programs fostering free expression." },
    { title: "Elite Athletics", desc: "Modern sport fields and facilities driving exceptional teamwork and physical wellness." }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[var(--bgGlobal)] text-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image & Badge */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl" />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAshoq4I8o1E1umzK7gZtYD60XqOMmpCgDOOGNrQboqVHMQHszdDAPnU6s&s=10" 
            alt="Students engaged in learning" 
            className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl z-20 max-w-[200px]">
            <p className="text-4xl font-bold">30+</p>
            <p className="text-sm opacity-90">Years of Academic Excellence</p>
          </div>
        </div>

        {/* Right: Content & Pillars */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-semibold uppercase tracking-widest text-xs">Our Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              A tradition of intellectual independence and community care.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Test Academy, we believe in shaping more than just students. We foster leaders, thinkers, and innovators by blending traditional rigor with modern creative freedom.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{pillar.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}