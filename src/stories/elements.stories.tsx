import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Level from '../components/elements/Box/Media/Level'
import LevelItem from '../components/elements/Box/Media/Level/Item'
import MediaContent from '../components/elements/Box/Media/MediaContent'
import Content from '../components/elements/Content'
import Icon from '../components/elements/Icon'
import { Box, Image, MediaImage } from '../index'

const stories = storiesOf('Elements', module)

stories.add('Box',
  () => (
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
  ),
  { info: { inline: true } }
)
