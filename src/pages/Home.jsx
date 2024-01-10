import * as styles from './Home.css';

import profilePhoto from '../images/profile-photo.jpg';


function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.circle}>
          <img className={styles.img} src={profilePhoto} alt="" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>
            Hi, I&apos;m Mavis
          </h1>
            <div className={styles.p}>I&apos;m a Web developer</div>
        </div>
      </div>
    </div>
  )
}

export default Home