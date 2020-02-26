import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const Header = styled.div`
  height: calc(100vh - 40px);
  min-height: 400px;
  border: 30px solid white;
  margin-top: 76px;
  
  // ${breakpoint("sm")`
  //   display: none;
  // `}
`;

export default Header;
