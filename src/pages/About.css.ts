import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const about = style({
  width: '90vw',
  height: '100%',
  marginLeft: "180px",
  paddingBottom: '20px',
  backgroundColor: vars.colors.primary,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      paddingLeft: '70px',
      height: '100%'
    },
  },
})

export const content1 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  margin: '100px',
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '50vw',
      margin: '40px',

    },
  },})

export const content2 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  marginLeft: '30%',
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '60vw',
      margin: '80px',
    },
  }
})

export const content3 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  margin: '100px',
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '50vw',
      margin: '40px',
    },
  }
})

export const content4 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  marginLeft: '45%',
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '60vw',
      margin: '80px',
    },
  }})


export const content5 = style({
  width: '30vw',
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  margin: '100px',
  boxShadow: vars.shadow['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      width: '50vw',
      margin: '40px',
    },
  }
})



export const p = style({
  textAlign: 'left',
  padding: vars.space['2x'],
})