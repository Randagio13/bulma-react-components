import styled from 'styled-components'
import Content from '../../Content'

interface Props {
  bgColor?: string
  color?: string
  padding?: string
}

const Media = styled.article`
  align-items: flex-start;
  display: flex;
  text-align: left;
  ${Content}:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`
export default Media
