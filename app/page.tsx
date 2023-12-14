import { Container } from '@/components/Container'
import { Search } from '@/components/Search'
import { User, searchUsers } from '@/lib/manifold'

const INITIAL_SUGGESTIONS = [
  { name: 'Eliezer Yudkowsky', username: 'EliezerYudkowsky', id: 'e' },
  { name: 'Scott Alexander', username: 'ScottAlexander', id: 'sa' },
  { name: 'S G', username: 'SG', id: 's' },
  { name: 'firstuserhere', username: 'firstuserhere', id: 'f' },
  { name: 'Joshua', username: 'Joshua', id: 'j' },
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
