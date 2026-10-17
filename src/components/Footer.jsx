import { Github, Mail, ArrowUp, Linkedin } from 'lucide-react'
import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Left: Brand */}
        <div className="footer__brand">
          <span className="footer__name">Rahul Thulasi</span>
          <p className="footer__tagline">
            CSE Student · Developer · Lifelong Learner
          </p>
        </div>

        {/* Center: Links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="mailto:rtgt2004@gmail.com" className="footer__link" aria-label="Email Rahul Thulasi">
            <Mail size={15} />
            rtgt2004@gmail.com
          </a>
          <a
            href="https://github.com/Rahul-thulasi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="View Rahul Thulasi's GitHub profile"
          >
            <Github size={15} />
            github.com/Rahul-thulasi
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-thulasi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="View Rahul Thulasi's LinkedIn profile"
          >
            <Linkedin size={15} />
            linkedin.com/in/rahul-thulasi
          </a>
        </nav>

        {/* Right: Back to top + Copyright */}
        <div className="footer__right">
          <button
            className="footer__top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
          <p className="footer__copy">
            © {currentYear} Rahul Thulasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
