import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset/string";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.main};
    font-family: "Montserrat", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.main};
  }
`;

export default GlobalStyle;
