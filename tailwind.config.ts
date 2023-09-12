import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      'specno-gray-text': '#484954',
      'specno-light-bg': '#f8fafc',
      'office-yellow': {
        normal: '#FFBE0B'
      },
      'office-gwava': {
        normal: '#FF9B71'
      },
      'office-orange': {
        normal: '#FB5607'
      },
      'office-brown': {
        normal: '#97512C'
      },
      'office-indigo': {
        normal: '#DBBADD'
      },
      'office-pink': {
        normal: '#FF006E'
      },
      'office-space-green': {
        normal: '#A9F0D1'
      },
      'office-green': {
        normal: '#00B402'
      },
      'office-specno-blue': {
        normal: '#489DDA'
      },
      'office-blue': {
        normal: '#0072E8'
      },
      'office-purple': {
        normal: '#8338EC'
      },
      selected: '#475569',
      'light-gray-text': '#F8FAFC',
      ...colors
    }
  },
  plugins: []
};
export default config;
