/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#f1f1f1"
        },
        yellow: {
          300: "#ecc052"
        },
        blue: {
          200: "#0077B5",
          1000: "#1da1f2"
        }
      },
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        torchGradient: {
          '0%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '50% 0%' },
        },
      },
      animation: {
        moveGradient: 'moveGradient 3s ease infinite',
        torchGradient: 'torchGradient 5s ease infinite',
      },
    },
  },
  plugins: [],
}
