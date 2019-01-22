import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Box, MediaImage } from './src'

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
        {'miao'}
      </MediaImage>
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
