import { Container } from '@/components/Container'
import StatsGrid from '@/components/StatsGrid'

export default function UserPage({ params: { username } }: { params: { username: string } }) {
  const user = {
    username: 'case',
    currentBettingStreak: 41,
    profitCached: {
      allTime: 4160.50970443119,
    },
  }
  return (
    <div className="flex flex-auto items-center">
      <Container>
        <StatsGrid />
      </Container>
    </div>
  )
}
