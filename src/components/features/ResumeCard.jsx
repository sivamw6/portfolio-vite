import * as styles from './ResumeCard.css';

// components/ResumeCard.jsx
const ResumeCard = ({ year, title, subtitle, description, frontend, backend }) => {
  return (
    <div className={styles.resumeCard}>
      <div className={styles.resumeYear}>{year}</div>
      <div className={styles.resumeContent}>
        <h4 className="mb-2">{title}</h4>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        {frontend && <p><strong>Frontend:</strong> {frontend}</p>}
        {backend && <p><strong>Backend:</strong> {backend}</p>}
      </div>
    </div>
  );
};

export default ResumeCard;