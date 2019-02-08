import * as React from 'react'
import styled, { css, StyledProps } from 'styled-components'
import LevelItem from './Item'

interface LevelContentProps {
  position?: 'left' | 'right'
  isMobile?: boolean
}

const LevelContent = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  ${(props: LevelContentProps) => props.position === 'left'
    ? 'display: flex; align-items: center; justify-content: flex-start;'
    : 'display: flex; align-items: center; justify-content: flex-end;'
  }

  @media screen and (min-width: 769px), print {
    ${(props: LevelContentProps) => props.position === 'left' ? 'display: flex;' : 'display: flex;'}
  }
`

interface LevelProps {
  children?: JSX.Element[]
  isMobile?: boolean
  className?: string
  contentPosition?: 'left' | 'right'
}

class LevelComponent extends React.Component<LevelProps> {
  public render (): JSX.Element {
    const { children, className, contentPosition, isMobile } = this.props
    return (
      <nav className={className}>
        <LevelContent position={contentPosition} isMobile={isMobile}>
          {children}
        </LevelContent>
      </nav>
    )
  }
}

const Level: StyledProps<any> = styled(LevelComponent)`
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  ${(props: LevelProps) => props.isMobile && css`
    ${LevelItem}:not(:last-child) {
      margin-bottom: 0;
      margin-right: 0.75rem;
    }
  `}

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
