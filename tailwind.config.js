/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'skills': 'repeat(2, minmax(100px, 1fr))',
      }
    },
    fontFamily: {
      signature: ["Six Caps"],
    },
  },
  plugins: [],
}

