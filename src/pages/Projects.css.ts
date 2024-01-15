import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const projects = style({
  width: '1200px',
  height: '100%',
  marginLeft: "180px",
  paddingTop: '100px',
  paddingBottom: '400px',
  backgroundColor: vars.colors.primary,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      paddingLeft: '70px',
      height: '100%'
    },
  },
});


export const imgBox = style({
  paddingTop: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space['4x'],
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: vars.space['6x'],
    },
  },
});

export const img = style({
  width: '100%',
  height: '250px',
  borderRadius: '10px',
  transformOrigin: 'center',
  transform: 'perspective(500px) rotateY(20deg)',
  WebkitBoxReflect: 'below 3px linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.68))',
  transition: '0.6s',
  opacity: 0.7,

  // Hover state
  selectors: {
    '&:hover': {
      opacity: 1,
      transform: 'perspective(800px)',
    },
  },
  '@media': {
    'screen and (max-width: 600px)': {
      transform: 'none', 
      WebkitBoxReflect: 'unset',

    },
  },
});

export const p = style({
  display: 'none',
});

