import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;

    font: 400 16px Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background: #fff;
    color: #010101;
    font-family: Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  *, button, input {
    border: 0;
    background: none;
  }
`
