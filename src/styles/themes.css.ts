import { keyframes, createGlobalTheme } from "@vanilla-extract/css";
import twColors from 'tailwindcss/colors';


export const root = createGlobalTheme(":root", {
  fonts: {
    body: "Montserrat, apple-system, sans-serif",
    brand: "Roboto, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    primary: twColors.white,
    complementary: twColors.black,
    brand: twColors.pink[800],
    brandLight: twColors.pink[400],
    brandDark: twColors.pink[600],
    semiTransparent: "#ffffff94",
    transparent: "transparent",

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],

    // Background colors
    background: twColors.stone[100]
  },
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
    '7x': '56px',
  },
  fontSizes: {
    '1x': '8px',
    '2x': '12px',
    '3x': '16px', 
    '4x': '20px', 
    '5x': '24px', 
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  slideToMiddle : keyframes({
    'from': { bottom: '0' },
    'to': { bottom: '40%' }
  }),
  slideToBottom : keyframes({
    'from': { bottom: '-40px' },
    'to': { bottom: '0' }
  }),
  shadow : {
    '1x': '0 0 4px 0 var(--primary-color, defaultColor)',
    '2x': '0 0 8px 0 var(--primary-color, defaultColor)',
    '3x': '0 0 16px 0 var(--primary-color, defaultColor)',
    '4x': '0 0 24px 0 var(--primary-color, defaultColor)',
    '5x': '0 0 32px 0 var(--primary-color, defaultColor)',
    '6x': '0 0 40px 0 var(--primary-color, defaultColor)',
    '7x': '0 0 48px 0 var(--primary-color, defaultColor)',  
  },
  borderRadius : {
    '1x': '4px',
    '2x': '8px',
    '3x': '12px',
    '4x': '16px',
    '5x': '20px',
    '6x': '24px',
    '7x': '28px',
  } 
})

export const vars = { ...root };