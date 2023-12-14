'use client'

import { searchUsers } from '@/lib/manifold'
import { Container } from './Container'
import { Search } from './Search'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  return (
    <header>
      <Container>
        <div className="my-4 flex h-14 flex-row items-center justify-between gap-6 rounded-3xl bg-foreground px-4 pr-2 md:px-6">
          <h2 className="text flex-1 font-mono text-foreground-light md:text-lg">
            <Link href="/">mana/unfolded</Link>
          </h2>
          {pathname !== '/' ? <Search searchUsers={searchUsers} /> : null}
          <div className="hidden flex-1 md:block" />
        </div>
      </Container>
    </header>
  )
}
