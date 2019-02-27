import styled from "styled-components";

export const NavItem = styled.div`
  text-decoration: none;
  color: ${props => props.theme.main};
  font-weight: 700;
  font-size: 21px;
  cursor: pointer;
  margin-right: 60px;
  opacity: 0.3;
  transition: opacity 0.3s ease;

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      `
    opacity: 0.8;
  `}
  }

  ${({ isActive }) =>
    isActive &&
    `
    opacity: 1;
  `}

  ${({ isLast }) =>
    isLast &&
    `
  margin-right: 0;
  `}
`;

export default NavItem;
