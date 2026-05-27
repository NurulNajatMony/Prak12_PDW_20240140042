/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-line': 'pulse-line 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'fly': 'fly 8s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.2', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-line': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        galaxy: {
          bg: '#0a0015',
          card: 'rgba(15,5,40,0.75)',
          purple: '#7c3aed',
          violet: '#a78bfa',
          blue: '#2563eb',
          pink: '#db2777',
        }
      }
    },
  },
  plugins: [],
}
