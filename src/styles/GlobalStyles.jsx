import { createGlobalStyle } from "styled-components";

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(18, 18, 20) ;
    -webkit-font-smoothing: antialiased;
  }

  body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100vw;
    height: 100vh;
    font: 16px Roboto, sans-serif; 
  }

  button {
    cursor: pointer;
  }

`;