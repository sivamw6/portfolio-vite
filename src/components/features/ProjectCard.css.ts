import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 


export const projectCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: vars.borderRadius['1x'],
  padding: '1.5rem',
  margin: '1rem',
  minWidth: '280px',
  maxWidth: '350px',
  height: '250px',
});

export const imgReflectWrapper = style({
  position: 'relative',
  width: '100%',
  marginBottom: '1rem',
});

export const projectImg = style({
  width: '100%',
  height: '250px',
  borderRadius: '10px',
  boxShadow: vars.shadow['4x'],
  transformOrigin: 'center',
  transform: 'perspective(500px) rotateY(20deg)',
  WebkitBoxReflect: 'below 3px linear-gradient(transparent, transparent, rgba(255,255,255,0.68))',
  transition: '0.6s',
  opacity: 0.7,
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

export const projectImgReflect = style({
  display: 'none', 
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['2x'],
  marginTop: '2.5rem',
});

export const label = style({
  color: vars.colors.grey400,
  marginBottom: vars.space['7x'],
});

export const githubInfo = style({
  minWidth: '200px',
  backgroundColor: vars.colors.primary,
  marginTop: vars.space['8x'],
  padding: vars.space['2x'],
  fontSize: '0.95rem',
});
