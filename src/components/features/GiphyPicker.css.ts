import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const giphyBox = style({
  display: 'flex',
  gap: vars.space['2x'],
  margin: '1.5rem 0',
  position: 'relative',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch',
    },
  },
});

export const giphyColLeft = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space['1x'],
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      justifyContent: 'center',
      marginBottom: '0.5rem',
    },
  },
});

export const emojiBtn = style({
  fontSize: '1.2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'transform 0.1s',
  ':hover': {
    transform: 'scale(1.2)',
  },
});

export const giphyColRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
      
    },
  },
});

export const giphyResultBox = style({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
  marginTop: '0',
  flex: 1,
});

export const giphyFloatBox = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '60px',
  margin: '0 auto',
  zIndex: 10,
  background: 'rgba(255,255,255,0.7)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  padding: '1.5rem 1rem 1rem 1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  minWidth: '350px',
  maxWidth: '600px',
});

export const giphyCloseBtn = style({
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  color: vars.colors.grey500,
  cursor: 'pointer',
  marginRight: '1rem',
  marginTop: '0.2rem',
  alignSelf: 'flex-start',
  ':hover': {
    color: vars.colors.primary,
  },
});

export const giphyImg = style({
  borderRadius: '8px',
  cursor: 'pointer',
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  border: '2px solid transparent',
  selectors: {
    '&[data-selected="true"]': {
      border: '2px solid #6cf26c',
    },
  },
});

export const searchInput = style({
  width: '180px',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '80vw',
      minWidth: 0,
    },
  },
});
