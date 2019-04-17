import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import styled from 'styled-components'
import { Box, Button, Image, MediaImage } from './src'
import Level from './src/components/elements/Box/Media/Level'
import LevelItem from './src/components/elements/Box/Media/Level/Item'
import MediaContent from './src/components/elements/Box/Media/MediaContent'
import Content from './src/components/elements/Content'
import Icon from './src/components/elements/Icon'
import GlobalStyle from './src/global/style'

const DivPreview = styled.div`
  padding: 1.5rem;
`

const DivPreviewFlex = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-flow: row wrap;
`

const renderApp = (Component: any) => {
  ReactDOM.render(
    (
      <AppContainer>
        {Component}
      </AppContainer>
    ),
    document.getElementById('app')
  )
}

renderApp(
  <DivPreview>
    <GlobalStyle />
    <DivPreview>
      <Box>
        <MediaImage>
          <Image size='64' src='https://bulma.io/images/placeholders/128x128.png' />
        </MediaImage>
        <MediaContent>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </Content>
          <Level isMobile contentPosition='right'>
            <LevelItem>
              <Icon size='small' icon='reply' />
            </LevelItem>
            <LevelItem>
              <Icon size='small' icon='retweet' />
            </LevelItem>
            <LevelItem>
              <Icon size='small' icon='heart' />
            </LevelItem>
          </Level>
        </MediaContent>
      </Box>
    </DivPreview>
    <DivPreviewFlex>
      <DivPreview>
        <Button componentType='submit' colors='white'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='light'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='dark'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='black'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='text'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='primary'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='link'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='info'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='success'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='warning'>Button</Button>
      </DivPreview>
      <DivPreview>
        <Button componentType='submit' colors='danger'>Button</Button>
      </DivPreview>
    </DivPreviewFlex>
    <DivPreviewFlex>
      <DivPreview>
        <Button componentType='submit' colors='danger'>Button</Button>
      </DivPreview>
    </DivPreviewFlex>
  </DivPreview>
)

if (Reflect.get(module, 'hot') !== undefined) {
  // tslint:disable-next-line:no-var-
  const nextApp = require('./src').default
  Reflect.get(module, 'hot').accept('./src', () => {
    renderApp(nextApp)
  })
}
