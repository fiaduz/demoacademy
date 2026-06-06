
export default function Gallery() {
  const items = [
    { label: "Advanced Science Labs", src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
    { label: "Olympic Swimming Pool", src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600" },
    { label: "Digital Media Library", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600" },
    { label: "Creative Art Studio", src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Campus Experience</h2>
          <p className="text-3xl font-serif font-bold text-slate-900">Life At Elite Academy</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden group shadow-sm">
              <img src={item.src} alt={item.label} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-lg tracking-wide">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}