import defaultTheme from 'tailwindcss/defaultTheme'
import defaultColors from 'tailwindcss/colors'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import forms from '@tailwindcss/forms'
import headlessUi from '@headlessui/tailwindcss'
import heroPatterns from 'tailwind-heropatterns'
import type { Config } from 'tailwindcss'
import { colors as appColors } from './design/tokens/colors'

const colors = { ...defaultColors, ...appColors }

export default <Partial<Config>>{
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        brand: colors.toreaBay,
        secondary: colors.tango,
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      boxShadow: {
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Salesforce Sans', 'Inter var', 'Inter', 'DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        display: ['Bungee', 'Pica'],
        mono: ['Monaspace Neon', 'Space Mono', 'Fira Code', 'Consolas', 'Menlo', 'Monaco', 'Courier', 'monospace', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        salesforce: ['Salesforce Sans', 'system-ui', 'sans-serif'],
        proto: [
          'Flow Circular',
          'Redacted Script',
          'Flow Block',
          'Blokk Neue',
          'Blokk',
          'Flow Rounded',
          'cursive',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'wiggle': 'wiggle 1s infinite',
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'shimmer': {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
      },
    },
  },
  plugins: [
    aspectRatio,
    containerQueries,
    headlessUi,
    forms,
    heroPatterns({
      patterns: [],
      // The foreground colors of the pattern
      colors: {
        'default': '#9C92AC',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
  ],
}
