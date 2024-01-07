import { useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import * as styles from './Sidebar.css'

function Sidebar({ home, about, projects, contact }) {
  // Get the current location using react-router's useLocation hook
  const location = useLocation();

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
      if (window.scrollY < about.current.offsetTop) {
        window.history.replaceState(null, null, '/home');
      } else if (window.scrollY < projects.current.offsetTop) {
        window.history.replaceState(null, null, '/about');
      } else if (window.scrollY < contact.current.offsetTop) {
        window.history.replaceState(null, null, '/projects');
      } else {
        window.history.replaceState(null, null, '/contact');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
    // Add dependencies to the dependency array
  }, [about, projects, contact, scrollToSection]); 

  // Scroll to the correct section when URL changes
  useEffect(() => {
    if (location.pathname === '/home') {
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

  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.pagesLink}>
          <li className={styles.pagesLi}>
          <Link to='/' className={styles.navLink} onClick={() => scrollToSection("/home")}>Home</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/about' className={styles.navLink} onClick={() => scrollToSection("/about")}>About</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/projects' className={styles.navLink} onClick={() => scrollToSection("/projects")}>Projects</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/contact' className={styles.navLink} onClick={() => scrollToSection("/contact")}>Contact</Link>
          </li>
        </ul>
        <ul className={styles.externalLink}>
          <li>
            <a className={styles.a} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mavis-wang-64019b277/"><FontAwesomeIcon icon={faLinkedin} /></a>
          </li>
          <li>
          <a className={styles.a} target="_blank" rel="noreferrer" href="https://github.com/sivamw6"><FontAwesomeIcon icon={faGithub} /></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar