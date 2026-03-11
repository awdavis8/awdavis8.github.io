import { useEffect, useRef, useState } from 'react'
import './MobileNavbar.css'

/**
 * Mobile navigation with two dropdown panels.
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
function MobileNavbar({
  emailAddress,
  linkedInUrl,
  resumeUrl,
  onAboutClick,
  onWorkClick,
  onProjectsClick,
  onContactClick,
}) {
  const mobileNavRef = useRef(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false)

  const closeMobileMenus = () => {
    setIsMobileNavOpen(false)
    setIsMobileContactOpen(false)
  }

  useEffect(() => {
    // Close menus when tapping/clicking outside the nav container.
    const handleOutsideClick = (event) => {
      if (!mobileNavRef.current?.contains(event.target)) {
        closeMobileMenus()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    // Close floating panels when the page scrolls
    const handleScroll = () => {
      closeMobileMenus()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation" ref={mobileNavRef}>
      <div className="mobile-nav-group">
        <button
          className="mobile-nav-toggle"
          onClick={() => {
            setIsMobileContactOpen((prev) => !prev)
            setIsMobileNavOpen(false)
          }}
          aria-expanded={isMobileContactOpen}
          aria-controls="mobile-contact-links"
        >
          Contact Me
        </button>
        {isMobileContactOpen && (
          <div className="mobile-nav-panel mobile-nav-panel--contact" id="mobile-contact-links">
            <a className="mobile-nav-link mobile-nav-link--anchor" href={`mailto:${emailAddress}`}>
              Email
            </a>
            <a className="mobile-nav-link mobile-nav-link--anchor" href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="mobile-nav-link mobile-nav-link--anchor" href={resumeUrl}>
              Resume
            </a>
          </div>
        )}
      </div>

      <div className="mobile-nav-group">
        <button
          className="mobile-nav-toggle"
          onClick={() => {
            setIsMobileNavOpen((prev) => !prev)
            setIsMobileContactOpen(false)
          }}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav-links"
        >
          Navigate
        </button>
        {isMobileNavOpen && (
          <div className="mobile-nav-panel mobile-nav-panel--navigate" id="mobile-nav-links">
            <button
              className="mobile-nav-link"
              onClick={() => {
                onAboutClick()
                closeMobileMenus()
              }}
            >
              About Me
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => {
                onWorkClick()
                closeMobileMenus()
              }}
            >
              Work Experience
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => {
                onProjectsClick()
                closeMobileMenus()
              }}
            >
              Projects
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => {
                onContactClick()
                closeMobileMenus()
              }}
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default MobileNavbar
