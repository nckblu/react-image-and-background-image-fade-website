'use client'

import { useCallback, useMemo, useState } from 'react'
import {
  BackgroundImage,
  Image,
  ImageConfigProvider,
  Picture,
  createSizes,
  createSrcSet,
  easings as easingPresets
} from 'react-image-and-background-image-fade'
import type { FadeType, PlaceholderKind } from 'react-image-and-background-image-fade'
import { ChevronDown, RotateCcw, Shuffle } from 'lucide-react'
import styles from './FadeLab.module.css'

const placeholders: PlaceholderKind[] = ['skeleton', 'blur', 'color', 'empty']

const fadeTypes: { name: string; value: FadeType; description: string }[] = [
  { name: 'Fade', value: 'fade', description: 'Classic opacity transition' },
  { name: 'Blur In', value: 'blur-in', description: 'Deconvolve from blur to sharp' },
  { name: 'Slide Up', value: 'slide-up', description: 'Rise into position' },
  { name: 'Scale', value: 'scale', description: 'Grow from 96% to full' },
  { name: 'Curtain', value: 'curtain', description: 'Clip-path reveal from bottom' },
]

const easings = [
  { name: 'Ease Out', value: easingPresets.default },
  { name: 'Material', value: easingPresets.material },
  { name: 'Apple', value: easingPresets.apple },
  { name: 'Emphasized', value: easingPresets.emphasized },
  { name: 'Sharp', value: easingPresets.sharp },
  { name: 'Spring', value: easingPresets.spring },
  { name: 'Cinematic', value: easingPresets.cinematic },
  { name: 'Dramatic', value: easingPresets.dramatic },
]

/** Diverse, visually striking Unsplash photos */
const photos = [
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80', // street art
  'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80',    // neon
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',  // landscape
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',  // mountains
  'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=1200&q=80',  // architecture
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80',  // ocean
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',  // forest
  'https://images.unsplash.com/photo-1534312527009-56c7016453e6?w=1200&q=80',  // abstract
]

const samplePhotos = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',     // colorful mural
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',   // office
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',   // aurora
]

export function FadeLab({ mode = 'full' }: { mode?: 'full' | 'compact' }) {
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('skeleton')
  const [fadeType, setFadeType] = useState<FadeType>('fade')
  const [duration, setDuration] = useState(1200)
  const [delayMs, setDelayMs] = useState(0)
  const [fit, setFit] = useState<'cover' | 'contain'>('cover')
  const [position, setPosition] = useState('center')
  const [photoIndex, setPhotoIndex] = useState(0)
  const [bustKey, setBustKey] = useState(0)
  const [easing, setEasing] = useState(easingPresets.cinematic)

  const currentSrc = photos[photoIndex % photos.length]
  const currentBlur = `${currentSrc.split('?')[0]}?w=20&q=20&blur=20`
  /** Cache-bust so the browser actually has to reload and the placeholder shows */
  const cacheBustedSrc = `${currentSrc}&_v=${bustKey}`

  const reload = useCallback(() => {
    setBustKey(k => k + 1)
  }, [])

  const nextPhoto = useCallback(() => {
    setPhotoIndex(i => (i + 1) % photos.length)
    setBustKey(k => k + 1)
  }, [])

  const handlePlaceholderChange = useCallback((item: PlaceholderKind) => {
    setPlaceholder(item)
    setBustKey(k => k + 1) // force reload so user sees the new placeholder
  }, [])

  const handleFadeTypeChange = useCallback((type: FadeType) => {
    setFadeType(type)
    setBustKey(k => k + 1)
  }, [])

  const handleEasingChange = useCallback((value: string) => {
    setEasing(value)
    setBustKey(k => k + 1)
  }, [])

  const srcSet = useMemo(
    () =>
      createSrcSet({
        src: samplePhotos[0],
        widths: [480, 768, 1200, 1600],
        quality: 82
      }),
    []
  )
  const sizes = useMemo(
    () =>
      createSizes({
        breakpoints: [
          { media: '(max-width: 700px)', size: '100vw' },
          { media: '(max-width: 1100px)', size: '70vw' }
        ],
        defaultSize: '760px'
      }),
    []
  )

  // Build the live code output
  const codeLines = [
    `<BackgroundImage`,
    `  src="/hero.jpg"`,
    `  placeholder="${placeholder}"`,
    `  fadeType="${fadeType}"`,
    `  duration={${duration}}`,
  ]
  if (delayMs > 0) codeLines.push(`  delay={${delayMs}}`)
  if (mode === 'full') {
    codeLines.push(`  fit="${fit}"`)
    codeLines.push(`  position="${position}"`)
    codeLines.push(`  easing="${easing}"`)
  }
  if (placeholder === 'blur') codeLines.push(`  blurDataURL="/hero-tiny.jpg"`)
  if (placeholder === 'color') codeLines.push(`  color="#ff3d81"`)
  codeLines.push(`/>`)

  return (
    <ImageConfigProvider
      value={{
        color: '#ff3d81',
        duration,
        easing,
        lazy: false,
        placeholder,
        fadeType,
      }}
    >
      <section className={styles.lab} aria-label="Interactive fade lab" data-testid="fade-lab">
        <div className={styles.stage}>
          <BackgroundImage
            key={`${placeholder}-${duration}-${fit}-${position}-${bustKey}-${photoIndex}-${easing}-${fadeType}-${delayMs}`}
            src={cacheBustedSrc}
            width="100%"
            height="100%"
            fit={fit}
            position={position}
            className={styles.stageImage}
            placeholder={placeholder}
            fadeType={fadeType}
            color="#ff3d81"
            blurDataURL={currentBlur}
            lazy={false}
            easing={easing}
            delay={delayMs}
          >
            <div className={styles.heroOverlay}>
              <span className={styles.badge}>live package demo</span>
              <h2>fade, shimmer, load, repeat</h2>
              <p>
                Powered by the package itself. Change the controls
                and watch the placeholder in action.
              </p>
            </div>
          </BackgroundImage>
        </div>

        <div className={styles.controls}>
          {/* Placeholder type */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Placeholder</span>
            <div className={styles.segmented}>
              {placeholders.map(item => (
                <button
                  className={styles.pill}
                  data-active={placeholder === item}
                  key={item}
                  onClick={() => handlePlaceholderChange(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Fade type */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Fade Type</span>
            <div className={styles.fadeTypeGrid}>
              {fadeTypes.map(ft => (
                <button
                  className={styles.fadeTypeBtn}
                  data-active={fadeType === ft.value}
                  key={ft.value}
                  onClick={() => handleFadeTypeChange(ft.value)}
                  type="button"
                  title={ft.description}
                >
                  {ft.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration slider */}
          <div className={styles.controlGroup}>
            <div className={styles.rangeWrap}>
              <div className={styles.rangeHeader}>
                <span className={styles.controlLabel}>Fade duration</span>
                <span className={styles.rangeValue}>{duration}ms</span>
              </div>
              <input
                className={styles.range}
                id="duration"
                max="2000"
                min="100"
                onChange={event => setDuration(Number(event.target.value))}
                step="50"
                type="range"
                value={duration}
              />
            </div>
          </div>

          {/* Delay slider */}
          <div className={styles.controlGroup}>
            <div className={styles.rangeWrap}>
              <div className={styles.rangeHeader}>
                <span className={styles.controlLabel}>Delay</span>
                <span className={styles.rangeValue}>{delayMs}ms</span>
              </div>
              <input
                className={styles.range}
                id="delay"
                max="800"
                min="0"
                onChange={event => setDelayMs(Number(event.target.value))}
                step="50"
                type="range"
                value={delayMs}
              />
            </div>
          </div>

          {/* Reload / next photo */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Image</span>
            <div className={styles.buttonRow}>
              <button className={styles.actionButton} onClick={reload} type="button">
                <RotateCcw size={13} strokeWidth={2.8} /> Replay
              </button>
              <button className={styles.actionButton} onClick={nextPhoto} type="button">
                <Shuffle size={13} strokeWidth={2.8} /> Next
              </button>
            </div>
          </div>

          {mode === 'full' && (
            <>
              {/* Easing curve */}
              <div className={styles.controlGroup}>
                <span className={styles.controlLabel}>Easing curve</span>
                <div className={styles.easingGrid}>
                  {easings.map(e => (
                    <button
                      className={styles.easingBtn}
                      data-active={easing === e.value}
                      key={e.value}
                      onClick={() => handleEasingChange(e.value)}
                      type="button"
                    >
                      {e.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background fit */}
              <div className={styles.controlGroup}>
                <span className={styles.controlLabel}>Background fit</span>
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    id="fit"
                    onChange={event => setFit(event.target.value as 'cover' | 'contain')}
                    value={fit}
                  >
                    <option value="cover">cover</option>
                    <option value="contain">contain</option>
                  </select>
                  <ChevronDown className={styles.selectArrow} size={14} />
                </div>
              </div>

              {/* Position */}
              <div className={styles.controlGroup}>
                <span className={styles.controlLabel}>Position</span>
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    id="position"
                    onChange={event => setPosition(event.target.value)}
                    value={position}
                  >
                    <option value="center">center</option>
                    <option value="left center">left center</option>
                    <option value="right center">right center</option>
                    <option value="center top">center top</option>
                  </select>
                  <ChevronDown className={styles.selectArrow} size={14} />
                </div>
              </div>
            </>
          )}

          {/* Live code output */}
          <pre className={styles.code}>
            <code>
              {codeLines.map((line, i) => {
                // Syntax highlighting
                const colored = line
                  .replace(/(<\/?[A-Z]\w*)/g, `<span class="${styles.codeTag}">$1</span>`)
                  .replace(/(placeholder|fadeType|duration|delay|fit|position|easing|blurDataURL|color|src)=/g, `<span class="${styles.codeKey}">$1</span>=`)
                  .replace(/"([^"]*)"/g, `<span class="${styles.codeString}">"$1"</span>`)
                  .replace(/\{(\d+)\}/g, `{<span class="${styles.codeNumber}">$1</span>}`)
                  .replace(/(\/\>)/g, `<span class="${styles.codeTag}">$1</span>`)
                return <span key={i} dangerouslySetInnerHTML={{ __html: colored + '\n' }} />
              })}
            </code>
          </pre>
        </div>
      </section>

      {mode === 'full' && (
        <div className={styles.miniGrid} aria-label="Component samples">
          <figure className={styles.miniCard}>
            <Image
              alt="Responsive package sample"
              className={styles.sample}
              fit="cover"
              height={300}
              sizes={sizes}
              src={samplePhotos[0]}
              srcSet={srcSet}
              width={420}
            />
            <figcaption>Image with generated responsive attributes</figcaption>
          </figure>
          <figure className={styles.miniCard}>
            <Picture
              alt="Picture package sample"
              className={styles.sample}
              fit="cover"
              height={300}
              sources={[{ srcSet: samplePhotos[1], type: 'image/jpeg' }]}
              src={samplePhotos[1]}
              width={420}
            />
            <figcaption>Picture with source fallbacks</figcaption>
          </figure>
          <figure className={styles.miniCard}>
            <BackgroundImage
              className={styles.sample}
              fit="cover"
              height={300}
              src={samplePhotos[2]}
              width="100%"
            />
            <figcaption>BackgroundImage with inherited defaults</figcaption>
          </figure>
        </div>
      )}
    </ImageConfigProvider>
  )
}
