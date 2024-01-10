import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const about = style({
  width: '1100px',
  height: '100%',
  backgroundColor: vars.colors.primary,
})

export const content1 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  margin: '100px',
  boxShadow: vars.shadow['2x'],

})

export const content2 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  marginLeft: '30%',
  boxShadow: vars.shadow['2x'],

})

export const content3 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  margin: '100px',
  boxShadow: vars.shadow['2x'],

})

export const p = style({
  textAlign: 'left',
  padding: vars.space['2x'],
})