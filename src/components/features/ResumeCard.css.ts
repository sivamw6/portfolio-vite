import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const resumeCard = style({
  display: 'flex',
  marginBottom: '2rem',
  background: vars.colors.primary,
  color: vars.colors.grey600,
  padding: '1rem',
  borderRadius: vars.borderRadius['2x'],
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '60vw',
      margin: '80px',
    },
  }
});

export const resumeYear = style({
  minWidth: '80px',
  fontWeight: 'bold',
  margin: vars.space['1x'],
  color: vars.colors.grey400,
});

