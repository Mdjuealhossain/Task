/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
      spacing: {
        "footer-top": "3.75rem",
      },
    },
    colors: {
      default: "#F9FBFF",
      paper: "#FFFFFF",
      dark: "#474848",
      blue: "#253053",
      orange: "#FF9458",
      divider: "#D8D8D8",
      Bdivider: "#D8D8D8",
      disable:'#EFF5F5',
      "regal-orange": " #FF5E29",
      "regal-blue": "#4665FF",
      "dark-white": "#E3E3E3",
      "dark-light": "#EFF3F3",
    },
    fontSize: {
      sm: "0.75rem", //12px
      base: "0.875rem", //14px
      lg: "1rem", //16px
      xl: "1.125rem", //18px
      "2xl": "1.25rem", //20px
      "3xl": "1.75rem", //28px
    },
    borderRadius: {
      md: "0.250rem",
      lg: ".5rem",
      xl: "1rem",
    },
  },
  plugins: [],
};
