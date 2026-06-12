import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F5F9F0] relative overflow-hidden">
      <div className="absolute top-10 right-10 text-6xl opacity-10">🌿</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10">🍃</div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border-b-2 border-[#5B8C3E]/30 pb-2 mb-8">
          <span className="text-xs font-roboto-slab font-bold text-[#5B8C3E] tracking-[0.2em] uppercase">Contact</span>
        </div>
        <h2 className="text-5xl font-young-serif text-[#3D5A1E] mb-6 animate-fade-up">Get in Touch</h2>
        <p className="text-[#3D5A1E]/50 text-lg mb-10 max-w-md mx-auto font-roboto-slab animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>

        <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-[#5B8C3E]/10 animate-fade-up-delayed-2 hover-lift max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#5B8C3E] to-[#4A7A32] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#5B8C3E] text-white font-roboto-slab font-bold text-lg rounded-full hover:bg-[#4A7A32] transition-all">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}