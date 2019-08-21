import * as React from 'react'
// import logo from './logo.svg'
// import './App.scss'
import BulmaTheme from './components/BulmaTheme'
import Button from './components/Button/Button'
import { ThemeType } from './components/BulmaTheme/BulmaTheme'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
`

console.log(Text)

const theme: ThemeType = {
  colors: { turquoise: 'green' },
  button: {
    backgroundColors: {
      primary: 'green'
    }
  }
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <Container>
          <BulmaTheme theme={theme}>
            <Button color='primary'>Button with theme</Button>
          </BulmaTheme>
        </Container>
        <Container>
          <Button color='warning'>Button</Button>
        </Container>
        <Container>
          <Button>Button</Button>
        </Container>
        <Container>
          <Button color='primary' type='a'>
            Button Type a
          </Button>
        </Container>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Container>
          <Button type='submit'>Submit input without theme</Button>
        </Container>
        {/* <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a> */}
        <Container>
          <Button color='primary' type='reset'>
            Reset input without theme
          </Button>
        </Container>
      </header>
    </div>
  )
}

export default App
