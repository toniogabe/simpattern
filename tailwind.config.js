/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/
    },
    {
      pattern: /rounded-(tr-full|tl-full|bl-full|br-full|full)/
    },
    {
      pattern: /rotate-(0|90|180|270)/
    }
  ]
}
