import { Card, CardWithExternalLink } from '@/components/Card'
import { Container } from '@/components/Container'
import { FormatNumber } from '@/components/FormatNumber'
import { Search } from '@/components/Search'
import { REFERRAL_CODE } from '@/lib/constants'
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
        <h1 className="via-purple-500 mb-6 inline-block bg-gradient-to-l from-indigo-500 to-pink-500 bg-clip-text p-4 text-3xl font-semibold tracking-tighter text-transparent md:mb-20 md:text-7xl">
          Manifold Year in Review
        </h1>

        <div className="grid w-full auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          <Card className="lg:col-[2] lg:row-[1]" delay={0.2}>
            <div className="flex flex-1 flex-col justify-center text-center text-5xl font-bold">43K</div>
            <div className="text-center text-foreground-light">New Users</div>
          </Card>
          <CardWithExternalLink
            href={`https://manifold.markets/charity${REFERRAL_CODE}`}
            className="!bg-blue lg:col-[2] lg:row-[2]"
            delay={0.1}
          >
            <div className={`flex flex-1 flex-col justify-center font-mono text-3xl font-medium text-shadow`}>
              <FormatNumber value={123954} prefix="$" />
            </div>
            <div className="text-center text-foreground-light">Riased for charity</div>
          </CardWithExternalLink>

          <Card className="col-span-2 row-span-2">
            <div className="h-72 w-full">
              <Search
                searchUsers={searchUsers}
                focusOnRender
                initialSuggestions={INITIAL_SUGGESTIONS}
                className="md:w-full"
              />
            </div>
          </Card>

          <CardWithExternalLink
            href={`https://manifold.markets/QuantumObserver/will-the-lk99-room-temp-ambient-pre${REFERRAL_CODE}`}
            className="lg:col-[5] lg:row-[1]"
            delay={0.3}
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-3 overflow-clip">
              <div>
                <div className="line-clamp-6 text-sm font-semibold leading-snug [overflow-wrap:anywhere]">
                  Will the LK-99 room temp, ambient pressure superconductivity pre-print replicate before 2025?
                </div>
              </div>
            </div>
            <div className="shrink-0 text-center text-foreground-light">Most popular</div>
          </CardWithExternalLink>
          <Card className="lg:col-[5] lg:row-[2]" delay={0.2}>
            <div className="flex flex-1 flex-col items-center justify-center gap-3 overflow-clip">
              <div className="flex flex-1 flex-row items-center justify-center">
                <div className="flex flex-row items-center rounded-md bg-white px-2 text-3xl text-black">
                  <FormatNumber value={1846734} />
                </div>
              </div>
            </div>
            <div className="shrink-0 text-center text-foreground-light">Bets</div>
          </Card>
        </div>
      </div>
    </Container>
  )
}
