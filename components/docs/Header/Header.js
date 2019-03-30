import React from "react";
import PropTypes from "prop-types";
import HeaderWrapper from "./elements/HeaderWrapper";
import HeaderBackgroundImage from "./elements/HeaderBackgroundImage";

export const Header = ({ title, image, isExpanded }) => (
  <HeaderWrapper isExpanded={isExpanded}>
    <HeaderBackgroundImage src={image} width="100%" height="100%" />
  </HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
};
export default Header;
