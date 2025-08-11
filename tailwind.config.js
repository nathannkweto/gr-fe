/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,js,html}'
  ],
  theme: {
    extend: {
      colors: {
      primary: "#B8860B",
      secondary: "#DAA520",
    }
    },
  },
  plugins: [],
}

