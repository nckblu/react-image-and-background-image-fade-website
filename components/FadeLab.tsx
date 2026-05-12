'use client'

import { useCallback, useMemo, useState } from 'react'
import {
  BackgroundImage,
  ImageConfigProvider,
  easings as easingPresets
} from 'react-image-and-background-image-fade'
import type { FadeType, PlaceholderKind } from 'react-image-and-background-image-fade'
import { RotateCcw, Shuffle } from 'lucide-react'
import styles from './FadeLab.module.css'

const placeholders: PlaceholderKind[] = ['skeleton', 'blur', 'color', 'empty']

const fadeTypes: { name: string; value: FadeType }[] = [
  { name: 'zoom-blur', value: 'zoom-blur' },
  { name: 'soft-reveal', value: 'soft-reveal' },
  { name: 'blur-in', value: 'blur-in' },
  { name: 'wipe', value: 'wipe' },
  { name: 'slide-up', value: 'slide-up' },
  { name: 'scale', value: 'scale' },
  { name: 'curtain', value: 'curtain' },
  { name: 'fade', value: 'fade' },
]

const easingOptions: { name: string; key: string; value: string }[] = [
  { name: 'Cinematic', key: 'cinematic', value: easingPresets.cinematic },
  { name: 'Spring', key: 'spring', value: easingPresets.spring },
  { name: 'Apple', key: 'apple', value: easingPresets.apple },
  { name: 'Material', key: 'material', value: easingPresets.material },
  { name: 'Emphasized', key: 'emphasized', value: easingPresets.emphasized },
  { name: 'Dramatic', key: 'dramatic', value: easingPresets.dramatic },
  { name: 'Sharp', key: 'sharp', value: easingPresets.sharp },
  { name: 'Ease out', key: 'default', value: easingPresets.default },
]

const photos = [
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80',
  'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
  'https://images.unsplash.com/photo-1534312527009-56c7016453e6?w=1200&q=80',
]

export function FadeLab() {
  const [placeholder, setPlaceholder] = useState<PlaceholderKind>('skeleton')
  const [fadeType, setFadeType] = useState<FadeType>('zoom-blur')
  const [duration, setDuration] = useState(1100)
  const [delayMs, setDelayMs] = useState(0)
  const [easing, setEasing] = useState<string>(easingPresets.cinematic)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [bustKey, setBustKey] = useState(0)

  const src = `${photos[photoIndex % photos.length]}&_v=${bustKey}`

  const bust = useCallback(() => setBustKey(k => k + 1), [])

  const handlePlaceholder = useCallback((item: PlaceholderKind) => {
    setPlaceholder(item); bust()
  }, [bust])

  const handleFadeType = useCallback((type: FadeType) => {
    setFadeType(type); bust()
  }, [bust])

  const handleEasing = useCallback((value: string) => {
    setEasing(value); bust()
  }, [bust])

  const easingKey = useMemo(
    () => easingOptions.find(e => e.value === easing)?.key ?? 'cinematic',
    [easing]
  )

  const codeLines = useMemo(() => {
    const lines = [
      `<BackgroundImage`,
      `  src="/hero.jpg"`,
      `  placeholder="${placeholder}"`,
      `  fadeType="${fadeType}"`,
      `  duration={${duration}}`,
    ]
    if (delayMs > 0) lines.push(`  delay={${delayMs}}`)
    lines.push(`  easing={easings.${easingKey}}`)
    if (placeholder === 'skeleton') {
      lines.push(
        `  skeleton={{`,
        `    baseColor: '#111018',`,
        `    highlightColor: '#2b2535',`,
        `    accentColor: 'rgb(59 232 255 / 40%)',`,
        `    speed: 1050,`,
        `    angle: 118,`,
        `    size: '66%'`,
        `  }}`
      )
    }
    if (placeholder === 'color') lines.push(`  color="#ff3d81"`)
    lines.push(`/>`)
    return lines
  }, [placeholder, fadeType, duration, delayMs, easingKey])

  return (
    <ImageConfigProvider
      value={{
        color: '#ff3d81',
        duration,
        easing,
        lazy: false,
        placeholder,
        fadeType,
        skeleton: {
          baseColor: '#111018',
          highlightColor: '#2b2535',
          accentColor: 'rgb(255 61 129 / 46%)',
          sheenColor: 'rgb(255 255 255 / 78%)',
          speed: 1050,
          angle: 118,
          size: '62%',
          radius: 0
        }
      }}
    >
      <div className={styles.lab} aria-label="Interactive fade lab" data-testid="fade-lab">

        {/* ── Stage ── */}
        <div className={styles.stage}>
          <BackgroundImage
            key={`${placeholder}-${fadeType}-${duration}-${delayMs}-${easing}-${bustKey}-${photoIndex}`}
            src={src}
            width="100%"
            height="100%"
            className={styles.stageImage}
            placeholder={placeholder}
            fadeType={fadeType}
            skipCache={true}
            color="#ff3d81"
            skeleton={{
              baseColor: '#111018',
              highlightColor: '#2b2535',
              accentColor: 'rgb(59 232 255 / 40%)',
              sheenColor: 'rgb(255 255 255 / 80%)',
              speed: 1050,
              angle: 118,
              size: '66%',
              radius: 0
            }}
            lazy={false}
            duration={duration}
            easing={easing}
            delay={delayMs}
          >
            <div className={styles.stageOverlay}>
              <span className={styles.stageBadge}>react image and background image fade</span>
            </div>
          </BackgroundImage>
        </div>

        {/* ── Bottom: controls + code ── */}
        <div className={styles.bottom}>
          <div className={styles.controls}>

            {/* Row 1: Fade type — full width, 4-col grid */}
            <div className={`${styles.controlGroup} ${styles.fullRow}`}>
              <span className={styles.controlLabel}>Fade type</span>
              <div className={styles.chipGrid4}>
                {fadeTypes.map(ft => (
                  <button
                    key={ft.value}
                    className={styles.fadeChip}
                    data-active={fadeType === ft.value}
                    onClick={() => handleFadeType(ft.value)}
                    type="button"
                  >
                    {ft.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 2: Placeholder (left) + Easing (right) */}
            <div className={styles.splitRow}>
              <div className={styles.controlGroup}>
                <span className={styles.controlLabel}>Placeholder</span>
                <div className={styles.pillRow}>
                  {placeholders.map(item => (
                    <button
                      key={item}
                      className={styles.pill}
                      data-active={placeholder === item}
                      onClick={() => handlePlaceholder(item)}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.controlGroup}>
                <span className={styles.controlLabel}>Easing</span>
                <div className={styles.chipGrid4}>
                  {easingOptions.map(e => (
                    <button
                      key={e.key}
                      className={styles.easingChip}
                      data-active={easing === e.value}
                      onClick={() => handleEasing(e.value)}
                      type="button"
                    >
                      {e.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3: Duration + Delay sliders side by side */}
            <div className={styles.splitRow}>
              <div className={styles.controlGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.controlLabel}>Duration</span>
                  <span className={styles.sliderValue}>{duration}ms</span>
                </div>
                <input
                  className={styles.range}
                  type="range" min="100" max="2000" step="50"
                  value={duration}
                  onChange={e => setDuration(Number(e.target.value))}
                />
              </div>
              <div className={styles.controlGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.controlLabel}>Delay</span>
                  <span className={styles.sliderValue}>{delayMs}ms</span>
                </div>
                <input
                  className={styles.range}
                  type="range" min="0" max="800" step="50"
                  value={delayMs}
                  onChange={e => setDelayMs(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Row 4: Actions */}
            <div className={`${styles.controlGroup} ${styles.fullRow} ${styles.actionRow}`}>
              <button className={styles.actionBtn} onClick={() => bust()} type="button">
                <RotateCcw size={13} strokeWidth={2.8} /> Replay
              </button>
              <button
                className={styles.actionBtn}
                onClick={() => { setPhotoIndex(i => (i + 1) % photos.length); bust() }}
                type="button"
              >
                <Shuffle size={13} strokeWidth={2.8} /> Next photo
              </button>
            </div>

          </div>

          {/* Code output */}
          <pre className={styles.codePad}>
            <code>
              {codeLines.map((line, i) => {
                const esc = line
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                const colored = esc
                  .replace(/(['"])(.*?)\1/g, `<span class="${styles.cStr}">$1$2$1</span>`)
                  .replace(/(&lt;\/?[A-Z]\w*)/g, `<span class="${styles.cTag}">$1</span>`)
                  .replace(/(placeholder|fadeType|duration|delay|easing|color|skeleton|src|baseColor|highlightColor|accentColor|sheenColor|speed|angle|size|radius)([:=])/g, `<span class="${styles.cKey}">$1</span>$2`)
                  .replace(/\{(\d+)\}/g, `{<span class="${styles.cNum}">$1</span>}`)
                  .replace(/:\s*(\d+)/g, `: <span class="${styles.cNum}">$1</span>`)
                  .replace(/(&gt;)/g, `<span class="${styles.cTag}">$1</span>`)
                return <span key={i} dangerouslySetInnerHTML={{ __html: colored + '\n' }} />
              })}
            </code>
          </pre>
        </div>
      </div>
    </ImageConfigProvider>
  )
}
