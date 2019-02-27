import styled from "styled-components";
import { BackgroundImage } from "react-image-and-background-image-fade";

export const HeaderBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`;

export default HeaderBackgroundImage;
