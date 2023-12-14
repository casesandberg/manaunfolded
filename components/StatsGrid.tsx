import { User } from '@/lib/manifold'
import { Card, CardWithExternalLink } from './Card'
import TypedName from './TypedName'
import { Stats } from '@/lib/stats'
import { FormatNumber } from './FormatNumber'

const NorthEastIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" fill="currentColor" />
  </svg>
)

const SouthEastIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.5 9.5H17.5V16.09L5.91 4.5L4.5 5.91L16.09 17.5H9.5V19.5H19.5V9.5Z" fill="currentColor" />
  </svg>
)

const GroupIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
      fill="currentColor"
    />
  </svg>
)

const WaterDropIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 2C6.67 6.55 4 10.48 4 13.8C4 18.78 7.8 22 12 22C16.2 22 20 18.78 20 13.8C20 10.48 17.33 6.55 12 2ZM12 20C8.65 20 6 17.43 6 13.8C6 11.46 7.95 8.36 12 4.66C16.05 8.36 18 11.45 18 13.8C18 17.43 15.35 20 12 20ZM7.83 14C8.2 14 8.5 14.26 8.57 14.62C8.98 16.84 10.85 17.6 12.21 17.49C12.64 17.47 13 17.81 13 18.24C13 18.64 12.68 18.97 12.28 18.99C10.15 19.12 7.66 17.9 7.09 14.87C7.01 14.42 7.37 14 7.83 14Z"
      fill="currentColor"
    />
  </svg>
)

const EmojiEventsIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
      fill="currentColor"
    />
  </svg>
)

const DiamondIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M19 3H5L2 9L12 21L22 9L19 3ZM9.62 8L11.12 5H12.88L14.38 8H9.62ZM11 10V16.68L5.44 10H11ZM13 10H18.56L13 16.68V10ZM19.26 8H16.61L15.11 5H17.76L19.26 8ZM6.24 5H8.89L7.39 8H4.74L6.24 5Z"
      fill="currentColor"
    />
  </svg>
)

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.11 4 20 4ZM20 18H4V8H20V18ZM18 17H12V15H18V17ZM7.5 17L6.09 15.59L8.67 13L6.08 10.41L7.5 9L11.5 13L7.5 17Z"
      fill="currentColor"
    />
  </svg>
)

const WorkspacePremiumIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M9.68 13.19L12 11.43L14.31 13.19L13.43 10.34L15.75 8.5H12.91L12 5.69L11.09 8.5H8.25L10.56 10.34L9.68 13.19ZM20 9.5C20 5.08 16.42 1.5 12 1.5C7.58 1.5 4 5.08 4 9.5C4 11.53 4.76 13.37 6 14.78V22.5L12 20.5L18 22.5V14.78C19.24 13.37 20 11.53 20 9.5ZM12 3.5C15.31 3.5 18 6.19 18 9.5C18 12.81 15.31 15.5 12 15.5C8.69 15.5 6 12.81 6 9.5C6 6.19 8.69 3.5 12 3.5ZM12 18.5L8 19.52V16.42C9.18 17.1 10.54 17.5 12 17.5C13.46 17.5 14.82 17.1 16 16.42V19.52L12 18.5Z"
      fill="currentColor"
    />
  </svg>
)

const LoadingIcon = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="inline h-6 w-6 animate-spin text-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="rgba(0,0,0,0.2)"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
)

const Award = ({
  label,
  className,
  Icon,
}: {
  label?: string
  className?: string
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
}) => (
  <div
    className={`relative mx-3 h-[3.1rem] w-[2rem] rounded-md before:absolute before:h-[inherit] before:w-[inherit] before:rotate-[60deg] before:rounded-[inherit] before:bg-inherit after:absolute after:top-0 after:h-[inherit] after:w-[inherit] after:rotate-[-60deg] after:rounded-[inherit] after:bg-inherit ${className}`}
  >
    {Icon ? (
      <div className="relative z-10 flex h-full w-full items-center justify-center pb-3">
        <Icon className="text-black text-opacity-50" />
      </div>
    ) : null}

    {label ? (
      <div className="absolute bottom-1 left-[50%] z-20 -translate-x-[50%] rounded-sm bg-white px-1 text-[9px] font-bold uppercase text-black">
        {label}
      </div>
    ) : null}
  </div>
)

function calculateFontSize(text: string) {
  const containerWidth = 300
  const maxFontSize = 110
  const averageCharWidth = 0.6

  if (text.length === 0) return 0

  const fontSize = containerWidth / (text.length * averageCharWidth)
  return fontSize > maxFontSize ? maxFontSize : fontSize
}

function normalize(value: number, min: number, max: number) {
  return min + (max - min) * value
}

function calculateDayWidth(
  stats: NonNullable<Stats['items']['BETS_BY_DAY']>,
  day: keyof NonNullable<Stats['items']['BETS_BY_DAY']>,
) {
  const min = 0.15
  const max = 1
  const currentRatio = stats[day] / stats.maxCount

  const adjustedRatio = normalize(currentRatio, min, max)
  const finalRatio = Math.min(1, adjustedRatio)

  return `${finalRatio * 100}%`
}

function UserCard({
  user,
  loading,
  empty,
  className,
}: {
  user: User
  loading?: boolean
  empty?: boolean
  className?: string
}) {
  return (
    <CardWithExternalLink
      href={`https://manifold.markets/${user.username}`}
      className={
        loading || empty
          ? `via-purple-500 col-span-2 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 ${className}`
          : `via-purple-500 col-span-2 bg-gradient-to-br from-indigo-500 to-pink-500 ${className}`
      }
      linkClassName="bg-transparent"
    >
      {loading ? (
        <div className="absolute left-5 top-4">
          <LoadingIcon />
        </div>
      ) : null}
      <div
        className="text-7xl font-medium tracking-tighter text-shadow"
        style={{ fontSize: calculateFontSize(user.username), lineHeight: 1, height: calculateFontSize(user.username) }}
      >
        <TypedName name={user.username}></TypedName>
      </div>
      {loading ? (
        <div className="text-center text-foreground-light">Generating. Please wait a minute.</div>
      ) : (
        <div className="text-center text-foreground-light">2023 Year in Review</div>
      )}
    </CardWithExternalLink>
  )
}

export default function StatsGrid({ user, stats }: { user: User; stats: Stats }) {
  const isEmpty = Object.keys(stats.items).length === 0
  const isGenerating = stats.processing && isEmpty

  return (
    <div className="my-8 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
      {stats.items.USER_STREAK ? (
        <Card className="bg-gradient-to-t from-red/30 to-40%" delay={0.3}>
          <div className="flex flex-1 flex-col justify-center text-5xl font-bold">
            🔥{stats.items.USER_STREAK.count}
          </div>
          <div className="text-center text-foreground-light">Streak</div>
        </Card>
      ) : (
        <Card opacity={0.5} delay={0.3} />
      )}

      {stats.items.BETS_AGGREGATE_TOPIC ? (
        <Card className="md:hidden" delay={0.1}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-center">
              <span className="rounded-md bg-purple box-decoration-clone p-2 text-lg tracking-tight text-white text-shadow">
                {stats.items.BETS_AGGREGATE_TOPIC.name}
              </span>
            </div>
          </div>
          <div className="text-center text-foreground-light">Favorite topic</div>
        </Card>
      ) : (
        <Card className="md:hidden" opacity={0.5} delay={0.1} />
      )}

      <UserCard user={user} empty={isEmpty} loading={isGenerating} className="md:flex lg:hidden" />

      {stats.items.POSITIONS_LARGEST_PROFIT ? (
        <CardWithExternalLink
          href={stats.items.POSITIONS_LARGEST_PROFIT.url}
          className="col-span-2 md:hidden lg:flex"
          delay={0.2}
        >
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-green px-2 font-mono text-2xl text-shadow">
              <FormatNumber value={stats.items.POSITIONS_LARGEST_PROFIT.amount} />
              <NorthEastIcon />
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_LARGEST_PROFIT.title}
              </div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Biggest profit</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2 md:hidden lg:flex" opacity={0.5} delay={0.2} />
      )}

      {stats.items.BETS_AGGREGATE_TOPIC ? (
        <Card className="hidden md:flex" delay={0.4}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-center">
              <span className="rounded-md bg-purple box-decoration-clone p-2 text-lg tracking-tight text-white text-shadow">
                {stats.items.BETS_AGGREGATE_TOPIC.name}
              </span>
            </div>
          </div>
          <div className="text-center text-foreground-light">Favorite topic</div>
        </Card>
      ) : (
        <Card className="hidden md:flex" opacity={0.5} delay={0.4} />
      )}

      {stats.items.USER_PROFIT ? (
        <Card
          className={stats.items.USER_PROFIT.count > 0 ? 'bg-green hover:bg-green' : 'bg-red hover:bg-red'}
          delay={0.2}
        >
          <div
            className={`flex flex-1 flex-col justify-center font-mono font-medium text-shadow ${
              stats.items.USER_PROFIT.count > 999999 ? 'text-3xl' : 'text-4xl'
            }`}
          >
            <FormatNumber value={stats.items.USER_PROFIT.count} />
          </div>
          <div className="text-center text-foreground-light">Total profit</div>
        </Card>
      ) : (
        <Card opacity={0.5} delay={0.2} />
      )}

      {stats.items.USER_LEAGUES ? (
        <Card className="row-span-2 flex flex-col" delay={0.3}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex w-[120px] flex-col">
              {stats.items.USER_LEAGUES.leagues.map((league, i) => {
                let award = null

                switch (league.division) {
                  case 'silicon': {
                    award = <Award label="Silicon" Icon={TerminalIcon} className="bg-[#666]" />
                    break
                  }
                  case 'bronze': {
                    award = <Award label="Bronze" Icon={EmojiEventsIcon} className="self-end bg-[#FFA000]" />
                    break
                  }
                  case 'silver': {
                    award = <Award label="Silver" Icon={EmojiEventsIcon} className="bg-[#C0C0C0]" />
                    break
                  }
                  case 'gold': {
                    award = <Award label="Gold" Icon={EmojiEventsIcon} className="self-end bg-[#FFD700]" />
                    break
                  }
                  case 'platinum': {
                    award = <Award label="Platinum" Icon={EmojiEventsIcon} className="bg-[#85a5c9]" />
                    break
                  }
                  case 'diamond': {
                    award = <Award label="Diamond" Icon={DiamondIcon} className="self-end bg-[#54D6AC]" />
                    break
                  }
                  case 'masters': {
                    award = <Award label="Masters" Icon={WorkspacePremiumIcon} className="bg-[#D425F9]" />
                    break
                  }
                  default: {
                    award = <Award className="bg-[#333]" />
                  }
                }

                return (
                  <div key={league.season} className={`h-9 w-14 ${i % 2 ? 'self-end' : ''}`}>
                    {award}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-center text-foreground-light">Leagues</div>
        </Card>
      ) : (
        <Card className="row-span-2" opacity={0.5} delay={0.3} />
      )}

      {stats.items.POPULAR_1 ? (
        <CardWithExternalLink href={stats.items.POPULAR_1.url} className="row-span-2" delay={0.2}>
          <div className="flex flex-1 flex-col items-start justify-center gap-4 overflow-clip">
            <div className="flex w-full flex-row items-center gap-1 text-sm font-medium text-foreground-light">
              {stats.items.POPULAR_1.hashtag}
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 px-1">
              <div className="line-clamp-4 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.POPULAR_1.title}
              </div>

              <div>
                <span className="rounded bg-[#888] box-decoration-clone p-2 font-mono text-base font-semibold text-white text-shadow">
                  {stats.items.POPULAR_1.answer}
                </span>
              </div>

              {stats.items.POPULAR_1.position ? (
                <div>
                  <span
                    className={`rounded box-decoration-clone p-2 font-mono text-xs font-semibold text-white text-shadow ${
                      stats.items.POPULAR_1.position > 0 ? 'bg-green hover:bg-green' : 'bg-red hover:bg-red'
                    }`}
                  >
                    <FormatNumber value={stats.items.POPULAR_1.position} /> Profit
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Popular this year</div>
        </CardWithExternalLink>
      ) : (
        <Card className="row-span-2" delay={0.2} opacity={0.5} />
      )}

      {stats.items.BETS_AGGREGATE_MARKET ? (
        <CardWithExternalLink href={stats.items.BETS_AGGREGATE_MARKET.url} className="gap-4" delay={0.5}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-2 text-sm font-medium text-foreground-light [overflow-wrap:anywhere]">
                {stats.items.BETS_AGGREGATE_MARKET.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-5xl font-bold">
              <FormatNumber value={stats.items.BETS_AGGREGATE_MARKET.amount} />
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Most bets</div>
        </CardWithExternalLink>
      ) : (
        <Card opacity={0.5} delay={0.5} />
      )}

      <UserCard user={user} empty={isEmpty} loading={isGenerating} className="md:hidden lg:flex" />

      {stats.items.POSITIONS_BEST_PERCENT_LOSS ? (
        <CardWithExternalLink href={stats.items.POSITIONS_BEST_PERCENT_LOSS.url} className="gap-4" delay={0.3}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-2 text-sm font-medium text-foreground-light [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_BEST_PERCENT_LOSS.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-5xl font-light text-red">
              <FormatNumber value={stats.items.POSITIONS_BEST_PERCENT_LOSS.amount} />%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst drop</div>
        </CardWithExternalLink>
      ) : (
        <Card opacity={0.5} delay={0.3} />
      )}

      {stats.items.USER_DAYS_SINCE_CREATION ? (
        <Card delay={0.6}>
          <div className="flex flex-1 flex-col justify-center">
            <div
              className={`flex h-24 w-24 items-center justify-center rounded-full bg-blue font-light tracking-tight text-black ${
                stats.items.USER_DAYS_SINCE_CREATION.count > 99 ? 'text-4xl' : 'text-5xl'
              }`}
            >
              {stats.items.USER_DAYS_SINCE_CREATION.count}
            </div>
          </div>
          <div className="text-center text-foreground-light">Days forecasting</div>
        </Card>
      ) : (
        <Card opacity={0.5} delay={0.6} />
      )}

      {stats.items.BETS_BY_DAY ? (
        <Card className="row-span-2" delay={0.7}>
          <div className="grid-rows-7 grid w-full flex-1 px-4 pt-4">
            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'mondayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Monday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'tuesdayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Tuesday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'wednesdayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Wednesday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'thursdayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Thursday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'fridayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Friday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'saturdayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Saturday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: calculateDayWidth(stats.items.BETS_BY_DAY, 'sundayCount'),
                }}
              />
              <div className="text-xs text-foreground-light">Sunday</div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Bets by day</div>
        </Card>
      ) : (
        <Card className="row-span-2" opacity={0.5} delay={0.7} />
      )}

      {stats.items.POSITIONS_BEST_PERCENT_GAIN ? (
        <CardWithExternalLink
          href={stats.items.POSITIONS_BEST_PERCENT_GAIN.url}
          className="col-span-2 hidden gap-4 md:flex"
          delay={0.5}
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-1 text-sm font-medium text-foreground-light [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_BEST_PERCENT_GAIN.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-7xl font-light text-green">
              <FormatNumber value={stats.items.POSITIONS_BEST_PERCENT_GAIN.amount} />%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Best gain</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2 hidden md:flex" opacity={0.5} delay={0.5} />
      )}

      {stats.items.MARKET_MOST_LIQUIDITY ? (
        <CardWithExternalLink href={stats.items.MARKET_MOST_LIQUIDITY.url} className="gap-4" delay={0.8}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex w-full flex-row items-center gap-1 text-sm font-medium text-foreground-light">
              <WaterDropIcon className="h-4 w-4" /> <FormatNumber value={stats.items.MARKET_MOST_LIQUIDITY.amount} />
            </div>
            <div className="flex flex-1 flex-row items-center text-lg font-semibold">
              <div className="line-clamp-3 [overflow-wrap:anywhere]">{stats.items.MARKET_MOST_LIQUIDITY.title}</div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Biggest market</div>
        </CardWithExternalLink>
      ) : (
        <Card opacity={0.5} delay={0.8} />
      )}

      {stats.items.POSITIONS_LARGEST_LOSS ? (
        <CardWithExternalLink href={stats.items.POSITIONS_LARGEST_LOSS.url} className="gap-4 md:hidden" delay={0.7}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex flex-1 flex-row items-center justify-center">
              <div className="flex flex-row items-center rounded-md bg-red px-2 font-mono text-2xl text-shadow">
                <FormatNumber value={stats.items.POSITIONS_LARGEST_LOSS.amount} />
                <SouthEastIcon />
              </div>
            </div>
            <div>
              <div className="line-clamp-2 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_LARGEST_LOSS.title}
              </div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst loss</div>
        </CardWithExternalLink>
      ) : (
        <Card className="gap-4 md:hidden" opacity={0.5} delay={0.7} />
      )}

      {stats.items.POSITIONS_BEST_PERCENT_GAIN ? (
        <CardWithExternalLink
          href={stats.items.POSITIONS_BEST_PERCENT_GAIN.url}
          className="col-span-2 gap-4 md:hidden"
          delay={0.9}
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-1 text-sm font-medium text-foreground-light [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_BEST_PERCENT_GAIN.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-7xl font-light text-green">
              <FormatNumber value={stats.items.POSITIONS_BEST_PERCENT_GAIN.amount} />%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Best gain</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2 gap-4 md:hidden" opacity={0.5} delay={0.9} />
      )}

      {stats.items.MARKET_MOST_BETTORS ? (
        <CardWithExternalLink href={stats.items.MARKET_MOST_BETTORS.url} className="col-span-2" delay={0.8}>
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-white px-2 font-mono text-2xl text-black text-shadow">
              <GroupIcon />
              <FormatNumber value={stats.items.MARKET_MOST_BETTORS.amount} />
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.MARKET_MOST_BETTORS.title}
              </div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Most popular market</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2" opacity={0.5} delay={0.8} />
      )}

      {stats.items.POSITIONS_LARGEST_LOSS ? (
        <CardWithExternalLink
          href={stats.items.POSITIONS_LARGEST_LOSS.url}
          className="hidden gap-4 md:flex"
          delay={0.9}
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex flex-1 flex-row items-center justify-center">
              <div className="flex flex-row items-center rounded-md bg-red px-2 font-mono text-2xl text-shadow">
                <FormatNumber value={stats.items.POSITIONS_LARGEST_LOSS.amount} />
                <SouthEastIcon />
              </div>
            </div>
            <div>
              <div className="line-clamp-2 text-lg font-semibold [overflow-wrap:anywhere] [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_LARGEST_LOSS.title}
              </div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst loss</div>
        </CardWithExternalLink>
      ) : (
        <Card className="hidden gap-4 md:flex" opacity={0.5} delay={0.9} />
      )}

      {stats.items.POPULAR_2 ? (
        <CardWithExternalLink href={stats.items.POPULAR_2.url} className="col-span-2" delay={1}>
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="flex-[3] pl-4">
              <div className="mb-2 text-sm font-medium text-foreground-light">{stats.items.POPULAR_2.hashtag}</div>
              <div className="line-clamp-3 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.POPULAR_2.title}
              </div>
            </div>
            <div className="mx-2 flex flex-[2] flex-col gap-4 pr-2">
              <div>
                <span className="rounded bg-[#888] box-decoration-clone p-2 font-mono text-base font-semibold text-white text-shadow">
                  {stats.items.POPULAR_2.answer}
                </span>
              </div>

              {stats.items.POPULAR_2.position ? (
                <div>
                  <span
                    className={`rounded box-decoration-clone p-2 font-mono text-xs font-semibold text-white text-shadow ${
                      stats.items.POPULAR_2.position > 0 ? 'bg-green hover:bg-green' : 'bg-red hover:bg-red'
                    }`}
                  >
                    <FormatNumber value={stats.items.POPULAR_2.position} /> Profit
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="text-center text-foreground-light">Popular this year</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2" delay={1} opacity={0.5} />
      )}

      {stats.items.POSITIONS_LARGEST_PROFIT ? (
        <CardWithExternalLink
          href={stats.items.POSITIONS_LARGEST_PROFIT.url}
          className="col-span-2 hidden md:flex lg:hidden"
          delay={1}
        >
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-green px-2 font-mono text-2xl text-shadow">
              <FormatNumber value={stats.items.POSITIONS_LARGEST_PROFIT.amount} />
              <NorthEastIcon />
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg font-semibold [overflow-wrap:anywhere]">
                {stats.items.POSITIONS_LARGEST_PROFIT.title}
              </div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Biggest profit</div>
        </CardWithExternalLink>
      ) : (
        <Card className="col-span-2 hidden md:flex lg:hidden" opacity={0.5} delay={1} />
      )}
    </div>
  )
}
