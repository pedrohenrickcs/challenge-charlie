import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#87cefa',
        'background-blue': '#87ceeb',
        'background-yellow': '#ffc82c',
        'background-gray': '#8492a6',
        'background-white': '#ffffff',
        'fill-yellow': '#ffc82c',
        textPrimary: '#778899',
        textSecondary: '#ffffff',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
}
export default config
