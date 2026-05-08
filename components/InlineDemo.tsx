'use client'

import { useState } from 'react'
import {
  Image,
  BackgroundImage,
  Picture,
  ImageLoader,
  useImage,
} from 'react-image-and-background-image-fade'
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

  if (docSlug === 'image' && sectionTitle === 'Responsive image') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <div className={styles.resizable}>
            <Image
              src={detailSrc}
              alt="Mountain sunrise"
              width={1200}
              height={800}
              placeholder="skeleton"
              className={styles.demoImage}
              lazy={false}
            />
          </div>
          <div className={styles.hint}>Drag corner to resize and see layout stability</div>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'background-image' && sectionTitle === 'Hero backgrounds') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview} style={{ padding: 0, border: 'none' }}>
          <BackgroundImage
            src={heroSrc}
            width="100%"
            height="100%"
            fit="cover"
            position="center"
            placeholder="color"
            color="#d8d8d8"
            className={styles.heroDemo}
            lazy={false}
          >
            <div className={styles.heroOverlay}>
              <h3>Background images still get the good loading treatment.</h3>
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
          <BackgroundImage src={secondSrc} asChild placeholder="blur" blurDataURL={secondSrc} lazy={false}>
            <article className={styles.cardDemo}>
              <h3 style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Content as child</h3>
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
            src={detailSrc}
            alt="Wide landscape"
            width={1200}
            height={800}
            sources={[
              { srcSet: detailSrc, type: 'image/avif' },
              { srcSet: detailSrc, type: 'image/webp' }
            ]}
            placeholder="skeleton"
            className={styles.demoImage}
            lazy={false}
          />
          <div className={styles.controls} style={{ marginTop: '1rem', marginBottom: 0, justifyContent: 'center' }}>
             <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(k => k + 1)}>Reload fade</button>
          </div>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'image-loader' && sectionTitle === 'Custom loading UI') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <div className={styles.controls}>
             <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(k => k + 1)}>Trigger Load</button>
          </div>
          <ImageLoader key={reloadKey} src={thirdSrc} duration={1500} lazy={false}>
            {state => (
              <div className={styles.cardDemo} style={{ background: state.hasLoaded ? 'transparent' : '#fff', padding: state.hasLoaded ? 0 : '1.5rem', overflow: 'hidden' }}>
                {state.shouldShowLoader && <span>Loading custom UI...</span>}
                {state.hasLoaded && <img src={state.src} alt="Detail" style={{ width: '100%', height: 'auto', display: 'block' }} />}
              </div>
            )}
          </ImageLoader>
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  if (docSlug === 'hooks' && sectionTitle === 'useImage') {
    return (
      <div className={styles.wrap}>
        <div className={styles.preview}>
          <div className={styles.controls}>
             <button className={`${styles.button} ${styles.reloadButton}`} onClick={() => setReloadKey(k => k + 1)}>Load Image via Hook</button>
          </div>
          <UseImageDemo key={reloadKey} src={secondSrc} />
        </div>
        {code && <CodeBlock>{code}</CodeBlock>}
      </div>
    )
  }

  return code ? <CodeBlock>{code}</CodeBlock> : null
}

function UseImageDemo({ src }: { src: string }) {
  const image = useImage({ src })
  return (
    <div className={styles.status}>
      Status: {image.status}
    </div>
  )
}
