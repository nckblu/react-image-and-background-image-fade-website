import Link from 'next/link'
import type { DocPage } from '@/data/site'
import { docsNav } from '@/data/site'
import styles from './docs.module.css'

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
  return (
    <header className={styles.hero}>
      <span className={styles.eyebrow}>{doc.eyebrow}</span>
      <h1>{doc.title}</h1>
      <p>{doc.description}</p>
    </header>
  )
}
