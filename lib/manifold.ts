'use server'

import _ from 'lodash'

const MANIFOLD_API = 'https://api.manifold.markets'

export type User = {
  id: string
  name: string
  username: string
  avatarUrl: string
  balance: number
  createdTime: number
  profitCached: {
    allTime: number
  }
  currentBettingStreak: number
}

export type League = {
  season: number
  division: number
  cohort: string
  rankSnapshot: number
}

export type LiteMarket = {
  id: string

  creatorUsername: string
  creatorName: string
  createdTime: number
  creatorAvatarUrl?: string

  closeTime?: number
  question: string
  description: string

  tags: string[]

  url: string

  outcomeType: string // BINARY, FREE_RESPONSE, or NUMERIC
  mechanism: string // dpm-2 or cpmm-1

  probability: number
  pool: { outcome: number } // For CPMM markets, the number of shares in the liquidity pool. For DPM markets, the amount of mana invested in each answer.
  p?: number // CPMM markets only, probability constant in y^p * n^(1-p) = k
  totalLiquidity?: number // CPMM markets only, the amount of mana deposited into the liquidity pool

  volume: number
  volume7Days: number
  volume24Hours: number

  isResolved: boolean
  resolutionTime?: number
  resolution?: string
  resolutionProbability?: number // Used for BINARY markets resolved to MKT

  uniqueBettorCount?: number
  groupSlugs?: Array<string>
}

export type Bet = {
  id: string
  userId: string
  username: string
  contractId: string
  createdTime: number

  amount: number // bet size; negative if SELL bet
  loanAmount?: number
  outcome: string
  shares: number // dynamic parimutuel pool weight or fixed ; negative if SELL bet

  probBefore: number
  probAfter: number

  sale?: {
    amount: number // amount user makes from sale
    betId: string // id of bet being sold
  }

  isSold?: boolean // true if this BUY bet has been sold
  isAnte?: boolean
  isLiquidityProvision?: boolean
  isRedemption?: boolean
}

export type Position = {
  profit: number
  contractId: string
  question: string
  profitPercent: number
}

export type Group = {
  id: string
  name: string
  slug: string
}

async function fetchApi<T extends object>(method: string, path: string, body?: Record<string, string | number>) {
  const res = await fetch(`${MANIFOLD_API}${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  try {
    const json = (await res.json()) as T | { error: string } | { message: string }
    // guard against both manifold error types
    if ('error' in json) {
      throw new Error(json.error ?? 'API Error')
    } else if ('message' in json) {
      throw new Error(json.message ?? 'API Error')
    }
    return json
  } catch (error) {
    console.error(error)
    throw error
  }
}

function UrlWithParams(url: string, params: Record<string, string>) {
  return `${url}?${new URLSearchParams(_.omitBy(params, _.isNil)).toString()}`
}

export async function getUserByUsername(username: string) {
  return fetchApi<User>('GET', `/v0/user?username=${username}`)
}

export async function searchUsers(term: string, limit: number = 5) {
  return fetchApi<Array<User>>('GET', `/search-users?term=${term}&limit=${limit}`)
}

export async function getLeagues(userId: string) {
  return fetchApi<Array<League>>('GET', `/v0/leagues?userId=${userId}`)
}

export async function getMarkets(params: { limit?: string; before?: string; userId?: string }) {
  return fetchApi<Array<LiteMarket>>('GET', UrlWithParams('/v0/markets', params))
}

export async function getBets(params: { limit?: string; before?: string; userId?: string }) {
  return fetchApi<Array<Bet>>('GET', UrlWithParams('/v0/bets', params))
}

export async function getPositions(params: { id: string; userId?: string }) {
  return fetchApi<Array<Position>>('GET', UrlWithParams('/v0/positions', params))
}

export async function getMarket(params: { id: string } | { slug: string }) {
  return fetchApi<LiteMarket>('GET', UrlWithParams('/v0/market', params))
}

export async function getGroup(params: { id: string } | { slug: string }) {
  return fetchApi<Group>('GET', UrlWithParams('/v0/group', params))
}

export const loopIterator = async <P, R extends Array<any>>(
  iterator: (params: P) => Promise<R>,
  params: P,
  maxLoops = Infinity,
  limit = 1000,
) => {
  let iterations = 0
  const collection = [] as unknown as R
  let before: string | undefined = undefined

  while (iterations < maxLoops) {
    const items = await iterator({ ...params, limit, before })

    collection.push(...items)
    before = items.at(-1)?.id
    iterations++

    console.log('Loaded', items.length, iterator.name, 'before', before)

    if (items.length < limit) break
  }

  return collection
}
