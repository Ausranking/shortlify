/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        dark_violet: "hsl(257, 27%, 26%)",
        grayish_violet: "hsl(257, 7%, 63%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        darker_violet: "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "boost-texture": "url(/src/assets/images/bg-boost.svg)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
