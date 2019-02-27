import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Nav from "./elements/Nav";
import NavItem from "./elements/NavItem";

export const DocNav = ({ items, activeId }) => {
  return (
    <Nav>
      {items.map((item, i) => (
        <Link href={item.href} key={item.id}>
          <NavItem
            isActive={activeId === item.id}
            isLast={i === items.length - 1}
          >
            {item.title}
          </NavItem>
        </Link>
      ))}
    </Nav>
  );
};

DocNav.propTypes = {
  items: PropTypes.array.isRequired,
  activeId: PropTypes.number.isRequired,
};

export default DocNav;
