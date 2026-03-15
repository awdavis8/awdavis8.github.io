import './DesktopNavbar.css'

/**
 * Desktop navigation bar.
 *
 * @param {Object} props Component props.
 * @param {string} props.emailAddress Email used to build the mailto link.
 * @param {string} props.linkedInUrl External LinkedIn profile URL.
 * @param {string} props.resumeUrl URL/path to the resume document.
 * @param {() => void} props.onAboutClick Scroll handler for the About section.
 * @param {() => void} props.onWorkClick Scroll handler for the Work Experience section.
 * @param {() => void} props.onProjectsClick Scroll handler for the Projects section.
 * @param {() => void} props.onContactClick Scroll handler for the Contact section.
 */
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
