import React from "react";
import Link from "next/link";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/home/Header";
import HeaderBackgroundImage from "../elements/home/HeaderBackgroundImage";
import HeaderContent from "../elements/home/HeaderContent";
import HeaderH1 from "../elements/home/HeaderH1";
import HeaderContentButtons from "../elements/home/HeaderContentButtons";
import Button from "../elements/common/Button";
import FeaturePanelContainer from "../elements/home/FeaturePanelContainer";
import FeaturePanel from "../components/common/FeaturePanel";

export const Home = () => (
  <Wrapper>
    <Header>
      <HeaderBackgroundImage
        width="100%"
        height="100%"
        src="/static/images/home/header.jpg"
      >
        <HeaderContent>
          <HeaderH1>
            react image and <br /> background image fade
          </HeaderH1>
          <HeaderContentButtons>
            <Link href="/test">
              <Button light>github</Button>
            </Link>
            <Link href="/test">
              <Button light>docs</Button>
            </Link>
            <Link href="/test">
              <Button light>demos</Button>
            </Link>
          </HeaderContentButtons>
        </HeaderContent>
      </HeaderBackgroundImage>
    </Header>
    <FeaturePanelContainer>
      <FeaturePanel
        title="features"
        renderDescription={() => (
          <ul>
            <li>Fade in images and background images</li>
            <li>Lazy loading</li>
            <li>Custom loaders</li>
            <li>Responsive</li>
            <li>Flexible</li>
          </ul>
        )}
        renderFeature={() => "im a feautre"}
        link="/test"
        linkText="see docs"
      />
      <FeaturePanel
        title="features"
        renderDescription={() => (
          <ul>
            <li>Fade in images and background images</li>
            <li>Lazy loading</li>
            <li>Custom loaders</li>
            <li>Responsive</li>
            <li>Flexible</li>
          </ul>
        )}
        renderFeature={() => "im a feautre"}
        link="/test"
        linkText="see docs"
        alternate
      />
    </FeaturePanelContainer>
  </Wrapper>
);

export default Home;
