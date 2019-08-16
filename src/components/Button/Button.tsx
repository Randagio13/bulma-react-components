import * as React from 'react'
import { StyledButton, StyledInput, StyledLink } from './styles'

export interface ButtonProps {
  children?: React.ReactChild | string
  type?: 'a' | 'button' | 'submit' | 'reset' | 'span'
  href?: string
  color?:
    | 'white'
    | 'light'
    | 'dark'
    | 'black'
    | 'text'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  size?: 'small' | 'normal' | 'medium' | 'large'
  fullWidth?: boolean
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean
  state?: 'normal' | 'hover' | 'focus' | 'active' | 'loading'
}
const Button = (props: ButtonProps) => {
  if (props.type === 'a') {
    return (
      <StyledLink color={props.color} href={props.href}>
        {props.children}
      </StyledLink>
    )
  } else if (props.type === 'button') {
    return <StyledButton color={props.color}>{props.children}</StyledButton>
  } else if (props.type === 'submit' || props.type === 'reset') {
    const v = `${props.children}`
    return <StyledInput color={props.color} type={props.type} value={v} />
  } else {
    throw new Error(`This type ${props.type} is not available!`)
  }
}

Button.defaultProps = {
  type: 'button',
  color: undefined,
  href: '#',
  size: 'normal',
  fullWidth: false,
  outlined: false,
  inverted: false,
  rounded: false,
  state: 'normal'
}

export default Button
