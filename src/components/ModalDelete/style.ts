import styled from 'styled-components'

export const WrapperModalDelete = styled.div`
  width: 100%;
  max-width: 350px;
  background: var(--white);
  padding: 24px 16px;
  border-radius: 16px;

  .modal-delete__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    p {
      font-weight: 600;
      font-size: 1.6rem;
    }

    button {
      background: transparent;
      border: 0;
      font-size: 24px;
    }
  }

  .modal-delete__content {
    width: 100%;

    .modal-delete__message {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        display: block;
        strong {
          margin-bottom: 15px;
          display: block;
        }
      }
    }

    .modal-delete__btn {
      width: 100%;
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;

      button {
        padding: 15px 24px;
        border: 0;
        cursor: pointer;

        border-radius: 6px;
        background: var(--red-300);
        color: var(--white);
        &.accept {
          background: var(--green-300);
        }
      }
    }
  }
`
