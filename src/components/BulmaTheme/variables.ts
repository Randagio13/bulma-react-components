const variables = {
  // Colors
  colors: {
    transparent: 'transparent',
    black: 'hsl(0, 0%, 4%)',
    blackBis: 'hsl(0, 0%, 7%)',
    blackTer: 'hsl(0, 0%, 14%)',
    greyDarker: 'hsl(0, 0%, 21%)',
    greyDark: 'hsl(0, 0%, 29%)',
    grey: 'hsl(0, 0%, 48%)',
    greyLight: 'hsl(0, 0%, 71%)',
    greyLighter: 'hsl(0, 0%, 86%)',
    whiteTer: 'hsl(0, 0%, 96%)',
    whiteBis: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    cyan: 'hsl(204, 86%,  53%)',
    orange: 'hsl(14,  100%, 53%)',
    yellow: 'hsl(48,  100%, 67%)',
    green: 'hsl(141, 71%,  48%)',
    turquoise: 'hsl(171, 100%, 41%)',
    blue: 'hsl(217, 71%,  53%)',
    purple: 'hsl(271, 100%, 71%)',
    red: 'hsl(348, 100%, 61%)'
  },
  // Typography
  familySansSerif: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`
}
export const elementBackgroundColors = {
  primary: variables.colors.turquoise,
  dark: variables.colors.greyDarker,
  white: variables.colors.white,
  light: variables.colors.whiteTer,
  black: variables.colors.greyDarker,
  text: variables.colors.greyDark,
  link: variables.colors.blue,
  info: variables.colors.cyan,
  success: variables.colors.green,
  warning: variables.colors.yellow,
  danger: variables.colors.red
}
export const elementColors = {
  primary: variables.colors.white,
  dark: variables.colors.whiteTer,
  white: variables.colors.black,
  light: variables.colors.greyDarker,
  black: variables.colors.white,
  text: variables.colors.greyDark,
  link: variables.colors.white,
  info: variables.colors.white,
  success: variables.colors.white,
  warning: variables.colors.blackBis,
  danger: variables.colors.white
}
export default variables
