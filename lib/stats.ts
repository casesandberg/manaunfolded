export type Stats = {
  processing: boolean
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
      totalCount: number
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
  }
}

const db: Record<string, Stats> = {
  yhvV0TjNf6bDzOBBZ5cHGu1sPlF3: {
    processing: false,
    items: {
      USER_STREAK: {
        count: 47,
      },
      BETS_AGGREGATE_TOPIC: {
        id: 'Technology',
        name: 'Technology',
      },
      POSITIONS_LARGEST_PROFIT: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Which game will win GOTY at the Game Awards in 2023',
        amount: 487,
      },
      USER_PROFIT: {
        count: 4160,
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
      BETS_AGGREGATE_MARKET: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Manifold: Live! - Sun 12/3 - Episode 1: - What will be true about this show',
        amount: 67,
      },
      POSITIONS_BEST_PERCENT_LOSS: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Will TIME Magazine announce the announcement of the Person of The Year before Wednesday, December 6th?',
        amount: -100,
      },
      USER_DAYS_SINCE_CREATION: {
        count: 47,
      },
      BETS_BY_DAY: {
        totalCount: 825,
        mondayCount: 40,
        tuesdayCount: 30,
        wednesdayCount: 20,
        thursdayCount: 10,
        fridayCount: 5,
        saturdayCount: 0,
        sundayCount: 700,
      },
      POSITIONS_BEST_PERCENT_GAIN: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'What games will be nominated for Game of the Year at The Game Awards 2023?',
        amount: 545,
      },
      MARKET_MOST_LIQUIDITY: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Will Sam Altman be reinstated as CEO of OpenAI by Sunday, November 19th?',
        amount: 1215,
      },
      POSITIONS_LARGEST_LOSS: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Will Manifold have more than 1500 engaged users by the end of November?',
        amount: -883,
      },
      MARKET_MOST_BETTORS: {
        marketId: '123',
        url: 'https://manifold.markets/123',
        title: 'Will Sam Altman be reinstated as CEO of OpenAI by Sunday, November 19th?',
        amount: 100,
      },
    },
  },
}

export function getStats(userId: string) {
  return db[userId] || { processing: true, items: {} }
}
