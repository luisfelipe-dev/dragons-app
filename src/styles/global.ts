import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${() => css`
    html,
    body {
      background: #f4f4f4;
      color: #2b2d42;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Inter', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`

export default GlobalStyles
