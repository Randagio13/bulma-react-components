import * as React from 'react'
import styled from 'styled-components'

interface LevelContentProps {
  position?: 'left' | 'right'
  isMobile?: boolean
}

const LevelContent = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  ${(props: LevelContentProps) => props.position === 'left'
    ? 'align-items: center; justify-content: flex-start;'
    : 'align-items: center; justify-content: flex-end;'
  }

  @media screen and (min-width: 769px), print {
    ${(props: LevelContentProps) => props.position === 'left' ? 'display: flex;' : 'display: flex;'}
  }
`

interface LevelProps {
  isMobile?: boolean
  className?: string
  contentPosition?: 'left' | 'right'
}

class LevelComponent extends React.Component<LevelProps> {
  public render (): JSX.Element {
    const { children, className, contentPosition, isMobile } = this.props
    return (
      <div className={className}>
        <LevelContent position={contentPosition} isMobile={isMobile}>
          {children}
        </LevelContent>
      </div>
    )
  }
}

const Level = styled(LevelComponent)`
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  code {
    border-radius: 4px;
  }

  img {
    display: inline-block;
    vertical-align: top;
  }

  ${(props: LevelProps) => props.isMobile ? 'display: flex;' : ''}

  @media screen and (min-width: 769px), print {
    display: flex;
  }
`

export default Level
