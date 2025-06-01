import * as styles from './Footer.css'

/**
 * Footer component displaying copyright and year.
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <hr/>
      <p className={styles.p}>- MavisWang &copy; {currentYear} -</p>
    </footer>
  )
}

export default Footer