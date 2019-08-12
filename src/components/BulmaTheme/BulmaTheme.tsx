import * as React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import variables from './variables'

interface ThemeType extends DefaultTheme {
  colors?: {
    $black?: string
    $blackBis?: string
    $blackTer?: string
  }
}

type ThemeProps = {
  theme?: ThemeType
  children: React.ReactChild
}

const BulmaTheme: ThemeType = {
  colors: {
    $black: variables.$black,
    $blackBis: variables.$blackBis,
    $blackTer: variables.$blackTer
  }
}

const Theme = ({ theme, children }: ThemeProps) => (
  <ThemeProvider theme={theme || BulmaTheme}>{children}</ThemeProvider>
)
export default Theme
