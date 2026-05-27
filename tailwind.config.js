/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-violet': 'radial-gradient(#7c3aed, transparent)',
        'radial-blue': 'radial-gradient(#1d4ed8, transparent)',
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'float': 'floatP 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.4s ease',
        'fly': 'flyAnimation 10s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.2', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        },
        floatP: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        flyAnimation: {
          '0%': { transform: 'translate(-60px, 10vh) rotate(-45deg)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { transform: 'translate(110vw, -10vh) rotate(-45deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}