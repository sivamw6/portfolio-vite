import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const contact = style({
  width: '90vw',
  height: '100%',
  marginLeft: "180px",
  paddingTop: '100px',
  paddingBottom: '200px',
  display: 'flex',
  backgroundColor: vars.colors.semiTransparent,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      height: '100vh',
      paddingLeft: '70px',
    },
  },
})

export const content = style({
  justifyContent: 'center',
  height: '500px',
  margin: 'auto',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column', 
    },
  },
})

export const formBox = style({
  width: '450px',
  margin: '20px',
  
})

export const button = style({
  width: '100%',
  border: 'none',
  padding: vars.space['1x'],
  borderRadius: vars.borderRadius['2x'],  
  backgroundColor: 'var(--primary-color, defaultColor)',
  ':hover': {
    backgroundColor: vars.colors.primary,
    color: vars.colors.complementary,
    boxShadow: vars.shadow['2x'],
  },
  ':active': {
    boxShadow: vars.shadow['3x'],
  }
})

export const mapBox = style({
  width: '450px',
  margin: '20px',
})

export const messageBox = style({
  marginTop: '20px',
  borderRadius: '8px',
});