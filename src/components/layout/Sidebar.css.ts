import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const nav = style({
  backgroundColor: vars.colors.semiTransparent,
  height: '75vh',
  marginLeft : '20px',
  position: 'fixed',
  width: '120px',
  boxShadow: vars.shadow['4x'],
});

export const linkContainer = style({
  position: 'absolute',
  marginLeft: 'auto',
  width: '100%',
  textAlign: 'center',
  color: vars.colors.complementary,
  fontSize: '20px',
});

export const linkStyle = style({
  paddingTop: vars.space['3x'],
  ':hover': {
    color: vars.colors.brandDark,
  }
});

export const externalLinkContainer = style({
  bottom: '25px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: vars.space['4x'],
});

export const pagesLink = style({
  top: '40%',
  transform: 'translateY(-50%)',
});


export const activeLinkStyle = style({
  borderLeft: 'pink 5px solid',

});