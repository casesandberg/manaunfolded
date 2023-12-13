import { User } from '@/lib/manifold'
import { Card } from './Card'
import TypedName from './TypedName'
import { Stats } from '@/lib/stats'

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

const WorkspacePremium = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M9.68 13.19L12 11.43L14.31 13.19L13.43 10.34L15.75 8.5H12.91L12 5.69L11.09 8.5H8.25L10.56 10.34L9.68 13.19ZM20 9.5C20 5.08 16.42 1.5 12 1.5C7.58 1.5 4 5.08 4 9.5C4 11.53 4.76 13.37 6 14.78V22.5L12 20.5L18 22.5V14.78C19.24 13.37 20 11.53 20 9.5ZM12 3.5C15.31 3.5 18 6.19 18 9.5C18 12.81 15.31 15.5 12 15.5C8.69 15.5 6 12.81 6 9.5C6 6.19 8.69 3.5 12 3.5ZM12 18.5L8 19.52V16.42C9.18 17.1 10.54 17.5 12 17.5C13.46 17.5 14.82 17.1 16 16.42V19.52L12 18.5Z"
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

function UserCard({ user, className }: { user: User; className?: string }) {
  return (
    <Card className={`via-purple-500 col-span-2 bg-gradient-to-br from-indigo-500 to-pink-500 ${className}`}>
      <div
        className="text-7xl font-medium tracking-tighter text-shadow"
        style={{ fontSize: calculateFontSize(user.username), lineHeight: 1, height: calculateFontSize(user.username) }}
      >
        <TypedName name={user.username}></TypedName>
      </div>
      <div className="text-center text-foreground-light">2023 Year in Review</div>
    </Card>
  )
}

export default function StatsGrid({ user, stats }: { user: User; stats: Stats }) {
  return (
    <div className="my-8 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
      {stats.items.USER_STREAK ? (
        <Card className="bg-gradient-to-t from-red/30 to-40%" delay={0.75}>
          <div className="flex flex-1 flex-col justify-center text-5xl font-bold">
            🔥{stats.items.USER_STREAK.count}
          </div>
          <div className="text-center text-foreground-light">Streak</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={0.5} />
      )}

      {stats.items.BETS_AGGREGATE_TOPIC ? (
        <Card className="md:hidden" delay={0.25}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="inline-flex items-center justify-center rounded-md bg-purple px-2 py-1 text-center text-lg tracking-tight">
              {stats.items.BETS_AGGREGATE_TOPIC.name}
            </div>
          </div>
          <div className="text-center text-foreground-light">Favorite topic</div>
        </Card>
      ) : (
        <Card className="opacity-50 md:hidden" delay={0.75} />
      )}

      <UserCard user={user} className="md:flex lg:hidden" />

      {stats.items.POSITIONS_LARGEST_PROFIT ? (
        <Card className="col-span-2 md:hidden lg:flex" delay={0.5}>
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-green px-2 font-mono text-2xl text-shadow">
              {stats.items.POSITIONS_LARGEST_PROFIT.amount}
              <NorthEastIcon />
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg">{stats.items.POSITIONS_LARGEST_PROFIT.title}</div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Biggest profit</div>
        </Card>
      ) : (
        <Card className="col-span-2 opacity-50 md:hidden lg:flex" delay={0.5} />
      )}

      {stats.items.BETS_AGGREGATE_TOPIC ? (
        <Card className="hidden md:flex" delay={1}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="inline-flex items-center justify-center rounded-md bg-purple px-2 py-1 text-center text-lg tracking-tight">
              {stats.items.BETS_AGGREGATE_TOPIC.name}
            </div>
          </div>
          <div className="text-center text-foreground-light">Favorite topic</div>
        </Card>
      ) : (
        <Card className="hidden opacity-50 md:flex" delay={1} />
      )}

      {stats.items.USER_PROFIT ? (
        <Card className={stats.items.USER_PROFIT.count > 0 ? 'bg-green' : 'bg-red'} delay={0.5}>
          <div className="flex flex-1 flex-col justify-center font-mono text-4xl font-medium text-shadow">
            {stats.items.USER_PROFIT.count}
          </div>
          <div className="text-center text-foreground-light">Total profit</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={0.5} />
      )}

      {stats.items.USER_LEAGUES ? (
        <Card className="row-span-2 flex flex-col" delay={0.75}>
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
                    award = <Award label="Masters" Icon={WorkspacePremium} className="bg-[#D425F9]" />
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
        <Card className="row-span-2 opacity-50" delay={0.75} />
      )}

      <Card className="row-span-2" delay={0.5}>
        06
        <div className="absolute bottom-0 p-4 text-center text-foreground-light">Popular</div>
      </Card>

      {stats.items.BETS_AGGREGATE_MARKET ? (
        <Card className="gap-4" delay={1.25}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-2 text-sm font-medium text-foreground-light">
                {stats.items.BETS_AGGREGATE_MARKET.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-5xl font-bold">
              {stats.items.BETS_AGGREGATE_MARKET.amount}
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Most bets</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={1.25} />
      )}

      <UserCard user={user} className="md:hidden lg:flex" />

      {stats.items.POSITIONS_BEST_PERCENT_LOSS ? (
        <Card className="gap-4" delay={0.75}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-2 text-sm font-medium text-foreground-light">
                {stats.items.POSITIONS_BEST_PERCENT_LOSS.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-5xl font-light text-red">
              {stats.items.POSITIONS_BEST_PERCENT_LOSS.amount}%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst drop</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={0.75} />
      )}

      {stats.items.USER_DAYS_SINCE_CREATION ? (
        <Card delay={1.5}>
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue text-5xl font-light tracking-tight text-black">
              {stats.items.USER_DAYS_SINCE_CREATION.count}
            </div>
          </div>
          <div className="text-center text-foreground-light">Days forecasting</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={1.5} />
      )}

      {stats.items.BETS_BY_DAY ? (
        <Card className="row-span-2" delay={1.75}>
          <div className="grid-rows-7 grid w-full flex-1 px-4 pt-4">
            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.mondayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Monday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.tuesdayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Tuesday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.wednesdayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Wednesday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.thursdayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Thursday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.fridayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Friday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.saturdayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Saturday</div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className="h-4 rounded bg-yellow"
                style={{
                  width: `${(stats.items.BETS_BY_DAY.sundayCount / stats.items.BETS_BY_DAY.totalCount) * 100}%`,
                }}
              />
              <div className="text-xs text-foreground-light">Sunday</div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Bets by day</div>
        </Card>
      ) : (
        <Card className="row-span-2 opacity-50" delay={1.75} />
      )}

      {stats.items.POSITIONS_BEST_PERCENT_GAIN ? (
        <Card className="col-span-2 hidden gap-4 md:flex" delay={1.25}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-1 text-sm font-medium text-foreground-light">
                {stats.items.POSITIONS_BEST_PERCENT_GAIN.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-7xl font-light text-green">
              {stats.items.POSITIONS_BEST_PERCENT_GAIN.amount}%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Best gain</div>
        </Card>
      ) : (
        <Card className="col-span-2 hidden opacity-50 md:flex" delay={1.25} />
      )}

      {stats.items.MARKET_MOST_LIQUIDITY ? (
        <Card className="gap-4" delay={2}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex w-full flex-row items-center gap-1 text-sm font-medium text-foreground-light">
              <WaterDropIcon className="h-4 w-4" /> {stats.items.MARKET_MOST_LIQUIDITY.amount}
            </div>
            <div className="flex flex-1 flex-row items-center text-lg font-bold">
              <div className="line-clamp-3">{stats.items.MARKET_MOST_LIQUIDITY.title}</div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Biggest market</div>
        </Card>
      ) : (
        <Card className="opacity-50" delay={2} />
      )}

      {stats.items.POSITIONS_LARGEST_LOSS ? (
        <Card className="gap-4 md:hidden" delay={1.75}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex flex-1 flex-row items-center justify-center">
              <div className="flex flex-row items-center rounded-md bg-red px-2 font-mono text-2xl text-shadow">
                {stats.items.POSITIONS_LARGEST_LOSS.amount}
                <SouthEastIcon />
              </div>
            </div>
            <div>
              <div className="line-clamp-2 text-lg">{stats.items.POSITIONS_LARGEST_LOSS.title}</div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst loss</div>
        </Card>
      ) : (
        <Card className="gap-4 opacity-50 md:hidden" delay={1.75} />
      )}

      {stats.items.POSITIONS_BEST_PERCENT_GAIN ? (
        <Card className="col-span-2 gap-4 md:hidden" delay={2.25}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div>
              <div className="line-clamp-1 text-sm font-medium text-foreground-light">
                {stats.items.POSITIONS_BEST_PERCENT_GAIN.title}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center text-7xl font-light text-green">
              {stats.items.POSITIONS_BEST_PERCENT_GAIN.amount}%
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Best gain</div>
        </Card>
      ) : (
        <Card className="col-span-2 gap-4 opacity-50 md:hidden" delay={2.25} />
      )}

      {stats.items.MARKET_MOST_BETTORS ? (
        <Card className="col-span-2" delay={2}>
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-white px-2 font-mono text-2xl text-black text-shadow">
              <GroupIcon />
              {stats.items.MARKET_MOST_BETTORS.amount}
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg">{stats.items.MARKET_MOST_BETTORS.title}</div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Most popular market</div>
        </Card>
      ) : (
        <Card className="col-span-2 opacity-50" delay={2} />
      )}

      {stats.items.POSITIONS_LARGEST_LOSS ? (
        <Card className="hidden gap-4 md:flex" delay={2.25}>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-clip">
            <div className="flex flex-1 flex-row items-center justify-center">
              <div className="flex flex-row items-center rounded-md bg-red px-2 font-mono text-2xl text-shadow">
                {stats.items.POSITIONS_LARGEST_LOSS.amount}
                <SouthEastIcon />
              </div>
            </div>
            <div>
              <div className="line-clamp-2 text-lg">{stats.items.POSITIONS_LARGEST_LOSS.title}</div>
            </div>
          </div>
          <div className="shrink-0 text-center text-foreground-light">Worst loss</div>
        </Card>
      ) : (
        <Card className="hidden gap-4 opacity-50 md:flex" delay={2.25} />
      )}

      <Card className="col-span-2" delay={2.5}>
        14
        <div className="absolute bottom-0 p-4 text-center text-foreground-light">Popular</div>
      </Card>

      {stats.items.POSITIONS_LARGEST_PROFIT ? (
        <Card className="col-span-2 hidden md:flex lg:hidden" delay={2.75}>
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <div className="mx-2 flex flex-row items-center rounded-md bg-green px-2 font-mono text-2xl text-shadow">
              {stats.items.POSITIONS_LARGEST_PROFIT.amount}
              <NorthEastIcon />
            </div>
            <div>
              <div className="line-clamp-4 pr-4 text-lg">{stats.items.POSITIONS_LARGEST_PROFIT.title}</div>
            </div>
          </div>
          <div className="text-center text-foreground-light">Biggest profit</div>
        </Card>
      ) : (
        <Card className="col-span-2 hidden opacity-50 md:flex lg:hidden" delay={2.75} />
      )}
    </div>
  )
}
