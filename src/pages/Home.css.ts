import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const home = style({
  width: '90vw',
  height: '80vh',
  marginLeft: '-180px',
  backgroundColor: vars.colors.primary,
})

export const content = style({
  width: '100%',
  position: 'relative',
})

export const circle = style({
  position: 'absolute',
  right: '80px',
  top: '120px',
  width: '400px',
  height:'400px',
  borderRadius: '50%',
})

export const img = style({
  position: 'absolute',
  width: '400px',
  height:'400px',
  borderRadius: '50%',
  objectFit: 'cover',
})