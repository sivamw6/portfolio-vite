import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const resume = style({
  width: '90vw',
  height: '100%',
  minHeight: '100vh',
  marginLeft: '180px',
  paddingTop: '100px',
  paddingBottom: '400px',
  backgroundColor: vars.colors.background,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      paddingLeft: '70px',
      height: '100%'
    },
  },
});

export const flexContainer = style({
  display: 'flex',
  gap: '3vw',
  alignItems: 'flex-start',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 900px)': {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
});

export const leftColumn = style({
  flex: 1,
  minWidth: '320px',
  maxWidth: '600px',
});

export const rightColumn = style({
  flex: 1,
  minWidth: '320px',
  maxWidth: '600px',
});


export const buttonContainer = style({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem auto 0 auto',
  textAlign: 'center',
});