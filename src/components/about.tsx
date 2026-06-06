
export default function About() {
  const pillars = [
    { title: "Academic Mastery", desc: "Rigorous global instruction frameworks built for critical analytical skills." },
    { title: "Creative Arts", desc: "Award-winning music, theatre, and visual arts programs fostering free expression." },
    { title: "Elite Athletics", desc: "Modern sport fields and facilities driving exceptional teamwork and physical wellness." }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Our Philosophy</h2>
          <p className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-900">
            A tradition of intellectual independence and community care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="text-emerald-500 text-2xl font-bold mb-4">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}