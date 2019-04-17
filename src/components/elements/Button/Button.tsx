import * as React from 'react'
import styled from 'styled-components'
import Props from './ButtonTypes'

class Button extends React.PureComponent<Props> {
  public static defaultProps: Props = {
    componentType: 'a'
  }
  public render (): JSX.Element {
    return this.typeSelection()
  }
  private typeSelection = (): JSX.Element => {
    const { componentType, className, children, ...props } = this.props
    switch (componentType) {
      case 'a':
      default:
        return <a className={className} {...props}>{children}</a>
      case 'button':
        return <button className={className} {...props}>{children}</button>
      case 'reset':
      case 'submit':
        return <input type={componentType} className={className} {...props} />
    }
  }
}

export default styled(Button)`
  &:hover {
    z-index: 2;
    border-color: #b5b5b5;
    color: #363636;
    ${(props: Props) => props.colors === 'white'
      && 'background-color: #f9f9f9; border-color: transparent; color: #0a0a0a;'}
    ${(props: Props) => props.colors === 'light'
      && 'background-color: #eeeeee; border-color: transparent; color: #363636;'}
    ${(props: Props) => props.colors === 'dark'
      && 'background-color: #2f2f2f; border-color: transparent; color: whitesmoke;'}
    ${(props: Props) => props.colors === 'black'
      && 'background-color: #040404; border-color: transparent; color: white;'}
    ${(props: Props) => props.colors === 'text'
      && 'background-color: whitesmoke; border-color: transparent; color: #363636;'}
    ${(props: Props) => {
      const { colors, theme } = props
      switch (colors) {
        case 'primary':
          return Reflect.get(theme, 'primary') && Reflect.get(theme.primary, 'hover')
          ? `background-color: ${theme.primary.hover.background};
            border-color: transparent; color: ${theme.primary.hover.color};`
          : 'background-color: #00c4a7; border-color: transparent; color: #fff;'
        case 'link':
          return Reflect.get(theme, 'link') && Reflect.get(theme.link, 'hover')
          ? `background-color: ${theme.link.hover.background};
            border-color: transparent; color: ${theme.link.hover.color};`
          : 'background-color: #276cda; border-color: transparent; color: #fff;'
        case 'info':
          return Reflect.get(theme, 'info') && Reflect.get(theme.info, 'hover')
          ? `background-color: ${theme.info.hover.background};
            border-color: transparent; color: ${theme.info.hover.color};`
          : 'background-color: #1496ed; border-color: transparent; color: #fff;'
        case 'success':
          return Reflect.get(theme, 'success') && Reflect.get(theme.success, 'hover')
          ? `background-color: ${theme.success.hover.background};
            border-color: transparent; color: ${theme.success.hover.color};`
          : 'background-color: #22c65b; border-color: transparent; color: #fff;'
        case 'warning':
          return Reflect.get(theme, 'warning') && Reflect.get(theme.warning, 'hover')
          ? `background-color: ${theme.warning.hover.background};
            border-color: transparent; color: ${theme.warning.hover.color};`
          : 'background-color: #ffdb4a; border-color: transparent; color: rgba(0, 0, 0, 0.7);'
        case 'danger':
          return Reflect.get(theme, 'danger') && Reflect.get(theme.danger, 'hover')
          ? `background-color: ${theme.danger.hover.background};
            border-color: transparent; color: ${theme.danger.hover.color};`
          : 'background-color: #ff2b56; border-color: transparent; color: #fff;'
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
  ${(props: Props) => props.colors === 'white' && 'background-color: white; border-color: transparent; color: #0a0a0a;'}
  ${(props: Props) => props.colors === 'light'
  && 'background-color: whitesmoke; border-color: transparent; color: #363636;'}
  ${(props: Props) => props.colors === 'dark'
  && 'background-color: #363636; border-color: transparent; color: whitesmoke;'}
  ${(props: Props) => props.colors === 'black'
  && 'background-color: #0a0a0a; border-color: transparent; color: white;'}
  ${(props: Props) => props.colors === 'text'
  && 'background-color: transparent; border-color: transparent; color: #4a4a4a; text-decoration: underline;'}
  ${(props: Props) => {
    const { colors, theme } = props
    switch (colors) {
      case 'primary':
        return Reflect.get(theme, 'primary') && Reflect.get(theme.primary, 'main')
        ? `background-color: ${theme.primary.main.background};
          border-color: transparent; color: ${theme.primary.main.color};`
        : 'background-color: #00d1b2; border-color: transparent; color: #fff;'
      case 'link':
        return Reflect.get(theme, 'link') && Reflect.get(theme.link, 'main')
        ? `background-color: ${theme.link.main.background};
          border-color: transparent; color: ${theme.link.main.color};`
        : 'background-color: #3273dc; border-color: transparent; color: #fff;'
      case 'info':
        return Reflect.get(theme, 'info') && Reflect.get(theme.info, 'main')
        ? `background-color: ${theme.info.main.background};
          border-color: transparent; color: ${theme.info.main.color};`
        : 'background-color: #209cee; border-color: transparent; color: #fff;'
      case 'success':
        return Reflect.get(theme, 'success') && Reflect.get(theme.success, 'main')
        ? `background-color: ${theme.success.main.background};
          border-color: transparent; color: ${theme.success.main.color};`
        : 'background-color: #23d160; border-color: transparent; color: #fff;'
      case 'warning':
        return Reflect.get(theme, 'warning') && Reflect.get(theme.warning, 'main')
        ? `background-color: ${theme.warning.main.background};
          border-color: transparent; color: ${theme.warning.main.color};`
        : 'background-color: #ffdd57; border-color: transparent; color: rgba(0, 0, 0, 0.7);'
      case 'danger':
        return Reflect.get(theme, 'danger') && Reflect.get(theme.danger, 'main')
        ? `background-color: ${theme.danger.main.background};
          border-color: transparent; color: ${theme.danger.main.color};`
        : 'background-color: #ff3860; border-color: transparent; color: #fff;'
      default:
        return ''
    }
  }}
`
