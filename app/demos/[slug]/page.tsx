import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DemoStage } from '@/components/DemoStage'
import { SiteShell } from '@/components/SiteShell'
import { getDemo } from '@/data/site'
import { demoSlugs } from '@/lib/content'
import styles from '../demos.module.css'

export function generateStaticParams() {
  return demoSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const demo = getDemo(slug)
  return {
    title: demo?.title ?? 'Demos'
  }
}

export default async function DemoPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const demo = getDemo(slug)
  if (!demo) notFound()

  return (
    <SiteShell>
      <section className={styles.stageWrap}>
        <div className={styles.breadcrumb}>
          <Link href="/demos" className={styles.backLink}>← All demos</Link>
        </div>
        <header className={styles.hero}>
          <span>Interactive demo</span>
          <h1>{demo.title}</h1>
          <p>{demo.description}</p>
        </header>
        <DemoStage demo={demo} />
      </section>
    </SiteShell>
  )
}
