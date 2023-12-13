import { searchUsers } from '@/lib/manifold'
import { Container } from './Container'
import { Search } from './Search'

export function Header() {
  return (
    <header>
      <Container>
        <div className="my-4 flex h-14 flex-row items-center justify-between gap-6 rounded-3xl bg-foreground px-4 pr-2 md:px-6">
          <h2 className="text flex-1 font-mono text-foreground-light md:text-lg">mana/unfolded</h2>
          <Search searchUsers={searchUsers} />
          <div className="hidden flex-1 md:block" />
        </div>
      </Container>
    </header>
  )
}
