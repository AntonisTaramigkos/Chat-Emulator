/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

