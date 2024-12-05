/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        special_blue: "var(--special_blue)",
        special_green: "var(--special_green)",
        primary_special: "var(--primary_special)",
        secondary_special: "var(--secondary_special)",
      }
    },
  },
  plugins: [
    fluid
  ],
}