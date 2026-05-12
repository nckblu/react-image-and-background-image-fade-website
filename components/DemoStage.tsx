'use client'

import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  BackgroundImage,
  Image,
  ImageConfigProvider,
  Picture,
  createSizes,
  createSrcSet,
  easings
} from 'react-image-and-background-image-fade'
import type { FadeType, PlaceholderKind, SkeletonOptions } from 'react-image-and-background-image-fade'
import { RotateCcw, Shuffle } from 'lucide-react'
import type { DemoPage } from '@/data/site'
import styles from './DemoBase.module.css'

const demoPhotos = [
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=82',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=82',
  'https://images.unsplash.com/photo-1534312527009-56c7016453e6?w=1200&q=82',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=82'
]

const placeholders: PlaceholderKind[] = ['skeleton', 'blur', 'color', 'empty']
const revealTypes: FadeType[] = ['zoom-blur', 'soft-reveal', 'blur-in', 'wipe', 'slide-up', 'scale']

const providerThemes: Array<{
  name: string
  color: string
  fadeType: FadeType
  placeholder: PlaceholderKind
  skeleton: SkeletonOptions
}> = [
  {
    name: 'Neon editorial',
    color: '#ff3d81',
    fadeType: 'zoom-blur',
    placeholder: 'skeleton',
    skeleton: {
      baseColor: '#111018',
      highlightColor: '#2b2535',
      accentColor: 'rgb(255 61 129 / 46%)',
      sheenColor: 'rgb(255 255 255 / 78%)',
      speed: 1050,
      angle: 118,
      size: '66%'
    }
  },
  {
    name: 'Gallery soft',
    color: '#e9edf4',
    fadeType: 'soft-reveal',
    placeholder: 'blur',
    skeleton: {
      baseColor: '#e8ebf0',
      highlightColor: '#ffffff',
      accentColor: 'rgb(59 232 255 / 28%)',
      speed: 1400
    }
  },
  {
    name: 'Dayglow cards',
    color: '#c4ff3d',
    fadeType: 'wipe',
    placeholder: 'color',
    skeleton: {
      baseColor: '#f5ffd7',
      highlightColor: '#ffffff',
      accentColor: 'rgb(196 255 61 / 46%)',
      speed: 900
    }
  }
]

function ButtonRow({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className={styles.controlGroup}>
      <span className={styles.controlLabel}>{label}</span>
      <div className={styles.fadeTypeGrid}>{children}</div>
    </div>
  )
}

function CodePreview({ children }: { children: string }) {
  return (
    <pre className={styles.code}>
      <code>{children}</code>
    </pre>
  )
}

function ReplayNext({
  onNext,
  onReplay,
  nextLabel = 'Next image'
}: {
  onNext: () => void
  onReplay: () => void
  nextLabel?: string
}) {
  return (
    <div className={styles.controlGroup}>
      <span className={styles.controlLabel}>Replay</span>
      <div className={styles.buttonRow}>
        <button className={styles.actionButton} onClick={onReplay} type="button">
          <RotateCcw size={13} strokeWidth={2.8} /> Replay
        </button>
        <button className={styles.actionButton} onClick={onNext} type="button">
          <Shuffle size={13} strokeWidth={2.8} /> {nextLabel}
        </button>
      </div>
    </div>
  )
}

export function DemoStage({ demo }: { demo: DemoPage }) {
  if (demo.kind === 'image') return <ImageDemo />
  if (demo.kind === 'background') return <BackgroundDemo />
  if (demo.kind === 'picture') return <PictureDemo />
  if (demo.kind === 'provider') return <ProviderDemo />
  return <ResponsiveDemo />
}

function ImageDemo() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('skeleton')
  const [fadeType, setFadeType] = useState<FadeType>('zoom-blur')
  const [duration, setDuration] = useState(900)
  const [fit, setFit] = useState<'cover' | 'contain'>('cover')
  const [replayKey, setReplayKey] = useState(0)
  const src = `${demoPhotos[photoIndex] ?? demoPhotos[0]}&image=${replayKey}`

  return (
    <section className={styles.lab} data-testid="image-demo">
      <div className={styles.stage}>
        <div className={styles.showcaseFrame}>
          <Image
            key={`${src}-${placeholder}-${fadeType}-${duration}-${fit}`}
            alt="Image component demo"
            className={styles.showcaseImage}
            containerClassName={styles.fillRoot}
            duration={duration}
            fadeType={fadeType}
            fit={fit}
            height="100%"
            placeholder={placeholder}
            src={src}
            width="100%"
          />
          <div className={styles.heroOverlay}>
            <span className={styles.badge}>Image</span>
            <h2>normal img, properly dressed</h2>
            <p>Stable dimensions, native attributes, placeholder, and reveal animation on one component.</p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <ButtonRow label="Placeholder">
          {placeholders.map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={placeholder === item}
              key={item}
              onClick={() => {
                setPlaceholder(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Reveal">
          {revealTypes.map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={fadeType === item}
              key={item}
              onClick={() => {
                setFadeType(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <div className={styles.controlGroup}>
          <div className={styles.rangeWrap}>
            <div className={styles.rangeHeader}>
              <span className={styles.controlLabel}>Duration</span>
              <span className={styles.rangeValue}>{duration}ms</span>
            </div>
            <input
              className={styles.range}
              max="1800"
              min="150"
              onChange={event => setDuration(Number(event.target.value))}
              step="50"
              type="range"
              value={duration}
            />
          </div>
        </div>
        <ButtonRow label="Object fit">
          {(['cover', 'contain'] as const).map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={fit === item}
              key={item}
              onClick={() => setFit(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ReplayNext
          onNext={() => {
            setPhotoIndex(index => (index + 1) % demoPhotos.length)
            setReplayKey(key => key + 1)
          }}
          onReplay={() => setReplayKey(key => key + 1)}
        />
        <CodePreview>{`<Image
  src="/gallery.jpg"
  alt="Gallery image"
  width="100%"
  height="100%"
  placeholder="${placeholder}"
  fadeType="${fadeType}"
  duration={${duration}}
  fit="${fit}"
/>`}</CodePreview>
      </div>
    </section>
  )
}

function BackgroundDemo() {
  const [photoIndex, setPhotoIndex] = useState(1)
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('blur')
  const [fadeType, setFadeType] = useState<FadeType>('soft-reveal')
  const [fit, setFit] = useState<'cover' | 'contain'>('cover')
  const [position, setPosition] = useState('center')
  const [replayKey, setReplayKey] = useState(0)
  const src = `${demoPhotos[photoIndex] ?? demoPhotos[1]}&background=${replayKey}`

  return (
    <section className={styles.lab} data-testid="background-demo">
      <div className={styles.stage}>
        <BackgroundImage
          key={`${src}-${placeholder}-${fadeType}-${fit}-${position}`}
          className={styles.stageImage}
          fadeType={fadeType}
          fit={fit}
          height="100%"
          placeholder={placeholder}
          position={position}
          src={src}
          width="100%"
        >
          <div className={styles.heroOverlay}>
            <span className={styles.badge}>BackgroundImage</span>
            <h2>preloaded CSS backgrounds</h2>
            <p>Content stays real DOM while the package handles background image loading and reveal state.</p>
          </div>
        </BackgroundImage>
      </div>
      <div className={styles.controls}>
        <ButtonRow label="Placeholder">
          {placeholders.map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={placeholder === item}
              key={item}
              onClick={() => {
                setPlaceholder(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Reveal">
          {revealTypes.map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={fadeType === item}
              key={item}
              onClick={() => {
                setFadeType(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Background fit">
          {(['cover', 'contain'] as const).map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={fit === item}
              key={item}
              onClick={() => setFit(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Position">
          {['center', 'left center', 'right center', 'center top'].map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={position === item}
              key={item}
              onClick={() => setPosition(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ReplayNext
          onNext={() => {
            setPhotoIndex(index => (index + 1) % demoPhotos.length)
            setReplayKey(key => key + 1)
          }}
          onReplay={() => setReplayKey(key => key + 1)}
        />
        <CodePreview>{`<BackgroundImage
  src="/hero.jpg"
  width="100%"
  height="520px"
  fit="${fit}"
  position="${position}"
  placeholder="${placeholder}"
  fadeType="${fadeType}"
>
  <h1>Real content over a loaded CSS background</h1>
</BackgroundImage>`}</CodePreview>
      </div>
    </section>
  )
}

function ProviderDemo() {
  const [themeIndex, setThemeIndex] = useState(0)
  const [duration, setDuration] = useState(900)
  const [replayKey, setReplayKey] = useState(0)
  const theme = providerThemes[themeIndex] ?? providerThemes[0]

  return (
    <ImageConfigProvider
      value={{
        color: theme.color,
        duration,
        easing: easings.cinematic,
        fadeType: theme.fadeType,
        lazy: false,
        placeholder: theme.placeholder,
        skeleton: theme.skeleton
      }}
    >
      <section className={styles.lab} data-testid="provider-demo">
        <div className={styles.stage}>
          <div className={`${styles.miniGrid} ${styles.providerMiniGrid}`}>
            <figure className={styles.miniCard}>
              <Image
                alt={`${theme.name} image sample`}
                className={styles.sample}
                fit="cover"
                height={180}
                src={`${demoPhotos[0]}&provider-image=${themeIndex}-${replayKey}`}
                width={260}
              />
              <figcaption>Image inherits the provider theme</figcaption>
            </figure>
            <figure className={styles.miniCard}>
              <BackgroundImage
                className={styles.sample}
                fit="cover"
                height={180}
                src={`${demoPhotos[1]}&provider-bg=${themeIndex}-${replayKey}`}
                width="100%"
              />
              <figcaption>BackgroundImage inherits it too</figcaption>
            </figure>
            <figure className={styles.miniCard}>
              <Picture
                alt={`${theme.name} picture sample`}
                className={styles.sample}
                fit="cover"
                height={180}
                sources={[{ srcSet: `${demoPhotos[2]}&fm=webp`, type: 'image/webp' }]}
                src={`${demoPhotos[2]}&provider-picture=${themeIndex}-${replayKey}`}
                width={260}
              />
              <figcaption>Picture keeps the same choreography</figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.controls}>
          <ButtonRow label="Provider theme">
            {providerThemes.map((item, index) => (
              <button
                className={styles.fadeTypeBtn}
                data-active={themeIndex === index}
                key={item.name}
                onClick={() => {
                  setThemeIndex(index)
                  setReplayKey(key => key + 1)
                }}
                type="button"
              >
                {item.name}
              </button>
            ))}
          </ButtonRow>
          <div className={styles.controlGroup}>
            <div className={styles.rangeWrap}>
              <div className={styles.rangeHeader}>
                <span className={styles.controlLabel}>Inherited duration</span>
                <span className={styles.rangeValue}>{duration}ms</span>
              </div>
              <input
                className={styles.range}
                max="1800"
                min="200"
                onChange={event => setDuration(Number(event.target.value))}
                step="100"
                type="range"
                value={duration}
              />
            </div>
          </div>
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Replay</span>
            <button className={styles.actionButton} onClick={() => setReplayKey(key => key + 1)} type="button">
              <RotateCcw size={13} strokeWidth={2.8} /> Re-run inherited defaults
            </button>
          </div>
          <CodePreview>{`<ImageConfigProvider
  value={{
    placeholder: '${theme.placeholder}',
    fadeType: '${theme.fadeType}',
    duration: ${duration},
    color: '${theme.color}',
    easing: easings.cinematic,
    lazy: false,
    skeleton: {
      baseColor: '${theme.skeleton.baseColor}',
      highlightColor: '${theme.skeleton.highlightColor}',
      accentColor: '${theme.skeleton.accentColor}',
      speed: ${theme.skeleton.speed}${theme.skeleton.sheenColor ? `,\n      sheenColor: '${theme.skeleton.sheenColor}'` : ''}${theme.skeleton.angle ? `,\n      angle: ${theme.skeleton.angle}` : ''}${theme.skeleton.size ? `,\n      size: '${theme.skeleton.size}'` : ''}
    }
  }}
>
  <Image src="/gallery.jpg" alt="Gallery" />
  <BackgroundImage src="/hero.jpg" />
  <Picture src="/art.jpg" sources={sources} />
</ImageConfigProvider>`}</CodePreview>
        </div>
      </section>
    </ImageConfigProvider>
  )
}

function PictureDemo() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('blur')
  const [fadeType, setFadeType] = useState<FadeType>('soft-reveal')
  const [replayKey, setReplayKey] = useState(0)
  const src = demoPhotos[photoIndex] ?? demoPhotos[0]
  const wideSrc = demoPhotos[(photoIndex + 1) % demoPhotos.length] ?? demoPhotos[1]

  return (
    <section className={styles.lab} data-testid="picture-demo">
      <div className={styles.stage}>
        <Picture
          key={`${photoIndex}-${placeholder}-${fadeType}-${replayKey}`}
          alt="Picture component art direction demo"
          className={styles.stageImage}
          containerClassName={styles.fillRoot}
          fadeType={fadeType}
          fit="cover"
          height="100%"
          placeholder={placeholder}
          sources={[
            { srcSet: `${wideSrc}&art=wide`, media: '(min-width: 900px)' },
            { srcSet: `${src}&fm=webp`, type: 'image/webp' }
          ]}
          src={`${src}&picture=${replayKey}`}
          width="100%"
        />
      </div>
      <div className={styles.controls}>
        <ButtonRow label="Placeholder">
          {placeholders.map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={placeholder === item}
              key={item}
              onClick={() => {
                setPlaceholder(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Reveal">
          {(['soft-reveal', 'zoom-blur', 'blur-in', 'wipe'] as FadeType[]).map(item => (
            <button
              className={styles.fadeTypeBtn}
              data-active={fadeType === item}
              key={item}
              onClick={() => {
                setFadeType(item)
                setReplayKey(key => key + 1)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </ButtonRow>
        <ReplayNext
          nextLabel="Next source stack"
          onNext={() => {
            setPhotoIndex(index => (index + 1) % demoPhotos.length)
            setReplayKey(key => key + 1)
          }}
          onReplay={() => setReplayKey(key => key + 1)}
        />
        <CodePreview>{`<Picture
  src="/fallback.jpg"
  alt="Art directed image"
  placeholder="${placeholder}"
  fadeType="${fadeType}"
  sources={[
    { srcSet: '/wide.jpg', media: '(min-width: 900px)' },
    { srcSet: '/photo.webp', type: 'image/webp' }
  ]}
/>`}</CodePreview>
      </div>
    </section>
  )
}

function ResponsiveDemo() {
  const [quality, setQuality] = useState(78)
  const [maxWidth, setMaxWidth] = useState(1280)
  const [defaultSize, setDefaultSize] = useState('680px')
  const widths = useMemo(() => [320, 640, 960, maxWidth], [maxWidth])
  const src = demoPhotos[0]
  const srcSet = useMemo(
    () =>
      createSrcSet({
        src,
        widths,
        quality
      }),
    [quality, src, widths]
  )
  const sizes = useMemo(
    () =>
      createSizes({
        breakpoints: [
          { media: '(max-width: 700px)', size: '100vw' },
          { media: '(max-width: 1100px)', size: '72vw' }
        ],
        defaultSize
      }),
    [defaultSize]
  )

  return (
    <section className={styles.lab} data-testid="responsive-demo">
      <div className={styles.stage}>
        <Image
          alt="Responsive helper demo"
          className={styles.stageImage}
          containerClassName={styles.fillRoot}
          fadeType="zoom-blur"
          fit="cover"
          height="100%"
          placeholder="skeleton"
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          width="100%"
        />
      </div>
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <div className={styles.rangeWrap}>
            <div className={styles.rangeHeader}>
              <span className={styles.controlLabel}>Quality</span>
              <span className={styles.rangeValue}>{quality}</span>
            </div>
            <input
              className={styles.range}
              max="95"
              min="40"
              onChange={event => setQuality(Number(event.target.value))}
              step="1"
              type="range"
              value={quality}
            />
          </div>
        </div>
        <ButtonRow label="Max width">
          {[960, 1280, 1600, 2048].map(width => (
            <button
              className={styles.fadeTypeBtn}
              data-active={maxWidth === width}
              key={width}
              onClick={() => setMaxWidth(width)}
              type="button"
            >
              {width}w
            </button>
          ))}
        </ButtonRow>
        <ButtonRow label="Default size">
          {['480px', '680px', '880px', '100vw'].map(size => (
            <button
              className={styles.fadeTypeBtn}
              data-active={defaultSize === size}
              key={size}
              onClick={() => setDefaultSize(size)}
              type="button"
            >
              {size}
            </button>
          ))}
        </ButtonRow>
        <CodePreview>{`const srcSet = createSrcSet({
  src: '${src}',
  widths: [${widths.join(', ')}],
  quality: ${quality}
})

const sizes = createSizes({
  breakpoints: [
    { media: '(max-width: 700px)', size: '100vw' },
    { media: '(max-width: 1100px)', size: '72vw' }
  ],
  defaultSize: '${defaultSize}'
})
<Image
  src="/photo.jpg"
  srcSet={srcSet}
  sizes={sizes}
  width="100%"
  height="100%"
  fit="cover"
  placeholder="skeleton"
  fadeType="zoom-blur"
/>`}</CodePreview>
      </div>
    </section>
  )
}
