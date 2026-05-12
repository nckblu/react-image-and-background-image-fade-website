import Link from 'next/link'
import { ImageIcon } from 'lucide-react'
import { NavLinks } from './NavLinks'
import styles from './SiteShell.module.css'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#content">
        Skip to content
      </a>
      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={styles.brand} href="/">
            <span className={styles.mark} aria-hidden="true">
              <ImageIcon size={18} strokeWidth={3} />
            </span>
            <span className={styles.brandFull}>react image and background image fade</span>
            <span className={styles.brandShort} aria-hidden="true">ribif</span>
          </Link>
          <NavLinks />
        </nav>
      </header>
      <main id="content" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerAccent} />
        <div className={styles.footerInner}>
          <div>
            <strong>Fade in. Load smart. Stay funky.</strong>
            <p>MIT · Built by <a href="https://github.com/nckblu" target="_blank" rel="noreferrer">nckblu</a></p>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://www.npmjs.com/package/react-image-and-background-image-fade" target="_blank" rel="noreferrer">npm</a>
            <a href="https://github.com/nckblu/react-image-and-background-image-fade" target="_blank" rel="noreferrer">GitHub</a>
            <Link href="/docs">Docs</Link>
            <Link href="/demos">Demos</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
