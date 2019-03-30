import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import SubNavLink from "./SubNavLink";

const NavLink = ({
  router,
  children,
  subNavItems,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const isActive = router.pathname === props.href;
  const WrapperNavItem = isActive ? ActiveNavItem : NavItem;
  return (
    <WrapperNavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link {...props}>
        <a>{children}</a>
      </Link>
      {!!subNavItems && !!subNavItems.length && (
        <SubNav>
          {subNavItems.map(subNavItem => (
            <SubNavLink href={subNavItem.href}>
              <span>{subNavItem.title}</span>
            </SubNavLink>
          ))}
        </SubNav>
      )}
    </WrapperNavItem>
  );
};

const NavItem = styled.li`
  position: relative;

  a {
    padding: 0 20px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #000;

    span {
      display: block;
    }
  }
`;

const ActiveNavItem = styled(NavItem)`
  a {
    background: transparent;
  }
`;

const SubNav = styled.ul`
  /* display: none; */
  display: flex;
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
