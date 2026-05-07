import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const projects = style({
  width: 'calc(100vw - 180px)',
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
