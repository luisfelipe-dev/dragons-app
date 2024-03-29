import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${() => css`
    :root {
      --bg-button-back: #fafbfc;
      --bg-button-back-v2: #edeff2;
      --color-button-back: #24292e;
      --bg-button-back-hover: #f3f4f6;
      --disabled-color: #959da5;
      --white: #fff;
      --default-color: #2b2d42;
      --secondary-color: #8d99ae;
      --default-color-v2: #2b2d42;
      --default-color-v3: #24292e;
      --default-color-v4: #edeff2;
      --orange-300: #ff9914;
      --orange-500: #ff8f00;
      --orange-700: #ff6e00;
      --orange-900: #ff4d00;
      --red-300: #ef233c;
      --red-500: #f44336;
      --green-300: #52c41a;
      --gray-300: #ccc;
    }
    html,
    body {
      background: #f4f4f4;
      color: var(--default-color);
      height: 100%;
      width: 100%;
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
