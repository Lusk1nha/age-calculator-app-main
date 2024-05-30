/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appColor: "#F0F0F0",
        inputText: "#000000",
        inputHoverBorder: "#854DFF",
        borderColor: "#DCDCDC",
        highlightColor: "#854DFF",
        label: "#716F6F",
        circle: "#854DFF",
        dangertext: "#FF5959",
      },
    },
  },
  plugins: [],
};
