import styled from 'styled-components'

export const WrapperEditDragon = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 16px auto 0 auto;

  form {
    .form-div {
      width: 100%;
      position: relative;
    }

    .error-message {
      position: absolute;
      top: 13px;
      right: 3px;
      font-size: 0.75rem;
      color: var(--red-300);
    }

    label {
      display: block;
      font-weight: 500;
      margin-bottom: 16px;
    }

    p {
      font-weight: 900;
      margin-bottom: 16px;
    }

    button {
      cursor: pointer;
      width: 100%;
      height: 40px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 6px;
      border: 1px solid var(--default-color);
      background: var(--default-color);
      color: var(--white);

      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
        opacity: 0.8;
      }

      &:disabled {
        background: var(--gray-300);
        opacity: 0.8;
      }
    }

    input {
      width: 100%;
      padding: 16px;
      font-size: 16px;
      margin-bottom: 16px;
      border-radius: 16px;
      border: 1px solid var(--default-color);
      outline: 0;

      &.error-id {
        border-color: var(--red-300);
      }
    }
  }
`
