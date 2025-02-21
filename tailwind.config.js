/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sans: ["sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Arimo: ["Arimo", "sans-serif"],
        Quicksand: ["Quicksand","Arimo", "sans-serif"],
        Helvetica:['Helvetica Neue'],
        Yantramanav:['Yantramanav', "sans-serif"] 

      },
    },
  },
  plugins: [],
};
