import Link from 'next/link'
import {
  Activity,
  ArrowLeftRight,
  Boxes,
  Braces,
  ImageIcon,
  Layers3,
  Loader,
  Palette,
  Sparkles,
  type LucideIcon
} from 'lucide-react'
import type { DocPage } from '@/data/site'
import { docsNav } from '@/data/site'
import styles from './docs.module.css'

const DOC_ICONS: Record<string, LucideIcon> = {
  overview: ImageIcon,
  image: ImageIcon,
  'background-image': Layers3,
  picture: Boxes,
  'image-loader': Loader,
  hooks: Activity,
  'responsive-helpers': Braces,
  'shared-defaults': Palette,
  styling: Sparkles,
  migration: ArrowLeftRight
}

export function DocsNav({ active }: { active: string }) {
  return (
    <aside className={styles.side}>
      <p className={styles.sideTitle}>Docs</p>
      <nav className={styles.nav} aria-label="Documentation navigation">
        {docsNav.map(item => (
          <Link data-active={active === item.href} href={item.href} key={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export function DocHero({ doc }: { doc: DocPage }) {
  const Icon = DOC_ICONS[doc.slug] ?? ImageIcon
  return (
    <header className={styles.hero}>
      <div className={styles.heroBody}>
        <span className={styles.eyebrow}>{doc.eyebrow}</span>
        <h1>{doc.title}</h1>
        <p className={styles.heroDesc}>{doc.description}</p>
      </div>
      <div className={styles.heroIcon} aria-hidden="true">
        <Icon size={64} strokeWidth={1} />
      </div>
    </header>
  )
}
