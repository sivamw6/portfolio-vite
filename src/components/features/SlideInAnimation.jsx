import { useEffect, useRef, useState } from 'react';
import * as styles from './SlideInAnimation.css';

const SlideInAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideInRef = useRef(null);

  useEffect(() => {
    // Capture the current value of the ref in a variable
    const currentRef = slideInRef.current;
    
    const slideInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      slideInObserver.observe(currentRef);
    }

    return () => {
      // Use the captured value in the cleanup function
      if (currentRef) {
        slideInObserver.disconnect();
      }
    };
  }, []); // Dependencies array is empty, so this effect runs once on mount and once on unmount

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
