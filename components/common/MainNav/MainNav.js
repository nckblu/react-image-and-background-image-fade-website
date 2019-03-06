import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const MainNav = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">react image and background image fade</Link>
        <Right>
          <NavItem>
            <Link href="/docs">docs </Link>
          </NavItem>
          <NavItem>
            <Link href="/demos">demos </Link>
          </NavItem>
        </Right>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 75px;
  background: #000;
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

const Right = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavItem = styled.div`
  a {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 30px;
`;

export default MainNav;
