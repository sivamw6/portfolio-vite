import { useEffect, useState } from 'react';
import { SliderPicker } from 'react-color';

import * as styles from './ThemeSwitcher.css';

/**
 * Checks if the current device is mobile based on window width.
 * @returns {boolean}
 */
const isMobile = () => window.innerWidth <= 600;

/**
 * ThemeSwitcher component allows users to change the primary theme color.
 * On mobile, it auto-rotates the color.
 */
const ThemeSwitcher = () => {
  const [primaryColor, setPrimaryColor] = useState('#e6b3b8');
  const [show, setShow] = useState(!isMobile());

  useEffect(() => {
    const handleResize = () => setShow(!isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto color rotation for mobile devices
  useEffect(() => {
    if (show) return; // Only auto-rotate on mobile
    let hue = Math.floor(Math.random() * 360);
    let timer = setInterval(() => {
      hue = (hue + 2) % 360;
      const color = `hsl(${hue}, 70%, 80%)`;
      setPrimaryColor(color);
      document.documentElement.style.setProperty('--primary-color', color);
    }, 70); // Adjust speed as needed
    return () => clearInterval(timer);
  }, [show]);
  
  useEffect(() => {
    if (show) {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    }
  }, [primaryColor, show]);

  if (!show) return null;

  return (
    <div
      className={styles.hue}
      onTouchMove={e => e.preventDefault()}
      onTouchStart={e => e.preventDefault()}
    >
      <SliderPicker
        className={styles.huePickerContainer}
        color={primaryColor}
        onChange={color => {
          setPrimaryColor(color.hex);
          document.documentElement.style.setProperty('--primary-color', color.hex);
        }}
      />
      <span className={styles.hintText}>Try switching the theme color!</span>
    </div>
  );
};

export default ThemeSwitcher;
