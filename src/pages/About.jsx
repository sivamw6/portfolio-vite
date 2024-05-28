import * as styles from './About.css'
import SlideInAnimation from '../components/features/SlideInAnimation'

function About() {
  return (
<div className={styles.about}> 
  <h1 className='ms-5'>About Me...</h1>
  <SlideInAnimation>
    <div className={styles.content1}>
      <p className={styles.p}>
        Hello, I&apos;m Mavis Wang, a dedicated IT professional specializing in web development and IT support. Since June 2023, I&apos;ve been working at Rickpeck Pty Ltd as an IT Support Specialist, where I manage various technical issues and ensure smooth IT operations.
      </p>
    </div>
  </SlideInAnimation>

  <SlideInAnimation>
    <div className={styles.content2}>
      <p className={styles.p}>
        My experience ranges from crafting user-centric websites to developing complex web applications. I thrive on challenges and enjoy translating creative ideas into functional and accessible web solutions. I am proficient in various JavaScript frameworks, including React, Vue, and Angular.
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
        I am also actively involved in volunteer work. I contribute as a Web Developer at VicWise, where I help design and maintain their website. Additionally, I volunteer as an iPad Tutor at Boroondara Community Library, assisting community members with their tech needs.
      </p>
    </div>
  </SlideInAnimation>

  <SlideInAnimation>
    <div className={styles.content5}>
      <p className={styles.p}>
        Currently, I am pursuing a Master of Information Technology in Computer Science at Queensland University of Technology (QUT). In my free time, I&apos;m either exploring new technologies or keeping abreast of the latest trends in web development. My goal is to continuously advance my technical skills and contribute to innovative web solutions.
      </p>
    </div>
  </SlideInAnimation>
</div>  )
}

export default About