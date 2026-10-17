import { User, Code, Smartphone, Globe, Bot, Target } from 'lucide-react'
import './About.css'

const HIGHLIGHTS = [
  {
    icon: <Code size={20} />,
    title: 'Programming Foundation',
    desc: 'Basic knowledge of C, Java, and Python, with academic grounding in data structures, algorithms, and OOP.'
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Android Development',
    desc: 'Built an Android application using Android Studio with Firebase Authentication for a tuition centre.'
  },
  {
    icon: <Globe size={20} />,
    title: 'Web Development',
    desc: 'Developed and deployed promotional and event websites using GitHub Pages.'
  },
  {
    icon: <Bot size={20} />,
    title: 'AI-Assisted Development',
    desc: 'Used AI development tools like Antigravity AI to accelerate project building and troubleshooting.'
  },
  {
    icon: <Target size={20} />,
    title: 'Career Objective',
    desc: 'Seeking an entry-level opportunity to apply my technical knowledge, contribute to real-world projects, and develop my skills as a software developer.'
  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="tag">About Me</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Who I Am
          </h2>
          <div className="divider" />
        </div>

        <div className="about__inner">
          {/* Text block */}
          <div className="about__text">
            <p>
              I'm <strong>Rahul Thulasi</strong> from <strong>Trivandrum, Kerala</strong>,
              currently pursuing my B.Tech in Computer Science and Engineering at{' '}
              <strong>Government Engineering College Wayanad</strong> (Fourth year). My
              academic journey has given me a solid foundation in core computer science
              concepts including Data Structures, DBMS, Computer Networks, and
              Object-Oriented Programming.
            </p>
            <p>
              Beyond the classroom, I've taken on personal projects — building an{' '}
              <strong>Android application</strong> for a tuition centre and developing{' '}
              <strong>websites</strong> that were deployed and made publicly accessible.
              These projects taught me how to work with real tools and solve practical
              problems from start to finish.
            </p>
            <p>
              I work with <strong>AI-assisted development tools</strong> like Antigravity AI
              to learn faster and build more efficiently. I believe in being honest about
              what I know and am always eager to improve through hands-on experience and
              mentorship in a professional environment.
            </p>
            <p>
               I'm currently <strong>seeking entry-level job opportunities</strong> in
  software development, web development, or IT-related roles where I can
  apply my technical knowledge, contribute to real-world projects, and
  continue growing professionally.
            </p>

            {/* Location */}
            <div className="about__location">
              <span className="about__location-dot" />
              <span>Trivandrum, Kerala, India</span>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="about__highlights">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div key={title} className="about__highlight card">
                <div className="about__highlight-icon">{icon}</div>
                <div>
                  <h3 className="about__highlight-title">{title}</h3>
                  <p className="about__highlight-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
