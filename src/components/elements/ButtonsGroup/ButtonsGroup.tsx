import * as React from 'react'
import styled from 'styled-components'
import ButtonsGroupProps from './ButtonsGroupTypes'

const ButtonsGroup = (props: ButtonsGroupProps) => (
  <div className={props.className}>{props.children}</div>
)
export default styled(ButtonsGroup)`
 > * {
   ${(props: ButtonsGroupProps) => {
     const { size } = props
     switch (size) {
       case 'small':
         return `border-radius: 2px; font-size: 0.75rem;`
       case 'medium':
         return `font-size: 1.25rem;`
       case 'large':
         return `font-size: 1.5rem;`
     }
   }}
 }
`
