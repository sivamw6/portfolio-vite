import { style } from '@vanilla-extract/css';



export const slideIn = style({
  opacity: 0,
  transform: 'translateY(40px)',
  transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
});

export const isVisible = style({
  opacity: 1,
  transform: 'translateY(0)',
});