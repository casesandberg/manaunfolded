import { Container } from '@/components/Container'
import NotFoundGrid from '@/components/NotFoundGrid'
import StatsGrid from '@/components/StatsGrid'
import { getUserByUsername } from '@/lib/manifold'

export default async function UserPage({ params: { username } }: { params: { username: string } }) {
  try {
    const user = await getUserByUsername(username)

    console.log(user)

    return (
      <div className="flex flex-auto items-center">
        <Container>
          <StatsGrid user={user} />
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
