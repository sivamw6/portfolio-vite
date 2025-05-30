import * as styles from './ProjectCard.css';

const ProjectCard = ({ project, github }) => {
  // 取得圖片要連結的網址
  const linkUrl = github
    ? (github.homepage && github.homepage.trim() !== '' ? github.homepage : github.html_url)
    : undefined;

  return (
    <div className={styles.projectCard}>
      <h3 className={styles.label}>{project.name}</h3>
      <div className={styles.imgReflectWrapper}>
        {linkUrl ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img className={styles.projectImg} src={project.image} alt={project.name} />
          </a>
        ) : (
          <img className={styles.projectImg} src={project.image} alt={project.name} />
        )}
      </div>
      <div className={styles.info}>
        {github && (
          <div className={styles.githubInfo}>
            <a href={github.html_url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <div>Language：{github.language}</div>
            <div>Description：{github.description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
