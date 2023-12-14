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
  JlVpsgzLsbOUT4pajswVMr0ZzmM2: {
    processing: false,
    items: {
      USER_PROFIT: {
        count: 351740.73387932003,
      },
      USER_STREAK: {
        count: 209,
      },
      USER_DAYS_SINCE_CREATION: {
        count: 659,
      },
      USER_LEAGUES: {
        leagues: [
          {
            season: 7,
            division: 'masters',
          },
          {
            season: 6,
            division: 'masters',
          },
          {
            season: 5,
            division: 'masters',
          },
          {
            season: 4,
            division: 'diamond',
          },
          {
            season: 3,
            division: 'platinum',
          },
          {
            season: 2,
            division: 'gold',
          },
          {
            season: 1,
            division: 'bronze',
          },
        ],
      },
      MARKET_MOST_LIQUIDITY: {
        marketId: 'fOV0K6Zbf9dTsUk00agH',
        url: 'https://manifold.markets/Joshua/who-will-be-time-person-of-the-year',
        title: "Who will be TIME's Person of the Year 2023?",
        amount: 80655,
      },
      MARKET_MOST_BETTORS: {
        marketId: 'fOV0K6Zbf9dTsUk00agH',
        url: 'https://manifold.markets/Joshua/who-will-be-time-person-of-the-year',
        title: "Who will be TIME's Person of the Year 2023?",
        amount: 1935,
      },
      BETS_BY_DAY: {
        maxCount: 27774,
        wednesdayCount: 17221,
        tuesdayCount: 27774,
        mondayCount: 25734,
        sundayCount: 12481,
        saturdayCount: 12881,
        fridayCount: 14935,
        thursdayCount: 13974,
      },
      BETS_AGGREGATE_MARKET: {
        marketId: 'oHKwM5KXR9lmKYgVIfBR',
        url: 'https://manifold.markets/sophiawisdom/why-was-sam-altman-fired',
        title: 'Why was Sam Altman fired?',
        amount: 654,
      },
      POSITIONS_LARGEST_LOSS: {
        marketId: 'xuXB9fuwa6d3m5SYs6gw',
        url: 'https://manifold.markets/Joshua/finalists-only-who-will-be-the-time',
        title: '[Finalists Only] Who will be the TIME Person of the Year 2023?',
        amount: -5705.611655350196,
      },
      POSITIONS_LARGEST_PROFIT: {
        marketId: 'AAMJTwjx0zAY2iMgwRlC',
        url: 'https://manifold.markets/SimonGrayson/who-will-be-the-next-speaker-of-the-0b49bf53ad12',
        title: 'Who will be the next Speaker of the US House of Representatives?',
        amount: 40465.73768267317,
      },
      POSITIONS_BEST_PERCENT_LOSS: {
        marketId: 'jRgDlh6uRS2Y13ajRFlh',
        url: 'https://manifold.markets/SimonLejeune/will-chatgpt-be-time-person-of-the',
        title: 'Will ChatGPT be Time Person of the Year in 2023?',
        amount: -100,
      },
      POSITIONS_BEST_PERCENT_GAIN: {
        marketId: 'wOhUdm6PFqu4ylA7Gjjp',
        url: 'https://manifold.markets/saulmunn/will-manifold-release-a-manifoldlov',
        title: 'Will Manifold release a Manifold.Love app by EOY?',
        amount: 681.5312705934216,
      },
      BETS_AGGREGATE_TOPIC: {
        id: '2e9a87df-94e3-458c-bc5f-81e891b13101',
        name: 'Manifold.love Relationships',
      },
      POPULAR_1: {
        marketId: '1sfbjcTu6zgqjCVjqWA2',
        url: 'https://manifold.markets/QuantumObserver/will-the-lk99-room-temp-ambient-pre',
        title: 'Will the LK-99 room temp, ambient pressure superconductivity pre-print replicate before 2025?',
        hashtag: '#LK99',
        answer: '3% chance',
        position: 2293.394197861606,
      },
      POPULAR_2: {
        marketId: 'fOV0K6Zbf9dTsUk00agH',
        url: 'https://manifold.markets/Joshua/who-will-be-time-person-of-the-year',
        title: "Who will be TIME's Person of the Year 2023?",
        hashtag: '#POTY',
        answer: 'Taylor Swift',
        position: 9200.06114154471,
      },
    },
  },
  AAlytu8Z2cYd1ewYzuqhkU9NMgt2: {
    processing: false,
    items: {
      USER_PROFIT: {
        count: 2116.190088736489,
      },
      USER_STREAK: {
        count: 134,
      },
      USER_DAYS_SINCE_CREATION: {
        count: 270,
      },
      USER_LEAGUES: {
        leagues: [
          {
            season: 7,
            division: 'platinum',
          },
          {
            season: 6,
            division: 'platinum',
          },
          {
            season: 5,
            division: 'gold',
          },
          {
            season: 4,
            division: 'bronze',
          },
          {
            season: 3,
            division: 'bronze',
          },
        ],
      },
      MARKET_MOST_LIQUIDITY: {
        marketId: 'XVHTeAPvz3T8lZRNdIMb',
        url: 'https://manifold.markets/Nikos/will-the-announcement-for-the-next',
        title:
          '[M2500 subsidy] Will the announcement for the next World of Warcraft expansion include a new playable race?',
        amount: 3335,
      },
      MARKET_MOST_BETTORS: {
        marketId: 'XVHTeAPvz3T8lZRNdIMb',
        url: 'https://manifold.markets/Nikos/will-the-announcement-for-the-next',
        title:
          '[M2500 subsidy] Will the announcement for the next World of Warcraft expansion include a new playable race?',
        amount: 39,
      },
      BETS_BY_DAY: {
        maxCount: 412,
        tuesdayCount: 375,
        mondayCount: 104,
        sundayCount: 191,
        saturdayCount: 146,
        fridayCount: 403,
        thursdayCount: 412,
        wednesdayCount: 239,
      },
      BETS_AGGREGATE_MARKET: {
        marketId: 'oMnFF70ChMFwPPdH0mF9',
        url: 'https://manifold.markets/perryisdead/apple-scary-fast-october-event-pred',
        title: 'Apple "scary fast" October event predictions!',
        amount: 22,
      },
      POSITIONS_LARGEST_LOSS: {
        marketId: 'hPUkj4hpnNzVyaoeaXub',
        url: 'https://manifold.markets/MartinRandall/the-first-piece-about-manifold-mark',
        title: 'The first piece about Manifold Markets in New York Times will be positive',
        amount: -900,
      },
      POSITIONS_LARGEST_PROFIT: {
        marketId: 'agaoByQqJadT4i0i2by0',
        url: 'https://manifold.markets/kian_spire/will-donald-trump-make-at-least-thr',
        title: 'Will Donald Trump make at least three tweets in 2023?',
        amount: 645.0497368244552,
      },
      POSITIONS_BEST_PERCENT_LOSS: {
        marketId: 'NQp1zLQ6F9dyK9vl9SYR',
        url: 'https://manifold.markets/Gen/will-bill-w-the-doggo-make-another',
        title: 'Santa Paws: Will Bill W (the doggo) make another appearance on stream? ',
        amount: -100,
      },
      POSITIONS_BEST_PERCENT_GAIN: {
        marketId: 'QK9BBaKxRCf4KzgCWl8H',
        url: 'https://manifold.markets/EhMe11/a-tornado-warning-was-just-announce',
        title: 'A tornado warning was just announced in Ottawa Ontario Canada, will one touch down by 10pm EST?',
        amount: 3620.111731843566,
      },
      BETS_AGGREGATE_TOPIC: {
        id: 'IlzY3moWwOcpsVZXCVej',
        name: '🖥️ Technology',
      },
      POPULAR_1: {
        marketId: '1sfbjcTu6zgqjCVjqWA2',
        url: 'https://manifold.markets/QuantumObserver/will-the-lk99-room-temp-ambient-pre',
        title: 'Will the LK-99 room temp, ambient pressure superconductivity pre-print replicate before 2025?',
        hashtag: '#LK99',
        answer: '3% chance',
        position: -7.486876489559938,
      },
      POPULAR_2: {
        marketId: 'fOV0K6Zbf9dTsUk00agH',
        url: 'https://manifold.markets/Joshua/who-will-be-time-person-of-the-year',
        title: "Who will be TIME's Person of the Year 2023?",
        hashtag: '#POTY',
        answer: 'Taylor Swift',
        position: -641.9558145732578,
      },
    },
  },
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
