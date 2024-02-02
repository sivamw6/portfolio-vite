import { globalStyle } from '@vanilla-extract/css';


// Box-sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  maxWidth: "100vw",

})

// Remove default margin
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0,

})

// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth",

})

// Set core body defaults
globalStyle("body", {
  fontFamily: 'Open Sans, sans-serif',
  minHeight: "100vh",

  textRendering: "optimizeSpeed",
  lineHeight: 1.5,
});

// Set core anchor settings
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});
globalStyle("a:visited", {
  color: "inherit",
});

// Make images easier to work with
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block"
});

// Inherit fonts for inputs and buttons
globalStyle("input, button, textarea, select", {
  font: "inherit"
})

// Remove list styles (bullets/numbers)
globalStyle("ul, ol", {
  listStyle: "none",
  padding: 0,
  margin: 0
})