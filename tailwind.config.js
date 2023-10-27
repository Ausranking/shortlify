/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   mini: "400px" ,
    //   ...defaultTheme.screens,
    // },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        dark_violet: "hsl(257, 27%, 26%)",
        grayish_violet: "hsl(257, 7%, 63%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        darker_violet: "hsl(260, 8%, 14%)",
        sea_salt: "rgb(247, 247, 247)",
        rose: "rgb(204, 39, 93)",
      },
      backgroundImage: {
        "boost-texture": "url(src/assets/images/bg-boost.svg)",
        "hero": "url(src/assets/images/hero-sh.png)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
