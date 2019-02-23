import styled from "styled-components";

export const HeaderContent = styled.div`
  color: ${props => props.theme.light};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

export default HeaderContent;
