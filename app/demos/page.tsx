import Link from 'next/link'
import { SiteShell } from '@/components/SiteShell'
import { demosNav } from '@/data/site'
import styles from './demos.module.css'

export default function DemosPage() {
  return (
    <SiteShell>
      <section className={styles.layout}>
        <header className={styles.hero}>
          <span>Live demos</span>
          <h1>poke the image machine</h1>
          <p>
            These are not screenshots. The demos below use the package directly so docs, behavior,
            and vibes all stay in the same room.
          </p>
        </header>
        <div className={styles.grid}>
          {demosNav.slice(1).map(item => (
            <div className={styles.card} key={item.href}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={styles.cardActions}>
                <Link href={item.href} className={styles.demoLink}>
                  Open Demo
                </Link>
                <Link href={item.docHref ?? `/docs/${item.href.split('/').pop()}`} className={styles.docLink}>
                  Read Docs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
