import styled from 'styled-components'

export const Container = styled.div`
  width: 390px;
  height: 368px;
  background: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 38px;

  -webkit-box-shadow: 0px 0px 114px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 114px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 114px 2px rgba(0, 0, 0, 0.75);

  .header {
    color: #fff;
    font-size: 48px;
  }

  input {
    border: none;
    background: #000;
    color: gray;
    width: 196px;
    height: 44px;
    /* padding-left: 3px; */
    z-index: 100;
    /* padding-top: 21px; */
    transition: all 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    &:focus {
      outline-width: 0;
      font-size: 16px;
    }
  }

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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
