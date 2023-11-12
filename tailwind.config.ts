import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3e63dd',
        'p-t': '#3358d4',
        'p-0': '#fdfdfe',
        'p-1': '#edf2fe',
        'p-2': '#e1e9ff'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('daisyui')]
} satisfies Config
