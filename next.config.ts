import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['react-image-and-background-image-fade'],
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
})

export default withMDX(nextConfig)
