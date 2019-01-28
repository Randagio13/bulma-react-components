import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Box, Image, MediaImage } from './src'
import Level from './src/components/elements/Box/Media/Level'
import MediaContent from './src/components/elements/Box/Media/MediaContent'
import Content from './src/components/elements/Content'
import GlobalStyle from './src/global/style'

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
    <GlobalStyle />
    <Box>
      <MediaImage>
        <Image size='128' src='https://bulma.io/images/placeholders/128x128.png' />
      </MediaImage>
      <MediaContent>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'}
          </p>
        </Content>
        <Level isMobile contentPosition='right'>
          ciao
        </Level>
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
