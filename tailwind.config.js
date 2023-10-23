/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "open-menu": "url('../../../public/svg/bars.svg')",
        "close-menu": "url('../../../public/svg/close.svg')",
      },
    },
  },
  plugins: [],
};
