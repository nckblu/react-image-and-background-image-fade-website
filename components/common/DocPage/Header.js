import React from "react";
import HeaderWrapper from "./elements/HeaderWrapper";
import H1 from "./elements/H1";
import HeaderBackgroundImage from "./elements/HeaderBackgroundImage";

export const DocPageHeader = ({ title, image }) => (
  <HeaderWrapper>
    <HeaderBackgroundImage src={image} width="100%" height="100%">
      <H1>{title}</H1>
    </HeaderBackgroundImage>
  </HeaderWrapper>
);

export default DocPageHeader;
