import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    skills: [
      { name: 'C', note: 'Basic' },
      { name: 'Java', note: 'Basic' },
      { name: 'Python', note: 'Basic' },
    ]
  },
  {
    category: 'Computer Science Fundamentals',
    icon: '🎓',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'DBMS' },
      { name: 'Computer Networks' },
    ]
  },
  {
    category: 'Application Development',
    icon: '📱',
    skills: [
      { name: 'Android Studio' },
      { name: 'Firebase Authentication' },
    ]
  },
  {
    category: 'Web Development & Hosting',
    icon: '🌐',
    skills: [
      { name: 'HTML / CSS' },
      { name: 'GitHub Pages' },
      { name: 'GitHub' },
    ]
  },
  {
    category: 'Development Tools',
    icon: '🛠',
    skills: [
      { name: 'Android Studio' },
      { name: 'Git' },
      { name: 'GitHub' },
    ]
  },
  {
    category: 'AI-Assisted Development',
    icon: '🤖',
    skills: [
      { name: 'Antigravity AI' },
      { name: 'AI-Assisted Debugging' },
      { name: 'AI-Assisted Web Dev' },
    ]
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Technical Skills</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            What I Work With
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Skills and tools from my actual projects and academic studies.
            Proficiency levels reflect honest self-assessment.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <div key={category} className="skills__card card">
              <div className="skills__card-header">
                <span className="skills__icon">{icon}</span>
                <h3 className="skills__category">{category}</h3>
              </div>
              <ul className="skills__list">
                {skills.map(({ name, note }) => (
                  <li key={name} className="skills__item">
                    <span className="skills__dot" />
                    <span className="skills__name">{name}</span>
                    {note && (
                      <span className="skills__note">{note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="skills__disclaimer">
          * All skills listed reflect academic knowledge or hands-on project
          experience. No fake proficiency percentages are used.
        </p>
      </div>
    </section>
  )
}
