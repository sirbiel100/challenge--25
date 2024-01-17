import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.scss'

const figtree = Figtree({ 
  subsets: ['latin'],
  weight: ['600', '800'] 
})

export const metadata: Metadata = {
  title: 'GC | Blog Preview Card',
  description: 'Blog Preview Card made by Gabriel Crispim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
