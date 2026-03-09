import { useRef } from 'react'
import './App.css'

function App() {
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <header className="site-header">
        <nav className="site-nav">
          <button className="nav-link" onClick={() => scrollTo(aboutRef)}>
            About Me
          </button>
          <button className="nav-link" onClick={() => scrollTo(workRef)}>
            Work Experience
          </button>
          <button className="nav-link" onClick={() => scrollTo(projectsRef)}>
            Projects
          </button>
          <button className="nav-link" onClick={() => scrollTo(contactRef)}>
            Contact Me
          </button>
        </nav>
      </header>

      <main className="site-main">
        <section ref={aboutRef} id="about">
          <h2>About Me</h2>
          <p>Content for the About Me section will go here.</p>
        </section>

        <section ref={workRef} id="professional experience">
          <h2>Professional Experience</h2>
          <p>Content for the Professional Experience section will go here.</p>
        </section>

        <section ref={projectsRef} id="projects">
          <h2>Projects</h2>
          <p>Content for the Projects section will go here.</p>
        </section>

        <section ref={contactRef} id="contact">
          <h2>Contact Me</h2>
          <p>Content for the Contact Me section will go here.</p>
        </section>
      </main>
    </div>
  )
}

export default App
