import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import * as styles from './Sidebar.css'

function Sidebar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.pagesLink}>
          <li className={styles.pagesLi}>
          <Link to='/' className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/about' className={styles.navLink}>About</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/projects' className={styles.navLink}>Projects</Link>
          </li>
          <li className={styles.pagesLi}>
          <Link to='/contact' className={styles.navLink}>Contact</Link>
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