import * as React from 'react'
import { ThemeProvider, ThemeProviderProps } from 'styled-components'
import variables, { elementBackgroundColors, elementColors } from './variables'
import MiniResetStyle from './MiniResetStyle'

export interface ThemeType {
  colors?: {
    black?: string
    blackBis?: string
    blackTer?: string
    greyDarker?: string
    greyDark?: string
    grey?: string
    greyLight?: string
    greyLighter?: string
    whiteTer?: string
    whiteBis?: string
    white?: string
    orange?: string
    yellow?: string
    green?: string
    turquoise?: string
    blue?: string
    purple?: string
    red?: string
  }
  button?: {
    backgroundColors?: {
      primary?: string
      light?: string
      white?: string
      black?: string
      text?: string
      link?: string
      info?: string
      success?: string
      warning?: string
      danger?: string
    }
    colors?: {
      primary?: string
      light?: string
      white?: string
      black?: string
      text?: string
      link?: string
      info?: string
      success?: string
      warning?: string
      danger?: string
    }
  }
}

export interface ThemeProps extends ThemeProviderProps<ThemeType> {
  theme: ThemeType
}

const BulmaTheme: ThemeType = {
  button: {
    backgroundColors: {
      ...elementBackgroundColors
    },
    colors: {
      ...elementColors
    }
  },
  colors: {
    ...variables.colors
  }
}

const Theme = ({ theme, children }: ThemeProps) => (
  <ThemeProvider theme={theme || BulmaTheme}>
    <React.Fragment>
      <MiniResetStyle />
      {children}
    </React.Fragment>
  </ThemeProvider>
)
export default Theme
