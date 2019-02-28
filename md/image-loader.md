# ImageLoader

## <a id="overview"></a>Overview

Both `Image` and `BackgroundImage` make use of `ImageLoader` internally. It can be useful for creating your own loader and any advanced use case that the other two components can't cater for.

`ImageLoader` is used via a [render prop](https://reactjs.org/docs/render-props.html) as the child. The method provided as the child will be called with an object with the following keys:

- `hasLoaded` (bool) - True when image retrieval was success
- `shouldShowLoader` (bool) - True when the loader should be shown, this is useful for when the image has loaded but you want to continue to keep the loader mounted for `transitionTime` seconds to complete the transition.
- `hasFailed` (bool) - True when retrieving the image was unsuccessful
- `src` (string) - The source of the image (pass-through)

```jsx
import { ImageLoader } from "react-image-and-background-image-fade";

class AwesomeOLoader extends Component {
  render() {
    return (
      <ImageLoader src="awesome-o.gif" transitionTime="0.3s">
        {({ hasLoaded, shouldShowLoader, hasFailed, src }) => (
          <div className="AwesomeOLoader">
            {shouldShowLoader && !hasFailed && (
              <div className="AwesomeoLoader__loading">
                Awesome-o is loading ...
              </div>
            )}

            {hasFailed && (
              <div className="AwesomeoLoader__failed">
                Awesome-o has failed :(
              </div>
            )}

            {hasLoaded && (
              <div
                className="AwesomeoLoader__failed"
                style={{ backgroundImage: `url(${src})` }}
              >
                Awesome-o has Loaded!! :)
              </div>
            )}
          </div>
        )}
      </ImageLoader>
    );
  }
}
```

## <a id="props"></a> Props

All initial prop values are undefined unless otherwise specified. `src` and `children`.

| Prop                                   | Description                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src` [string]                         | URI to the image, can be an imported local image or a remote image.                                                                                                |
| `transitionTime` [string default 0.3s] | Time used for the transition. This can be any valid CSS timing value such as "0.3s", "300ms", "3s". Works in conjunction with `shouldShowLoader`. See ImageLoader. |
| `lazyLoad` [bool default false]        | Enable or disable lazy loading. See lazy loading.                                                                                                                  |
| `children`                             | Render prop to render. Calls `children` with the following: `({ hasLoaded, shouldShowLoader, hasFailed, src })`. See Overview.                                     |
