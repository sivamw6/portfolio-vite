import { useEffect, useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaHome, FaUser, FaWindowMaximize, FaPaperPlane } from "react-icons/fa";

import * as styles from './Sidebar.css'

function Sidebar({ home, about, projects, contact }) {
  // Get the current location using react-router's useLocation hook
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('/');
  

  // Define the function to determine the active section based on scroll position
  const determineActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < about.current.offsetTop) {
      return '/';
    } else if (scrollPosition < projects.current.offsetTop) {
      return '/about';
    } else if (scrollPosition < contact.current.offsetTop) {
      return '/projects';
    } else {
      return '/contact';
    }
  }, [about, projects, contact]);

  // Function to scroll to the given section
  const scrollToSection = useCallback((page) => {
    const elementRef =
      page === "/" ? home
      : page === "/about" ? about
      : page === "/projects" ? projects
      : page === "/contact" ? contact
      : null;

    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [home, about, projects, contact]);

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
    } else if (location.pathname === '/contact') {
      scrollToSection(contact);
    }
    // Add dependencies to the dependency array
  }, [location, home, about, projects, contact, scrollToSection]); 

  const isActive = (path) => {
    return activeSection === path;
  };

  return (
    <div>
      <nav className={styles.nav}>
        <ul className={`${styles.linkContainer} ${styles.pagesLink}`}>
        <li className={`${styles.linkStyle} ${isActive('/') ? styles.activeLinkStyle : ''}`}>
          <Link to='/' onClick={() => scrollToSection("/")}>
            <span className={styles.textLinkStyle}>Home</span>
            <FaHome className={styles.iconLinkStyle} />
          </Link>
        </li>
        <li className={`${styles.linkStyle} ${isActive('/about') ? styles.activeLinkStyle : ''}`}>
            <Link to='/about' onClick={() => scrollToSection("/about")}>
              <span className={styles.textLinkStyle}>About</span>
              <FaUser className={styles.iconLinkStyle} />
            </Link>
          </li>
          <li className={`${styles.linkStyle} ${isActive('/projects') ? styles.activeLinkStyle : ''}`}>
            <Link to='/projects' onClick={() => scrollToSection("/projects")}>
              <span className={styles.textLinkStyle}>Project</span>
              <FaWindowMaximize className={styles.iconLinkStyle} />
            </Link>
          </li>
          <li className={`${styles.linkStyle} ${isActive('/contact') ? styles.activeLinkStyle : ''}`}>
            <Link to='/contact' onClick={() => scrollToSection("/contact")}>
              <span className={styles.textLinkStyle}>Contact</span>
              <FaPaperPlane className={styles.iconLinkStyle} />
            </Link>
          </li>
        </ul>
        <ul className={`${styles.linkContainer} ${styles.externalLinkContainer}`}>
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
      </nav>
    </div>
  )
}

export default Sidebar