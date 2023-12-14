'use server'

import { kv } from '@vercel/kv'
import _ from 'lodash'

export type Stats = {
  processing: boolean
  lastStartedProcessing?: number
  lastFinishedProcessing?: number
  items: {
    USER_STREAK?: {
      count: number
    }
    BETS_AGGREGATE_TOPIC?: {
      id: string
      name: string
    }
    POSITIONS_LARGEST_PROFIT?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    USER_PROFIT?: {
      count: number
    }
    USER_LEAGUES?: {
      leagues: Array<{
        season: number
        division: 'silicon' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'masters'
      }>
    }
    BETS_AGGREGATE_MARKET?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    POSITIONS_BEST_PERCENT_LOSS?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    USER_DAYS_SINCE_CREATION?: {
      count: number
    }
    BETS_BY_DAY?: {
      maxCount: number
      mondayCount: number
      tuesdayCount: number
      wednesdayCount: number
      thursdayCount: number
      fridayCount: number
      saturdayCount: number
      sundayCount: number
    }
    POSITIONS_BEST_PERCENT_GAIN?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    MARKET_MOST_LIQUIDITY?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    POSITIONS_LARGEST_LOSS?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    MARKET_MOST_BETTORS?: {
      marketId: string
      url: string
      title: string
      amount: number
    }
    POPULAR_1?: {
      marketId: string
      url: string
      title: string
      hashtag: string
      answer: string
      position?: number
    }
    POPULAR_2?: {
      marketId: string
      url: string
      title: string
      hashtag: string
      answer: string
      position?: number
    }
  }
}

export async function getStats(userId: string) {
  const stats = await kv.get<Stats | undefined>(`user:${userId}`)

  return stats ?? { processing: false, items: {} }
}

export async function updateStats(userId: string, stats: Partial<Stats>) {
  const existingStats = await getStats(userId)

  await kv.set<Stats>(`user:${userId}`, _.merge(existingStats, stats))
}
