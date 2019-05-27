import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
  }

  body {
    background-color: #22202c;
    background: linear-gradient(to bottom, #22202c 0%,#2a202c 100%);
    background-attachment: fixed;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    border: 0;
    outline: none;

    @media all and (max-width: 768px) {
      font-size: 1em;
    }
  }

  input {
    @keyframes autofill {
      to {
        font-family: Helvetica, Arial, sans-serif;
        color: #fff;
        background: transparent;
      }
    }
    &:-webkit-autofill {
      animation-name: autofill;
      animation-fill-mode: both;
    }
  }

  button {
    cursor: pointer;
  }
`;
