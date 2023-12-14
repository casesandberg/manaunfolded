'use client'

import { User } from '@/lib/manifold'
import { Combobox, Transition } from '@headlessui/react'
import { useParams, useRouter } from 'next/navigation'
import { Fragment, useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { useDebounce } from '@uidotdev/usehooks'

const SearchIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M15.755 14.2549H14.965L14.685 13.9849C15.665 12.8449 16.255 11.3649 16.255 9.75488C16.255 6.16488 13.345 3.25488 9.755 3.25488C6.165 3.25488 3.255 6.16488 3.255 9.75488C3.255 13.3449 6.165 16.2549 9.755 16.2549C11.365 16.2549 12.845 15.6649 13.985 14.6849L14.255 14.9649V15.7549L19.255 20.7449L20.745 19.2549L15.755 14.2549ZM9.755 14.2549C7.26501 14.2549 5.255 12.2449 5.255 9.75488C5.255 7.26488 7.26501 5.25488 9.755 5.25488C12.245 5.25488 14.255 7.26488 14.255 9.75488C14.255 12.2449 12.245 14.2549 9.755 14.2549Z"
      fill="currentColor"
    />
  </svg>
)

const KeyboardArrowRightIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z" fill="currentColor" />
  </svg>
)

export function Search({
  focusOnRender,
  searchUsers,
  initialSuggestions = [],
}: {
  focusOnRender?: boolean
  searchUsers: (query: string) => Promise<Array<User>>
  initialSuggestions?: Array<User>
}) {
  const router = useRouter()
  const params = useParams()
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState<Array<User>>(initialSuggestions)
  const debouncedQuery = useDebounce(query, 200)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initialSuggestions.length && debouncedQuery === '') {
      return
    }
    searchUsers(debouncedQuery).then((users) => {
      setUsers(users)
    })
  }, [debouncedQuery, searchUsers]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (focusOnRender) {
      inputRef.current?.focus()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Combobox onChange={(username) => router.push(`/${username}`)} immediate>
      <div className="relative w-full md:w-[400px]">
        <SearchIcon className="pointer-events-none absolute left-2 top-2 text-foreground-light" />
        <Combobox.Input
          ref={inputRef}
          placeholder={params.username ? String(params.username) : 'Search for a user...'}
          onChange={(event) => setQuery(event.target.value)}
          className="h-10 w-full rounded-2xl bg-white bg-opacity-10 pl-9 text-foreground transition-[background] hover:bg-opacity-15 focus-visible:outline-none focus-visible:ring focus-visible:ring-white/50"
          onBlur={() => {
            if (inputRef.current) {
              inputRef.current.value = ''
            }
          }}
        />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="translate-y-2 opacity-0"
          enterTo="translate-y-0 opacit200"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Combobox.Options className="absolute z-50 mt-4 max-h-64 w-full overflow-auto rounded-2xl bg-white/15 py-1 text-base ring-1 ring-black/5 backdrop-blur-lg focus:outline-none sm:text-sm">
            {users.length ? (
              users.map((user) => (
                <Combobox.Option
                  key={user.id}
                  value={user.username}
                  className={({ active }) =>
                    `relative flex cursor-default select-none flex-row items-center overflow-hidden border-t border-black/30 px-3 py-2.5 first:border-t-0 ${
                      active
                        ? 'bg-foreground/20 text-white [&>span]:text-white/60 [&>svg]:opacity-100'
                        : 'text-white/60 [&>svg]:opacity-0'
                    } `
                  }
                >
                  <KeyboardArrowRightIcon className="flex-shrink-0" />
                  <div className="flex-shrink-0 font-semibold">{user.name}</div>
                  <span className="ml-2 block flex-1 text-ellipsis text-white/40">@{user.username}</span>
                </Combobox.Option>
              ))
            ) : (
              <div className="relative cursor-default select-none px-4 py-2 text-center text-white/40">
                No one found
              </div>
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
