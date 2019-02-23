import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "../components/Head";
import { Wrapper as StyledWrapper } from "./elements/Wrapper";
import GlobalStyle from "./elements/GlobalStyle";
import theme from "./theme";

export const Wrapper = ({ pageTitle, children }) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <Head title={pageTitle} />
      <GlobalStyle />
      {children}
    </StyledWrapper>
  </ThemeProvider>
);

export default Wrapper;
