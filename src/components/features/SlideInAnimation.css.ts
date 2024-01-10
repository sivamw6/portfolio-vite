import { style, keyframes } from '@vanilla-extract/css';

const slideInAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0%)',
  },
});

export const slideIn = style({
  opacity: 0,
  transform: 'translateY(20%)',
  transition: 'all 1s ease-out',
});

export const isVisible = style({
  opacity: 1,
  transform: 'translateY(0%)',
});