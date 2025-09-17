/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f6f9fc',
          primary: '#6fb3ff',
          secondary: '#a0e9ff',
          accent: '#ffc6ff',
          ink: '#0f172a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      boxShadow: {
        subtle: '0 10px 30px -10px rgba(15, 23, 42, 0.15)',
        glow: '0 0 30px rgba(99, 102, 241, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'spiral-in': {
          '0%': {
            transform: 'rotate(0deg) translateX(480px) rotate(0deg)',
            opacity: '0',
          },
          '60%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(720deg) translateX(140px) rotate(-720deg)',
            opacity: '1',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'slide-out-left': {
          '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(-60px) scale(0.98)' },
        },
        'slide-out-right': {
          '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(60px) scale(0.98)' },
        },
      },
      animation: {
        'spiral-in': 'spiral-in 2.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        orbit: 'orbit 22s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 700ms ease both',
        'slide-in-right': 'slide-in-right 700ms ease both',
        'slide-out-left': 'slide-out-left 500ms ease both',
        'slide-out-right': 'slide-out-right 500ms ease both',
      },
    },
  },
  plugins: [],
}
