import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const nav = style({
  backgroundColor: vars.colors.semiTransparent,
  height: '75vh',
  marginLeft : '20px',
  position: 'fixed',
  width: '120px',
  boxShadow: vars.shadow['4x'],
  zIndex: 1,
  textTransform: 'uppercase',
});

export const linkContainer = style({
  position: 'absolute',
  marginLeft: 'auto',
  width: '100%',
  textAlign: 'center',
  color: vars.colors.complementary,
  fontSize: vars.space['2x'],
});

export const linkStyle = style({
  paddingTop: vars.space['2x'],
  paddingBottom: vars.space['2x'],
  ':hover': {
    color:' var(--primary-color, defaultColor)',
  },
   boxShadow: 'none',
  transition: 'box-shadow 0.5s ease-in-out',
});

export const externalLinkContainer = style({
  bottom: '25px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: vars.space['4x'],
});

export const externalLink  = style({
  ':hover': {
    color:' var(--primary-color, defaultColor)',
  }
})

export const pagesLink = style({
  top: '40%',
  transform: 'translateY(-50%)',
});


export const activeLinkStyle = style({
  boxShadow: vars.shadow['3x'],
  transition: 'box-shadow  0.5s ease-in-out',
});