import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkColor: '#0b3352',
        primaryColor: '#004274',
        secondaryColor: '#00aeff',
        secondaryLightColor: '#c7ecfc',
        secondaryLightTransparentColor: 'rgb(52, 155, 235,0.9)',
        tertiaryColor: '#566f7a',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
