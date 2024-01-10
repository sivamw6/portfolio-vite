import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

const ripple = keyframes({
  '0%': { transform: 'scale(0.8)', opacity: 1 },
  '100%': { transform: 'scale(1.2)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const home = style({
  width: '90vw',
  height: '80vh',
  marginLeft: '-180px',
  backgroundColor: vars.colors.primary,
})

export const content = style({
  width: '100%',
  position: 'relative',
})


export const circle = style({
  position: 'absolute',
  right: '80px',
  top: '120px',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-color, defaultColor)',
  zIndex: 1,
});

export const circleBefore = style({
  content: '""',
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'inherit',
  animation: `${ripple} 3s linear infinite`,
  zIndex: -1,
});


export const img = style({
  position: 'absolute',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  objectFit: 'cover',
  zIndex: 2,
});

export const text = style({
  textAlign: 'center',
  color: vars.colors.complementary  ,
  padding: '20px',
  margin: '0 auto',
  maxWidth: '600px', 
  '@media': {
    'screen and (max-width: 600px)': {
      padding: '10px',
      fontSize: '90%',
    },
  },
  opacity: "0",
  animation: `${fadeIn} 2s ease forwards`,
  animationDelay: '1s', 
});