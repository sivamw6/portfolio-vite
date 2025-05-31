import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const contact = style({
  width: '90vw',
  minHeight: '100vh',
  marginLeft: "180px",
  marginBottom: '100px',
  paddingTop: '40px',
  background: `linear-gradient(
    to top,
    ${vars.colors.primary} 0%,
    ${vars.colors.primary} 30%,
    ${vars.colors.background} 100%
  )`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      paddingLeft: '0',
    },
  },
});


export const mapImage = style({
  width: '100%',
  maxWidth: '1000px',
  display: 'block',
  margin: '0 auto 2rem auto',
  borderRadius: '18px',
  maskImage: 'radial-gradient(circle at 50% 50%, #000 80%, transparent 100%)',
  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 70%, transparent 100%)',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '120vw',
      maxWidth: 'none',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginLeft: '-10vw',
      overflow: 'hidden',
    },
  },
});

export const columns = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4vw',
  marginTop: '2rem',
  '@media': {
    'screen and (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
    },
  },
});

export const leftCol = style({
  minWidth: '220px',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['1x'],
  alignItems: 'flex-start',
  marginLeft: vars.space['2x'],
  fontSize: vars.fontSizes['3x'],
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '14px',
    },
  },
});

export const iconLink = style({
  color: vars.colors.grey600,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const rightCol = style({
  minWidth: '350px',
  maxWidth: '500px',
  width: '100%',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '90vw',
      marginLeft: '0',
    },
  },
});

export const content = style({
  justifyContent: 'center',
  height: '500px',
  margin: 'auto',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      margin: '0'
    },
  },
})

export const formBox = style({
  width: '450px',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '90vw',
      marginLeft: '0',
    },
  },
})

export const button = style({
  width: '100%',
  border: 'none',
  padding: vars.space['1x'],
  borderRadius: vars.borderRadius['2x'],  
  boxShadow: vars.shadow['3x'],
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

export const infoRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  fontSize: '1.15rem',
  color: vars.colors.grey500,
  marginBottom: '1.1rem',
});

export const icon = style({
  fontSize: '1.4rem',
  color: vars.colors.grey500,
  minWidth: '1.4rem',
});

export const formWrapper = style({
  position: 'relative',
  width: '100%',
  minHeight: '400px',
});

