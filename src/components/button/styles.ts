import styled from 'styled-components'

export const Container = styled.div`
  button {
    z-index: 100;
    width: 149px;
    height: 43px;
    border: 1px solid #fff;
    background: #000;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 16px;
    border-radius: 22px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: #000;
      background: #fff;
    }

    &:focus {
      outline-width: 0;
    }
  }
`
