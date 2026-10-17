import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => handleNavClick('home')}
          aria-label="Go to top"
        >
          <div className="navbar__logo-icon">
            <Code2 size={16} strokeWidth={2.5} />
          </div>
          <span className="navbar__logo-text">Rahul<span className="accent">.</span></span>
        </button>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(id)}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`navbar__mobile-link ${activeSection === id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavClick(id)}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
