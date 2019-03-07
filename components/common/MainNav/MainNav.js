import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";
import NavLink from "./NavLink";

export const MainNav = () => {
  return (
    <Wrapper>
      <Container>
        <HomeLink>
          <Link href="/">react image and background image fade</Link>
        </HomeLink>
        <Block />
        <Right>
          <NavLink href="/docs">docs</NavLink>
          <NavLink href="/demos">demos</NavLink>
        </Right>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 75px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
    display: block;
    text-decoration: none;
    color: #fff;
  }
`;

const HomeLink = styled.div`
  background: #000;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Block = styled.div`
  flex-grow: 1;
  background: #000;
  height: 100%;
`;

const Right = styled.div`
  margin-left: auto;
  display: flex;
  height: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  position: relative;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 2000px;
    height: 100%;
    background: #000;
  }

  &:before {
    left: -1970px;
  }

  &:after {
    right: -1970px;
  }
`;

export default withRouter(MainNav);
