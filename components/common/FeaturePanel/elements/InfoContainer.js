import styled from "styled-components";

export const InfoContainer = styled.div`
  ${props =>
    !props.alternate &&
    `
    padding-right: 80px;
  `}

  ${props =>
    props.alternate &&
    `
    padding-left: 80px;
  `}
`;

export default InfoContainer;
