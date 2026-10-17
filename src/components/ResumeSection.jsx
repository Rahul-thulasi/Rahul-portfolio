import { Download, Eye, FileText } from 'lucide-react'
import './ResumeSection.css'

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Resume</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My Resume
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Download or view my general-purpose resume in PDF format.
          </p>
        </div>

        <div className="resume-section__card card">
          <div className="resume-section__icon">
            <FileText size={40} />
          </div>

          <div className="resume-section__info">
            <h3 className="resume-section__name">Rahul Thulasi – General Resume</h3>
            <p className="resume-section__desc">
              B.Tech CSE Student · Government Engineering College Wayanad
            </p>
            <p className="resume-section__note">
              Includes education, technical skills, and project experience.
              Updated for internship and entry-level opportunities.
            </p>
          </div>

          <div className="resume-section__actions">
            <a
              href={`${import.meta.env.BASE_URL}Rahul_Thulasi_Resume.pdf`}
              download="Rahul_Thulasi_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download Rahul Thulasi's resume as PDF"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Rahul_Thulasi_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Open Rahul Thulasi's resume in a new tab"
            >
              <Eye size={16} />
              View Resume
            </a>
          </div>
        </div>

        <p className="resume-section__hint">
          If the file doesn't open, try the Download button to save a local copy.
        </p>
      </div>
    </section>
  )
}
