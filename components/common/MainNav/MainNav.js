import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";
import NavLink from "./NavLink";
import { docNavItems } from "../../docs/DocPage/docNavItems";
import Header from "../../docs/Header";

export class MainNav extends React.PureComponent {
  state = {
    headerIsExpanded: false,
  };

  render() {
    const { headerIsExpanded } = this.state;
    return (
      <Wrapper>
        <Header
          isExpanded={headerIsExpanded}
          image="/static/images/docs/1.jpg"
        />
        <Container>
          <HomeLink>
            <Link href="/">react image and background image fade</Link>
          </HomeLink>
          <Block />
          <Right>
            <NavLink
              href="/docs"
              subNavItems={docNavItems}
              onMouseEnter={this.handleMouseOver}
              onMouseLeave={this.handleMouseOut}
            >
              <span>docs</span>
            </NavLink>
            <NavLink href="/demos">
              <span>demos</span>
            </NavLink>
          </Right>
        </Container>
      </Wrapper>
    );
  }

  handleMouseOver = e => {
    e.stopPropagation();
    if (this.state.headerIsExpanded) return;
    this.setState({ headerIsExpanded: true });
  };

  handleMouseOut = e => {
    e.stopPropagation();
    if (!this.state.headerIsExpanded) return;
    this.setState({ headerIsExpanded: false });
  };
}

const Wrapper = styled.div`
  height: 75px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
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

const Right = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  margin-left: auto;
  padding: 0;
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
