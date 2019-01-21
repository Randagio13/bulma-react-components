import * as React from 'react'
import styled from 'styled-components'

interface Props {
  primary: boolean
}

const Box = styled.div`
  background-color: ${(props: Props) => props.primary ? 'black' : 'white'};
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: ${(props: Props) => props.primary ? '#fcfcfc' : '#4a4a4a'};
  display: block;
  padding: 1.25rem;

  a:hover, a:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;
  }

  a:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
  }
`
export default Box
