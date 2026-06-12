import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#F5F9F0] via-[#E8F2DC] to-[#D4E8C0]">
      {/* Left side leaves and flowers */}
      <div className="absolute -left-4 top-0 h-full w-40 opacity-20">
        <div className="text-6xl absolute top-10 left-2 animate-leaf">🌿</div>
        <div className="text-5xl absolute top-32 left-8 animate-leaf" style={{ animationDelay: '0.5s' }}>🌱</div>
        <div className="text-4xl absolute top-56 left-4 animate-leaf" style={{ animationDelay: '1s' }}>🍃</div>
        <div className="text-5xl absolute top-80 left-10 animate-leaf" style={{ animationDelay: '1.5s' }}>🌾</div>
        <div className="text-3xl absolute top-96 left-0 animate-leaf" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="text-4xl absolute bottom-40 left-6 animate-leaf" style={{ animationDelay: '2.5s' }}>🌺</div>
        <div className="text-5xl absolute bottom-20 left-2 animate-leaf" style={{ animationDelay: '3s' }}>🌻</div>
      </div>

      {/* Right side leaves and flowers */}
      <div className="absolute -right-4 top-0 h-full w-40 opacity-20">
        <div className="text-5xl absolute top-16 right-4 animate-leaf" style={{ animationDelay: '0.3s' }}>🍃</div>
        <div className="text-6xl absolute top-40 right-8 animate-leaf" style={{ animationDelay: '0.8s' }}>🌿</div>
        <div className="text-4xl absolute top-64 right-2 animate-leaf" style={{ animationDelay: '1.3s' }}>🌱</div>
        <div className="text-5xl absolute top-88 right-10 animate-leaf" style={{ animationDelay: '1.8s' }}>🌾</div>
        <div className="text-3xl absolute bottom-60 right-4 animate-leaf" style={{ animationDelay: '2.3s' }}>🌼</div>
        <div className="text-4xl absolute bottom-36 right-8 animate-leaf" style={{ animationDelay: '2.8s' }}>🍀</div>
        <div className="text-5xl absolute bottom-12 right-2 animate-leaf" style={{ animationDelay: '3.2s' }}>🌷</div>
      </div>

      {/* Floating scattered flowers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="text-3xl absolute top-1/4 left-1/3 opacity-10 animate-leaf" style={{ animationDelay: '0.7s' }}>🌸</div>
        <div className="text-2xl absolute top-1/3 right-1/3 opacity-15 animate-leaf" style={{ animationDelay: '1.2s' }}>🌺</div>
        <div className="text-3xl absolute bottom-1/3 left-1/2 opacity-10 animate-leaf" style={{ animationDelay: '1.9s' }}>🌻</div>
        <div className="text-2xl absolute top-2/3 right-1/4 opacity-12 animate-leaf" style={{ animationDelay: '2.4s' }}>🌼</div>
        <div className="text-4xl absolute top-1/2 left-1/4 opacity-8 animate-leaf" style={{ animationDelay: '3.1s' }}>🌷</div>
        <div className="text-3xl absolute bottom-1/4 right-1/3 opacity-10 animate-leaf" style={{ animationDelay: '0.4s' }}>💐</div>
      </div>

      {/* Top scattered greenery */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-15">
        <div className="text-4xl absolute top-4 left-1/4 animate-leaf" style={{ animationDelay: '0.2s' }}>🌿</div>
        <div className="text-3xl absolute top-8 left-1/2 animate-leaf" style={{ animationDelay: '1.1s' }}>🍃</div>
        <div className="text-4xl absolute top-2 right-1/4 animate-leaf" style={{ animationDelay: '2.1s' }}>🌱</div>
        <div className="text-5xl absolute top-6 left-3/4 animate-leaf" style={{ animationDelay: '0.6s' }}>🌾</div>
        <div className="text-3xl absolute top-10 left-[10%] animate-leaf" style={{ animationDelay: '1.6s' }}>🍀</div>
      </div>

      {/* Bottom scattered greenery */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-15">
        <div className="text-4xl absolute bottom-6 left-1/3 animate-leaf" style={{ animationDelay: '0.9s' }}>🌿</div>
        <div className="text-3xl absolute bottom-4 left-2/3 animate-leaf" style={{ animationDelay: '1.7s' }}>🍃</div>
        <div className="text-5xl absolute bottom-8 left-1/2 animate-leaf" style={{ animationDelay: '2.5s' }}>🌱</div>
        <div className="text-3xl absolute bottom-3 right-1/3 animate-leaf" style={{ animationDelay: '0.3s' }}>🌾</div>
        <div className="text-4xl absolute bottom-10 left-[15%] animate-leaf" style={{ animationDelay: '1.4s' }}>🍀</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border-b-2 border-[#5B8C3E]/30 pb-2 mb-8 animate-fade-up">
              <span className="text-lg">🌿</span>
              <span className="text-xs font-roboto-slab font-bold text-[#5B8C3E] tracking-[0.2em] uppercase">LICSW • Author • Therapist</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-young-serif text-[#3D5A1E] mb-4 leading-tight animate-fade-up">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[2px] bg-[#5B8C3E] mb-8 mx-auto md:mx-0 animate-fade-up-delayed"></div>
            <p className="text-xl text-[#3D5A1E]/70 mb-4 font-playfair italic animate-fade-up-delayed">
              Cultivating <span className="text-[#5B8C3E] font-bold">marriages</span> and <span className="text-[#5B8C3E] font-bold">faith</span> through the Word of God
            </p>
            <p className="text-[#3D5A1E]/50 leading-relaxed max-w-lg mx-auto md:mx-0 font-roboto-slab text-base border-l-2 border-[#5B8C3E]/30 pl-6 py-2 bg-white/30 backdrop-blur-sm animate-fade-up-delayed">
              "Growing a successful marriage through faith—cultivating your marriage to produce the fruit of the Spirit."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.slice(0, 3).map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/60 text-[#3D5A1E] text-sm font-roboto-slab font-medium border border-[#5B8C3E]/15 hover:border-[#5B8C3E]/40 hover:text-[#5B8C3E] hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-[#5B8C3E] text-white font-roboto-slab font-bold hover:bg-[#4A7A32] transition-all text-center hover-lift rounded-full shadow-lg">
                About the Author
              </a>
              <a href="#books" onClick={(e) => handleScroll(e, '#books')} className="px-8 py-4 border-2 border-[#5B8C3E]/30 text-[#3D5A1E] font-roboto-slab font-bold hover:border-[#5B8C3E] hover:bg-[#5B8C3E]/5 transition-all text-center hover-lift rounded-full bg-white/50">
                View Books
              </a>
            </div>
          </div>

          <div className="relative mx-auto animate-fade-up flex justify-center">
            <div className="relative">
              {/* Floating leaves around profile */}
              <div className="absolute -top-6 -left-6 text-3xl animate-leaf z-20" style={{ animationDelay: '0.5s' }}>🌿</div>
              <div className="absolute -top-4 -right-4 text-2xl animate-leaf z-20" style={{ animationDelay: '1.5s' }}>🌸</div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-leaf z-20" style={{ animationDelay: '2.5s' }}>🍃</div>
              <div className="absolute -bottom-6 -right-6 text-2xl animate-leaf z-20" style={{ animationDelay: '0.8s' }}>🌺</div>
              
              <div className="absolute -inset-6 bg-[#5B8C3E]/5 rounded-full blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-2 border-[#5B8C3E]/10">
                <img src="/images/profile.jpg" alt={authorInfo.name} className="w-64 md:w-72 h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('w-64', 'h-80', 'flex', 'items-center', 'justify-center', 'bg-[#F5F9F0]')
                    e.target.parentElement.innerHTML = `<div class="text-center"><span class="text-5xl">🌿</span><p class="text-2xl font-young-serif text-[#5B8C3E] mt-2">CJ</p></div>`
                  }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}