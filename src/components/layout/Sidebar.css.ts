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

export const externalLink = style({
  position: 'absolute',
  bottom: '25px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: vars.colors.grey600,
  fontSize: vars.space['4x'],
})

export const pagesLink = style({
  position: 'absolute',
  marginLeft: 'auto',
  width: '100%',
  textAlign: 'center',
  top: '40%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  color: vars.colors.complementary,
  fontSize: '20px',
})

export const a = style({
  ':hover': {
    color: vars.colors.brandDark,
  }
})
export const navLink = style({
  ':hover': {
    color: vars.colors.brandDark,
  }
})

export const pagesLi = style({
  paddingTop: vars.space['3x'],

})