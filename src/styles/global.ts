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

    .global-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 9999;

      outline: 0;

      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);

      &.flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .global-modal-classname {
      width: 100%;
      outline: 0;
      border-radius: 0;
      overflow: hidden;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export default GlobalStyles
