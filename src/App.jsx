import { useEffect, useRef, useState } from 'react'
import headshot from './assets/headshot.png'
import ContactForm from './assets/ContactForm/ContactForm'
import './App.css'

function App() {
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const isScrollingDown = currentY > lastScrollY.current

      if (isScrollingDown && currentY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <header className={`site-header ${showHeader ? '' : 'site-header--hidden'}`}>
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

      <main>
        <section ref={aboutRef} id="about" className="about-section">
          <div className="about-grid">
            <div className="about-photo" aria-label="Aaron's portrait background">
              <img className="about-photo-img" src={headshot} alt="Aaron" />
            </div>

            <div className="about-card">
              <h1 className="about-title">Hi, I'm Aaron!</h1>
              <p className="about-subtitle">
                I'm an NC State computer science graduate interested in building
                efficient and reliable software systems.
              </p>
            </div>
          </div>
        </section>

        <section ref={workRef} id="professional experience">
          <h2 className="section-heading">Professional Experience</h2>
          <p>Content for the Professional Experience section will go here.</p>
        </section>

        <section ref={projectsRef} id="projects">
          <h2 className="section-heading">Projects</h2>
          <p>Content for the Projects section will go here.</p>
        </section>

        <section ref={contactRef} id="contact">
          <h2 className="section-heading">Contact Me!</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default App
