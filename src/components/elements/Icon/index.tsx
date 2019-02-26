import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import styled from 'styled-components'

library.add(fas)

interface ContentProps {
  size: 'small' | 'medium' | 'large'
}

const IconContent = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  ${(props: ContentProps) => props.size === 'small' ? 'height: 1rem; width: 1rem;' : ''}
  ${(props: ContentProps) => props.size === 'medium' ? 'height: 2rem; width: 2rem;' : ''}
  ${(props: ContentProps) => props.size === 'large' ? 'height: 3rem; width: 3rem;' : ''}
`

interface Props extends ContentProps {
  icon: string | string[] | any
}

class Icon extends React.PureComponent<Props> {
  public render (): JSX.Element {
    const { icon, size } = this.props
    return (
      <IconContent size={size}>
        <FontAwesomeIcon icon={icon} />
      </IconContent>
    )
  }
}

export default Icon
