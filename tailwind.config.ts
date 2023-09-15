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
        'office-specno-blue-normal-gradient':
          'linear-gradient(to bottom, #489DDA 25%, #5aa7de 20%, #74b5e3 60%, #489DDA 65%)',
        'office-gwava-normal-gradient':
          'linear-gradient(to bottom, #FF9B71 25%, #FF9B71 20%, #FF9B71 60%, #FF9B71 65%)',
        'office-orange-normal-gradient':
          'linear-gradient(to bottom, #FB5607 25%, #fb671f 20%, #fc7f43 60%, #fb671f 65%)',
        'office-brown-normal-gradient':
          'linear-gradient(to bottom, #97512c 25%, #a16241 20%, #b07b5f 60%, #b07b5f 16%)',
        'office-indigo-normal-gradient':
          'linear-gradient(to bottom, #dbbadd 25%, #dfc1e0 20%, #e4cbe5 60%, #e4cbe5 16%)',
        'office-pink-normal-gradient':
          'linear-gradient(to bottom, #fc1d7d 25%, #ff197c 20%, #ff3e91 60%, #ff3e91 65%)',
        'office-space-normal-green-gradient':
          'linear-gradient(to bottom, #a9f0d1 25%, #b1f1d6 20%, #bef4dc 60%, #bef4dc 16%)',
        'office-green-normal-gradient':
          'linear-gradient(to bottom, #00b402 25%, #19bb1b 20%, #3ec640 60%, #3ec640 16%)',
        'office-blue-normal-gradient':
          'linear-gradient(to bottom, #0072e8 25%, #1980ea 20%, #3e94ee 60%, #3e94ee 16%)',
        'office-purple-normal-gradient':
          'linear-gradient(to bottom, #8338ec 25%, #8f4cee 20%, #a168f1 60%, #a168f1 16%)',
        'office-yellow-normal-gradient':
          'linear-gradient(to bottom, #ffbe0b 25%, #f2b50e 20%, #f2c54b 60%, #f2c54b 16%)',

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      'specno-gray-text': '#484954',
      'specno-light-bg': '#f8fafc',
      'specno-dust-blue': '#0D4477',
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
      'bold-black': '#000000',
      danger: '#F44336',
      'specno-light-blue': '#E8F3FC',
      ...colors
    }
  },
  plugins: []
};
export default config;
