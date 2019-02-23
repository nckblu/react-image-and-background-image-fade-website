import React from "react";
import Link from "next/link";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/home/Header";
import HeaderBackgroundImage from "../elements/home/HeaderBackgroundImage";
import HeaderContent from "../elements/home/HeaderContent";
import HeaderH1 from "../elements/home/HeaderH1";

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
        </HeaderContent>
      </HeaderBackgroundImage>
    </Header>
  </Wrapper>
);

export default Home;
