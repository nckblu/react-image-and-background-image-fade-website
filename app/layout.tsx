import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'React Image and Background Image Fade',
    template: '%s | React Image and Background Image Fade'
  },
  description:
    'A modern React toolkit for image fades, background images, skeleton placeholders, lazy loading, responsive srcSet helpers, and polished transitions. React 19 ready.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png'
  },
  metadataBase: new URL('https://react-image-and-background-image-fade.com')
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
