import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border-b-2 border-[#5B8C3E]/30 pb-2 mb-6">
            <span className="text-xs font-roboto-slab font-bold text-[#5B8C3E] tracking-[0.2em] uppercase">Reviews</span>
          </div>
          <h2 className="text-5xl font-young-serif text-[#3D5A1E]">What Readers Say</h2>
        </div>

        <div className="flex justify-center">
          {reviews.map((review, i) => (
            <div key={review.id} className="bg-[#F5F9F0] rounded-3xl p-8 md:p-10 border border-[#5B8C3E]/10 shadow-lg hover-lift max-w-2xl animate-fade-up">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-[#5B8C3E]' : 'text-[#5B8C3E]/15'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <h4 className="text-xl font-playfair italic text-[#3D5A1E] font-bold mb-4">{review.headline}</h4>
              <p className="text-[#3D5A1E]/60 leading-relaxed font-roboto-slab mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-[#5B8C3E]/10 pt-4">
                <p className="text-[#3D5A1E] font-roboto-slab font-bold text-sm">{review.name}</p>
                <div className="flex items-center gap-3">
                  {review.verified && <span className="text-[10px] text-[#5B8C3E] font-roboto-slab font-bold">Verified Purchase</span>}
                  <span className="text-xs text-[#3D5A1E]/30">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}