# Image

## Basic usage

<Demo link="https://codesandbox.io/s/ym5nno6951">
  <Image
    src="https://source.unsplash.com/random/800x350"
    width="800px"
    height="350px"
    className="image-static"
  />
</Demo>

## Responsive

<Demo link="https://codesandbox.io/s/m57n40oj5y">
  <Image
    src="https://source.unsplash.com/random/800x600"
    width="800px"
    height="350px"
    isResponsive
    className="image"
  />
</Demo>

## Lazy loading

<Demo link="https://codesandbox.io/s/l5nq9n7o2z">
  <BackgroundImage
    src="https://source.unsplash.com/random/800x602"
    width="800px"
    height="350px"
    isResponsive
    lazyLoad
    className="image"
  />
</Demo>

## Custom loaders

<ImageCustomLoaderDemo />
