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
  width: '100vw',
  height: '80vh',
  background: `linear-gradient(to top, ${vars.colors.primary} 0%, var(--primary-color, defaultColor) 180%)`,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      height: '100vh',
      marginLeft: '0',
      paddingLeft: '0',
    },
  },
})

export const content = style({
  width: '100%',
  position: 'relative',
})

export const flexContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '60px',
  width: '100%',
  height: '100%',
  marginLeft: '8vw',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      gap: '20px',
      marginRight: 0,
      marginLeft: '0',
    },
  },
});


export const circle = style({
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-color, defaultColor)',
  filter: 'blur(3px)',
  transition: 'filter 0.5s ease-in-out',

  ":hover": {
    filter: 'blur(0px)'
  },
  '@media': {
    'screen and (max-width: 600px)': {
      width: '300px',
      height: '300px',
      
    },
  },
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
});


export const img = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  filter: 'blur(8px)',
  transition: 'filter 0.8s ease-in-out',
  ":hover": {
    filter: 'blur(1px)'
  },
});

export const text = style({
  position: 'absolute',
  top: '30vh',
  left: '25vw',
  textAlign: 'center',
  color: vars.colors.complementary  ,
  padding: '20px',
  margin: '0 auto',
  maxWidth: '600px', 
  '@media': {
    'screen and (max-width: 600px)': {
      padding: '10px',
      fontSize: '90%',
      top: '20vh',
    },
  },
  opacity: "0",
  animation: `${fadeIn} 2s ease forwards`,
  animationDelay: '1s', 
});

// Parent container style
export const letterAnimation = style({
  // Styles for the container of the letters (h1, p, etc.)
  // Add any necessary styles here
});

// Child (span) element style
export const letterSpan = style({
  opacity: 0,
  animation: `${fadeIn} 0.3s ease forwards`,
  display: 'inline-block', // Necessary for individual letter animation
  // Add additional styles if needed
});