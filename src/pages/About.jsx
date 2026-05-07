import * as styles from './About.css'
import SlideInAnimation from '../components/features/SlideInAnimation'

function About() {
  return (
    <div className={styles.about}>
      <h1 className="ms-5">About Me</h1>

      <SlideInAnimation>
        <div className={styles.content1}>
          <p className={styles.p}>
            Hi! I&apos;m Mavis Wang — a final-year Master of IT (Computer Science) student at Queensland University of Technology, graduating in 2026 with a High Distinction average (6.1x / 7.0). I have a strong foundation in software development, data structures, and computer science fundamentals.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content2}>
          <p className={styles.p}>
            I&apos;m currently exploring machine learning and AI applications through personal projects — from AI-powered stock monitoring systems using the Gemini API, to a blockchain-based student credential verification platform. I&apos;m drawn to how these technologies can solve real-world problems at scale.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content3}>
          <p className={styles.p}>
            As a developer, I work across the full stack with C# / ASP.NET, JavaScript, React, and Python. I&apos;m building my data science toolkit with Pandas, NumPy, and Scikit-learn, and I&apos;ve deployed projects on Vercel, Netlify, and Docker — always aiming for clean, accessible, and maintainable solutions.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content4}>
          <p className={styles.p}>
            Beyond coding, I give back to the community as a volunteer Web Developer at AusWise and as an IT Support & iPad Tutor at City of Boroondara — work that has even been featured on Channel 7 News. I believe technology is most meaningful when it empowers people.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content5}>
          <p className={styles.p}>
            My goal is to grow as a Software and AI Engineer — blending technical depth with real-world impact. Whether building intelligent systems, contributing to large Agile teams, or rapid-prototyping new ideas, I approach every challenge with curiosity, care, and a drive to keep improving.
          </p>
        </div>
      </SlideInAnimation>
    </div>
  );
}

export default About
