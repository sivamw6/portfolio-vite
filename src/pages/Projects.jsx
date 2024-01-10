import * as styles from './Projects.css'
import phpWebsite from '../images/php-website.jpg';
import bootstrapWebsite from '../images/bootstrap-website.jpg';
import asiaVenture from '../images/asia-venture.png';
import SlideInAnimation from '../components/features/SlideInAnimation';

const Projects = () => {
  return (
      <div className={styles.projects}>
        <h1 className="ms-5 ">Projects</h1>
        <SlideInAnimation>
          <div className={`${styles.imgBox} ${styles.boxHover}`}>
            <div className={styles.box1}>
              <a 
                href="https://www.mavishin.com/ootd/index.php" 
                target="_blank" 
                rel="noopener noreferrer">
                <img className={styles.img} src={phpWebsite} alt='php-website'></img>
              </a>
              <p className={styles.p}>PHP CRUD</p>
            </div>

            <div className={styles.box2}>
              <a 
                href="https://decor-life-five.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer">
                <img className={styles.img} src={bootstrapWebsite} alt='bootstrap-website'></img>              
              </a>
              <p className={styles.p}>Bootstrap</p>
            </div>

            <div className={styles.box3}>
                <a 
                  href="https://asia-venture.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img className={styles.img} src={asiaVenture} alt='bootstrap-website'></img>
                </a>
                <h5 className={styles.p}>Next.js</h5>
              </div>

          </div>

        </SlideInAnimation>
      </div>

  )
}

export default Projects;
