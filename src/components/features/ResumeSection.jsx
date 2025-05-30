import * as styles from './ResumeSection.css';
import ResumeCard from './ResumeCard';
import SlideInAnimation from './SlideInAnimation';

const ResumeSection = ({ title, data }) => {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.resumeList}>
        {data.map((item, index) => (
          <SlideInAnimation key={index}>
            <ResumeCard {...item} />
          </SlideInAnimation>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;