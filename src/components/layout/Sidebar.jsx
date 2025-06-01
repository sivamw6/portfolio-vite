import { useEffect, useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaHome, FaUser, FaWindowMaximize, FaPaperPlane, FaAddressBook } from "react-icons/fa";
import * as styles from './Sidebar.css';

/**
 * Sidebar component for navigation and social links.
 * @param {object} sectionRefs - References to page sections for scroll navigation
 */
function Sidebar({ sectionRefs }) {
  // Get the current location using react-router's useLocation hook
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { home, about, projects, resume, contact } = sectionRefs;

  /**
   * Determines the active section based on the current scroll position.
   * @returns {string} The path of the active section
   */
  const determineActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < about.current.offsetTop) {
      return '/';
    } else if (scrollPosition < projects.current.offsetTop) {
      return '/about';
    } else if (scrollPosition < resume.current.offsetTop) {
      return '/projects';
    } else if (scrollPosition < contact.current.offsetTop) {
      return '/resume';
    } else {
      return '/contact';
    }
  }, [about, projects, resume, contact]);

  /**
   * Scrolls smoothly to the given section and updates the active section.
   * @param {string} page - The path of the section to scroll to
   */
  const scrollToSection = useCallback((page) => {
    const elementRef =
      page === "/" ? home
      : page === "/about" ? about
      : page === "/projects" ? projects
      : page === "/resume" ? resume
      : page === "/contact" ? contact
      : null;

    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(page);
  }, [home, about, projects, resume, contact]);

  // Add event listener to window to update URL when scrolling
  useEffect(() => {
    const handleScroll = debounce(() => {
      setActiveSection(determineActiveSection());
    }, 100);

    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
    // Add dependencies to the dependency array
  }, [determineActiveSection]);

  // Scroll to the correct section when URL changes
  useEffect(() => {
    if (location.pathname === '/') {
      scrollToSection(home);
    } else if (location.pathname === '/about') {
      scrollToSection(about);
    } else if (location.pathname === '/projects') {
      scrollToSection(projects);
    } else if (location.pathname === '/resume') {
      scrollToSection(resume);
    } else if (location.pathname === '/contact') {
      scrollToSection(contact);
    }
    // Add dependencies to the dependency array
  }, [location, home, about, projects, resume, contact, scrollToSection]); 

  /**
   * Checks if the given path is the currently active section.
   * @param {string} path - The path to check
   * @returns {boolean}
   */
  const isActive = (path) => {
    return activeSection === path;
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* 遮罩 */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

      {/* Sidebar 主體 */}
      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
      >
        <div className={`${styles.linkContainer} ${styles.pagesLink}`}>
          <ul>
          <li className={`${styles.linkStyle} ${isActive('/') ? styles.activeLinkStyle : ''}`}>
            <Link to='/' onClick={() => { scrollToSection("/"); setMenuOpen(false); }}>
              <span className={styles.textLinkStyle}>Home</span>
              <FaHome className={styles.iconLinkStyle} />
            </Link>
          </li>
          <li className={`${styles.linkStyle} ${isActive('/about') ? styles.activeLinkStyle : ''}`}>
              <Link to='/about' onClick={() => { scrollToSection("/about"); setMenuOpen(false); }}>
                <span className={styles.textLinkStyle}>About</span>
                <FaUser className={styles.iconLinkStyle} />
              </Link>
            </li>
            <li className={`${styles.linkStyle} ${isActive('/projects') ? styles.activeLinkStyle : ''}`}>
              <Link to='/projects' onClick={() => { scrollToSection("/projects"); setMenuOpen(false); }}>
                <span className={styles.textLinkStyle}>Project</span>
                <FaWindowMaximize className={styles.iconLinkStyle} />
              </Link>
            </li>
            <li className={`${styles.linkStyle} ${isActive('/resume') ? styles.activeLinkStyle : ''}`}>
              <Link to='/resume' onClick={() => { scrollToSection("/resume"); setMenuOpen(false); }}>
                <span className={styles.textLinkStyle}>Resume</span>
                <FaAddressBook className={styles.iconLinkStyle} />
              </Link>
            </li>
            <li className={`${styles.linkStyle} ${isActive('/contact') ? styles.activeLinkStyle : ''}`}>
              <Link to='/contact' onClick={() => { scrollToSection("/contact"); setMenuOpen(false); }}>
                <span className={styles.textLinkStyle}>Contact</span>
                <FaPaperPlane className={styles.iconLinkStyle} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.linkContainer} ${styles.externalLinkContainer}`}>
          <ul>
            <li>
              <a className={styles.externalLink} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mavis-wang-64019b277/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a className={styles.externalLink} target="_blank" rel="noreferrer" href="https://github.com/sivamw6">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar