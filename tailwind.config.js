module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      colors: {
        transparent: "transparent",
        'base': '#4762E6',
        'accent': '#4BBBF2',
        'light-shade': '#C2CAF2'
      },
      backgroundImage: {
        'background': "url('/images/background/waves.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}