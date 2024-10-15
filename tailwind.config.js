/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        girassol: ["Bona Nova", "serif"],
      },
    },
  },
  plugins: [],
};
