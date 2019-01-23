import * as React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

class ImageComponent extends React.Component<Props> {
  public render (): JSX.Element {
    const { className } = this.props
    return (
      <figure className={className}>
        <img src='https://bulma.io/images/placeholders/128x128.png' />
      </figure>
    )
  }
}

interface PropsImg {
  rounded?: boolean
  size?: '16' | '24' | '32' | '48' | '64' | '96' | '128' | 'square' | '1by1' |
         '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' |
         '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3'
}

const Image = styled(ImageComponent)`
  display: block;
  position: relative;
  & img {
    display: block;
    height: auto;
    width: 100%;
    ${(props: PropsImg) => props.rounded ? 'border-radius: 290486px;' : ''}
    ${(props: PropsImg) => {
      switch (props.size) {
        case 'square':
        case '1by1':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 100%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '5by4':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 80%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '4by3':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 75%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '3by2':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 66.6666%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '5by3':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 60%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '16by9':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 56.25%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '2by1':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 50%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '3by1':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 33.3333%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '4by5':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 125%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '3by4':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 133.3333%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '2by3':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 150%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '3by5':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 166.6666%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '9by16':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 177.7777%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '1by2':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 200%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        case '1by3':
          return [
            'height: 100%', 'width: 100%', 'padding-top: 300%',
            'bottom: 0', 'left: 0', 'position: absolute',
            'right: 0', 'top: 0'
          ].join(';')
        default:
          return ''
      }
    }}
  }
  ${(props: PropsImg) => {
    switch (props.size) {
      case '16':
        return 'height: 16px; width: 16px;'
      case '24':
        return 'height: 24px; width: 24px;'
      case '32':
        return 'height: 32px; width: 32px;'
      case '48':
        return 'height: 48px; width: 48px;'
      case '64':
        return 'height: 64px; width: 64px;'
      case '96':
        return 'height: 96px; width: 96px;'
      case '128':
        return 'height: 128px; width: 128px;'
      default:
        return ''
    }
  }}
`
export default Image
