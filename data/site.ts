import {
  Activity,
  Boxes,
  Braces,
  Brush,
  Gauge,
  ImageIcon,
  Layers3,
  Palette,
  Sparkles,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  title: string
  href: string
  description: string
  docHref?: string
}

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export type DocPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  sections: Array<{
    title: string
    body: string
    code?: string
  }>
  demoSlug?: string
}

export type DemoPage = {
  slug: string
  title: string
  description: string
  kind: 'image' | 'background' | 'picture' | 'provider' | 'responsive'
}

export const docsNav: NavItem[] = [
  { title: 'Overview', href: '/docs', description: 'Install, mental model, and the v2 surface area.' },
  { title: 'Image', href: '/docs/image', description: 'The polished default component for normal images.' },
  { title: 'BackgroundImage', href: '/docs/background-image', description: 'Preloaded CSS backgrounds with placeholders.' },
  { title: 'Picture', href: '/docs/picture', description: 'Art direction and modern format fallbacks.' },
  { title: 'ImageLoader', href: '/docs/image-loader', description: 'Render-prop control for custom loading UIs.' },
  { title: 'Hooks', href: '/docs/hooks', description: 'useImage and useInView for advanced flows.' },
  { title: 'Responsive Helpers', href: '/docs/responsive-helpers', description: 'Generate srcSet and sizes strings.' },
  { title: 'Shared Defaults', href: '/docs/shared-defaults', description: 'Set design-system defaults once.' },
  { title: 'Styling', href: '/docs/styling', description: 'CSS classes, variables, and skeleton shimmer.' },
  { title: 'Migration', href: '/docs/migration', description: 'Move from v1 names to the v2 API.' }
]

export const demosNav: NavItem[] = [
  { title: 'Overview', href: '/demos', description: 'Pick a live package demo.' },
  { title: 'Image', href: '/demos/image', description: 'Placeholders, fade, lazy, and sizing.' },
  { title: 'BackgroundImage', href: '/demos/background-image', description: 'CSS background loading without the drama.' },
  { title: 'Picture', href: '/demos/picture', description: 'Format fallbacks and art direction.' },
  { title: 'Provider', href: '/demos/provider', description: 'Global defaults with local overrides.', docHref: '/docs/shared-defaults' },
  { title: 'Responsive', href: '/demos/responsive', description: 'Generated srcSet and sizes helpers.', docHref: '/docs/responsive-helpers' }
]

export const features: Feature[] = [
  {
    title: 'Images that arrive with manners',
    description: 'Stable layout, native attributes, placeholders, and fade-in — no bloated dependencies.',
    icon: ImageIcon
  },
  {
    title: 'Backgrounds get first-class treatment',
    description: 'Preload CSS backgrounds, control fit and position, layer content above them.',
    icon: Layers3
  },
  {
    title: 'Hook-first where it counts',
    description: 'useImage and useInView for custom state management, retries, and loading choreography.',
    icon: Braces
  },
  {
    title: 'Responsive helpers included',
    description: 'Generate srcSet and sizes for image services and CDNs without bespoke call sites.',
    icon: Boxes
  },
  {
    title: 'Skeleton shimmer with taste',
    description: 'A polished, wide-gradient shimmer fully customisable with CSS variables. Speed, colour, and intensity — your call.',
    icon: Sparkles
  },
  {
    title: 'Built like we actually mean it',
    description: 'TypeScript, ESM/CJS, SSR-friendly, browser-tested, and package-validated.',
    icon: Gauge
  }
]

export const qualityMarks: Feature[] = [
  { title: 'React 19 ready', description: 'Modern peer deps and client-safe exports.', icon: Activity },
  { title: 'Zero server deps', description: 'Works everywhere — static exports to full SSR.', icon: Zap },
  { title: 'Design-system ready', description: 'Provider defaults and CSS variables for easy theming.', icon: Palette },
  { title: 'Accessibility first', description: 'Native alt text and roles handled out of the box.', icon: Brush }
]

export const docs: DocPage[] = [
  {
    slug: 'overview',
    title: 'Overview',
    eyebrow: 'Start here',
    description: 'react image and background image fade v2 is a modern image loading toolkit for React: image elements, CSS backgrounds, placeholders, hooks, responsive helpers, and polished fade transitions.',
    sections: [
      {
        title: 'Install',
        body: 'Install react image and background image fade and import the optional stylesheet once. The stylesheet provides the default premium shimmer skeleton, blur placeholder, and fade classes.',
        code: `npm install react-image-and-background-image-fade

import 'react-image-and-background-image-fade/styles.css'`
      },
      {
        title: 'Quick start',
        body: 'Use Image when you want a normal accessible image with layout stability, a placeholder, and a fade-in.',
        code: `import { Image } from 'react-image-and-background-image-fade'

export function QuickStartPreview() {
  return (
    <Image
      src="/images/home/feature1.jpg"
      alt="Quick start preview"
      width={1080}
      height={720}
      placeholder="skeleton"
      fadeType="zoom-blur"
    />
  )
}`
      },
      {
        title: 'What is included',
        body: 'The public surface includes Image, BackgroundImage, Picture, ImageLoader, useImage, useInView, ImageConfigProvider, responsive helpers, and preload helpers.'
      }
    ]
  },
  {
    slug: 'image',
    title: 'Image',
    eyebrow: 'Core component',
    description: 'Image is the default component for accessible image loading with native browser attributes and package-level polish.',
    sections: [
      {
        title: 'Responsive image',
        body: 'Pass numeric dimensions for stable layout and native width/height attributes. Add srcSet and sizes when multiple asset widths are available.',
        code: `const srcSet = createSrcSet({
  src: '/images/home/feature1.jpg',
  widths: [480, 800, 1200],
  quality: 82
})

<Image
  src="/images/home/feature1.jpg"
  alt="Mountain sunrise"
  width={1200}
  height={800}
  srcSet={srcSet}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="skeleton"
/>`
      },
      {
        title: 'Placeholders',
        body: 'Use skeleton, blur, color, empty, a React node, or a renderPlaceholder function. The default skeleton is layered and themeable, and blur now uses the final image as the blurred preview when no blurDataURL is supplied.',
        code: `<Image
  src="/images/home/feature3.jpg"
  alt="Placeholder demo"
  width={1080}
  height={720}
  placeholder="skeleton"
  fadeType="blur-in"
/>`
      }
    ]
  },
  {
    slug: 'background-image',
    title: 'BackgroundImage',
    eyebrow: 'CSS backgrounds',
    description: 'BackgroundImage brings the same loading experience to CSS background images while keeping real content in the element.',
    sections: [
      {
        title: 'Hero backgrounds',
        body: 'Use width, height, or aspectRatio to reserve space. fit, position, and repeat map to background CSS.',
        code: `<BackgroundImage
  src="/images/home/header.jpg"
  width="100%"
  height="100%"
  fit="cover"
  position="center"
  placeholder="color"
  color="#d8d8d8"
  fadeType="soft-reveal"
>
  <div className="heroOverlay">
    <h3>Real content over a preloaded background.</h3>
  </div>
</BackgroundImage>`
      },
      {
        title: 'Element control',
        body: 'Use as for the element type, or asChild to apply background behavior to your own element.',
        code: `<BackgroundImage
  src="/images/home/feature2.jpg"
  asChild
  placeholder="blur"
  fadeType="zoom-blur"
>
  <article className="cardDemo">
    <h3>asChild keeps your element</h3>
  </article>
</BackgroundImage>`
      }
    ]
  },
  {
    slug: 'picture',
    title: 'Picture',
    eyebrow: 'Art direction',
    description: 'Picture wraps source elements and the same fade/placeholder behavior around a fallback image.',
    sections: [
      {
        title: 'Modern formats',
        body: 'Use sources for AVIF/WebP or media-specific art direction.',
        code: `<Picture
  src="/images/home/feature1.jpg"
  alt="Wide landscape"
  width={1200}
  height={800}
  placeholder="blur"
  fadeType="soft-reveal"
  sources={[
    { srcSet: '/images/home/feature2.jpg?wide=1', media: '(min-width: 900px)' },
    { srcSet: '/images/home/feature1.jpg', type: 'image/webp' }
  ]}
/>`
      }
    ]
  },
  {
    slug: 'image-loader',
    title: 'ImageLoader',
    eyebrow: 'Render prop',
    description: 'ImageLoader is the lower-level escape hatch when the UI is yours and the loading state is the useful part.',
    sections: [
      {
        title: 'Custom loading UI',
        body: 'The render prop exposes status, booleans, the loaded image, error, and whether the loader should remain mounted for the configured duration.',
        code: `<ImageLoader src="/images/home/feature3.jpg" duration={1500}>
  {state => (
    <div className="cardDemo">
      {state.shouldShowLoader && <span>Custom loader status: {state.status}</span>}
      {state.hasLoaded && <img src={state.src} alt="Detail" />}
      {state.hasFailed && <span>Could not load image</span>}
    </div>
  )}
</ImageLoader>`
      }
    ]
  },
  {
    slug: 'hooks',
    title: 'Hooks',
    eyebrow: 'State primitives',
    description: 'Use hooks when components are too opinionated for your flow.',
    sections: [
      {
        title: 'useImage',
        body: 'Load an image imperatively with state, retry, timeout, and reload support.',
        code: `const image = useImage({
  src: '/images/home/feature2.jpg',
  retry: 1,
  timeout: 8000
})

return (
  <div>
    Status: {image.status}
    <span>{image.isLoaded ? 'Loaded with useImage()' : 'Waiting for image state'}</span>
  </div>
)`
      },
      {
        title: 'useInView',
        body: 'Gate loading or animations behind IntersectionObserver with rootMargin and threshold control.',
        code: `const { ref, inView } = useInView<HTMLDivElement>({
  rootMargin: '120px 0px',
  triggerOnce: false
})

return (
  <div ref={ref} data-active={inView}>
    <span>{inView ? 'In view: true' : 'In view: false'}</span>
  </div>
)`
      }
    ]
  },
  {
    slug: 'responsive-helpers',
    title: 'Responsive Helpers',
    eyebrow: 'srcSet without the fuss',
    description: 'Generate deterministic srcSet and sizes strings when you have a CDN or image service.',
    demoSlug: 'responsive',
    sections: [
      {
        title: 'createSrcSet and createSizes',
        body: 'The default helper appends w, q, and fm query parameters. Provide a custom loader for any CDN shape.',
        code: `const srcSet = createSrcSet({
  src: '/images/home/feature1.jpg',
  widths: [480, 768, 1200, 1600],
  quality: 80
})

const sizes = createSizes({
  breakpoints: [
    { media: '(max-width: 640px)', size: '100vw' },
    { media: '(max-width: 1200px)', size: '50vw' }
  ],
  defaultSize: '640px'
})`
      }
    ]
  },
  {
    slug: 'shared-defaults',
    title: 'Shared Defaults',
    eyebrow: 'Design-system mode',
    description: 'ImageConfigProvider sets app-wide defaults while still allowing component props to override them.',
    demoSlug: 'provider',
    sections: [
      {
        title: 'Provider defaults',
        body: 'Use this near the app root to keep placeholder, color, animation, and lazy settings consistent.',
        code: `<ImageConfigProvider
  value={{
    placeholder: 'skeleton',
    duration: 850,
    fadeType: 'soft-reveal',
    easing: easings.cinematic,
    skeleton: {
      baseColor: '#111318',
      highlightColor: '#242936',
      accentColor: 'rgb(255 61 129 / 38%)',
      speed: 1100
    }
  }}
>
  <Image src="/images/home/feature1.jpg" alt="Provider image" width={720} height={480} />
  <BackgroundImage src="/images/home/feature2.jpg" width="100%" height={220}>
    <h3>BackgroundImage inherits it</h3>
  </BackgroundImage>
</ImageConfigProvider>`
      }
    ]
  },
  {
    slug: 'styling',
    title: 'Styling',
    eyebrow: 'Bring your own taste',
    description: 'The default stylesheet is class-based, small, and designed to be overridden.',
    sections: [
      {
        title: 'Skeleton shimmer',
        body: 'The default skeleton is a polished, wide-gradient shimmer. Customise it with CSS variables: --ribif-skeleton-bg, --ribif-shimmer-color, --ribif-shimmer-speed. It respects reduced-motion preferences automatically.',
        code: `<Image
  src="/images/home/feature3.jpg"
  alt="Skeleton shimmer styling demo"
  width={1080}
  height={720}
  placeholder="skeleton"
  fadeType="zoom-blur"
  placeholderStyle={{
    '--ribif-skeleton-bg': '#111318',
    '--ribif-skeleton-highlight': '#242936',
    '--ribif-skeleton-accent': 'rgb(255 61 129 / 38%)',
    '--ribif-shimmer-speed': '1.1s'
  }}
/>`
      },
      {
        title: 'Typed skeleton themes',
        body: 'Use the skeleton prop when you want component-level control without writing custom CSS.',
        code: `<Image
  src="/images/home/feature2.jpg"
  alt="Typed skeleton theme demo"
  width={1080}
  height={720}
  placeholder="skeleton"
  fadeType="soft-reveal"
  skeleton={{
    baseColor: '#111318',
    highlightColor: '#242936',
    accentColor: 'rgb(255 61 129 / 38%)',
    sheenColor: 'rgb(255 255 255 / 76%)',
    speed: 1100,
    angle: 118,
    size: '62%',
    radius: 18
  }}
/>`
      },
      {
        title: 'Useful classes',
        body: 'Target .ribif-root, .ribif-image, .ribif-background, .ribif-placeholder, .ribif-placeholder-skeleton, .ribif-placeholder-blur, and .ribif-placeholder-color.'
      }
    ]
  },
  {
    slug: 'migration',
    title: 'Migration',
    eyebrow: 'From v1 to v2',
    description: 'Version 2 intentionally modernizes names and behavior. The old API appears here only so migrations are searchable.',
    sections: [
      {
        title: 'Prop map',
        body: 'transitionTime becomes duration. renderLoader becomes renderPlaceholder. disableLoader becomes placeholder={null} or placeholder="empty". wrapperClassName becomes containerClassName. isResponsive becomes width, height, aspectRatio, srcSet, and sizes. lazyLoad becomes lazy. useChild becomes asChild. element becomes as.'
      },
      {
        title: 'Recommended order',
        body: 'Upgrade React, install v2, import the stylesheet, replace prop names, add missing alt text, and move complex custom flows to ImageLoader or useImage.'
      }
    ]
  }
]

export const demos: DemoPage[] = [
  {
    slug: 'image',
    title: 'Image fade lab',
    description: 'Tune the placeholder, fade timing, and lazy behavior on the core Image component.',
    kind: 'image'
  },
  {
    slug: 'background-image',
    title: 'Background booth',
    description: 'Control background fit and position while the package handles loading and placeholders.',
    kind: 'background'
  },
  {
    slug: 'picture',
    title: 'Picture stack',
    description: 'See Picture render format fallbacks with the same fade treatment.',
    kind: 'picture'
  },
  {
    slug: 'provider',
    title: 'Provider defaults',
    description: 'Set a shared visual language once and let components inherit it.',
    kind: 'provider'
  },
  {
    slug: 'responsive',
    title: 'Responsive helper mixer',
    description: 'Generate srcSet and sizes strings with live helper output.',
    kind: 'responsive'
  }
]

export function getDoc(slug: string) {
  return docs.find(doc => doc.slug === slug)
}

export function getDemo(slug: string) {
  return demos.find(demo => demo.slug === slug)
}
