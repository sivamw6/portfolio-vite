import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  width: '100%',
  border: 'none',
  padding: vars.space['1x'],
  borderRadius: vars.borderRadius['2x'],
  boxShadow: vars.shadow['3x'],
  backgroundColor: 'var(--primary-color, defaultColor)',
  color: vars.colors.complementary,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.primary,
    color: vars.colors.complementary,
    boxShadow: vars.shadow['2x'],
  },
  ':active': {
    boxShadow: vars.shadow['3x'],
  }
});
