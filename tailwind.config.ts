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
        primaryColor: '#004274',
        secondaryColor: '#00aeff',
        secondaryLightColor: '#c7ecfc',
        tertiaryColor: '#566f7a',
      },
    },
  },
  plugins: [],
};
export default config;
