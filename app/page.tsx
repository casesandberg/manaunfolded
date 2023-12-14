import { Container } from '@/components/Container'
import { Search } from '@/components/Search'
import { User, searchUsers } from '@/lib/manifold'

const INITIAL_SUGGESTIONS = [
  { name: 'Joshua', username: 'Joshua', id: 'j' },
  { name: 'S G', username: 'SG', id: 's' },
  { name: 'Brian T. Edwards', username: 'BTE', id: 'b' },
  { name: 'Mira', username: 'Mira', id: 'm' },
  { name: 'firstuserhere', username: 'firstuserhere', id: 'f' },
] as Array<User>

export default function Home() {
  return (
    <Container>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="h-64">
          <Search searchUsers={searchUsers} focusOnRender initialSuggestions={INITIAL_SUGGESTIONS} />
        </div>
      </div>
    </Container>
  )
}
