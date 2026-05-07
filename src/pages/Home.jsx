import * as styles from './Home.css';
import profilePhoto from '../images/profile-photo.jpg';
import HandDrawnLine from '../components/features/HandDrawnLine';

function Home() {
  function createLetterSpans(text, lineDelay = 0) {
    return [...text].map((char, index) => {
      const character = char === ' ' ? ' ' : char;
      return (
        <span key={index} className={styles.letterSpan} style={{ animationDelay: `${lineDelay + index * 0.1}s` }}>
          {character}
        </span>
      );
    });
  }

  return (
    <div className={styles.home}>
      <div className={styles.flexContainer}>
        <div className={styles.circle}>
          <div className={styles.circleBefore}></div>
          <img className={styles.img} loading="lazy" src={profilePhoto} alt="Mavis Wang" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.letterAnimation}>
            {createLetterSpans("Hi, I'm Mavis", 1)}
          </h1>
          <p className={styles.letterAnimation}>
            {createLetterSpans("Software & AI Engineer", 2)}
          </p>
          <HandDrawnLine />
        </div>
      </div>
    </div>
  )
}

export default Home
