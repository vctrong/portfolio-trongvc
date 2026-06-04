import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

/* ── next/font: zero layout shift, self-hosted at build time ── */

const geist = Geist({
  variable: '--font-geist', // → consumed by @theme --font-body-*
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk', // → consumed by @theme --font-headline-* / --font-display
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono', // → consumed by @theme --font-label-mono
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TrongVC – Portfolio',
  description:
    'Building modern, high-performance web applications with clean architecture, scalable backends, and pixel-perfect frontends.',
    icons: {
      icon: '/faicon.ico',
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols — variable icon font (FILL axis for filled/outlined toggle) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={[
          geist.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          'bg-surface text-on-surface antialiased overflow-x-hidden',
          'selection:bg-primary-fixed-dim selection:text-on-primary-fixed',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  )
}