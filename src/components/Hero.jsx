import { ArrowDown, Github, Mail, Phone, Download, ExternalLink, Linkedin } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section">
      {/* Subtle background grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Text Content */}
        <div className="hero__content">
          <span className="tag hero__tag">
            <span className="hero__tag-dot" />
            Available for Entry Level Jobs
          </span>

          <h1 className="hero__name">
            Hi, I'm <span className="accent">Rahul Thulasi</span>
          </h1>

          <p className="hero__role">
            B.Tech CSE Student &amp; Developer
          </p>

          <p className="hero__bio">
            Computer Science and Engineering student at{' '}
            <strong>Government Engineering College Wayanad</strong>, with a
            foundation in programming and core computer science concepts.
            I've built Android applications and websites using AI-assisted
            development tools, and I'm actively seeking entry-level job
  opportunities to apply my knowledge, contribute to real-world
  projects, and grow as a software developer.
          </p>

          {/* Action Buttons */}
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Explore My Projects
              <ExternalLink size={15} />
            </button>

            <a
              className="btn btn-secondary"
              href={`${import.meta.env.BASE_URL}Rahul_Thulasi_Resume.pdf`}
              download="Rahul_Thulasi_Resume.pdf"
              aria-label="Download Rahul Thulasi's resume PDF"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <a
              href="mailto:rtgt2004@gmail.com"
              className="hero__social-link"
              aria-label="Send email to Rahul Thulasi"
            >
              <Mail size={18} />
              <span>rtgt2004@gmail.com</span>
            </a>

            <a
              href="https://github.com/Rahul-thulasi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="View Rahul Thulasi's GitHub profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-thulasi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="View Rahul Thulasi's LinkedIn profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="tel:+918590653469"
              className="hero__social-link"
              aria-label="Call Rahul Thulasi"
            >
              <Phone size={18} />
              <span>+91 85906 53469</span>
            </a>
          </div>
        </div>

        {/* Right: Profile Photo */}
        <div className="hero__photo-wrapper">
          <div className="hero__photo-container animate-float">
            <div className="hero__photo-glow" aria-hidden="true" />
            <img
              src={`${import.meta.env.BASE_URL}rahul-profile.jpg`}
              alt="Rahul Thulasi – CSE Student at Government Engineering College Wayanad"
              className="hero__photo"
              width="400"
              height="480"
              loading="eager"
            />
          </div>

          {/* Stats Badge */}
          <div className="hero__badge hero__badge--left">
            <span className="hero__badge-icon">🎓</span>
            <div>
              <div className="hero__badge-value">B.Tech CSE</div>
              <div className="hero__badge-label">GEC Wayanad</div>
            </div>
          </div>

          <div className="hero__badge hero__badge--right">
            <span className="hero__badge-icon">💡</span>
            <div>
              <div className="hero__badge-value">3 Projects</div>
              <div className="hero__badge-label">Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
