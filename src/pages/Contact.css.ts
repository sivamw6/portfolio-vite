import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const contact = style({
  width: '1200px',
  height: '100%',
  paddingTop: '100px',
  paddingBottom: '200px',

  backgroundColor: vars.colors.primary,
})

export const content = style({
  display: 'flex',
  height: '500px',
  margin: '100px',
  textAlign: 'center',
})


export const formBox = style({
  width: '450px',
})

export const button = style({
  width: '100%',
  border: 'none',
  backgroundColor: 'var(--primary-color, defaultColor)',
  ':hover': {
    backgroundColor: 'pink',
  }
})

export const mapBox = style({
  width: '450px',
})