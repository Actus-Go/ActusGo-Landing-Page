/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
import { wedgesTW } from "@lemonsqueezy/wedges";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' for automatic dark mode based on user's system preference

  theme: {},
  plugins: [wedgesTW()],
});
