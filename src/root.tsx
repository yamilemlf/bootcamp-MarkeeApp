import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from './app'
import { theme } from 'resources/theme'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    height: 100%;
  }

  [data-js="app"] {
    height: 100%;
  }
`

export { Root }
