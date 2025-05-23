/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scanna alla filer i src-mappen
    ],
    theme: {
      extend: {
        fontFamily: {
          rock: ['Rock Salt', 'cursive'],
          },
      },
    },
    plugins: [],
  };