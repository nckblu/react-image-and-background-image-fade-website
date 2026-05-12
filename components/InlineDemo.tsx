'use client'

import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  BackgroundImage,
  Image,
  ImageConfigProvider,
  ImageLoader,
  Picture,
  createSizes,
  createSrcSet,
  easings,
  useImage,
  useInView
} from 'react-image-and-background-image-fade'
import type { PlaceholderKind } from 'react-image-and-background-image-fade'
import { CodeBlock } from './CodeBlock'
import styles from './InlineDemo.module.css'

const heroSrc = '/images/home/header.jpg'
const detailSrc = '/images/home/feature1.jpg'
const secondSrc = '/images/home/feature2.jpg'
const thirdSrc = '/images/home/feature3.jpg'

export function InlineDemo({
  docSlug,
  sectionTitle,
  code
}: {
  docSlug: string
  sectionTitle: string
  code?: string
}) {
  const [reloadKey, setReloadKey] = useState(0)

  if (docSlug === 'overview' && sectionTitle === 'Quick start') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <Image
            key={reloadKey}
            alt="Quick start preview"
            className={styles.demoImage}
            fadeType="zoom-blur"
            height={720}
            placeholder="skeleton"
            src={`${detailSrc}?quick=${reloadKey}`}
            width={1080}
          />
          <div className={styles.controls}>
            <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(key => key + 1)} type="button">
              Replay quick start
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (docSlug === 'overview' && sectionTitle === 'What is included') {
    return (
      <div className={styles.preview}>
        <div className={styles.featureStrip}>
          {['Image', 'BackgroundImage', 'Picture', 'ImageLoader', 'hooks', 'responsive helpers'].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    )
  }

  if (docSlug === 'image' && sectionTitle === 'Responsive image') {
    const srcSet = createSrcSet({
      src: detailSrc,
      widths: [480, 800, 1200],
      quality: 82
    })
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <div className={styles.resizable}>
            <Image
              alt="Mountain sunrise"
              className={styles.demoImage}
              height={800}
              placeholder="skeleton"
              sizes="(max-width: 768px) 100vw, 50vw"
              src={detailSrc}
              srcSet={srcSet}
              width={1200}
            />
          </div>
          <div className={styles.hint}>Drag the corner: the layout stays stable while the image scales.</div>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'image' && sectionTitle === 'Placeholders') {
    return <PlaceholderInlineDemo code={code} />
  }

  if (docSlug === 'background-image' && sectionTitle === 'Hero backgrounds') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview} style={{ border: 'none', padding: 0 }}>
          <BackgroundImage
            className={styles.heroDemo}
            color="#d8d8d8"
            fadeType="soft-reveal"
            fit="cover"
            height="100%"
            placeholder="color"
            position="center"
            src={heroSrc}
            width="100%"
          >
            <div className={styles.heroOverlay}>
              <h3>Real content over a preloaded background.</h3>
            </div>
          </BackgroundImage>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'background-image' && sectionTitle === 'Element control') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <BackgroundImage src={secondSrc} asChild fadeType="zoom-blur" placeholder="blur">
            <article className={styles.cardDemo}>
              <h3 style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>asChild keeps your element</h3>
            </article>
          </BackgroundImage>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'picture' && sectionTitle === 'Modern formats') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <Picture
            key={reloadKey}
            alt="Wide landscape"
            className={styles.demoImage}
            fadeType="soft-reveal"
            height={800}
            placeholder="blur"
            sources={[
              { srcSet: `${secondSrc}?wide=1`, media: '(min-width: 900px)' },
              { srcSet: detailSrc, type: 'image/webp' }
            ]}
            src={detailSrc}
            width={1200}
          />
          <div className={styles.controls} style={{ justifyContent: 'center', marginBottom: 0, marginTop: '1rem' }}>
            <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(key => key + 1)} type="button">
              Replay Picture fade
            </button>
          </div>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'image-loader' && sectionTitle === 'Custom loading UI') {
    return <ImageLoaderInlineDemo code={code} reloadKey={reloadKey} setReloadKey={setReloadKey} />
  }

  if (docSlug === 'hooks' && sectionTitle === 'useImage') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <div className={styles.controls}>
            <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(key => key + 1)} type="button">
              Reload hook state
            </button>
          </div>
          <UseImageDemo key={reloadKey} src={`${secondSrc}?hook=${reloadKey}`} />
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'hooks' && sectionTitle === 'useInView') {
    return <InViewInlineDemo code={code} />
  }

  if (docSlug === 'responsive-helpers' && sectionTitle === 'createSrcSet and createSizes') {
    return <ResponsiveInlineDemo code={code} />
  }

  if (docSlug === 'shared-defaults' && sectionTitle === 'Provider defaults') {
    return <ProviderInlineDemo code={code} />
  }

  if (docSlug === 'styling' && sectionTitle === 'Skeleton shimmer') {
    return <SkeletonInlineDemo code={code} />
  }

  if (docSlug === 'styling' && sectionTitle === 'Typed skeleton themes') {
    return <SkeletonThemeInlineDemo code={code} />
  }

  return code ? <CodeBlock>{code}</CodeBlock> : null
}

function PlaceholderInlineDemo({ code }: { code?: string }) {
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('skeleton')
  const [replayKey, setReplayKey] = useState(0)
  const placeholderCode = `<Image
  src="/images/home/feature3.jpg"
  alt="Placeholder demo"
  width={1080}
  height={720}
  placeholder="${placeholder}"
  fadeType="blur-in"${placeholder === 'color' ? '\n  color="#ff3d81"' : ''}
/>`

  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <div className={styles.controls}>
          {(['skeleton', 'blur', 'color', 'empty'] as PlaceholderKind[]).map(item => (
            <button
              className={styles.button}
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
        </div>
        <Image
          key={`${placeholder}-${replayKey}`}
          alt="Placeholder demo"
          className={styles.demoImage}
          color={placeholder === 'color' ? '#ff3d81' : undefined}
          fadeType="blur-in"
          height={720}
          placeholder={placeholder}
          src={`${thirdSrc}?placeholder=${placeholder}-${replayKey}`}
          width={1080}
        />
      </div>
      <CodeBlock>{code && placeholder === 'skeleton' ? code : placeholderCode}</CodeBlock>
    </div>
  )
}

function ImageLoaderInlineDemo({
  code,
  reloadKey,
  setReloadKey
}: {
  code?: string
  reloadKey: number
  setReloadKey: (updater: (key: number) => number) => void
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <div className={styles.controls}>
          <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(key => key + 1)} type="button">
            Trigger ImageLoader
          </button>
        </div>
        <ImageLoader key={reloadKey} src={`${thirdSrc}?loader=${reloadKey}`} duration={1500}>
          {state => (
            <div className={styles.cardDemo} style={{ background: state.hasLoaded ? 'transparent' : '#fff', overflow: 'hidden', padding: state.hasLoaded ? 0 : '1.5rem' }}>
              {state.shouldShowLoader && <span>Custom loader status: {state.status}</span>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {state.hasLoaded && <img src={state.src} alt="Detail" style={{ display: 'block', height: 'auto', width: '100%' }} />}
              {state.hasFailed && <span>Could not load image</span>}
            </div>
          )}
        </ImageLoader>
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}

function UseImageDemo({ src }: { src: string }) {
  const image = useImage({ src, retry: 1, timeout: 8000 })
  return (
    <div className={styles.status}>
      Status: {image.status}
      <span>{image.isLoaded ? 'Loaded with useImage()' : 'Waiting for image state'}</span>
    </div>
  )
}

function InViewInlineDemo({ code }: { code?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: '120px 0px',
    triggerOnce: false
  })

  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <div className={styles.inViewBox} ref={ref} data-active={inView}>
          <span>{inView ? 'In view: true' : 'In view: false'}</span>
          <p>Scroll this docs page and this block updates through useInView.</p>
        </div>
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}

function ResponsiveInlineDemo({ code }: { code?: string }) {
  const srcSet = useMemo(
    () =>
      createSrcSet({
        src: detailSrc,
        widths: [480, 768, 1200, 1600],
        quality: 80
      }),
    []
  )
  const sizes = useMemo(
    () =>
      createSizes({
        breakpoints: [
          { media: '(max-width: 640px)', size: '100vw' },
          { media: '(max-width: 1200px)', size: '50vw' }
        ],
        defaultSize: '640px'
      }),
    []
  )

  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <Image
          alt="Responsive helper output demo"
          className={styles.demoImage}
          height={800}
          placeholder="skeleton"
          sizes={sizes}
          src={detailSrc}
          srcSet={srcSet}
          width={1200}
        />
        <div className={styles.status}>
          <span>Generated srcSet: {srcSet.split(', ').length} candidates</span>
          <span>Generated sizes: {sizes}</span>
        </div>
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}

function ProviderInlineDemo({ code }: { code?: string }) {
  return (
    <div className={styles.wrap}>
      <ImageConfigProvider
        value={{
          duration: 850,
          easing: easings.cinematic,
          fadeType: 'soft-reveal',
          placeholder: 'skeleton',
          skeleton: {
            baseColor: '#111318',
            highlightColor: '#242936',
            accentColor: 'rgb(255 61 129 / 38%)',
            speed: 1100
          }
        }}
      >
        <div className={styles.preview}>
          <div className={styles.providerGrid}>
            <Image alt="Provider image" className={styles.demoImage} height={480} src={detailSrc} width={720} />
            <BackgroundImage className={styles.cardDemo} height={220} src={secondSrc} width="100%">
              <h3 style={{ color: 'white', textShadow: '0 2px 12px rgb(0 0 0 / 80%)' }}>BackgroundImage inherits it</h3>
            </BackgroundImage>
          </div>
        </div>
      </ImageConfigProvider>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}

function SkeletonInlineDemo({ code }: { code?: string }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <Image
          alt="Skeleton shimmer styling demo"
          className={styles.demoImage}
          fadeType="zoom-blur"
          height={720}
          placeholder="skeleton"
          placeholderStyle={{
            '--ribif-skeleton-bg': '#111318',
            '--ribif-skeleton-highlight': '#242936',
            '--ribif-skeleton-accent': 'rgb(255 61 129 / 38%)',
            '--ribif-shimmer-speed': '1.1s'
          } as CSSProperties}
          src={`${thirdSrc}?skeleton-css`}
          width={1080}
        />
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}

function SkeletonThemeInlineDemo({ code }: { code?: string }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <Image
          alt="Typed skeleton theme demo"
          className={styles.demoImage}
          fadeType="soft-reveal"
          height={720}
          placeholder="skeleton"
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
          src={`${secondSrc}?typed-skeleton`}
          width={1080}
        />
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  )
}
