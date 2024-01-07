import  { useState, useEffect } from 'react';
import { SliderPicker } from 'react-color';

import * as styles from './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [primaryColor, setPrimaryColor] = useState('#e6b3b8');

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
    document.documentElement.style.setProperty('--primary-color', color.hex);
  };
  
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, [primaryColor]); // Add primaryColor to the dependency array

  return (
    <div className={styles.hue}>
      <SliderPicker color={primaryColor} onChange={handlePrimaryColorChange} />
    </div>
  );
};

export default ThemeSwitcher;
