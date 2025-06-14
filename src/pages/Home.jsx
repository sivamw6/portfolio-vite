import * as styles from './Home.css';

import profilePhoto from '../images/profile-photo.jpg';
import HandDrawnLine from '../components/features/HandDrawnLine';

/**
 * Home page component displaying profile, animated text, and a hand-drawn line.
 * @param {string} lineColor - The color for the hand-drawn line
 */
function Home({lineColor}) {

  /**
   * Splits a string into animated span elements for letter-by-letter animation.
   * @param {string} text - The text to animate
   * @param {number} lineDelay - Animation delay for the line
   * @returns {JSX.Element[]}
   */
  function createLetterSpans(text, lineDelay = 0) {
    return [...text].map((char, index) => {
      const character = char === ' ' ? '\u00A0' : char;
  
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
          <img className={styles.img} loading="lazy" src={profilePhoto} alt="" />
        </div>        
        <div className={styles.text}>
        <h1 className={styles.letterAnimation}>
          {createLetterSpans("Hi, I'm Mavis", 1)}
        </h1>
        <p className={styles.letterAnimation}>
          {createLetterSpans("I'm a Web developer", 2)} {/* 2s delay for second line */}
        </p>
        <HandDrawnLine color={lineColor} style={{ marginTop: '-10px', marginBottom: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default Home