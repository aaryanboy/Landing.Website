import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Web Designer and Developer | Portfolio',
  description: 'Modern portfolio landing that encourages connection and showcases projects.',
  keywords: ['web designer', 'web developer', 'portfolio', 'frontend', 'UI/UX'],
  viewport: { width: 'device-width', initialScale: 1 },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  openGraph: {
    title: 'Web Designer and Developer',
    description: 'Clean, interactive portfolio with projects and smooth scrolling.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Designer and Developer',
    description: 'Clean, interactive portfolio with projects and smooth scrolling.'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100`}>{children}</body>
    </html>
  )
}