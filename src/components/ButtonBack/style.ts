import styled from 'styled-components'

export const WrapperButtonBack = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  button {
    appearance: none;
    background-color: var(--bg-button-back);
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow:
      rgba(27, 31, 35, 0.04) 0 1px 0,
      rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: var(--color-button-back);
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;

    &:hover {
      background-color: var(--bg-button-back-hover);
      text-decoration: none;
      transition-duration: 0.1s;
    }

    &:disabled {
      background-color: var(--bg-button-back);
      border-color: rgba(27, 31, 35, 0.15);
      color: var(--disabled-color);
      cursor: default;
    }

    &:active {
      background-color: var(--bg-button-back-v2);
      box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
      transition: none 0s;
    }

    &:focus {
      outline: 1px transparent;
    }

    &:before {
      display: none;
    }

    &:-webkit-details-marker {
      display: none;
    }
  }
`
