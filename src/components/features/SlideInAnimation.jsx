import { useEffect, useRef, useState } from 'react';
import styles from './SlideInAnimation.css';

const SlideInAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideInRef = useRef(null);

  useEffect(() => {
    const slideInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    slideInObserver.observe(slideInRef.current);

    return () => {
      slideInObserver.disconnect();
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
