# Overview

## Quick start ⚡️

```bash
npm install --save react-image-and-background-image-fade
```

or

```bash
yarn add react-image-and-background-image-fade
```

#### Basic usage

Note here that all unknown props like `alt` and `title` are passed through to the resulting `img` element.

```jsx
import { Image } from "react-image-and-background-image-fade";

class Example extends Component {
  render() {
    return (
      <Image
        src="https://example.com/neon_cat.jpg"
        width="300px"
        height="300px"
        alt="flying cat"
        title="Neon cat"
      />
    );
  }
}
```

## <a id="components"></a>Components

React Image and Background Image Fade comprises of 3 main components:

- `Image` For preloading and fading in img elements
- `BackgroundImage` For preloading and fading in background images of any element.
- `ImageLoader` For creating your own implementation for image loading.
