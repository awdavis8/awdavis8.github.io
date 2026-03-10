import { useEffect, useRef, useState } from 'react'
import headshot from './assets/headshot.png'
import ContactForm from './assets/ContactForm/ContactForm'
import ItemCard from './assets/ItemCard/ItemCard'
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

  const projects = [
    {
      id: 'project-one',
      title: 'Project One',
      description: 'This is the description for the first project card.',
      image: headshot,
    },
    {
      id: 'project-two',
      title: 'Project Two',
      description: 'This is the description for the second project card.',
      image: headshot,
    },
    {
      id: 'project-three',
      title: 'Project Three',
      description: 'This is the description for the third project card.',
      image: headshot,
    },
  ]

  const workExperience = [
    {
      id: 'work-one',
      title: 'Job 1',
      description: 'This is the description for the first work experience item.',
      image: headshot,
    },
    {
      id: 'work-two',
      title: 'Job 2',
      description: 'This is the description for the second work experience item.',
      image: headshot,
    },
    {
      id: 'work-three',
      title: 'Job 3',
      description: 'This is the description for the third work experience item.',
      image: headshot,
    },
  ]

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

        <section ref={workRef} id="work experience">
          <h2 className="section-heading">Work Experience</h2>
          <div className="cards-grid">
            {workExperience.map((work) => (
              <ItemCard
                key={work.id}
                image={work.image}
                title={work.title}
                description={work.description}
                onClick={() => console.log(`Clicked ${work.title}`)}
              />
            ))}
          </div>
        </section>

        <section ref={projectsRef} id="projects">
          <h2 className="section-heading">Projects</h2>
          <div className="cards-grid">
            {projects.map((project) => (
              <ItemCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                onClick={() => console.log(`Clicked ${project.title}`)}
              />
            ))}
          </div>
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
