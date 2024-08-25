export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(45deg, #b3c2f4, #a0adff)',
        'dark-gradient': 'linear-gradient(45deg, #6784f4, #2d3359)',
      },
    },
  },
  darkMode: 'class', // Enable dark mode using the 'dark' class
  plugins: [],
}
