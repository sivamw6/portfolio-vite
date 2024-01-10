import  { useEffect, useRef, useState } from 'react';
import * as styles from './slideInAnimation.css'; // Adjust the path as needed

const SlideInAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideInRef = useRef(null);

  useEffect(() => {
    const slideInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (slideInRef.current) {
      slideInObserver.observe(slideInRef.current);
    }

    return () => {
      if (slideInRef.current) {
        slideInObserver.disconnect();
      }
    };
  }, []);

  return (
    <div
      className={`${styles.slideIn} ${isVisible ? styles.isVisible : ''}`}
      ref={slideInRef}
    >
      {children}
    </div>
  );
};

export default SlideInAnimation;
