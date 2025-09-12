import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import i18next from 'i18next'


export const metadata: Metadata = {
  title: 'Vii Arts And Crafts',
  description: 'Created with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Use current language from i18next, fallback to 'en'
  const lang = i18next.language || 'en'

  return (
    <html lang={lang}>
      <head>
        <style>{`
            html {
              font-family: ${GeistSans.style.fontFamily};
              --font-sans: ${GeistSans.variable};
              --font-mono: ${GeistMono.variable};
            }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
