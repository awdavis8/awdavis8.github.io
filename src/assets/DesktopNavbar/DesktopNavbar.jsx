import './DesktopNavbar.css'

function DesktopNavbar({
  emailAddress,
  linkedInUrl,
  resumeUrl,
  onAboutClick,
  onWorkClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <nav className="desktop-nav" aria-label="Desktop navigation">
      <div className="desktop-nav-left" role="list">
        <a className="desktop-nav-link desktop-nav-link--anchor" href={`mailto:${emailAddress}`} role="listitem">
          Email
        </a>
        <a
          className="desktop-nav-link desktop-nav-link--anchor"
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          role="listitem"
        >
          LinkedIn
        </a>
        <a className="desktop-nav-link desktop-nav-link--anchor" href={resumeUrl} role="listitem">
          Resume
        </a>
      </div>

      <div className="desktop-nav-right">
        <button className="desktop-nav-link" onClick={onAboutClick}>
          About Me
        </button>
        <button className="desktop-nav-link" onClick={onWorkClick}>
          Work Experience
        </button>
        <button className="desktop-nav-link" onClick={onProjectsClick}>
          Projects
        </button>
        <button className="desktop-nav-link" onClick={onContactClick}>
          Contact Me
        </button>
      </div>
    </nav>
  )
}

export default DesktopNavbar
