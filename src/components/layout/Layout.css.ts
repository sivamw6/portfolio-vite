import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", 
  backgroundColor: vars.colors.primary,

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100vw',
    },
  }
})

export const app2 = style({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  minHeight: 0,
  height: '100vh'
})

export const appContent = style({

  width: "100%",
  overflow: 'auto',
  '@media': {
    'screen and (max-width: 600px)': {
      // marginLeft: '20px', 
    },
  }
})

