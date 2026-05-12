'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitBranch } from 'lucide-react'
import styles from './SiteShell.module.css'

export function NavLinks() {
  const pathname = usePathname()
  const onDocs = pathname === '/docs' || pathname.startsWith('/docs/')
  const onDemos = pathname === '/demos' || pathname.startsWith('/demos/')

  return (
    <div className={styles.links}>
      <Link
        className={styles.link}
        href="/docs"
        data-active={onDocs}
      >
        Docs
      </Link>
      <Link
        className={styles.link}
        href="/demos"
        data-active={onDemos}
      >
        Demos
      </Link>
      <a
        className={styles.github}
        href="https://github.com/nckblu/react-image-and-background-image-fade"
        rel="noreferrer"
        target="_blank"
      >
        <GitBranch size={15} aria-hidden="true" /> GitHub
      </a>
    </div>
  )
}
