import { Container } from '@/components/Container'
import NotFoundGrid from '@/components/NotFoundGrid'
import StartProcessingForUser from '@/components/StartProcessingForUser'
import StatsGrid from '@/components/StatsGrid'
import { getUserByUsername } from '@/lib/manifold'
import { getStats } from '@/lib/stats'

export async function generateMetadata({ params: { username } }: { params: { username: string } }) {
  try {
    const user = await getUserByUsername(username)

    return {
      title: user.username,
    }
  } catch (error) {
    return {
      title: 'Not found',
    }
  }
}

export default async function UserPage({ params: { username } }: { params: { username: string } }) {
  try {
    const user = await getUserByUsername(username)
    const stats = await getStats(user.id)

    return (
      <div className="flex flex-auto items-center">
        <StartProcessingForUser user={user} stats={stats} />
        <Container>
          <StatsGrid user={user} stats={stats} />
        </Container>
      </div>
    )
  } catch (error) {
    return (
      <div className="flex flex-auto items-center">
        <Container>
          <NotFoundGrid />
        </Container>
      </div>
    )
  }
}
