import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
})

export const app2 = style({
  display: "flex",
  flexDirection: "row",
  flex: 1
})

export const appContent = style({
  margin: `${vars.space["2x"]} 0`,
})