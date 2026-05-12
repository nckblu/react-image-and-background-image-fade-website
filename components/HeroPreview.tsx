'use client'

import { useEffect, useState } from 'react'
import {
  BackgroundImage,
  easings
} from 'react-image-and-background-image-fade'
import type { FadeType } from 'react-image-and-background-image-fade'
import styles from './HeroPreview.module.css'

const slides: { src: string; fadeType: FadeType; label: string }[] = [
  {
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80',
    fadeType: 'zoom-blur',
    label: 'zoom-blur'
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    fadeType: 'soft-reveal',
    label: 'soft-reveal'
  },
  {
    src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80',
    fadeType: 'wipe',
    label: 'wipe'
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    fadeType: 'blur-in',
    label: 'blur-in'
  },
]

const INTERVAL = 4200

export function HeroPreview() {
  const [index, setIndex] = useState(0)
  const [key, setKey] = useState(0)
  const slide = slides[index]

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
      setKey(k => k + 1)
    }, INTERVAL)
    return () => clearInterval(t)
  }, [])

  return (
    <div className={styles.root}>
      <BackgroundImage
        key={key}
        src={slide.src}
        fit="cover"
        width="100%"
        height="100%"
        className={styles.bg}
        fadeType={slide.fadeType}
        placeholder="skeleton"
        lazy={false}
        skipCache={true}
        duration={1050}
        easing={easings.cinematic}
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
      >
        <div className={styles.overlay}>
          <div className={styles.topRow}>
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} />
              live · powered by the package
            </span>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.fadeTag}>{slide.label}</div>
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={styles.dot}
                  data-active={i === index}
                  onClick={() => {
                    setIndex(i)
                    setKey(k => k + 1)
                  }}
                  aria-label={`Show slide ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}
