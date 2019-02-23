import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import Container from "./elements/Container";
import H2 from "./elements/H2";
import Description from "./elements/Description";
import Feature from "./elements/Feature";
import ButtonContainer from "./elements/ButtonContainer";
import Button from "../../../elements/common/Button";
import Column from "./elements/Column";

export const FeaturePanel = ({
  title,
  renderDescription,
  renderFeature,
  link,
  linkText,
  alternate,
}) => {
  const infoContent = (
    <>
      <H2>{title}</H2>
      <Description>{renderDescription()}</Description>
      <ButtonContainer>
        <Link href={link}>
          <Button dark>{linkText}</Button>
        </Link>
      </ButtonContainer>
    </>
  );

  const featureContent = <Feature>{renderFeature()}</Feature>;

  const columns = alternate
    ? [featureContent, infoContent]
    : [infoContent, featureContent];

  return (
    <Container>
      <Column>{columns[0]}</Column>
      <Column>{columns[1]}</Column>
    </Container>
  );
};

FeaturePanel.propTypes = {
  title: PropTypes.string.isRequired,
  renderDescription: PropTypes.func.isRequired,
  renderFeature: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  alternate: PropTypes.bool,
};

export default FeaturePanel;
