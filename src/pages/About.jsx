import * as styles from './About.css'
import SlideInAnimation from '../components/features/SlideInAnimation'

function About() {
  return (
<div className={styles.about}> 
  <h1 className='ms-5'>About Me...</h1>
  <SlideInAnimation>
    <div className={styles.content1}>
      <p className={styles.p}>
        Hello, I&apos;m Mavis Wang, a dedicated IT professional specializing in web development. My journey began in 2022, and since then, I&apos;ve been focused on refining my skills in HTML, CSS, JavaScript, React, PHP, and SQL.
      </p>
    </div>
  </SlideInAnimation>

  <SlideInAnimation>
    <div className={styles.content2}>
      <p className={styles.p}>
        My experience ranges from crafting user-centric websites to developing complex web applications. I thrive on challenges and enjoy translating creative ideas into functional and accessible web solutions. 
      </p>
    </div>
  </SlideInAnimation>

  <SlideInAnimation>
    <div className={styles.content3}>
      <p className={styles.p}>
        At Holmesglen Institute, I took the lead in UI/UX design for &apos;react-handy-modal&apos;, a customizable UI component package. I&apos;m also proud of my work on &apos;Bubble Breeze&apos;, a full-stack e-commerce platform I developed using the FERN stack.
      </p>
    </div>
  </SlideInAnimation>

  <SlideInAnimation>
    <div className={styles.content4}>
      <p className={styles.p}>
        In my free time, I&apos;m either exploring new technologies or keeping abreast of the latest trends in web development. My goal is to continuously advance my technical skills and contribute to innovative web solutions.
      </p>
    </div>
  </SlideInAnimation>
</div>
  )
}

export default About