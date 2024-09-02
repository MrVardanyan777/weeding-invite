/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main-bg': '#f5f3f3',
      'brown': '#a5918b',
      'white': '#fff'
    },
    backgroundImage: {
      'hero-bg': "url('src/assets/images/hero.webp')"
    },
    fontFamily: {
      sacramento: ["Sacramento"],
      greatVibes: ["Great Vibes"],
    },
  
  },
  plugins: [],
}

