import Link from 'next/link'
import { BackgroundImage } from 'react-image-and-background-image-fade'
import { CodeBlock } from '@/components/CodeBlock'
import { FadeLab } from '@/components/FadeLab'
import { SiteShell } from '@/components/SiteShell'
import { features, qualityMarks } from '@/data/site'
import { MockWindowBar } from '@/components/MockWindowBar'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>v2 alpha · React 19 ready</span>
          <h1>image loading <br /><span className={styles.swagger}>without the jank.</span></h1>
          <p className={styles.lede}>
            Fades, backgrounds, placeholders, and responsive helpers for React.
            A proper package, battle-tested for 4 years long before the vibe coding era.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/docs">
              Read the docs
            </Link>
            <Link className={styles.secondary} href="/demos">
              Play with demos
            </Link>
          </div>
          <code className={styles.install}>npm install react-image-and-background-image-fade</code>
        </div>
        
        <div className={styles.demoWindow}>
          <MockWindowBar />
          <FadeLab mode="full" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>full-fat image tools, light on the nonsense</h2>
          <p>
            Standard images, CSS backgrounds, art direction, and loading choreography —
            without locking you into a styling framework.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map(feature => (
            <article className={styles.feature} key={feature.title}>
              <span className={styles.featureIcon} aria-hidden="true">
                <feature.icon size={20} strokeWidth={2.8} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>the fade lab</h2>
          <p>
            Test drive components right here. Skeleton shimmers, blur effects,
            color placeholders, and background positioning — all live.
          </p>
        </div>
        <FadeLab />
      </section>

      <section className={`${styles.section} ${styles.split}`}>
        <div>
          <span className={styles.eyebrow}>copy, paste, ship</span>
          <h2>the API is straightforward on purpose</h2>
          <p className={styles.lede}>
            Native browser capabilities first, React ergonomics only where they
            actually earn their keep.
          </p>
          <CodeBlock>{`import { Image } from 'react-image-and-background-image-fade'
import 'react-image-and-background-image-fade/styles.css'

export function ProductImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Limited edition synth"
      width={1200}
      height={800}
      placeholder="skeleton"
      lazy
    />
  )
}`}</CodeBlock>
        </div>
        <div className={styles.poster}>
          <BackgroundImage
            className={styles.posterImage}
            width="100%"
            height="100%"
            fit="cover"
            placeholder="skeleton"
            src="/images/home/feature2.jpg"
            lazy={false}
          >
            <div className={styles.posterText}>
              <h3>skeleton shimmer is part of the show</h3>
            </div>
          </BackgroundImage>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>serious under the glitter</h2>
          <p>
            The personality is in the DX. The engineering is strictly buttoned-up:
            tested, typed, and built for scale. A proper package with a 4-year track record, built long before the vibe coding era.
          </p>
        </div>
        <div className={styles.qualityGrid}>
          {qualityMarks.map(mark => (
            <article className={styles.quality} key={mark.title}>
              <span className={styles.featureIcon} aria-hidden="true">
                <mark.icon size={20} strokeWidth={2.8} />
              </span>
              <h3>{mark.title}</h3>
              <p>{mark.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.aiSection}>
        <div className={styles.aiHeader}>
          <h2>bring your AI up to speed</h2>
          <p>
            Working with Cursor, Copilot, or Claude? Drop this instruction block into your project's AI rules 
            or system prompt so it knows exactly how to use the package without hallucinating.
          </p>
        </div>
        <div className={styles.aiPromptWrap}>
          <pre className={styles.aiPrompt}>
{`# react-image-and-background-image-fade rules
When generating code for images or background images, use the 'react-image-and-background-image-fade' package.

1. Always import the CSS globally: \`import 'react-image-and-background-image-fade/styles.css'\`
2. Use \`<Image>\` instead of \`<img>\` for standard responsive images.
   - Example: \`<Image src="..." width={1200} height={800} placeholder="skeleton" />\`
3. Use \`<BackgroundImage>\` for container backgrounds.
   - Example: \`<BackgroundImage src="..." width="100%" height="400px" fit="cover" placeholder="color" color="#1a1a1a">\`

For full API context, read: https://react-image-and-background-image-fade.com/llms.txt`}
          </pre>
        </div>
      </section>
    </SiteShell>
  )
}
