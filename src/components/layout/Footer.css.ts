import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const footer = style({
  background: `linear-gradient(to bottom, ${vars.colors.primary} 0%, var(--primary-color, defaultColor) 100%)`,
});

export const p = style({
  margin: '80px',
  textAlign: 'center',
});
