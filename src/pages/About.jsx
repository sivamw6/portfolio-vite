import * as styles from './About.css'
import SlideInAnimation from '../components/features/SlideInAnimation'

function About() {
  return (
    <div className={styles.about}> 
      <h1 className="ms-5">About Me</h1>

      <SlideInAnimation>
        <div className={styles.content1}>
          <p className={styles.p}>
            Hi! I’m Mavis Wang — a web developer and IT enthusiast based in Australia. I’m currently pursuing a Master of Information Technology (Computer Science) at Queensland University of Technology, where I’m expanding my expertise in software design, data structures, and emerging technologies.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content2}>
          <p className={styles.p}>
            My professional journey began in the tourism industry, but I transitioned into tech to pursue more meaningful, problem-solving work. Since 2023, I’ve worked as an IT Support Specialist at Rickpeck Pty Ltd, helping streamline internal systems and resolve technical challenges efficiently.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content3}>
          <p className={styles.p}>
            As a developer, I’m passionate about creating clean, accessible, and intuitive web interfaces. I’ve built projects using modern JavaScript frameworks such as React, Vue, and Angular, and enjoy designing full-stack solutions that are both functional and elegant.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content4}>
          <p className={styles.p}>
            I’m also actively involved in volunteer work — contributing as a Web Developer at VicWise and offering digital support as an iPad Tutor at Boroondara Community Library. These roles allow me to apply my skills in real-world settings while giving back to the community.
          </p>
        </div>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className={styles.content5}>
          <p className={styles.p}>
            Whether I’m debugging code or mentoring others, I approach every challenge with curiosity and care. I’m continuously improving my technical abilities while working on personal projects, open-source contributions, and hands-on coursework. My goal? To become a developer who blends technical precision with human-centered design.
          </p>
        </div>
      </SlideInAnimation>
    </div>
  );
}

export default About