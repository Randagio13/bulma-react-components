import * as React from 'react'
import logo from './logo.svg'
import './App.scss'
import BulmaTheme from './components/BulmaTheme'
import Button from './components/Button/Button'
import { ThemeType } from './components/BulmaTheme/BulmaTheme'

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
        <img src={logo} className='App-logo' alt='logo' />
        <BulmaTheme theme={theme}>
          <Button color='primary'>cioa tea</Button>
        </BulmaTheme>
        <Button color='warning'>Button</Button>
        <Button>Button</Button>
        <Button color='primary' type='a'>
          without theme
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type='submit'>Submit input without theme</Button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button color='primary' type='reset'>
          Reset input without theme
        </Button>
      </header>
    </div>
  )
}

export default App
