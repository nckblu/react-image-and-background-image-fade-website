import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Head from "../../components/Head";
import StyledWrapper from "./elements/Wrapper";
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

Wrapper.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Wrapper;
