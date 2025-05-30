import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const nav = style({
  backgroundColor: vars.colors.semiTransparent,
  height: '100vh',
  width: '180px',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 2000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  transition: 'left 0.3s',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '80px',
      minWidth: '80px',
      maxWidth: '320px',
      left: '-100vw', // 預設隱藏
      background: '#fff',
      boxShadow: '2px 0 16px rgba(0,0,0,0.08)',
      zIndex: 2000,
    },
  }
});

export const linkContainer = style({
  position: 'absolute',
  marginLeft: 'auto',
  width: '100%',
  textAlign: 'center',
  color: vars.colors.complementary,
  fontSize: vars.space['2x'],
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: vars.space['2x'],
  },}
});

export const linkStyle = style({
  paddingTop: vars.space['2x'],
  paddingBottom: vars.space['2x'],
  ':hover': {
    fontSize: '17px',
  },
  boxShadow: 'none',
  transition: 'box-shadow 0.5s ease-in-out',
});

export const textLinkStyle = style({
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
  },}
})

export const iconLinkStyle = style({
  display: 'none', 
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'inherit',
    },
  },
});

export const externalLinkContainer = style({
  bottom: '325px',
  left: '50%',
  transform: 'translateX(-50%)',
  
  fontSize: vars.space['4x'],
  '@media': {
    'screen and (max-width: 600px)': {
      position: 'static',
      transform: 'none',
      fontSize: '1.3rem',
      marginTop: 'auto',
      marginBottom: '1rem',
    },
  }
});

export const externalLink  = style({
  paddingTop: vars.space['2x'],

  ':hover': {
    color:' var(--primary-color, defaultColor)',
  }
})

export const pagesLink = style({
  top: '40%',
  transform: 'translateY(-50%)',
});

export const weatherWidget = style({
  bottom: '25px',
  left: '50%',
  transform: 'translateX(-50%)',
  
  fontSize: vars.space['4x'],
  '@media': {
    'screen and (max-width: 600px)': {
      position: 'static',
      transform: 'none',
      fontSize: '1.3rem',
      marginBottom: '1rem',
    },
  }
});


export const activeLinkStyle = style({
  boxShadow: '0 6px 4px -4px ' + ' var(--primary-color, defaultColor)',
  transition: 'box-shadow  0.5s ease-in-out',
});

export const hamburger = style({
  display: 'none',
  position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: 1001,
  width: '32px',
  height: '32px',
  background: 'none',
  border: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'flex',

    },
  },
});

export const hamburgerLine = style({
  width: '28px',
  height: '4px',
  background: '#333',
  margin: '3px 0',
  borderRadius: '2px',
});

export const overlay = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 1999,
    },
  },
});

export const open = style({
  '@media': {
    'screen and (max-width: 600px)': {
      left: 0,
    },
  },
});