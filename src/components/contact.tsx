
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Connect With Us</h2>
          <p className="text-4xl font-serif font-bold">Have Questions? Get in touch today.</p>
          <p className="text-slate-400 leading-relaxed">
            Whether you are inquiring about admissions criteria, open house dates, or standard scheduling timelines, our registration staff is ready to assist you.
          </p>
          <div className="space-y-3 pt-4 text-slate-300">
            <p><strong>General Inquiries:</strong> info@Elite Academyacademy.edu</p>
            <p><strong>Registrar Office:</strong> admissions@Elite Academyacademy.edu</p>
            <p><strong>Phone Support:</strong> +1 (555) 432-8900</p>
          </div>
        </div>

        <form className="bg-slate-800 border border-slate-700 p-8 rounded-xl space-y-4 shadow-xl" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Your inquiry..."></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-500 text-slate-900 font-bold py-3.5 rounded-md hover:bg-emerald-400 transition-colors">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}