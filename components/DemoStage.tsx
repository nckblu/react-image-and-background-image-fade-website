'use client'

import { useMemo } from 'react'
import {
  BackgroundImage,
  Image,
  ImageConfigProvider,
  ImageLoader,
  Picture,
  createSizes,
  createSrcSet
} from 'react-image-and-background-image-fade'
import { FadeLab } from './FadeLab'
import type { DemoPage } from '@/data/site'
import styles from './FadeLab.module.css'

const demoPhotos = [
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',   // aurora
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',   // forest
  'https://images.unsplash.com/photo-1534312527009-56c7016453e6?w=800&q=80',   // abstract
]

export function DemoStage({ demo }: { demo: DemoPage }) {
  const srcSet = useMemo(
    () =>
      createSrcSet({
        src: demoPhotos[0],
        widths: [320, 640, 960, 1280],
        quality: 78
      }),
    []
  )
  const sizes = useMemo(
    () =>
      createSizes({
        breakpoints: [{ media: '(max-width: 700px)', size: '100vw' }],
        defaultSize: '680px'
      }),
    []
  )

  if (demo.kind === 'image') {
    return <FadeLab />
  }

  if (demo.kind === 'background') {
    return <FadeLab />
  }

  if (demo.kind === 'picture') {
    return (
      <div className={styles.miniGrid}>
        <figure className={styles.miniCard}>
          <Picture
            alt="Picture demo one"
            className={styles.sample}
            fit="cover"
            height={420}
            sources={[{ srcSet: demoPhotos[0], type: 'image/jpeg' }]}
            src={demoPhotos[0]}
            width={640}
          />
          <figcaption>Picture with a JPEG source fallback</figcaption>
        </figure>
        <figure className={styles.miniCard}>
          <Picture
            alt="Picture demo two"
            className={styles.sample}
            fit="cover"
            height={420}
            placeholder="blur"
            blurDataURL={demoPhotos[1]}
            sources={[{ srcSet: demoPhotos[1], media: '(min-width: 1px)' }]}
            src={demoPhotos[1]}
            width={640}
          />
          <figcaption>Picture with blur placeholder</figcaption>
        </figure>
        <figure className={styles.miniCard}>
          <ImageLoader src={demoPhotos[2]}>
            {state => (
              <div className={styles.sample}>
                <BackgroundImage
                  src={state.src}
                  width="100%"
                  height="100%"
                  placeholder={state.hasLoaded ? 'empty' : 'skeleton'}
                />
              </div>
            )}
          </ImageLoader>
          <figcaption>ImageLoader feeding a custom layout</figcaption>
        </figure>
      </div>
    )
  }

  if (demo.kind === 'provider') {
    return (
      <ImageConfigProvider
        value={{
          color: '#ffe7f0',
          duration: 700,
          placeholder: 'color'
        }}
      >
        <div className={styles.miniGrid}>
          {demoPhotos.map((src, i) => (
            <figure className={styles.miniCard} key={src}>
              <Image
                alt={`Provider default ${i + 1}`}
                className={styles.sample}
                fit="cover"
                height={360}
                src={src}
                width={480}
              />
              <figcaption>Inherited provider defaults</figcaption>
            </figure>
          ))}
        </div>
      </ImageConfigProvider>
    )
  }

  return (
    <div className={styles.lab}>
      <div className={styles.stage}>
        <Image
          alt="Responsive helper demo"
          className={styles.stageImage}
          fit="cover"
          height={720}
          sizes={sizes}
          src={demoPhotos[0]}
          srcSet={srcSet}
          width={960}
        />
      </div>
      <pre className={styles.code}>{`const srcSet = createSrcSet({
  src: '${demoPhotos[0]}',
  widths: [320, 640, 960, 1280],
  quality: 78
})

const sizes = createSizes({
  breakpoints: [{ media: '(max-width: 700px)', size: '100vw' }],
  defaultSize: '680px'
})

${srcSet}`}</pre>
    </div>
  )
}
