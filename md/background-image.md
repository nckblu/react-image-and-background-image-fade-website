### <a id="backgroundImage"></a>`BackgroundImage`

#### <a id="backgroundImage--basicUsage"></a>Basic Usage

Note here that all unknown props like `alt` and `title` are passed through to the resulting `img` element.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <BackgroundImage
        src="me_drinking_prosecco.jpg"
        width="300px"
        height="300px"
      />
    );
  }
}
```

#### <a id="backgroundImage--responsive"></a>Responsive

When using the `isResponsive` you must ensure that both the width and height are in pixel format, this is because BackgroundImage calculates the aspect ratio based on the image's width and height. The resulting element will have a width set to 100% and will fill the parent container.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class BackgroundImage extends Component {
  render() {
    return (
      <BackgroundImage
        src="https://example.com/neon_cat.jpg"
        width="800px"
        height="400px"
        isResponsive
      />
    );
  }
}
```

#### <a id="backgroundImage--lazyLoading"></a>Lazy loading

Internally React Image and Background Image Fade makes use of [Visibility Sensor](https://github.com/joshwnj/react-visibility-sensor). When using `lazyLoad` the image will begin loading as soon as the element is partially visible in the viewport.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <BackgroundImage
        src="me_drinking_pina_colada.tiff"
        width="800px"
        height="400px"
        lazyLoad
      />
    );
  }
}
```

#### <a id="backgroundImage--customLoaders"></a>Custom loaders

React Image and Background Image Fade shows a default loader when none is provided which a plain light grey element with an animated 'shine', similar to how Facebook decorate their loading skeletons. You can however specify your own loader element using the `renderLoader` render prop. This expects a function that renders your custom loader.

`hasLoaded` is passed to the function so that your loader can be aware that the image is loaded and you can begin your own transition. Note that the loader will be unmounted after the transition time has finished.

`hasFailed` is so that you an show a custom error in the event of an image load fail.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <BackgroundImage
        src="me_drinking_pina_colada.tiff"
        width="20%"
        height="10%"
        renderLoader={({ hasLoaded, hasFailed }) => (
          <div className="MyAwesomeLoader">
            I'm loading here!
            {hasFailed && <span>But I have failed</span>}
            {hasLoaded && (
              <span>
                I'll be here for (transitionTime) milliseconds after load
              </span>
            )}
          </div>
        )}
      />
    );
  }
}
```

#### <a id="backgroundImage--useChild"></a>useChild

By default `BackgroundImage` will create its own element to apply the background to however if you would prefer to use your own element you can simply include it within `BackgroundImage` as a child and set `useChild` to `true`.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <BackgroundImage
        useChild
        width="200px"
        height="200px"
        src="me_drinking_guinness.gif"
      >
        <div
          style={{ width: "500px", height: "500px", backgroundSize: "cover" }}
        >
          I'm in a child wrapper enjoying that sweet background.
        </div>
      </BackgroundImage>
    );
  }
}
```

#### <a id="backgroundImage--element"></a>element

`BackgroundImage` creates a wrapper `div` element and the element that the background is attached to is by default a `div` this can be changed to any other valid html element. If you would like to apply the background image to a custom component, see `useChild`.

```jsx
import { BackgroundImage } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <BackgroundImage
        element="p"
        width="200px"
        height="200px"
        src="me_drinking_guinness.gif"
      >
        Look at me i'm a paragraph.
      </BackgroundImage>
    );
  }
}
```

#### <a id="backgroundImage--props"></a>`BackgroundImage` Props

All initial prop values are undefined unless otherwise specified. `src`, `width` and `height` are the only required props.

| Prop                                   | Description                                                                                                                                                                                                                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src` [string]                         | URI to the image, can be an imported local image or a remote image.                                                                                                                                                                                                                    |
| `width` [string]                       | Width of the element in string format. This can be any valid CSS value such as "20px", "20%", "20em" etc. When using `isResponsive` width must be in px format.                                                                                                                        |
| `height` [string]                      | Height of the element in string format. This can be any valid CSS value such as "20px", "20%", "20em" etc. When using `isResponsive` width must be in px format.                                                                                                                       |
| `transitionTime` [string default 0.3s] | Time used for the fade transition. This can be any valid CSS timing value such as "0.3s", "300ms", "3s". This is also used for unmounting the loader component, so once the image has loaded, `BackgroundImage` will wait for 0.3s (or `transitionTime`) before unmounting the loader. |
| `renderLoader` [func]                  | A function that renders a custom loader. The function will call `renderLoader` with an object containing the keys `hasLoaded` and `hasFailed`. See Custom loaders.                                                                                                                     |
| `disableLoader` [bool]                 | Stop loader element from being shown while the image is loading. Note this will override the behaviour of `renderLoader`.                                                                                                                                                              |
| `wrapperClassName` [string]            | The `className` to apply to the wrapper element.                                                                                                                                                                                                                                       |
| `lazyLoad` [bool default false]        | Enable or disable lazy loading. See lazy loading.                                                                                                                                                                                                                                      |
| `isResponsive` [bool default false]    | Enable or disable responsiveness. See Responsive.                                                                                                                                                                                                                                      |
| `useChild` [bool default false]        | Whether or not to use the child as the element to apply the background image to. See useChild.                                                                                                                                                                                         |
| `element` [string]                     | The string element name of the element you would like `BackgroundImage` to create and apply the background image too. See element.                                                                                                                                                     |
