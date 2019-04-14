import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import SubNavLink from "./SubNavLink";

const NavLink = ({ router, children, subNavItems, ...props }) => {
  const isActive = router.pathname.indexOf(props.href) > -1;
  const WrapperNavItem = isActive ? ActiveNavItem : NavItem;
  return (
    <WrapperNavItem>
      <Link {...props}>
        <a>{children}</a>
      </Link>
      {!!subNavItems && !!subNavItems.length && (
        <SubNav>
          <Inner>
            {subNavItems.map(subNavItem => (
              <SubNavLink href={subNavItem.href}>
                <span>{subNavItem.title}</span>
              </SubNavLink>
            ))}
          </Inner>
        </SubNav>
      )}
    </WrapperNavItem>
  );
};

const NavItem = styled.li`
  position: relative;

  > a {
    padding: 0 20px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #000;
    color: white;

    span {
      display: block;
    }
  }

  &:hover {
    background: #ddd;
    color: black;

    > a {
      background: #ddd;
      color: black;
    }
    > ul {
      display: block;

      > div {
        &:before {
          background: #ddd;
        }
      }

      > div > li {
        background: #ddd;
      }
    }
  }
`;

const ActiveNavItem = styled(NavItem)`
  > a {
    background: #eee;
    color: black;
  }

  &:hover {
    > a {
      background: #eee;
      color: black;
    }
  }

  > ul {
    display: block;
  }

  &:hover > ul {
    display: block;
    background: #eee;

    > div {
      &:before {
        background: #eee;
      }
    }

    > div > li {
      background: #eee;
    }
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;

  &:before {
    content: "";
    position: absolute;
    right: -20000px;
    height: 100%;
    background: #eee;
    top: 0;
    width: 40000px;
  }
`;

const SubNav = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  bottom: -50px;
  font-size: 16px;
`;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  subNavItems: PropTypes.array,
};

export default withRouter(NavLink);
