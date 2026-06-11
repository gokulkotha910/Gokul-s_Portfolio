/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        'dark-bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'dark-surface': 'rgb(var(--color-surface) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'SF Pro Display', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #6366F1 35%, #8B5CF6 70%, #06B6D4 100%)',
        'timeline-gradient': 'linear-gradient(180deg, #3B82F6, #8B5CF6)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.25)',
        'glass-hover': '0 20px 60px rgba(0,0,0,0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
