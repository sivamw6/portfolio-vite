import * as styles from './Resume.css';
import ResumeSection from '../components/features/ResumeSection';
import { getResumeData } from '../api/resume';
import Button from '../components/features/Button';

function Resume() {
  const { education, experience } = getResumeData();

  return (
    <div className={styles.resume}>
      <h1 className="m-5">Resume Overview</h1>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <ResumeSection title="Education" data={education} />
        </div>
        <div className={styles.rightColumn}>
          <ResumeSection title="Experience" data={experience} />
        </div>
      </div>
      <div className={styles.buttonContainer}>  
        <Button
          as="a"
          href="./Mavis_Wang_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Download My Resume
        </Button>  
      </div>
    </div>
  );
}

export default Resume;