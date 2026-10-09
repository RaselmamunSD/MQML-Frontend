/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    extend: {
      colors: {
        brand: {
          islamic: '#087A35',
          dark: '#075526',
          lime: '#A8B923',
          'lime-light': '#D4E157',
          blue: '#174A9C',
          red: '#D91E2B',
          softBg: '#F7FAF7',
        },
        darkTheme: {
          bg: '#0B130E',
          surface: '#112018',
          card: '#16281E',
          cardHover: '#1D3327',
          border: '#1F3D2B',
        }
      },
      fontFamily: {
        bengali: ['var(--font-bengali)', 'Hind Siliguri', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(8, 122, 53, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(8, 122, 53, 0.12)',
        'dark-card': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
