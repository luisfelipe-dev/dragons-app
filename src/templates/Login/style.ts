import styled from 'styled-components'

export const WrapperLoginPage = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 150px auto 0 auto;
  padding: 16px;
  border-radius: 5px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .login-title {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    h1 {
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }

  .login-form {
    width: 100%;

    .login-form__right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    form {
      position: relative;

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

      input {
        width: 100%;
        padding: 16px;
        font-size: 16px;
        margin-bottom: 16px;
        border-radius: 16px;
        border: 1px solid var(--default-color);

        &.error-id {
          border-color: var(--red-300);
        }
      }

      button {
        font-family: inherit;
        display: inline-block;
        width: 6em;
        height: 2.6em;
        line-height: 2.5em;
        overflow: hidden;
        margin: 0 0 auto 0;
        cursor: pointer;
        font-size: 17px;
        z-index: 1;
        color: var(--default-color);
        border: 2px solid var(--default-color);
        background: transparent;
        border-radius: 6px;
        position: relative;

        &::before {
          position: absolute;
          content: '';
          background: var(--default-color);
          width: 150px;
          height: 200px;
          z-index: -1;
          border-radius: 50%;

          top: 100%;
          left: 100%;
          transition: 0.3s all;
        }

        &:hover {
          color: white;

          &::before {
            top: -30px;
            left: -30px;
          }
        }
      }
    }
  }
`
