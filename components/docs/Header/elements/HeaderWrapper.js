import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ isExpanded }) => (isExpanded ? 125 : 75)}px;
`;

export default HeaderWrapper;
