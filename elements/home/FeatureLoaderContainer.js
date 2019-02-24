import styled from "styled-components";

export const FeatureLoaderContainer = styled.div`
  padding-top: 100%;
  width: 100%;
  box-shadow: -1px 6px 72px -2px rgba(0, 0, 0, 0.04);
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

export default FeatureLoaderContainer;
