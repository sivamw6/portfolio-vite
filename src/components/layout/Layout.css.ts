import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  fontFamily: vars.fonts.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  backgroundColor: 'var(--primary-color, defaultColor)',
})

export const app2 = style({
  display: "flex",
  flexDirection: "row",
  flex: 1,
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
  width: "100%",
  marginLeft: "180px"
})

export const hue = style({
  zIndex: '999'
})