import React from "react";
import PropTypes from "prop-types";
import HeaderWrapper from "./elements/HeaderWrapper";
import H1 from "./elements/H1";
import HeaderBackgroundImage from "./elements/HeaderBackgroundImage";

export const Header = ({ title, image }) => (
  <HeaderWrapper>
    <HeaderBackgroundImage src={image} width="100%" height="100%">
      <H1>{title}</H1>
    </HeaderBackgroundImage>
  </HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Header;
