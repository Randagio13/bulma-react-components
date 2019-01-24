import styled from 'styled-components'

const MediaContent = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`
export default MediaContent
