import * as React from 'react'
import logo from './logo.svg'
import './App.scss'
import BulmaTheme from './components/BulmaTheme'
import styled from 'styled-components'

const Text = styled.p`
  color: ${props => props.theme.colors.$black};
`

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <BulmaTheme theme={{ colors: { $black: 'green' } }}>
          <Text>cioa tea</Text>
        </BulmaTheme>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
