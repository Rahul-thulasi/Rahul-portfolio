import { GraduationCap, Calendar, Award } from 'lucide-react'
import './Education.css'

const EDUCATION = [
  {
    id: 1,
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'Government Engineering College Wayanad',
    board: 'APJ Abdul Kalam Technological University',
    period: 'Sep 2023 – Present',
    score: 'CGPA: 6.65',
    scoreType: 'cgpa',
    current: true,
    highlights: [
      'Core courses: Data Structures, DBMS, Computer Networks, OOP',
      'Developed 3 personal projects during academic period',
      'Practical exposure to Android and web development',
    ],
  },
  {
    id: 2,
    degree: 'Plus Two (Higher Secondary)',
    institution: 'Government Boys Higher Secondary School, Mithurmala',
    board: 'Kerala Board of Higher Secondary Examinations (DHSE)',
    period: 'June 2021 – March 2023',
    score: 'Percentage: 93.92%',
    scoreType: 'percentage',
    current: false,
    highlights: [
      'Science stream with Mathematics',
    ],
  },
  {
    id: 3,
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'RRV Boys Vocation Higher Secondary School, Kilimanoor',
    board: 'Kerala Board of Public Examinations',
    period: 'June 2020 – March 2021',
    score: 'Percentage: 100%',
    scoreType: 'percentage',
    current: false,
    highlights: [
      'Full marks – 100% in all subjects',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Education</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Academic Background
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            My educational journey in Computer Science and Engineering.
          </p>
        </div>

        <div className="education__timeline">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className={`edu-card card ${edu.current ? 'edu-card--current' : ''}`}>
              {/* Timeline line */}
              <div className="edu-card__line" aria-hidden="true">
                <div className="edu-card__dot">
                  <GraduationCap size={14} />
                </div>
                {index < EDUCATION.length - 1 && (
                  <div className="edu-card__connector" />
                )}
              </div>

              {/* Content */}
              <div className="edu-card__content">
                <div className="edu-card__meta">
                  <div className="edu-card__period">
                    <Calendar size={13} />
                    {edu.period}
                  </div>
                  {edu.current && (
                    <span className="edu-card__current-badge">Currently Enrolled</span>
                  )}
                </div>

                <h3 className="edu-card__degree">{edu.degree}</h3>
                <p className="edu-card__institution">{edu.institution}</p>
                <p className="edu-card__board">{edu.board}</p>

                <div className="edu-card__score">
                  <Award size={15} />
                  <strong>{edu.score}</strong>
                </div>

                {edu.highlights.length > 0 && (
                  <ul className="edu-card__highlights">
                    {edu.highlights.map((h) => (
                      <li key={h}>
                        <span className="edu-card__highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
