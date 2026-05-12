import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'
import { InlineDemo } from '@/components/InlineDemo'
import { SiteShell } from '@/components/SiteShell'
import { docs, docsNav } from '@/data/site'
import { DocHero, DocsNav } from './DocsParts'
import styles from './docs.module.css'

const overview = docs.find(doc => doc.slug === 'overview')!

export default function DocsPage() {
  return (
    <SiteShell>
      <div className={styles.layout}>
        <DocsNav active="/docs" />
        <article className={styles.article}>
          <DocHero doc={overview} />
          {overview.sections.map(section => (
            <section className={styles.section} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <InlineDemo docSlug="overview" sectionTitle={section.title} />
              {section.code && <CodeBlock>{section.code}</CodeBlock>}
            </section>
          ))}
          <section className={styles.section}>
            <h2>Choose your next stop</h2>
            <div className={styles.cards}>
              {docsNav.slice(1).map(item => (
                <Link className={styles.card} href={item.href} key={item.href}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </SiteShell>
  )
}
