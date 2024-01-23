import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", 
  backgroundColor: vars.colors.primary,
  minWidth: '100vw',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: "row", 
    },
  }
})

export const app2 = style({
  display: "flex",
  flexDirection: "row",
  flex: 1,
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
  width: "100%",
  // marginLeft: "180px",
  '@media': {
    'screen and (max-width: 600px)': {
      marginLeft: '20px', 
    },
  }
})
