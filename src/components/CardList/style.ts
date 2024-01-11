import styled from 'styled-components'

export const WrapperCardList = styled.div`
  width: 100%;
  background: var(--white);
  padding: 16px;
  border-radius: 16px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 0px;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: 0px 0px 36px -17px rgba(0, 0, 0, 0.75);
  }

  .id {
    grid-area: 1 / 1 / 2 / 3;

    p {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .histories {
    grid-area: 3 / 1 / 4 / 3;
    margin-top: 15px;

    p {
      font-size: 1rem;
    }
  }
  &:not(:first-child) {
    margin-top: 8px;
  }

  p {
    strong {
      margin-bottom: 5px;
      font-size: 1rem;
      color: var(--default-color);
    }

    font-size: 0.875rem;
    color: var(--secondary-color);
  }

  button {
    margin-top: 1rem;
    padding: 5px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    height: 40px;
    transition: all 0.3s ease;

    &.edit {
      background: var(--orange-300);
    }

    &.delete {
      background: var(--red-300);
      color: var(--white);
    }

    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
      opacity: 0.8;
    }
  }
`
