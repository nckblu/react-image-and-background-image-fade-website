import { demos, docs } from '@/data/site'

export const docSlugs = docs.filter(doc => doc.slug !== 'overview').map(doc => doc.slug)
export const demoSlugs = demos.map(demo => demo.slug)

export function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${String(value)}`)
}
