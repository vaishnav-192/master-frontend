// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-double': 'linear-gradient(to bottom right, #1e3a8a, #3b82f6, #93c5fd)',
      },
    },
  },
  plugins: [],
}
