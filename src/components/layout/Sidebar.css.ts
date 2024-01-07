import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const nav = style({
  backgroundColor: vars.colors.semiTransparent,
  color: vars.colors.primary,
  height: '80vh',
  marginLeft : '20px',
  padding: '10px',
  width: '130px',
  boxShadow: vars.shadow['4x'],
});