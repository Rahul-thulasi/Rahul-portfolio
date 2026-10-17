import { Mail, Phone, Github, MapPin, Send, Linkedin } from 'lucide-react'
import './Contact.css'

const CONTACT_ITEMS = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'rtgt2004@gmail.com',
    href: 'mailto:rtgt2004@gmail.com',
    display: 'rtgt2004@gmail.com',
    newTab: false,
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+91 8590653469',
    href: 'tel:+918590653469',
    display: '+91 85906 53469',
    newTab: false,
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul-thulasi',
    href: 'https://www.linkedin.com/in/rahul-thulasi',
    display: 'linkedin.com/in/rahul-thulasi',
    newTab: true,
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'github.com/Rahul-thulasi',
    href: 'https://github.com/Rahul-thulasi',
    display: 'github.com/Rahul-thulasi',
    newTab: true,
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: 'Trivandrum, Kerala, India',
    href: null,
    display: 'Trivandrum, Kerala, India',
    newTab: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="tag" style={{ margin: '0 auto' }}>Get In Touch</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Let's Connect
          </h2>
          <div className="divider" style={{ margin: '0 auto 48px' }} />
          <p className="contact__intro">
            I'm actively seeking <strong>internship opportunities</strong> in software
            development, web development, or IT-related roles. If you're a recruiter,
            HR professional, or company looking for a motivated CSE student with
            hands-on project experience, I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Cards */}
          <div className="contact__cards">
            <h3 className="contact__sub-title">Contact Details</h3>
            {CONTACT_ITEMS.map(({ icon, label, href, display, newTab }) => (
              <div key={label} className="contact__item card">
                <div className="contact__item-icon">{icon}</div>
                <div className="contact__item-text">
                  <span className="contact__item-label">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="contact__item-value"
                      {...(newTab
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={`${label}: ${display}`}
                    >
                      {display}
                    </a>
                  ) : (
                    <span className="contact__item-value contact__item-value--plain">
                      {display}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Box */}
          <div className="contact__message card">
            <div className="contact__message-icon">
              <Send size={32} />
            </div>
            <h3 className="contact__message-title">Reach Out Directly</h3>
            <p className="contact__message-text">
              The fastest way to reach me is via email, LinkedIn, or phone. I'm open to
              internship discussions, project collaborations, and learning
              opportunities in the software and IT space.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="mailto:rtgt2004@gmail.com"
                className="btn btn-primary"
                aria-label="Send email to Rahul Thulasi"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-thulasi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Connect with Rahul Thulasi on LinkedIn"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
