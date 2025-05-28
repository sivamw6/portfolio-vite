import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const resume = style({
  width: '90vw',
  height: '100%',
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
})


