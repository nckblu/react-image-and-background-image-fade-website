import React from "react";
import Demo from "./Demo";
import { BounceyLoader } from "react-loaders-spinners";
import { Image } from "react-image-and-background-image-fade";

export const ImageCustomLoaderDemo = () => {
  return (
    <Demo link="https://codesandbox.io/s/k3z36k7r0r">
      <Image
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
