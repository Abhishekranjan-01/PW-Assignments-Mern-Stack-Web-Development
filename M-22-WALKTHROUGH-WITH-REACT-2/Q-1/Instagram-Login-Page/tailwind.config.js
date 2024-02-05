/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Send_Flowers: ["Send Flowers", "sans-serif"],
        poppins: ["Poppins", "sens-serif"],
      },
    },
  },
  plugins: [],
};
