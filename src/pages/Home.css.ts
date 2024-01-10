import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const home = style({
  width: '100%',
  height: '80vh',
  backgroundColor: vars.colors.primary,
})