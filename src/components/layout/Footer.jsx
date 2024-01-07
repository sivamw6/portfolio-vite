import * as styles from './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <hr/>
      <p className="text-center m-5" >- MavisWang &copy; {currentYear} -</p>
    </footer>
  )
}

export default Footer