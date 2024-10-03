/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}", // Files in the components folder
    "./tabs/**/*.{js,ts,jsx,tsx}", // Files in the tabs folder
    "./*.{js,ts,jsx,tsx}" // TSX files in the root directory
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
