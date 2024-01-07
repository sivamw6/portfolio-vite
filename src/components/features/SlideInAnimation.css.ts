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

// 定义 slideIn 样式
export const slideIn = style({
  opacity: 0,
  transform: 'translateY(20%)',
  transition: 'all 1s ease-out',
  selectors: {
    '&.isVisible': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
  animationName: slideInAnimation,
});
