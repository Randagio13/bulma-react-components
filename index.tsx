import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Box, Image, MediaImage } from './src'
import MediaContent from './src/components/elements/Box/Media/MediaContent'
import Content from './src/components/elements/Content'

const renderApp = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(
  <div>
    <Box color='red'>
      <MediaImage>
        <Image size='128' src='https://bulma.io/images/placeholders/128x128.png' />
      </MediaImage>
      <MediaContent>
        <Content size='large'>
          <h1>Miao</h1>
        </Content>
      </MediaContent>
    </Box>
  </div>
)

if (Reflect.get(module, 'hot') !== undefined) {
  // tslint:disable-next-line:no-var-
  const nextApp = require('./src').default
  Reflect.get(module, 'hot').accept('./src', () => {
    renderApp(nextApp)
  })
}
