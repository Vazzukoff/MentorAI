/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 MUY importante esta línea
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Caveat', 'cursive'],
        subtitle: ['Patrick Hand', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}