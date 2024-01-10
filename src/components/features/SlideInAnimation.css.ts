import { style } from '@vanilla-extract/css';



export const slideIn = style({
  opacity: '0',
  transform: 'translateY(40%)',
  transition: 'all 1s ease-out',
});

export const isVisible = style({
  opacity: '1',
  transform: 'translateY(0%)',
});