import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - Mana/unfolded',
    default: 'Mana/unfolded - Your Year in Review',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-auto">{children}</main>
        <footer>
          <Container>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-4 pb-6 text-sm text-foreground-light md:flex-row">
              <p>
                Made by{' '}
                <a
                  href="https://github.com/casesandberg"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  case
                </a>{' '}
                for{' '}
                <a href="https://manifold.markets/" className="underline underline-offset-4 hover:text-foreground">
                  Manifold
                </a>
              </p>

              <p className="hidden opacity-50 md:block">—</p>

              <p>
                <a
                  href="https://manifold.markets/case?tab=payments&a=100"
                  className="flex flex-row items-center gap-2 underline-offset-4 hover:text-foreground hover:underline"
                >
                  Say thanks with mana
                </a>
              </p>

              <p className="hidden opacity-50 md:block">—</p>

              <p>
                <a
                  href="https://github.com/casesandberg/manaunfolded"
                  className="flex flex-row items-center gap-2 underline-offset-4 hover:text-foreground hover:underline"
                >
                  Open Source on Github
                </a>
              </p>
            </div>
          </Container>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
