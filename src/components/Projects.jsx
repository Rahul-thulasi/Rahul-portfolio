import { Github, ExternalLink, Smartphone, Globe, Heart } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Tuition Centre Management Application',
    type: 'Android App',
    icon: <Smartphone size={22} />,
    description:
      'An Android application built to help a tuition centre manage day-to-day operations, including student marks, fee records, and announcements.',
    features: [
      'Student marks and fee record management',
      'Announcement system for the centre',
      'Firebase Authentication for admin, teacher, and student login roles',
      'Built using Android Studio and AI-assisted development tools',
    ],
    tech: ['Android Studio', 'Firebase', 'Java', 'AI-Assisted Dev'],
    contribution: 'Sole developer — designed, built, and debugged all application features.',
    githubUrl: null,
    liveUrl: 'https://drive.google.com/file/d/1j1XBbE24QuLZ9c4dzF8juBl0tCy_fyVR/view?usp=drive_link',
    liveUrlLabel: 'View App (Drive)',
    status: 'Personal Project · APK / Demo',
  },
  {
    id: 2,
    title: 'Tuition Centre Promotional Website',
    type: 'Web Project',
    icon: <Globe size={22} />,
    description:
      'A promotional website developed for Phase Academy to showcase the tuition centre and its educational services, with a clean, user-friendly layout.',
    features: [
      'Information about the centre, courses, and educational services',
      'Organized, user-friendly layout for easy navigation',
      'Deployed and publicly accessible via GitHub Pages',
    ],
    tech: ['HTML', 'CSS', 'GitHub Pages'],
    contribution: 'Sole developer — designed layout, wrote content, and deployed the website.',
    githubUrl: 'https://github.com/phaseacademy/phaseacademy.github.io',
    liveUrl: 'https://phaseacademy.github.io/',
    liveUrlLabel: 'Live Demo',
    status: 'Live on GitHub Pages',
  },
  {
    id: 3,
    title: 'Digital Wedding Invitation Website',
    type: 'Web Project',
    icon: <Heart size={22} />,
    description:
      'A personalized digital wedding invitation website created for a family event, featuring an attractive layout and interactive elements.',
    features: [
      'Wedding details and invitation content presented clearly',
      'Attractive, organized layout for the event information',
      'Interactive elements to make the invitation more engaging',
      'Deployed and publicly accessible via GitHub Pages',
    ],
    tech: ['HTML', 'CSS', 'GitHub Pages'],
    contribution: 'Sole developer — designed and built for a real family event.',
    githubUrl: 'https://github.com/Rahul-thulasi/wedding-card',
    liveUrl: 'https://rahul-thulasi.github.io/wedding-card/',
    liveUrlLabel: 'Live Demo',
    status: 'Live on GitHub Pages',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Projects</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Things I've Built
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Personal projects built from scratch. Each one taught me something new
            about development, tools, and problem-solving.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card card">
              {/* Card Header */}
              <div className="project-card__header">
                <div className="project-card__icon">{project.icon}</div>
                <span className="project-card__type">{project.type}</span>
              </div>

              {/* Title */}
              <h3 className="project-card__title">{project.title}</h3>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Features */}
              <ul className="project-card__features">
                {project.features.map((f) => (
                  <li key={f}>
                    <span className="project-card__feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Contribution */}
              <div className="project-card__contribution">
                <strong>My contribution:</strong> {project.contribution}
              </div>

              {/* Tech Stack */}
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tech-badge">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-card__links">
                <span className="project-card__status">{project.status}</span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={14} />
                    {project.liveUrlLabel || 'Live Demo'}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects__cta">
          <p>More projects may be available on my GitHub profile.</p>
          <a
            href="https://github.com/Rahul-thulasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Visit Rahul Thulasi's GitHub profile"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
