import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#5B8C3E]/3 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3D5A1E]/3 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border-b-2 border-[#5B8C3E]/30 pb-2 mb-6">
            <span className="text-xs font-roboto-slab font-bold text-[#5B8C3E] tracking-[0.2em] uppercase">The Author</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-young-serif text-[#3D5A1E] mb-4">{authorInfo.name}</h2>
          <p className="text-[#5B8C3E] font-roboto-slab font-bold">{authorInfo.credentials}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#F5F9F0] p-8 rounded-2xl border border-[#5B8C3E]/10 hover-lift animate-fade-up">
            <div className="w-10 h-10 bg-[#5B8C3E]/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">🎓</span>
            </div>
            <p className="text-[#3D5A1E]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio}</p>
          </div>
          <div className="bg-[#F5F9F0] p-8 rounded-2xl border border-[#5B8C3E]/10 hover-lift animate-fade-up-delayed">
            <div className="w-10 h-10 bg-[#5B8C3E]/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📸</span>
            </div>
            <p className="text-[#3D5A1E]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio2}</p>
          </div>
          <div className="bg-[#F5F9F0] p-8 rounded-2xl border border-[#5B8C3E]/10 hover-lift animate-fade-up-delayed-2">
            <div className="w-10 h-10 bg-[#5B8C3E]/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">🌿</span>
            </div>
            <p className="text-[#3D5A1E]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio3}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {authorInfo.roles.map((role, i) => (
            <span key={i} className="px-5 py-2.5 bg-[#F5F9F0] text-[#3D5A1E] text-sm font-roboto-slab font-medium border border-[#5B8C3E]/15 hover:border-[#5B8C3E]/40 hover:text-[#5B8C3E] hover-lift transition-all rounded-full">
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}