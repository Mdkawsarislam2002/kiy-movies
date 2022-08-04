/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        BannerImg: "./src/assets/netflixBanner.jpg",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
