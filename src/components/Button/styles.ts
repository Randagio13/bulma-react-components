import styled, { css } from 'styled-components'
import { ThemeProps } from '../BulmaTheme/BulmaTheme'
import { ButtonProps } from './Button'
import variables, {
  elementBackgroundColors,
  elementColors
} from '../BulmaTheme/variables'

export type ColorCss = ThemeProps & ButtonProps

const defaultCss = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  text-decoration: none;
`

const padding = css`
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
`

const border = css`
  border-width: 1px;
  border-color: ${(props: ColorCss) => {
    const typeColor = props.color
    if (typeColor) {
      return variables.colors.transparent
    }
    return variables.colors.greyLighter
  }};
`

const backgroundColor = css`
  background-color: ${(props: ColorCss) => {
    const typeColor = props.color
    const themeColors = Reflect.get(props.theme, 'button')
    if (themeColors && Reflect.get(themeColors, 'backgroundColors')) {
      return Reflect.get(themeColors.backgroundColors!, typeColor!)
    } else if (typeColor) {
      return elementBackgroundColors[typeColor]
    }
    return elementBackgroundColors.white
  }};
`
const color = css`
  color: ${(props: ColorCss) => {
    const typeColor = props.color
    const themeColors = Reflect.get(props.theme, 'button')
    if (themeColors && Reflect.get(themeColors, 'colors')) {
      return Reflect.get(themeColors.colors!, typeColor!)
    } else if (typeColor) {
      return elementColors[typeColor]
    }
    return elementColors.white
  }};
`

const mainCss = css`
  ${padding}
  ${backgroundColor}
  ${color}
  ${border}
  ${defaultCss}
`

const StyledButton = styled.button`
  ${mainCss}
`

const StyledLink = styled.a`
  ${mainCss}
`

const StyledInput = styled.input`
  ${mainCss}
`

export { StyledButton, StyledLink, StyledInput }
