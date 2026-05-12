import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { InlineDemo } from '@/components/InlineDemo'
import { SiteShell } from '@/components/SiteShell'
import { docSlugs } from '@/lib/content'
import { getDoc, getDemo, docsNav } from '@/data/site'
import { DocHero, DocsNav } from '../DocsParts'
import styles from '../docs.module.css'

export function generateStaticParams() {
  return docSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getDoc(slug)
  return {
    title: doc?.title ?? 'Docs'
  }
}

export default async function DocPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc || doc.slug === 'overview') notFound()

  const demo = getDemo(doc.demoSlug || doc.slug)
  const navIndex = docsNav.findIndex(item => item.href === `/docs/${slug}`)
  const prevDoc = navIndex > 0 ? docsNav[navIndex - 1] : null
  const nextDoc = navIndex < docsNav.length - 1 ? docsNav[navIndex + 1] : null

  return (
    <SiteShell>
      <div className={styles.layout}>
        <DocsNav active={`/docs/${doc.slug}`} />
        <article className={styles.article}>
          <DocHero doc={doc} />
          {doc.sections.map(section => (
            <section className={styles.section} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <InlineDemo docSlug={doc.slug} sectionTitle={section.title} code={section.code} />
            </section>
          ))}
          {demo && (
            <section className={styles.section} style={{ marginTop: '2rem' }}>
              <h2>Try the full demo</h2>
              <p>Open the focused {demo.title} playground for the wider controls and live output.</p>
              <div className={styles.cards} style={{ marginTop: '1.25rem' }}>
                <Link className={styles.card} href={`/demos/${demo.slug}`}>
                  <h2>{demo.title}</h2>
                  <p>{demo.description}</p>
                </Link>
              </div>
            </section>
          )}
          {(prevDoc || nextDoc) && (
            <nav className={styles.docNav} aria-label="Page navigation">
              {prevDoc ? (
                <Link className={styles.docNavPrev} href={prevDoc.href}>
                  <span className={styles.docNavLabel}>← Previous</span>
                  <span className={styles.docNavTitle}>{prevDoc.title}</span>
                </Link>
              ) : <div />}
              {nextDoc && (
                <Link className={styles.docNavNext} href={nextDoc.href}>
                  <span className={styles.docNavLabel}>Next →</span>
                  <span className={styles.docNavTitle}>{nextDoc.title}</span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </div>
    </SiteShell>
  )
}
