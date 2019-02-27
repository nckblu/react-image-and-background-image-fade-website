import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset/string";
import ghCss from "github-markdown-css";
export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${ghCss};
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.main};
    font-family: "Montserrat", sans-serif;
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    padding: 0;
  }

  a {
    color: ${props => props.theme.main};
  }
`;

export default GlobalStyle;
