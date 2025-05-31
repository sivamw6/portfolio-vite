import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import { globalStyle } from '@vanilla-extract/css';

export const hue = style({
  width: '20%',
  position : 'absolute',
  left: '180px',
  top: '5%',
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
})

export const huePickerContainer = style({});

globalStyle(`.${huePickerContainer} div[style*="margin-top: 20px"]`, {
  display: 'none !important',
});

const fadeInSlide = keyframes({
  '0%': { opacity: 0, transform: 'translateX(20px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const hintText = style({
  marginLeft: '1.5rem',
  color: vars.colors.grey500,
  fontSize: '1rem',
  fontStyle: 'italic',
  letterSpacing: '0.5px',
  animation: `${fadeInSlide} 1.2s ease`,
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});