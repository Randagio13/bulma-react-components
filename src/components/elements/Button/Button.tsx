import * as React from 'react'
import styled from 'styled-components'

interface Props {
  componentType: 'a' | 'button' | 'reset' | 'submit'
  colors?: 'white' | 'light' | 'dark' | 'black' | 'text'
  className?: string
  children?: React.ReactChild
}

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
    ${(props: Props) => props.colors === 'white' && 'background-color: #f9f9f9; border-color: transparent; color: #0a0a0a;'}
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
`
