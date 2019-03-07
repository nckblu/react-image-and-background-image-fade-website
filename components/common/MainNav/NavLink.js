import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavLink = ({ router, children, ...props }) => {
  let isActive = router.pathname === props.href;

  return (
    <>
      {isActive ? (
        <ActiveNavItem>
          <Link {...props}>
            <a>{children}</a>
          </Link>
        </ActiveNavItem>
      ) : (
        <NavItem>
          <Link {...props}>
            <a>{children}</a>
          </Link>
        </NavItem>
      )}
    </>
  );
};

const NavItem = styled.div`
  a {
    padding: 0 20px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #000;
  }
`;

const ActiveNavItem = styled(NavItem)`
  a {
    background: transparent;
  }
`;

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(NavLink);
