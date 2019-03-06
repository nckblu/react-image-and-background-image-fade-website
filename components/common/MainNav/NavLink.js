import React, { Children } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let isActive = router.pathname === props.href;

  return (
    <Link {...props}>{React.cloneElement(child, { className })}</Link>
  );
};

const NavItem = styled.div`
  a {
    padding: 0 20px;
  }
`;

NavLink.propTypes = {
  href: 
}

export default withRouter(NavLink);
