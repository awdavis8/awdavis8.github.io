import { useEffect, useRef, useState } from 'react'
import ContactForm from './assets/ContactForm/ContactForm'
import DesktopNavbar from './assets/DesktopNavbar/DesktopNavbar'
import ItemCard from './assets/ItemCard/ItemCard'
import MobileNavbar from './assets/MobileNavbar/MobileNavbar'
import headshot from './assets/headshot.png'
import rexrothLogo from './assets/ExperienceAssets/RexrothLogo.png'
import rexrothControlsCabinet from './assets/ExperienceAssets/RexrothControlsCabinet.jpg'
import gastonCollegeLogo from './assets/ExperienceAssets/GastonCollegeLogo.webp'
import taylorSeriesVisualization from './assets/ExperienceAssets/TaylorSeriesVisualization.jpg'
import hitachiEnergyLogo from './assets/ExperienceAssets/HitachiLogo.webp'
import transformerCrossSection from './assets/ExperienceAssets/TransformerCrossSection.png'
import blindsOpening from './assets/ExperienceAssets/BlindsOpening.png'
import wolfCafeLogin from './assets/ExperienceAssets/WolfCafeLogin.png'
import wolfCafeManager from './assets/ExperienceAssets/WolfCafeManager.png'
import wolfCafeLogo from './assets/ExperienceAssets/WolfHead.png'
import thisWebsiteHomepage from './assets/ExperienceAssets/ThisWebsiteHomepage.png'
import './App.css'

function App() {
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const [showHeader, setShowHeader] = useState(true)
  const [openCardId, setOpenCardId] = useState(null)
  const lastScrollY = useRef(0)

  const emailAddress = 'aaron@awdavis.com'
  const linkedInUrl = 'https://www.linkedin.com/in/aaron-davis-217937242/'
  const resumeUrl = "/Aaron's Resume.pdf"

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const projects = [
    {
      projectId: 'project-one',
      title: 'Hitachi Energy Senior Design',
      summary: 'Designed and implemented a C# application for estimating the remaining lifespan of power transformers.',
      fullSummary:
        `In this project, our team translated a power transformer aging simulation algorithm from Python into C#.
         As part of this process, we redesigned the application to take full advantage of C#'s object-oriented nature.
         Working closely with stakeholders at Hitachi Energy, we clarified requirements and finalized the software 
         design. The resulting application reduced simulation runtime from 45 minutes to under one minute, a 97% 
         improvement, transforming the original Python code into a practical diagnostic tool for engineers to use in the field.`,
      image: hitachiEnergyLogo,
      expandedImage1: hitachiEnergyLogo,
      expandedImage2: transformerCrossSection,
      thumbnailRounded: false,
      expandedImage1Rounded: false,
      expandedImage2Rounded: false,
      skillsUsed: ['C#', 'UML Design', 'Technical Communication'],
    },
    {
      projectId: 'project-two',
      title: 'IoT-based Automatic Blinds',
      summary: `Designed and developed an IoT-based automation system that automatically adjusts 
                window blinds in response to ambient lighting and temperature.`,
      fullSummary:
                `In this project, our team designed and developed an IoT-based automation system 
                that automatically adjusts blinds to maintain a comfortable indoor temperature. I 
                was responsible for developing the command-line interface used to send commands, 
                as well as modeling and 3D printing a coupler to connect a NEMA 17 motor to the tilt 
                rod. In manual mode, users could send commands to open and close the blinds through 
                encrypted MQTT communication with AWS IoT Core. In automatic mode, the interface sent 
                MQTT messages based on an internal temperature threshold.`,
      image: blindsOpening,
      expandedImage1: blindsOpening,
      thumbnailRounded: true,
      expandedImage1Rounded: true,
      expandedImage2Rounded: true,
      skillsUsed: ['Python', 'MQTT', 'AWS IoT Core', '3D Modeling'],
    },
    {
      projectId: 'project-three',
      title: 'WolfCafe Website',
      summary: 'Built a RESTful backend for the fictional WolfCafe coffee shop using Spring Boot, Hibernate (JPA), and MySQL.',
      fullSummary:
        `In this project, our team designed and developed a web application to manage a fictitious coffee shop. 
        The backend was implemented using Spring Boot with Hibernate for object-relational mapping and MySQL for 
        data persistence. We implemented role-based access control to restrict functionality based on user roles 
        (admin, employee, or customer). During authentication, the client sends a login request containing a username 
        and password, which is then hashed and validated against the stored hash in the database. Upon successful 
        authentication, the system generates and returns a JWT token, enabling stateless authentication for 
        subsequent API requests. Protected endpoints validate the JWT to ensure that users can only access 
        resources permitted by their role.`,
      image: wolfCafeLogo,
      expandedImage1: wolfCafeLogin,
      expandedImage2: wolfCafeManager,
      thumbnailRounded: false,
      expandedImage1Rounded: false,
      expandedImage2Rounded: false,
      skillsUsed: ['Java', 'RESTful API Design', 'Spring Boot'],
    },
    {
      projectId: 'project-four',
      title: 'This Website',
      summary: 'Designed and developed a React.js portfolio website to showcase projects and technical skills.',
      fullSummary:
        `In this project, I designed and developed a Single Page Application (SPA) using React.js, which is 
        hosted on GitHub Pages. The application uses a component-based architecture to organize the interface 
        into modular, reusable components (such as the project experience card you are reading now). React 
        hooks are used to manage state and user interactions, enabling dynamic updates to the page without 
        requiring full reloads. The project is structured to maintain clear separation between components, 
        styling, and assets, making the codebase easier to maintain and extend as I gain additional work and 
        project experience.`,
      image: thisWebsiteHomepage,
      expandedImage1: thisWebsiteHomepage,
      thumbnailRounded: true,
      expandedImage1Rounded: true,
      expandedImage2Rounded: true,
      skillsUsed: ['React', 'UI Design', 'Github Pages'],
    }
  ]

  const workExperience = [
    {
      workId: 'work-one',
      title: 'Electrical Engineering Internship',
      summary: 'Developed an automated testing procedure using PLC programming and Python while interning at Bosch Rexroth.',
      fullSummary:
        `During my electrical engineering internship at Bosch Rexroth, I automated a hardware testing process using PLC programming 
        and Python. Previously, engineers were required to manually mount the unit being tested, monitor and record test data during 
        execution, and then unmount it. I developed a Python GUI using Tkinter that automated the data collection/analysis and 
        integrated with the PLC-controlled test procedure. By the end of the internship, engineers only needed to mount the unit and
         initiate the test through a user-friendly interface. This reduced manual effort and cut the time required to test the same 
         number of units by approximately 50%.`,
      image: rexrothLogo,
      expandedImage1: rexrothLogo,
      expandedImage2: rexrothControlsCabinet,
      thumbnailRounded: true,
      expandedImage1Rounded: true,
      expandedImage2Rounded: true,
      skillsUsed: ['Python', 'PLC Programming', 'UI Design'],
    },
    {
      workId: 'work-two',
      title: 'Calculus/Physics Tutor',
      summary: `Provided one-on-one tutoring to Gaston College students in both Calculus and Physics, 
                supporting comprehension of complex technical concepts.`,
      fullSummary:
                `I believe one of the best ways to validate your understanding of a subject is the 
                ability to teach it clearly. That is why I began tutoring at Gaston College, and I 
                have loved every second of it. For over three years, I have helped students learn 
                challenging concepts in calculus and physics by breaking them down into clear, 
                understandable steps. This experience has strengthened my technical communication 
                skills, as each lesson must be adapted to the individual learner.`,
      image: gastonCollegeLogo,
      expandedImage1: gastonCollegeLogo,
      expandedImage2: taylorSeriesVisualization,
      thumbnailRounded: false,
      expandedImage1Rounded: false,
      expandedImage2Rounded: false,
      skillsUsed: ['Teaching', 'Communication', 'Foundational Mathematics'],
    }
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
        <DesktopNavbar
          emailAddress={emailAddress}
          linkedInUrl={linkedInUrl}
          resumeUrl={resumeUrl}
          onAboutClick={() => scrollTo(aboutRef)}
          onWorkClick={() => scrollTo(workRef)}
          onProjectsClick={() => scrollTo(projectsRef)}
          onContactClick={() => scrollTo(contactRef)}
        />

        <MobileNavbar
          emailAddress={emailAddress}
          linkedInUrl={linkedInUrl}
          resumeUrl={resumeUrl}
          onAboutClick={() => scrollTo(aboutRef)}
          onWorkClick={() => scrollTo(workRef)}
          onProjectsClick={() => scrollTo(projectsRef)}
          onContactClick={() => scrollTo(contactRef)}
        />
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

        <section ref={workRef} id="work-experience">
          <h2 className="section-heading">Work Experience</h2>
          <div className="cards-grid">
            {workExperience.map((work) => (
              <ItemCard
                key={work.workId}
                itemId={work.workId}
                image={work.image}
                expandedImage1={work.expandedImage1}
                expandedImage2={work.expandedImage2}
                thumbnailRounded={work.thumbnailRounded}
                expandedImage1Rounded={work.expandedImage1Rounded}
                expandedImage2Rounded={work.expandedImage2Rounded}
                title={work.title}
                summary={work.summary}
                fullSummary={work.fullSummary}
                skillsUsed={work.skillsUsed}
                isOpen={openCardId === work.workId}
                onOpen={() => setOpenCardId(work.workId)}
                onClose={() => setOpenCardId(null)}
              />
            ))}
          </div>
        </section>

        <section ref={projectsRef} id="projects">
          <h2 className="section-heading">Projects</h2>
          <div className="cards-grid">
            {projects.map((project) => (
              <ItemCard
                key={project.projectId}
                itemId={project.projectId}
                image={project.image}
                expandedImage1={project.expandedImage1}
                expandedImage2={project.expandedImage2}
                thumbnailRounded={project.thumbnailRounded}
                expandedImage1Rounded={project.expandedImage1Rounded}
                expandedImage2Rounded={project.expandedImage2Rounded}
                title={project.title}
                summary={project.summary}
                fullSummary={project.fullSummary}
                skillsUsed={project.skillsUsed}
                isOpen={openCardId === project.projectId}
                onOpen={() => setOpenCardId(project.projectId)}
                onClose={() => setOpenCardId(null)}
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
