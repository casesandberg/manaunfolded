import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '0 1px rgba(0,0,0,0.2)',
      },
      colors: {
        foreground: '#232323',
        red: '#F44336',
        green: '#4CAF50',
        yellow: '#FFEB3B',
        purple: '#673AB7',
        blue: '#03A9F4',
      },
      textColor: {
        foreground: {
          DEFAULT: '#ffffff',
          light: 'rgba(255,255,255,0.5)',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
export default config
