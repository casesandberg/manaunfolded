'use server'

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

const db: Record<string, Stats> = {
  yhvV0TjNf6bDzOBBZ5cHGu1sPlF3: {
    processing: false,
    items: {
      USER_PROFIT: {
        count: 3840.3366279283982,
      },
      USER_STREAK: {
        count: 46,
      },
      USER_DAYS_SINCE_CREATION: {
        count: 45,
      },
      USER_LEAGUES: {
        leagues: [
          {
            season: 7,
            division: 'gold',
          },
          {
            season: 6,
            division: 'bronze',
          },
        ],
      },
      MARKET_MOST_LIQUIDITY: {
        marketId: 'KhkJknrAwsC7u4MSuvYv',
        url: 'https://manifold.markets/case/manifold-live-episode-2-what-will-b',
        title: 'Manifold: Live! - Episode 2: What will be true about the episode',
        amount: 1405,
      },
      MARKET_MOST_BETTORS: {
        marketId: 'uA14WKMZ0Cclo2UB231P',
        url: 'https://manifold.markets/case/will-sam-altman-be-reinstated-as-ce',
        title: 'Will Sam Altman be reinstated as CEO of OpenAI by Sunday, November 19th?',
        amount: 100,
      },
      BETS_BY_DAY: {
        maxCount: 980,
        wednesdayCount: 176,
        tuesdayCount: 427,
        mondayCount: 980,
        sundayCount: 937,
        saturdayCount: 115,
        fridayCount: 202,
        thursdayCount: 528,
      },
      BETS_AGGREGATE_MARKET: {
        marketId: 'rUGwv9VePSABsYLBEQB6',
        url: 'https://manifold.markets/Nikos/manifold-live-sun-123-episode-1-wha',
        title: 'Manifold: Live! - Sun 12/3 - Episode 1: - What will be true about this show',
        amount: 67,
      },
      POSITIONS_LARGEST_LOSS: {
        marketId: 'QmLTgE6BcQ3GxNdA4Wy6',
        url: 'https://manifold.markets/cc6/will-manifold-have-more-than-1500-e',
        title: 'Will Manifold have more than 1500 engaged users by the end of November?',
        amount: -883.5343842686843,
      },
      POSITIONS_LARGEST_PROFIT: {
        marketId: 'FsEpR6sL8x63ioefKuXB',
        url: 'https://manifold.markets/BokiLee/which-game-will-win-goty-at-the-gam',
        title: 'Which game will win GOTY at the Game Awards in 2023',
        amount: 487.4328591469266,
      },
      POSITIONS_BEST_PERCENT_LOSS: {
        marketId: '98NySaXDCLWlncuR7wyn',
        url: 'https://manifold.markets/SiyaSingh/will-the-us-federal-reserve-keep-ra',
        title: 'Will the US Federal Reserve keep rates constant at the Federal Reserve meeting on December 13th?',
        amount: -100,
      },
      POSITIONS_BEST_PERCENT_GAIN: {
        marketId: 'YdzNNMgvggbsi5V6vAfu',
        url: 'https://manifold.markets/Kraalnaxx/what-games-will-be-nominated-for-ga-d56c61bef722',
        title: 'What games will be nominated for Game of the Year at The Game Awards 2023?',
        amount: 545.6437541035058,
      },
      BETS_AGGREGATE_TOPIC: {
        id: 'IlzY3moWwOcpsVZXCVej',
        name: '🖥️ Technology',
      },
      POPULAR_1: {
        marketId: 'fOV0K6Zbf9dTsUk00agH',
        url: 'https://manifold.markets/Joshua/who-will-be-time-person-of-the-year',
        title: "Who will be TIME's Person of the Year 2023?",
        hashtag: '#POTY',
        answer: 'Taylor Swift',
        position: -40.19532900307742,
      },
      POPULAR_2: {
        marketId: 'skOczsGCpLFvjjsxqvWm',
        url: 'https://manifold.markets/cash/will-there-be-a-us-government-shutd',
        title: 'Will there be a US government shutdown before the end of 2023?',
        hashtag: '#SHUTDOWN',
        answer: '1% chance',
        position: 5.0891214960965385,
      },
    },
  },
}

export async function getStats(userId: string) {
  return db[userId] || { processing: false, items: {} }
}

export async function startProcessing(userId: string) {
  db[userId] = { items: { ...db[userId]?.items }, processing: true }
}
