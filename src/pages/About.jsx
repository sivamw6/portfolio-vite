import * as styles from './About.css'
import SlideInAnimation from '../components/features/SlideInAnimation'

function About() {
  return (
    <div className={styles.about}> 
      <h1 className='ms-5'>About Me...</h1>
      <SlideInAnimation>
        <div className={styles.content1}>
          <p className={styles.p}>
            Hello, my name is Mavis Wang and I am a web developer with a passion for creating beautiful and functional websites. I started my journey in 2022 and have been honing my skills ever since. I am proficient in a variety of programming languages, including HTML, CSS, JavaScript, React, PHP, and SQL.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content2}>
          <p className={styles.p}>
            Whether it&apos;s building a simple landing page or a complex web
            application, I love the challenge of bringing ideas to life and
            making them accessible to users across the web. In my spare time,
            you can find me exploring new technologies and keeping up with the
            latest trends in web development.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content3}>
          <p className={styles.p}>
            Whether it&apos;s building a simple landing page or a complex web
            application, I love the challenge of bringing ideas to life and
            making them accessible to users across the web. In my spare time,
            you can find me exploring new technologies and keeping up with the
            latest trends in web development.
          </p>
        </div>
      </SlideInAnimation>
      <SlideInAnimation>
        <div className={styles.content4}>
          <p className={styles.p}>
            Whether it&apos;s building a simple landing page or a complex web
            application, I love the challenge of bringing ideas to life and
            making them accessible to users across the web. In my spare time,
            you can find me exploring new technologies and keeping up with the
            latest trends in web development.
          </p>
        </div>
      </SlideInAnimation>
    </div>
  )
}

export default About