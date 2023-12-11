import { Container } from './Container'

const SearchIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M15.755 14.2549H14.965L14.685 13.9849C15.665 12.8449 16.255 11.3649 16.255 9.75488C16.255 6.16488 13.345 3.25488 9.755 3.25488C6.165 3.25488 3.255 6.16488 3.255 9.75488C3.255 13.3449 6.165 16.2549 9.755 16.2549C11.365 16.2549 12.845 15.6649 13.985 14.6849L14.255 14.9649V15.7549L19.255 20.7449L20.745 19.2549L15.755 14.2549ZM9.755 14.2549C7.26501 14.2549 5.255 12.2449 5.255 9.75488C5.255 7.26488 7.26501 5.25488 9.755 5.25488C12.245 5.25488 14.255 7.26488 14.255 9.75488C14.255 12.2449 12.245 14.2549 9.755 14.2549Z"
      fill="currentColor"
    />
  </svg>
)

export function Header() {
  return (
    <header>
      <Container>
        <div className="bg-foreground my-4 flex h-14 flex-row items-center justify-between gap-6 rounded-3xl px-4 pr-2 md:px-6">
          <h2 className="text-foreground-light text flex-1 font-mono md:text-lg">mana/unfolded</h2>
          <div className="relative w-full md:w-[400px]">
            <SearchIcon className="text-foreground-light pointer-events-none absolute left-2 top-2" />
            <input
              className="text-foreground h-10 w-full rounded-2xl bg-white bg-opacity-10 pl-9 focus-visible:outline-none focus-visible:ring focus-visible:ring-white/50"
              value="case"
            />
          </div>
          <div className="hidden flex-1 md:block" />
        </div>
      </Container>
    </header>
  )
}
