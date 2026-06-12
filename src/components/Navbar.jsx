import { useState, useEffect } from 'react'
import { navLinks, authorInfo, book } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showBookModal, setShowBookModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[#5B8C3E]/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group">
              <span className="text-3xl animate-leaf">🌿</span>
              <span className="font-young-serif text-2xl md:text-3xl text-[#3D5A1E] group-hover:text-[#5B8C3E] transition-colors font-bold">
                {authorInfo.name}
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 py-2 text-base font-roboto-slab font-bold transition-all border-b-2 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#5B8C3E] border-[#5B8C3E]'
                      : 'text-[#3D5A1E]/70 border-transparent hover:text-[#5B8C3E] hover:border-[#5B8C3E]/30'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setShowBookModal(true)}
                className="ml-4 px-6 py-2.5 bg-[#5B8C3E] text-white font-roboto-slab font-black text-sm hover:bg-[#4A7A32] transition-all shadow-md rounded-full tracking-wider uppercase"
              >
                Get the Books
              </button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-[#3D5A1E]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl shadow-2xl mt-2 p-5 border-2 border-[#5B8C3E]/20">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-5 py-4 font-roboto-slab font-bold text-lg transition-colors rounded-full text-center ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#5B8C3E] bg-[#5B8C3E]/5'
                      : 'text-[#3D5A1E]/70 hover:text-[#5B8C3E]'
                  }`}>{link.name}</a>
              ))}
              <button onClick={() => { setIsMobileMenuOpen(false); setShowBookModal(true); }}
                className="block mt-3 w-full px-5 py-4 bg-[#5B8C3E] text-white text-center font-roboto-slab font-black text-lg rounded-full hover:bg-[#4A7A32] transition-colors tracking-wider uppercase">
                Get the Books
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Books Modal */}
      {showBookModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm" onClick={() => setShowBookModal(false)}>
          <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl border-2 border-[#5B8C3E]/20 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#5B8C3E] to-[#4A7A32] p-6 text-center text-white">
              <span className="text-4xl block mb-2">🕮🌿</span>
              <h3 className="text-2xl font-young-serif font-bold">Books by Charlie Jones</h3>
            </div>
            <div className="p-6 space-y-4">
              {book.map((b) => (
                <div key={b.id} className="bg-[#F5F9F0] rounded-2xl p-4">
                  <p className="font-playfair italic text-[#3D5A1E] font-bold text-base">{b.title}</p>
                  <p className="text-sm text-[#3D5A1E]/60 mt-1 font-roboto-slab font-bold">{b.subtitle}</p>
                  <div className="flex gap-2 mt-2">
                    {b.purchaseLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm px-4 py-2 bg-[#5B8C3E] text-white rounded-full font-roboto-slab font-black hover:bg-[#4A7A32] transition-all tracking-wider uppercase">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setShowBookModal(false)}
                className="w-full px-6 py-3 border-2 border-[#5B8C3E]/20 text-[#5B8C3E] rounded-full font-roboto-slab font-black hover:bg-[#5B8C3E]/5 transition-all tracking-wider uppercase">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}