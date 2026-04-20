import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Logo from '../components/Logo'
import { navLinks } from '../data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActive(href)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-50'
          : 'bg-transparent'}`}
    >
      <nav className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
          <Logo size={150} className="group-hover:scale-105 transition-transform duration-300 [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.5))]" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${active === link.href
                    ? scrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/20'
                    : scrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={() => handleNavClick('#contact')}
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800
                     text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md
                     hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
        >
          Hubungi Kami
        </a>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen
            ? <Icon icon="lucide:x" width={24} height={24} />
            : <Icon icon="lucide:menu" width={24} height={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-blue-600
                         border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="mt-4 block text-center bg-gradient-to-r from-blue-600 to-blue-800
                       text-white font-semibold py-3 rounded-full"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
