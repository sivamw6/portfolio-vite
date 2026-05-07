import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const about = style({
  width: 'calc(100vw - 180px)',
  height: '100%',
  marginLeft: "180px",
  paddingBottom: '20px',
  paddingTop: '100px',
  background: `linear-gradient(
    to bottom,
    ${vars.colors.primary} 0%,
    ${vars.colors.background} 10%,
    ${vars.colors.background} 100%
  )`,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
      marginLeft: '0',
      height: '100%'
    },
  },
})

const contentBase = {
  height: '100%',
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: vars.colors.primary,
  boxShadow: vars.shadow['2x'],
};

const mobileCard = {
  'screen and (max-width: 600px)': {
    width: '80vw',
    margin: '20px auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export const content1 = style({
  ...contentBase,
  width: '30vw',
  margin: '100px',
  '@media': mobileCard,
})

export const content2 = style({
  ...contentBase,
  width: '30vw',
  marginLeft: '30%',
  '@media': mobileCard,
})

export const content3 = style({
  ...contentBase,
  width: '30vw',
  margin: '100px',
  '@media': mobileCard,
})

export const content4 = style({
  ...contentBase,
  width: '30vw',
  marginLeft: '45%',
  '@media': mobileCard,
})

export const content5 = style({
  ...contentBase,
  width: '30vw',
  margin: '100px',
  '@media': mobileCard,
})

export const p = style({
  textAlign: 'left',
  padding: vars.space['2x'],
})
