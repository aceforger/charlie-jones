import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-[#3D5A1E] text-white">
      <div className="bg-[#2D4A14]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-young-serif text-[#8CB86B] mb-1">Ready to Publish?</h3>
              <p className="text-[#8CB86B]/50 text-sm font-roboto-slab">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8CB86B] text-[#3D5A1E] text-xl font-roboto-slab font-bold py-5 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              Launch & Go-Live Portal
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-young-serif text-2xl text-[#8CB86B]">{authorInfo.name}</span>
            <p className="text-[#8CB86B]/40 text-sm font-roboto-slab mt-2">{authorInfo.credentials}</p>
          </div>
          <div>
            <h4 className="text-sm font-roboto-slab font-bold mb-4 text-[#8CB86B] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-[#8CB86B]/40 hover:text-[#8CB86B] transition-colors text-sm font-roboto-slab">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-roboto-slab font-bold mb-4 text-[#8CB86B] uppercase tracking-wider">Contact</h4>
            <a href={`mailto:${authorInfo.email}`} className="text-[#8CB86B]/40 hover:text-[#8CB86B] transition-colors text-sm font-roboto-slab block">{authorInfo.email}</a>
          </div>
        </div>
        <div className="border-t border-[#8CB86B]/10 mt-12 pt-8 text-center">
          <p className="text-[#8CB86B]/20 text-sm font-roboto-slab">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}