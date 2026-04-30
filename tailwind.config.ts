import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        kids: {
          light: '#B2E0E6',
          DEFAULT: '#7CDAE3',
          dark: '#58BACD',
        },
        parents: {
          light: '#F6CFCF',
          DEFAULT: '#F05A28',
          dark: '#C84C1D',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fade: 'fade 0.5s ease-in-out',
        slide: 'slide 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
