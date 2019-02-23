import styled from "styled-components";

export const HeaderContentButtons = styled.div`
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  justify-content: center;

  > a {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default HeaderContentButtons;
