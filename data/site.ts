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
  { title: 'Provider', href: '/demos/provider', description: 'Global defaults with local overrides.' },
  { title: 'Responsive', href: '/demos/responsive', description: 'Generated srcSet and sizes helpers.' }
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
    description: 'A clean default loader that respects reduced-motion preferences automatically.',
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
    description: 'Version 2 is a modern image loading toolkit for React: image elements, CSS backgrounds, placeholders, hooks, responsive helpers, and polished fade transitions.',
    sections: [
      {
        title: 'Install',
        body: 'Install the package and import the optional stylesheet once. The stylesheet provides the default shimmer skeleton, blur placeholder, and fade classes.',
        code: `npm install react-image-and-background-image-fade

import 'react-image-and-background-image-fade/styles.css'`
      },
      {
        title: 'Quick start',
        body: 'Use Image when you want a normal accessible image with layout stability, a placeholder, and a fade-in.',
        code: `import { Image } from 'react-image-and-background-image-fade'

export function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Nick"
      width={320}
      height={320}
      placeholder="skeleton"
      lazy
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
        code: `<Image
  src="/photo-1200.jpg"
  alt="Mountain sunrise"
  width={1200}
  height={800}
  srcSet="/photo-640.jpg 640w, /photo-1200.jpg 1200w, /photo-1800.jpg 1800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="skeleton"
  lazy
/>`
      },
      {
        title: 'Placeholders',
        body: 'Use skeleton, blur, color, empty, a React node, or a renderPlaceholder function. renderError handles broken images.'
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
  src="/hero.jpg"
  width="100%"
  aspectRatio="16 / 9"
  fit="cover"
  position="center"
  placeholder="color"
  color="#d8d8d8"
  lazy={{ rootMargin: '400px 0px' }}
>
  <h1>Background images still get the good loading treatment.</h1>
</BackgroundImage>`
      },
      {
        title: 'Element control',
        body: 'Use as for the element type, or asChild to apply background behavior to your own element.',
        code: `<BackgroundImage src="/card.jpg" as="section">
  Content
</BackgroundImage>

<BackgroundImage src="/card.jpg" asChild>
  <article className="card">Content</article>
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
  src="/landscape.jpg"
  alt="Wide landscape"
  width={1200}
  height={800}
  sources={[
    { srcSet: '/landscape.avif 1200w', type: 'image/avif' },
    { srcSet: '/landscape.webp 1200w', type: 'image/webp' }
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
        code: `<ImageLoader src="/detail.jpg" duration={450}>
  {state => (
    <div>
      {state.shouldShowLoader && <span>Loading</span>}
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
  src,
  retry: 1,
  timeout: 8000
})

return <span>{image.status}</span>`
      },
      {
        title: 'useInView',
        body: 'Gate loading or animations behind IntersectionObserver with rootMargin and threshold control.'
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
  src: 'https://images.example.com/photo.jpg',
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
    placeholder: 'color',
    color: '#edf0f3',
    duration: 450,
    lazy: { rootMargin: '300px 0px' }
  }}
>
  <Image src="/photo.jpg" alt="Photo" width={800} height={600} />
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
        body: 'The default skeleton is a light shimmer placeholder. It respects reduced-motion preferences automatically.',
        code: `.galleryImage {
  --ribif-duration: 450ms;
  --ribif-easing: cubic-bezier(0.2, 0, 0, 1);
}`
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
