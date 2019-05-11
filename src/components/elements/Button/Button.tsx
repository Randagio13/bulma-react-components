import * as React from 'react'
import styled from 'styled-components'
import ButtonsGroup from '../ButtonsGroup'
import Props from './ButtonTypes'

class Button extends React.PureComponent<Props> {
  public static defaultProps: Props = {
    componentType: 'a'
  }
  public render (): JSX.Element {
    return this.typeSelection()
  }
  private typeSelection = (): JSX.Element => {
    const { componentType, className, children } = this.props
    switch (componentType) {
      case 'a':
      default:
        return <a className={className}>{children}</a>
      case 'button':
        return <button className={className}>{children}</button>
      case 'reset':
      case 'submit':
        return <input type={componentType} className={className} />
    }
  }
}

export default styled(Button)`
  &:hover {
    z-index: 2;
    border-color: #b5b5b5;
    color: #363636;
    ${((props: Props) => {
      switch (props.colors) {
        case 'white':
          return 'background-color: #f9f9f9; border-color: transparent; color: #0a0a0a;'
        case 'light':
          return 'background-color: #eeeeee; border-color: transparent; color: #363636;'
        case 'dark':
          return 'background-color: #2f2f2f; border-color: transparent; color: whitesmoke;'
        case 'black':
          return 'background-color: #040404; border-color: transparent; color: white;'
        case 'text':
          return 'background-color: whitesmoke; border-color: transparent; color: #363636;'
      }
    })}
    ${(props: Props) => {
      // HOVER
      const { colors, theme, outlined } = props
      switch (colors) {
        case 'primary':
          return Reflect.get(theme, 'primary') && Reflect.get(theme.primary, 'hover')
          ? `background-color: ${theme.primary.hover.background};
            border-color: transparent; color: ${theme.primary.hover.color};`
          : `background-color: #00c4a7; border-color: transparent; color: #fff;`
        case 'link':
          return Reflect.get(theme, 'link') && Reflect.get(theme.link, 'hover')
          ? `background-color: ${theme.link.hover.background};
            border-color: transparent; color: ${theme.link.hover.color};`
          : `background-color: #276cda; border-color: transparent; color: #fff;`
        case 'info':
          return Reflect.get(theme, 'info') && Reflect.get(theme.info, 'hover')
          ? `background-color: ${theme.info.hover.background};
            border-color: transparent; color: ${theme.info.hover.color};`
          : `background-color: #1496ed; border-color: transparent; color: #fff;`
        case 'success':
          return Reflect.get(theme, 'success') && Reflect.get(theme.success, 'hover')
          ? `background-color: ${theme.success.hover.background};
            border-color: transparent; color: ${theme.success.hover.color};`
          : `background-color: #22c65b; border-color: transparent; color: #fff;`
        case 'warning':
          return Reflect.get(theme, 'warning') && Reflect.get(theme.warning, 'hover')
          ? `background-color: ${theme.warning.hover.background};
            border-color: transparent; color: ${theme.warning.hover.color};`
          : `background-color: #ffdb4a; border-color: transparent; color: rgba(0, 0, 0, 0.7);`
        case 'danger':
          return Reflect.get(theme, 'danger') && Reflect.get(theme.danger, 'hover')
          ? `background-color: ${theme.danger.hover.background};
            border-color: transparent; color: ${theme.danger.hover.color};`
          : `background-color: #ff2b56; border-color: transparent; color: #fff;`
        default:
          return ''
      }
    }}
  }
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(.375em - 1px);
  padding-left: .75em;
  padding-right: .75em;
  padding-top: calc(.375em - 1px);
  text-align: center;
  white-space: nowrap;
  -moz-appearance: none;
  -webkit-appearance: none;
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
  ${(props: Props) => {
    const outlined = props.outlined
    switch (props.colors) {
      case 'white':
        const outlinedWhite = outlined
          ? 'background-color: transparent; border-color: white;color: white;'
          : ''
        return `background-color: white; border-color: transparent; color: #0a0a0a; ${outlinedWhite}`
      case 'light':
        const outlinedLight = outlined
        ? 'background-color: transparent; border-color: whitesmoke; color: whitesmoke;'
        : ''
        return `background-color: whitesmoke; border-color: transparent; color: #363636; ${outlinedLight }`
      case 'dark':
        const outlinedDark = outlined
        ? 'background-color: transparent; border-color: #363636; color: #363636;'
        : ''
        return `background-color: #363636; border-color: transparent; color: whitesmoke; ${outlinedDark}`
      case 'black':
        const outlinedBlack = outlined
        ? 'background-color: transparent; border-color: #0a0a0a; color: #0a0a0a;'
        : ''
        return `background-color: #0a0a0a; border-color: transparent; color: white; ${outlinedBlack}`
      case 'text':
        return 'background-color: transparent; border-color: transparent; color: #4a4a4a; text-decoration: underline;'
    }
  }}
  ${(props: Props) => {
    const { size } = props
    switch (size) {
      case 'small':
        return `
          not(${Button}) { border-radius: 2px; font-size: 0.75rem; }
          ${Button} { border-radius: 2px !important; font-size: 0.75rem !important; }
        `
      case 'normal':
      default:
        return `
          not(${Button}) { font-size: 1rem; }
          ${Button} { font-size: 1rem !important; }
        `
      case 'medium':
        return `
          not(${Button}) { font-size: 1.25rem; }
          ${Button} { font-size: 1.25rem !important; }
        `
      case 'large':
        return `
          not(${Button}) { font-size: 1.5rem; }
          ${Button} { font-size: 1.5rem !important; }
        `
    }
  }}
  ${(props: Props) => {
    const { colors, theme, outlined } = props
    switch (colors) {
      case 'primary':
        const outlinedPrimary = outlined
        ? 'background-color: transparent; border-color: #00d1b2; color: #00d1b2;'
        : ''
        return Reflect.get(theme, 'primary') && Reflect.get(theme.primary, 'main')
        ? `background-color: ${theme.primary.main.background};
          border-color: transparent; color: ${theme.primary.main.color}; ${outlinedPrimary}`
        : `background-color: #00d1b2; border-color: transparent; color: #fff; ${outlinedPrimary}`
      case 'link':
        const outlinedLink = outlined
          ? 'background-color: transparent; border-color: #3273dc; color: #3273dc;'
          : ''
        return Reflect.get(theme, 'link') && Reflect.get(theme.link, 'main')
          ? `background-color: ${theme.link.main.background};
            border-color: transparent; color: ${theme.link.main.color}; ${outlinedLink}`
          : `background-color: #3273dc; border-color: transparent; color: #fff; ${outlinedLink}`
      case 'info':
        const outlinedInfo = outlined
          ? 'background-color: transparent; border-color: #209cee; color: #209cee;'
          : ''
        return Reflect.get(theme, 'info') && Reflect.get(theme.info, 'main')
        ? `background-color: ${theme.info.main.background};
          border-color: transparent; color: ${theme.info.main.color}; ${outlinedInfo}`
        : `background-color: #209cee; border-color: transparent; color: #fff; ${outlinedInfo}`
      case 'success':
        const outlinedSuccess = outlined
          ? 'background-color: transparent; border-color: #23d160; color: #23d160;'
          : ''
        return Reflect.get(theme, 'success') && Reflect.get(theme.success, 'main')
        ? `background-color: ${theme.success.main.background};
          border-color: transparent; color: ${theme.success.main.color}; ${outlinedSuccess}`
        : `background-color: #23d160; border-color: transparent; color: #fff; ${outlinedSuccess}`
      case 'warning':
        const outlinedWarning = outlined
          ? 'background-color: transparent; border-color: #ffdd57; color: #ffdd57;'
          : ''
        return Reflect.get(theme, 'warning') && Reflect.get(theme.warning, 'main')
        ? `background-color: ${theme.warning.main.background};
          border-color: transparent; color: ${theme.warning.main.color}; ${outlinedWarning}`
        : `background-color: #ffdd57; border-color: transparent; color: rgba(0, 0, 0, 0.7); ${outlinedWarning}`
      case 'danger':
        const outlinedDanger = outlined
          ? 'background-color: transparent; border-color: #ff3860; color: #ff3860;'
          : ''
        return Reflect.get(theme, 'danger') && Reflect.get(theme.danger, 'main')
        ? `background-color: ${theme.danger.main.background};
          border-color: transparent; color: ${theme.danger.main.color}; ${outlinedDanger}`
        : `background-color: #ff3860; border-color: transparent; color: #fff; ${outlinedDanger}`
      default:
        return ''
    }
  }}
`
