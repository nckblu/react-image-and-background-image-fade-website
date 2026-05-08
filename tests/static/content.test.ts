import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { demos, docs, docsNav } from '@/data/site'

const staleV1PropPatterns = [
  /\bisResponsive\b/,
  /\blazyLoad\b/,
  /\brenderLoader\b/,
  /\btransitionTime\b/,
  /\buseChild\b/,
  /\belement\s*=/
]

describe('content hygiene', () => {
  it('does not use stale v1 props outside migration docs', () => {
    const nonMigrationDocs = docs.filter(doc => doc.slug !== 'migration')
    const haystack = JSON.stringify(nonMigrationDocs)

    for (const pattern of staleV1PropPatterns) {
      expect(haystack).not.toMatch(pattern)
    }
  })

  it('documents all planned docs routes', () => {
    expect(docsNav.map(item => item.href)).toEqual([
      '/docs',
      '/docs/image',
      '/docs/background-image',
      '/docs/picture',
      '/docs/image-loader',
      '/docs/hooks',
      '/docs/responsive-helpers',
      '/docs/shared-defaults',
      '/docs/styling',
      '/docs/migration'
    ])
  })

  it('has live demo data for every demo route', () => {
    expect(demos.map(demo => `/demos/${demo.slug}`)).toEqual([
      '/demos/image',
      '/demos/background-image',
      '/demos/picture',
      '/demos/provider',
      '/demos/responsive'
    ])
  })

  it('uses the local sibling package dependency', () => {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))
    expect(pkg.dependencies['react-image-and-background-image-fade']).toBe(
      'file:../react-image-and-background-image-fade'
    )
  })
})
