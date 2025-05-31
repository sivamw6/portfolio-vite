import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const projects = style({
  width: '90vw',
  minHeight: '100vh',
  marginLeft: "180px",
  paddingTop: '100px',
  paddingBottom: '400px',
  backgroundColor: vars.colors.background,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
    },
  },
});

export const imgBox = style({
  paddingTop: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space['4x'],
  flexWrap: 'wrap',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: vars.space['2x'],
      paddingTop: '0',
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

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['1x'],
  marginTop: vars.space['5x'],
});

export const p = style({
  display: vars.colors.grey400,
});

