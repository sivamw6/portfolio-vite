import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; 

export const nav = style({
  backgroundColor: vars.colors.semiTransparent,
  color: vars.colors.complementary,
  height: '70vh',
  marginLeft : '20px',
  position: 'fixed',
  padding: '10px',
  width: '120px',
  boxShadow: vars.shadow['4x'],
});

export const externalLink = style({
  position: 'absolute',
  bottom: '25px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: vars.colors.grey500,
  fontSize: vars.space['4x'],
})

export const pagesLink = style({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  color: vars.colors.grey500,
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
  padding: vars.space['1x'],

})