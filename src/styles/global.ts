import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
`;
