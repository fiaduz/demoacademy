export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bgGlobal)] text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Connect With Us</h2>
          <p className="text-4xl font-serif font-bold">Have Questions? Get in touch today.</p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are inquiring about admissions criteria, open house dates, or standard scheduling timelines, our registration staff is ready to assist you.
          </p>
          <div className="space-y-3 pt-4 text-gray-700">
            <p><strong>General Inquiries:</strong> info@testacademy.edu</p>
            <p><strong>Registrar Office:</strong> admissions@testacademy.edu</p>
            <p><strong>Phone Support:</strong> +1 (555) 432-8900</p>
          </div>
        </div>

        <form className="bg-gray-50 border border-gray-200 p-8 rounded-2xl space-y-4 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="Your inquiry..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}