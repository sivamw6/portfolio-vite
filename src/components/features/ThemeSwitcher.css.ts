import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const hue = style({
  width: '20%',
  position : 'absolute',
  left: '180px',
  top: '5%',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '50vw',
      left: '20vw'
    },
  },
})