/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appColor: "#F0F0F0",
        label: "#716F6F",
      },
    },
  },
  plugins: [],
};
