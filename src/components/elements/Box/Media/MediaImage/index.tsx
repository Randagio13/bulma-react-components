import styled from 'styled-components'

interface Props {
  bgColor?: string
  color?: string
  padding?: string,
}

interface Props {
  position?: 'right' | 'left'
}

const MediaImage = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  ${(props: Props) => props.position === 'right' ? 'margin-left: 1rem;' : 'margin-right: 1rem;'}
`
export default MediaImage
