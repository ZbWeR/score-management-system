import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
} satisfies Config
