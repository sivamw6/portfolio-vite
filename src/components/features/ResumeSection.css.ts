import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 


export const sectionTitle = style({
  fontSize: '2rem',
  color: vars.colors.grey400,
  marginBottom: '1rem',
});

export const resumeList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});