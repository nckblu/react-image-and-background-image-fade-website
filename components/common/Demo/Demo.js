import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Demo = ({ children, link }) => {
  return (
    <Wrapper>
      <EmbedContainer>{children}</EmbedContainer>
      <Footer>
        <FooterLink>
          <a href={link} target="_blank">
            Edit on CodeSandbox
          </a>
        </FooterLink>
      </Footer>
    </Wrapper>
  );
};

Demo.propTypes = {
  link: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

const EmbedContainer = styled.div``;

const Footer = styled.div`
  padding-top: 20px;
  text-transform: uppercase;
  font-size: 14px;
  padding-left: 20px;
  text-align: right;
  letter-spacing: 1px;
`;

const FooterLink = styled.div`
  text-decoration: none;
  color: #ddd;
`;

export default Demo;
