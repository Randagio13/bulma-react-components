import * as React from 'react'
import styled from 'styled-components'
import Media from './Media'

interface Props {
  bgColor?: string
  color?: string
  padding?: string
  className?: string
  children: any
}

class BoxComponent extends React.Component<Props> {
  public render () {
    const { className, children } = this.props
    return (
      <div className={className}>
        <Media>{children}</Media>
      </div>
    )
  }
}

const Box = styled(BoxComponent)`
  background-color: ${(props: Props) => props.bgColor ? props.bgColor : 'white'};
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: ${(props: Props) => props.color ? props.color : '#4a4a4a'};
  display: block;
  padding: ${(props: Props) => props.padding ? props.padding : '1.25rem'};

  a:hover, a:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;
  }

  a:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
  }
`

export default Box
