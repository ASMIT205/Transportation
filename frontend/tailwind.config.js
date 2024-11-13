/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        peach: '#ff8633', // Custom color name and code
        BlueN:'#0f74ba  '
      },
    },
  },
  plugins: [],
}
