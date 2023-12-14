import {
  Bet,
  LiteMarket,
  Position,
  getBets,
  getGroup,
  getLeagues,
  getMarket,
  getMarkets,
  getPositions,
  getUserByUsername,
  loopIterator,
} from '@/lib/manifold'
import { Stats } from '@/lib/stats'
import _ from 'lodash'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export const DIVISION_NAMES: Record<
  string,
  'silicon' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'masters'
> = {
  0: 'silicon',
  1: 'bronze',
  2: 'silver',
  3: 'gold',
  4: 'platinum',
  5: 'diamond',
  6: 'masters',
}

const DAYS = [
  'sundayCount',
  'mondayCount',
  'tuesdayCount',
  'wednesdayCount',
  'thursdayCount',
  'fridayCount',
  'saturdayCount',
] as const

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined
}

export const statsSchema = z
  .object({
    username: z.string(),
  })
  .strict()

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  const items: Stats['items'] = {}

  try {
    const { searchParams } = new URL(request.url)
    const { username } = statsSchema.parse(Object.fromEntries(searchParams))

    const user = await getUserByUsername(username)

    items['USER_PROFIT'] = { count: user.profitCached.allTime }
    items['USER_STREAK'] = { count: user.currentBettingStreak ?? 0 }
    items['USER_DAYS_SINCE_CREATION'] = {
      count: Math.floor((Date.now() - new Date(user.createdTime).getTime()) / (1000 * 60 * 60 * 24)),
    }

    const leagues = await getLeagues(user.id)

    items['USER_LEAGUES'] = {
      leagues: leagues
        .map((league) => ({
          season: league.season,
          division: DIVISION_NAMES[league.division],
        }))
        .filter((league) => league.season !== 8),
    }

    const markets = await loopIterator(getMarkets, { userId: user.id }, 20)

    const filteredMarkets = markets.filter((market) => new Date(market.createdTime).getFullYear() === 2023)

    const topMarketByLiquidity = _.orderBy(filteredMarkets, (market) => market.totalLiquidity ?? -1, 'desc').at(0)

    if (topMarketByLiquidity) {
      items['MARKET_MOST_LIQUIDITY'] = {
        marketId: topMarketByLiquidity.id,
        url: topMarketByLiquidity.url,
        title: topMarketByLiquidity.question,
        amount: topMarketByLiquidity.totalLiquidity ?? 0,
      }
    }

    const topMarketByBettorCounty = _.orderBy(filteredMarkets, 'uniqueBettorCount', 'desc').at(0)

    if (topMarketByBettorCounty) {
      items['MARKET_MOST_BETTORS'] = {
        marketId: topMarketByBettorCounty.id,
        url: topMarketByBettorCounty.url,
        title: topMarketByBettorCounty.question,
        amount: topMarketByBettorCounty.uniqueBettorCount ?? 0,
      }
    }

    const bets = await loopIterator(getBets, { userId: user.id }, 125)

    const filteredBets = bets.filter((bet) => {
      return !bet.isRedemption && new Date(bet.createdTime).getFullYear() === 2023
    })

    const marketsByBets = _.groupBy(filteredBets, 'contractId')

    const betsByDayOfWeek = _.countBy(bets, (bet) => {
      const date = new Date(bet.createdTime)
      const dayOfWeek = date.getDay()
      // Convert the day number to a string name
      return DAYS[dayOfWeek]
    }) as unknown as Record<(typeof DAYS)[number], number>

    if (betsByDayOfWeek) {
      items['BETS_BY_DAY'] = {
        maxCount: _.max(Object.values(betsByDayOfWeek)) as number,
        ...betsByDayOfWeek,
      }
    }

    let mostBetsInMarket = {
      marketId: '',
      bets: 0,
    }
    _.map(marketsByBets, (bets, marketId) => {
      if (bets.length > mostBetsInMarket.bets) {
        mostBetsInMarket = {
          marketId,
          bets: bets.length,
        }
      }
    })

    if (mostBetsInMarket.marketId) {
      const market = await getMarket({ id: mostBetsInMarket.marketId })
      items['BETS_AGGREGATE_MARKET'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        amount: mostBetsInMarket.bets,
      }
    }

    console.log(`Loading ${Object.keys(marketsByBets).length} markets bet on`)

    const marketPositions = await Promise.all(
      Object.keys(marketsByBets).map(async (contractId) => {
        try {
          const positions = await getPositions({ id: contractId, userId: user.id })
          const market = await getMarket({ id: contractId })
          await new Promise((r) => setTimeout(r, 100))
          return {
            positions,
            market,
          }
        } catch (error) {
          return undefined
        }
      }),
    )

    const filteredMarketPositions = marketPositions.filter(notEmpty)

    const groups: Record<string, number> = {}

    let lowestProfit = { profit: 0, contractId: '' }
    let highestProfit = { profit: 0, contractId: '' }
    let lowestProfitPercent = { profitPercent: 0, contractId: '' }
    let highestProfitPercent = { profitPercent: 0, contractId: '' }

    filteredMarketPositions.map(({ positions, market }) => {
      if (market) {
        market.groupSlugs?.map((slug) => {
          if (!groups[slug]) {
            groups[slug] = 0
          }

          groups[slug]++
        })
      }

      positions.map((position) => {
        if (position.profit < lowestProfit.profit) lowestProfit = position
        if (position.profit > highestProfit.profit) highestProfit = position
        if (position.profitPercent < lowestProfitPercent.profitPercent) lowestProfitPercent = position
        if (position.profitPercent > highestProfitPercent.profitPercent) highestProfitPercent = position
      })
    })

    if (lowestProfit.contractId) {
      const market = await getMarket({ id: lowestProfit.contractId })
      items['POSITIONS_LARGEST_LOSS'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        amount: lowestProfit.profit,
      }
    }

    if (highestProfit.contractId) {
      const market = await getMarket({ id: highestProfit.contractId })
      items['POSITIONS_LARGEST_PROFIT'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        amount: highestProfit.profit,
      }
    }

    if (lowestProfitPercent.contractId) {
      const market = await getMarket({ id: lowestProfitPercent.contractId })
      items['POSITIONS_BEST_PERCENT_LOSS'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        amount: lowestProfitPercent.profitPercent,
      }
    }

    if (highestProfitPercent.contractId) {
      const market = await getMarket({ id: highestProfitPercent.contractId })
      items['POSITIONS_BEST_PERCENT_GAIN'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        amount: highestProfitPercent.profitPercent,
      }
    }

    const maxGroup = _.maxBy(Object.entries(groups), (group) => group[1])

    if (maxGroup) {
      const group = await getGroup({ slug: maxGroup[0] })
      items['BETS_AGGREGATE_TOPIC'] = {
        id: group.id,
        name: group.name,
      }
    }

    const popularMarkets: Array<{ market: LiteMarket; positions: Array<Position>; hashtag: string; answer: string }> =
      []

    const lk99Market = await getMarket({ slug: 'will-the-lk99-room-temp-ambient-pre' })
    const lk99MarketPosition = await getPositions({ id: lk99Market.id, userId: user.id })

    const potyMarket = await getMarket({ slug: 'who-will-be-time-person-of-the-year' })
    const potyMarketPosition = await getPositions({ id: potyMarket.id, userId: user.id })

    const shutdownMarket = await getMarket({ slug: 'will-there-be-a-us-government-shutd' })
    const shutdownMarketPosition = await getPositions({ id: shutdownMarket.id, userId: user.id })

    if (lk99MarketPosition.length) {
      popularMarkets.push({
        market: lk99Market,
        positions: lk99MarketPosition,
        hashtag: '#LK99',
        answer: `${Math.round(lk99Market.probability * 100)}% chance`,
      })
    }

    if (potyMarketPosition.length) {
      popularMarkets.push({
        market: potyMarket,
        positions: potyMarketPosition,
        hashtag: '#POTY',
        answer: `Taylor Swift`,
      })
    }

    if (shutdownMarketPosition.length) {
      popularMarkets.push({
        market: shutdownMarket,
        positions: shutdownMarketPosition,
        hashtag: '#SHUTDOWN',
        answer: `${Math.round(shutdownMarket.probability * 100)}% chance`,
      })
    }

    if (!popularMarkets.find(({ market }) => market.id === lk99Market.id)) {
      popularMarkets.push({
        market: lk99Market,
        positions: lk99MarketPosition,
        hashtag: '#LK99',
        answer: `${Math.round(lk99Market.probability * 100)}% chance`,
      })
    }

    if (!popularMarkets.find(({ market }) => market.id === potyMarket.id)) {
      popularMarkets.push({
        market: potyMarket,
        positions: potyMarketPosition,
        hashtag: '#POTY',
        answer: `Taylor Swift`,
      })
    }

    if (!popularMarkets.find(({ market }) => market.id === shutdownMarket.id)) {
      popularMarkets.push({
        market: shutdownMarket,
        positions: shutdownMarketPosition,
        hashtag: '#SHUTDOWN',
        answer: `${Math.round(shutdownMarket.probability * 100)}% chance`,
      })
    }

    const [firstPopularMarketSlot, secondPopularMarketSlot] = popularMarkets

    if (firstPopularMarketSlot) {
      const { market, positions, hashtag, answer } = firstPopularMarketSlot
      const position = positions[0]
      items['POPULAR_1'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        hashtag,
        answer,
        position: position.profit ?? undefined,
      }
    }

    if (secondPopularMarketSlot) {
      const { market, positions, hashtag, answer } = secondPopularMarketSlot
      const position = positions[0]
      items['POPULAR_2'] = {
        marketId: market.id,
        url: market.url,
        title: market.question,
        hashtag,
        answer,
        position: position.profit ?? undefined,
      }
    }
  } catch (error) {
    console.log(error)
  }

  const data: Stats = {
    processing: false,
    items,
  }
  return Response.json(data)
}