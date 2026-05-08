import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CodeBlock } from '@/components/CodeBlock'
import { DemoStage } from '@/components/DemoStage'
import { InlineDemo } from '@/components/InlineDemo'
import { SiteShell } from '@/components/SiteShell'
import { docSlugs } from '@/lib/content'
import { getDoc, getDemo } from '@/data/site'
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
              <h2>Interactive Live Demo</h2>
              <p>Play with the live configuration for {doc.title}.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <DemoStage demo={demo} />
              </div>
            </section>
          )}
        </article>
      </div>
    </SiteShell>
  )
}
