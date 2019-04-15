import React from "react";
import Demo from "./Demo";
import { BounceyLoader } from "react-loaders-spinners";
import { BackgroundImage } from "react-image-and-background-image-fade";

export const BackgroundImageCustomLoaderDemo = () => {
  return (
    <Demo link="https://codesandbox.io/s/06z1lw9qw">
      <BackgroundImage
        src="https://source.unsplash.com/random/800x350"
        width="800px"
        height="350px"
        isResponsive
        lazyLoad
        className="image"
        renderLoader={({ hasLoaded, hasFailed }) => (
          <div className="custom-loader">{!hasLoaded && <BounceyLoader />}</div>
        )}
      />
    </Demo>
  );
};
